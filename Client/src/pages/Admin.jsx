import { useEffect, useState, useMemo } from "react"
import { useNavigate, Link } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import {
  LayoutDashboard, FileText, Mail, Users, LogOut, Plus, Search,
  Trash2, Edit3, Send, X, Menu, TrendingUp,
  BookOpen, Inbox, CheckCircle2, AlertCircle, Download
} from "lucide-react"
import Logo from "../components/common/Logo.jsx"
import { api, clearAdminSession, isAdmin } from "../lib/api.js"

function StatCard({ label, value, sub, icon: Icon, accent }) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="font-body text-[11px] font-medium tracking-wide uppercase leading-none text-black/40">{label}</p>
          <p className="font-display font-semibold text-3xl leading-none mt-2.5 text-ink">{value}</p>
          {sub && <p className="font-body text-xs leading-none text-black/50 mt-2">{sub}</p>}
        </div>
        <div className={`h-10 w-10 shrink-0 rounded-xl inline-flex items-center justify-center ${accent}`}>
          <Icon size={18} className="shrink-0" />
        </div>
      </div>
    </div>
  )
}

export default function Admin() {
  const navigate = useNavigate()
  const [tab, setTab] = useState("overview")
  const [drawer, setDrawer] = useState(false)

  // data
  const [stats, setStats] = useState(null)
  const [blogs, setBlogs] = useState([])
  const [users, setUsers] = useState([])
  const [subscribers, setSubscribers] = useState([])
  const [mailHistory, setMailHistory] = useState([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState("")

  // blog form
  const [showBlogModal, setShowBlogModal] = useState(false)
  const [editingBlog, setEditingBlog] = useState(null)
  const [blogForm, setBlogForm] = useState({ title: "", slug: "", excerpt: "", content: "", cover: "", tags: "", published: true })
  const [savingBlog, setSavingBlog] = useState(false)

  // mail
  const [mailForm, setMailForm] = useState({ subject: "", text: "", html: "", useHtml: false })
  const [sendingMail, setSendingMail] = useState(false)
  const [mailResult, setMailResult] = useState(null)

  // users
  const [q, setQ] = useState("")

  // auth guard
  useEffect(() => {
    if (!isAdmin()) { navigate("/login", { replace: true }); return }
    api.adminVerify().catch(() => {
      clearAdminSession()
      navigate("/login", { replace: true })
    })
  }, [navigate])

  const fetchAll = async () => {
    setLoading(true); setErr("")
    try {
      const [s, b, u, subs, mh] = await Promise.all([
        api.adminStats().catch(() => ({ stats: null })),
        api.adminBlogs().catch(() => ({ blogs: [] })),
        api.adminUsers().catch(() => ({ users: [] })),
        api.adminSubscribers().catch(() => ({ subscribers: [] })),
        api.adminMailHistory().catch(() => ({ history: [] })),
      ])
      if (s.stats) setStats(s.stats)
      setBlogs(b.blogs || [])
      setUsers(u.users || [])
      setSubscribers(subs.subscribers || [])
      setMailHistory(mh.history || [])
    } catch (e) { setErr(e.message) }
    finally { setLoading(false) }
  }
  useEffect(() => { fetchAll() }, [])

  const filteredUsers = useMemo(() => {
    if (!q.trim()) return users
    const needle = q.toLowerCase()
    return users.filter(u =>
      String(u.name||"").toLowerCase().includes(needle) ||
      String(u.email||"").toLowerCase().includes(needle) ||
      String(u.phone||"").toLowerCase().includes(needle) ||
      String(u.service||"").toLowerCase().includes(needle)
    )
  }, [users, q])

  const totalRecipients = useMemo(() => {
    const set = new Set()
    users.forEach(u => u.email && set.add(u.email.toLowerCase()))
    subscribers.forEach(s => s.email && set.add(s.email.toLowerCase()))
    return set.size
  }, [users, subscribers])

  // blog handlers
  const openCreate = () => {
    setEditingBlog(null)
    setBlogForm({ title: "", slug: "", excerpt: "", content: "", cover: "", tags: "", published: true })
    setShowBlogModal(true)
  }
  const openEdit = (b) => {
    setEditingBlog(b)
    setBlogForm({
      title: b.title, slug: b.slug, excerpt: b.excerpt||"", content: b.content,
      cover: b.cover||"", tags: (b.tags||[]).join(", "), published: b.published!==false
    })
    setShowBlogModal(true)
  }
  const saveBlog = async (e) => {
    e.preventDefault()
    if (!blogForm.title.trim() || !blogForm.content.trim()) return
    setSavingBlog(true)
    try {
      if (editingBlog) {
        await api.adminUpdateBlog(editingBlog.id, {
          title: blogForm.title, slug: blogForm.slug, excerpt: blogForm.excerpt,
          content: blogForm.content, cover: blogForm.cover, tags: blogForm.tags, published: blogForm.published
        })
      } else {
        await api.adminCreateBlog({
          title: blogForm.title, slug: blogForm.slug, excerpt: blogForm.excerpt,
          content: blogForm.content, cover: blogForm.cover, tags: blogForm.tags, published: blogForm.published
        })
      }
      setShowBlogModal(false); fetchAll()
    } catch (e2) { alert(e2.message) }
    finally { setSavingBlog(false) }
  }
  const deleteBlog = async (id) => {
    if (!confirm("Delete this post?")) return
    try { await api.adminDeleteBlog(id); fetchAll() } catch (e) { alert(e.message) }
  }

  // mail
  const sendBulk = async (e) => {
    e.preventDefault()
    if (!mailForm.subject.trim() || (!mailForm.text.trim() && !mailForm.html.trim())) return
    setSendingMail(true); setMailResult(null)
    try {
      const payload = { subject: mailForm.subject, text: mailForm.text }
      if (mailForm.useHtml && mailForm.html.trim()) payload.html = mailForm.html
      const r = await api.adminBulkMail(payload)
      setMailResult({ ok: true, msg: `Sent to ${r.sent} recipients${r.failed?` • ${r.failed} failed`:``}${r.mocked?` (mock - SMTP not configured)`:""}` })
      fetchAll()
    } catch (e2) { setMailResult({ ok: false, msg: e2.message }) }
    finally { setSendingMail(false) }
  }

  const exportUsersCsv = () => {
    const rows = [["Name","Email","Phone","Service","Source","Created"]]
    filteredUsers.forEach(u => rows.push([u.name||"",u.email||"",u.phone||"",u.service||"",u.source||"",u.createdAt||""]))
    const csv = rows.map(r => r.map(v => `"${String(v).replace(/"/g,'""')}"`).join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a"); a.href = url; a.download = `tanglome-users-${new Date().toISOString().slice(0,10)}.csv`; a.click()
    URL.revokeObjectURL(url)
  }

  const NAV = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "blogs", label: "Blogs", icon: FileText, count: blogs.length },
    { id: "mail", label: "Bulk Mail", icon: Mail },
    { id: "users", label: "Users", icon: Users, count: users.length },
  ]

  const handleLogout = () => {
    clearAdminSession(); navigate("/login")
  }

  return (
    <div className="min-h-dvh bg-[#F6F5F7] text-ink flex">
      {/* Sidebar - desktop */}
      <aside className="hidden lg:flex w-[280px] shrink-0 bg-ink border-r border-white/10 flex-col sticky top-0 h-dvh">
        <div className="h-16 px-6 flex items-center gap-3 border-b border-white/10">
          <Logo light className="text-xl leading-none" />
          <span className="ml-auto inline-flex items-center justify-center leading-none font-body text-[10px] tracking-[0.18em] text-white/40 border border-white/10 rounded-full px-2 py-1">ADMIN</span>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {NAV.map(n => {
            const Icon = n.icon
            const active = tab===n.id
            return (
              <button key={n.id} onClick={()=>setTab(n.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-body text-sm font-medium leading-none transition ${active?"bg-white text-ink shadow-sm":"text-white/60 hover:text-white hover:bg-white/5"}`}>
                <Icon size={16} className={`shrink-0 ${active?"text-violet":"text-white/40"}`} />
                <span className="flex-1 text-left leading-none">{n.label}</span>
                {n.count!=null && <span className={`inline-flex items-center justify-center leading-none text-xs px-2 py-1 rounded-full ${active?"bg-ink text-white":"bg-white/10 text-white/60"}`}>{n.count}</span>}
              </button>
            )
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="rounded-xl bg-white/5 border border-white/10 p-3 flex items-center gap-3">
            <div className="h-9 w-9 shrink-0 rounded-full bg-violet inline-flex items-center justify-center text-white font-body text-sm font-semibold leading-none">A</div>
            <div className="flex-1 min-w-0">
              <p className="font-body text-sm font-medium leading-none text-white truncate">Admin</p>
              <p className="font-body text-xs leading-none text-white/40 truncate mt-1">{(() => { try{return JSON.parse(localStorage.getItem("tanglome_admin_user")||"{}").email||""}catch{return ""}})()}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="mt-3 w-full inline-flex items-center justify-center gap-2 h-10 rounded-xl border border-white/10 text-white/70 hover:text-white hover:bg-white/5 font-body text-sm leading-none transition">
            <LogOut size={14} className="shrink-0"/> Log out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-black/5 flex items-center justify-between gap-4 px-4 sm:px-6 sticky top-0 z-10">
          <div className="flex items-center gap-3 min-w-0">
            <button onClick={()=>setDrawer(true)} className="lg:hidden h-9 w-9 shrink-0 inline-flex items-center justify-center rounded-xl border border-black/10 text-ink"><Menu size={16} className="shrink-0"/></button>
            <h1 className="font-display font-semibold text-lg leading-none capitalize truncate">{tab==="mail"?"Bulk Mail":tab}</h1>
            <span className="hidden sm:inline-flex items-center gap-1.5 leading-none text-xs font-body text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-1 ml-2 shrink-0">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 animate-pulse"/> Live
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Link to="/" className="hidden sm:inline-flex items-center gap-1 font-body text-sm leading-none text-black/50 hover:text-ink transition">View site <span aria-hidden>→</span></Link>
            <button onClick={fetchAll} className="h-9 inline-flex items-center justify-center leading-none px-3 rounded-xl border border-black/10 font-body text-xs font-medium hover:bg-black/5 transition">Refresh</button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {err && <div className="mb-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3 font-body text-sm leading-none text-red-700 inline-flex items-center gap-2"><AlertCircle size={16} className="shrink-0"/>{err}</div>}
          {loading ? (
            <div className="grid place-items-center py-24">
              <div className="h-8 w-8 rounded-full border-2 border-black/10 border-t-violet animate-spin"/>
            </div>
          ) : (
            <>
              {/* OVERVIEW */}
              {tab==="overview" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard label="Total Users" value={stats?.users ?? users.length} sub={`${subscribers.length} subscribers`} icon={Users} accent="bg-violet/10 text-violet border border-violet/15" />
                    <StatCard label="Blogs" value={stats?.blogs ?? blogs.length} sub={`${stats?.publishedBlogs ?? blogs.filter(b=>b.published!==false).length} published`} icon={BookOpen} accent="bg-sky-50 text-sky-600 border border-sky-100" />
                    <StatCard label="Subscribers" value={stats?.subscribers ?? subscribers.length} sub="Newsletter" icon={Inbox} accent="bg-amber-50 text-amber-600 border border-amber-100" />
                    <StatCard label="Inquiries" value={(stats?.contacts||0)+(stats?.claims||0)+(stats?.projects||0)} sub={`${stats?.contacts||0} contacts`} icon={TrendingUp} accent="bg-emerald-50 text-emerald-600 border border-emerald-100" />
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="rounded-2xl border border-black/5 bg-white p-5">
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <h3 className="font-display font-semibold leading-none">Recent blogs</h3>
                        <button onClick={()=>setTab("blogs")} className="inline-flex items-center gap-1 font-body text-xs font-medium leading-none text-violet hover:text-violet-deep">Manage <span aria-hidden>→</span></button>
                      </div>
                      {blogs.length===0 ? <p className="font-body text-sm leading-none text-black/40 py-6 text-center">No blogs yet. Create your first post.</p> :
                        <div className="space-y-3">
                          {blogs.slice(0,4).map(b=>(
                            <div key={b.id} className="flex items-center gap-3 p-3 rounded-xl border border-black/5 hover:bg-black/[0.02] transition">
                              {b.cover ? <img src={b.cover} alt="" className="h-12 w-12 shrink-0 rounded-lg object-cover bg-black/5"/> : <div className="h-12 w-12 shrink-0 rounded-lg bg-violet/10 inline-flex items-center justify-center text-violet"><FileText size={16} className="shrink-0"/></div>}
                              <div className="flex-1 min-w-0">
                                <p className="font-body text-sm font-medium leading-tight truncate">{b.title}</p>
                                <p className="font-body text-xs leading-none text-black/40 truncate mt-1">/{b.slug} • {new Date(b.createdAt).toLocaleDateString()}</p>
                              </div>
                              <span className={`shrink-0 inline-flex items-center justify-center leading-none text-[10px] font-body font-semibold tracking-wide px-2 py-1 rounded-full border ${b.published!==false?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-zinc-100 text-zinc-500 border-zinc-200"}`}>{b.published!==false?"Published":"Draft"}</span>
                            </div>
                          ))}
                        </div>
                      }
                    </div>

                    <div className="rounded-2xl border border-black/5 bg-white p-5">
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <h3 className="font-display font-semibold leading-none">Recent users</h3>
                        <button onClick={()=>setTab("users")} className="inline-flex items-center gap-1 font-body text-xs font-medium leading-none text-violet hover:text-violet-deep">View all <span aria-hidden>→</span></button>
                      </div>
                      {users.length===0 ? <p className="font-body text-sm leading-none text-black/40 py-6 text-center">No users yet.</p> :
                        <div className="space-y-2">
                          {users.slice(0,5).map(u=>(
                            <div key={u.id} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-black/[0.02]">
                              <div className="h-9 w-9 shrink-0 rounded-full bg-ink text-white inline-flex items-center justify-center font-body text-xs font-semibold leading-none">{(u.name||u.email||"?").slice(0,1).toUpperCase()}</div>
                              <div className="flex-1 min-w-0">
                                <p className="font-body text-sm font-medium leading-tight truncate">{u.name||"-"} <span className="text-black/40 font-normal">• {u.email}</span></p>
                                <p className="font-body text-xs leading-none text-black/40 mt-1 truncate">{u.service||u.source||""} • {u.createdAt?new Date(u.createdAt).toLocaleDateString():""}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      }
                    </div>
                  </div>

                  {mailHistory.length>0 && (
                    <div className="rounded-2xl border border-black/5 bg-white p-5">
                      <h3 className="font-display font-semibold leading-none mb-3">Mail history</h3>
                      <div className="space-y-2">
                        {mailHistory.slice(0,3).map(m=>(
                          <div key={m.id} className="flex items-center justify-between gap-3 p-3 rounded-xl bg-black/[0.02] border border-black/5">
                            <div className="min-w-0">
                              <p className="font-body text-sm font-medium leading-tight truncate">{m.subject}</p>
                              <p className="font-body text-xs leading-none text-black/40 mt-1">{new Date(m.createdAt).toLocaleString()} • {m.sent} sent</p>
                            </div>
                            <span className="shrink-0 inline-flex items-center justify-center leading-none font-body text-xs bg-white border border-black/10 rounded-full px-2.5 py-1">{m.recipients} recipients</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* BLOGS */}
              {tab==="blogs" && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3 justify-between sm:items-center">
                    <div>
                      <h2 className="font-display font-semibold text-xl leading-none">Blogs</h2>
                      <p className="font-body text-sm leading-none text-black/50 mt-2">Create and manage posts. Published posts appear at <span className="font-mono text-xs leading-none bg-black/5 px-1.5 py-0.5 rounded inline-flex items-center">/api/blogs</span></p>
                    </div>
                    <button onClick={openCreate} className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-full bg-violet text-white font-body text-sm font-semibold leading-none hover:bg-violet-deep transition shadow-[0_8px_20px_rgba(109,40,217,0.25)]">
                      <Plus size={16} className="shrink-0"/> New post
                    </button>
                  </div>

                  <div className="rounded-2xl border border-black/5 bg-white overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead className="bg-black/[0.02] border-b border-black/5">
                          <tr className="font-body text-xs tracking-wide uppercase text-black/40">
                            <th className="px-4 py-3 font-medium leading-none whitespace-nowrap">Post</th>
                            <th className="px-4 py-3 font-medium leading-none whitespace-nowrap hidden md:table-cell">Status</th>
                            <th className="px-4 py-3 font-medium leading-none whitespace-nowrap hidden sm:table-cell">Date</th>
                            <th className="px-4 py-3 font-medium leading-none whitespace-nowrap text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-black/5">
                          {blogs.length===0 ? (
                            <tr><td colSpan={4} className="px-4 py-12 text-center font-body text-sm leading-none text-black/40">No blogs yet - click New post to create one.</td></tr>
                          ) : blogs.map(b=>(
                            <tr key={b.id} className="hover:bg-black/[0.015]">
                              <td className="px-4 py-3">
                                <div className="flex items-center gap-3">
                                  {b.cover ? <img src={b.cover} alt="" className="h-10 w-10 shrink-0 rounded-lg object-cover bg-black/5 hidden sm:block"/> : <div className="h-10 w-10 shrink-0 rounded-lg bg-violet/10 hidden sm:inline-flex items-center justify-center text-violet"><FileText size={14} className="shrink-0"/></div>}
                                  <div className="min-w-0">
                                    <p className="font-body text-sm font-medium leading-tight truncate max-w-[260px]">{b.title}</p>
                                    <p className="font-body text-xs leading-none text-black/40 truncate max-w-[260px] mt-1">/{b.slug} • {b.tags?.join(", ")||"no tags"}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-3 hidden md:table-cell">
                                <span className={`inline-flex items-center justify-center leading-none text-[11px] font-body font-semibold px-2 py-1 rounded-full border ${b.published!==false?"bg-emerald-50 text-emerald-700 border-emerald-200":"bg-zinc-100 text-zinc-600 border-zinc-200"}`}>{b.published!==false?"Published":"Draft"}</span>
                              </td>
                              <td className="px-4 py-3 font-body text-xs leading-none text-black/50 hidden sm:table-cell whitespace-nowrap">{new Date(b.createdAt).toLocaleDateString()}</td>
                              <td className="px-4 py-3">
                                <div className="flex items-center justify-end gap-1.5">
                                  <button onClick={()=>openEdit(b)} className="h-8 w-8 shrink-0 inline-flex items-center justify-center rounded-lg border border-black/10 hover:bg-black/5 text-black/60"><Edit3 size={14} className="shrink-0"/></button>
                                  <button onClick={()=>deleteBlog(b.id)} className="h-8 w-8 shrink-0 inline-flex items-center justify-center rounded-lg border border-red-200 hover:bg-red-50 text-red-600"><Trash2 size={14} className="shrink-0"/></button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* BULK MAIL */}
              {tab==="mail" && (
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
                  <div className="rounded-2xl border border-black/5 bg-white p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 shrink-0 rounded-xl bg-violet text-white inline-flex items-center justify-center"><Send size={16} className="shrink-0"/></div>
                      <div className="min-w-0">
                        <h2 className="font-display font-semibold leading-none">Bulk mail</h2>
                        <p className="font-body text-xs leading-none text-black/50 mt-1.5">Recipients: <span className="font-semibold text-ink">{totalRecipients}</span> unique emails (users + subscribers)</p>
                      </div>
                    </div>
                    <form onSubmit={sendBulk} className="space-y-4">
                      <div>
                        <label className="font-body text-xs font-medium leading-none text-black/60">Subject *</label>
                        <input value={mailForm.subject} onChange={e=>setMailForm({...mailForm, subject:e.target.value})} placeholder="e.g. Your 21-day plan is ready" className="mt-1.5 h-11 w-full rounded-xl border border-black/10 bg-white px-3 font-body text-sm leading-none focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between gap-3">
                          <label className="font-body text-xs font-medium leading-none text-black/60">Message *</label>
                          <label className="inline-flex items-center gap-2 font-body text-xs leading-none text-black/60 cursor-pointer">
                            <input type="checkbox" checked={mailForm.useHtml} onChange={e=>setMailForm({...mailForm, useHtml:e.target.checked})} className="h-3.5 w-3.5 shrink-0 rounded border-black/20 text-violet"/> Use HTML
                          </label>
                        </div>
                        <textarea value={mailForm.text} onChange={e=>setMailForm({...mailForm, text:e.target.value})} placeholder="Hello {{name}}, ..." rows={6} className="mt-1.5 w-full rounded-xl border border-black/10 bg-white p-3 font-body text-sm focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15" />
                      </div>
                      {mailForm.useHtml && (
                        <div>
                          <label className="font-body text-xs font-medium leading-none text-black/60">HTML (optional - overrides text styling)</label>
                          <textarea value={mailForm.html} onChange={e=>setMailForm({...mailForm, html:e.target.value})} placeholder="<h2>Hi there</h2><p>...</p>" rows={4} className="mt-1.5 w-full rounded-xl border border-black/10 bg-white p-3 font-mono text-xs focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15" />
                        </div>
                      )}
                      <button disabled={sendingMail} className="inline-flex items-center justify-center gap-2 w-full h-11 rounded-full bg-violet text-white font-body text-sm font-semibold leading-none hover:bg-violet-deep disabled:opacity-60 transition shadow-[0_8px_20px_rgba(109,40,217,0.2)]">
                        {sendingMail ? <><span className="h-4 w-4 shrink-0 rounded-full border-2 border-white/30 border-t-white animate-spin"/> Sending...</> : <><Send size={16} className="shrink-0"/> Send to {totalRecipients} recipients</>}
                      </button>
                      {mailResult && (
                        <div className={`rounded-xl border px-3 py-2.5 font-body text-xs leading-none inline-flex items-center gap-2 w-full ${mailResult.ok?"bg-emerald-50 border-emerald-200 text-emerald-700":"bg-red-50 border-red-200 text-red-700"}`}>
                          {mailResult.ok?<CheckCircle2 size={14} className="shrink-0"/>:<AlertCircle size={14} className="shrink-0"/>} <span className="leading-tight">{mailResult.msg}</span>
                        </div>
                      )}
                      <p className="font-body text-[11px] leading-none text-black/30">Uses SMTP settings from Server/.env. If SMTP not configured, mail is mocked and logged to server console.</p>
                    </form>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-black/5 bg-white p-6">
                      <h3 className="font-display font-semibold leading-none mb-3">Audience preview</h3>
                      <div className="flex items-center gap-6 font-body text-sm leading-none">
                        <span className="inline-flex items-center gap-2 leading-none"><Users size={14} className="shrink-0 text-violet"/> {users.length} users</span>
                        <span className="inline-flex items-center gap-2 leading-none"><Mail size={14} className="shrink-0 text-black/40"/> {subscribers.length} subscribers</span>
                      </div>
                      <div className="mt-4 max-h-[220px] overflow-auto rounded-xl border border-black/5 bg-black/[0.02] p-3 space-y-1">
                        {[...users, ...subscribers].slice(0,50).map((p,i)=>(
                          <div key={i} className="font-body text-xs leading-none text-black/60 truncate py-1">{p.email||p.name} <span className="text-black/30">• {p.source||"-"}</span></div>
                        ))}
                        {totalRecipients===0 && <p className="font-body text-xs leading-none text-black/40 text-center py-4">No recipients yet - signups will appear here.</p>}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-black/5 bg-white p-6">
                      <h3 className="font-display font-semibold leading-none mb-3">History</h3>
                      {mailHistory.length===0 ? <p className="font-body text-sm leading-none text-black/40">No mails sent yet.</p> :
                        <div className="space-y-2 max-h-[280px] overflow-auto pr-1">
                          {mailHistory.map(m=>(
                            <div key={m.id} className="rounded-xl border border-black/5 p-3 bg-black/[0.015]">
                              <p className="font-body text-sm font-medium leading-tight truncate">{m.subject}</p>
                              <p className="font-body text-xs leading-none text-black/40 mt-1">{new Date(m.createdAt).toLocaleString()} • {m.sent}/{m.recipients} sent {m.failed?`• ${m.failed} failed`:""}</p>
                            </div>
                          ))}
                        </div>
                      }
                    </div>
                  </div>
                </div>
              )}

              {/* USERS */}
              {tab==="users" && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3 justify-between sm:items-end">
                    <div>
                      <h2 className="font-display font-semibold text-xl leading-none">Users</h2>
                      <p className="font-body text-sm leading-none text-black/50 mt-2">{filteredUsers.length} of {users.length} • from signups, contacts, claims & newsletters</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button onClick={exportUsersCsv} className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-xl border border-black/10 bg-white font-body text-sm font-medium leading-none hover:bg-black/5 transition"><Download size={14} className="shrink-0"/> Export CSV</button>
                    </div>
                  </div>

                  <div className="relative">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30 shrink-0 pointer-events-none"/>
                    <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search name, email, phone, service..." className="h-11 w-full rounded-xl border border-black/10 bg-white pl-10 pr-3 font-body text-sm leading-none placeholder:text-black/30 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15" />
                  </div>

                  <div className="rounded-2xl border border-black/5 bg-white overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead className="bg-black/[0.02] border-b border-black/5">
                          <tr className="font-body text-xs tracking-wide uppercase text-black/40">
                            <th className="px-4 py-3 font-medium leading-none whitespace-nowrap">User</th>
                            <th className="px-4 py-3 font-medium leading-none whitespace-nowrap hidden md:table-cell">Service</th>
                            <th className="px-4 py-3 font-medium leading-none whitespace-nowrap hidden lg:table-cell">Source</th>
                            <th className="px-4 py-3 font-medium leading-none whitespace-nowrap hidden sm:table-cell">Joined</th>
                            <th className="px-4 py-3 font-medium leading-none whitespace-nowrap text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-black/5">
                          {filteredUsers.length===0 ? (
                            <tr><td colSpan={5} className="px-4 py-12 text-center font-body text-sm leading-none text-black/40">No users found.</td></tr>
                          ) : filteredUsers.slice(0,100).map(u=>(
                            <tr key={u.id} className="hover:bg-black/[0.015]">
                              <td className="px-4 py-3">
                                <div className="flex items-center gap-3">
                                  <div className="h-9 w-9 shrink-0 rounded-full bg-ink text-white inline-flex items-center justify-center font-body text-xs font-semibold leading-none">{(u.name||u.email||"?").slice(0,1).toUpperCase()}</div>
                                  <div className="min-w-0">
                                    <p className="font-body text-sm font-medium leading-tight truncate max-w-[200px]">{u.name||"-"}</p>
                                    <p className="font-body text-xs leading-none text-black/50 truncate max-w-[200px] mt-1">{u.email} {u.phone?`• ${u.phone}`:""}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-3 font-body text-sm leading-none hidden md:table-cell max-w-[160px] truncate">{u.service||"-"}</td>
                              <td className="px-4 py-3 hidden lg:table-cell"><span className="inline-flex items-center justify-center leading-none text-[11px] font-body font-medium px-2 py-1 rounded-full bg-black/5 border border-black/10">{u.source||"-"}</span></td>
                              <td className="px-4 py-3 font-body text-xs leading-none text-black/50 hidden sm:table-cell whitespace-nowrap">{u.createdAt?new Date(u.createdAt).toLocaleDateString():"-"}</td>
                              <td className="px-4 py-3">
                                <div className="flex items-center justify-end gap-1.5">
                                  <a href={`mailto:${u.email}`} className="h-8 w-8 shrink-0 inline-flex items-center justify-center rounded-lg border border-black/10 hover:bg-black/5 text-black/60"><Mail size={14} className="shrink-0"/></a>
                                  <button onClick={async()=>{ if(!confirm(`Delete ${u.email}?`))return; try{await api.adminDeleteUser(u.id); fetchAll()}catch(e){alert(e.message)}}} className="h-8 w-8 shrink-0 inline-flex items-center justify-center rounded-lg border border-red-200 hover:bg-red-50 text-red-600"><Trash2 size={14} className="shrink-0"/></button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {filteredUsers.length>100 && <div className="px-4 py-3 bg-amber-50 border-t border-amber-100 font-body text-xs leading-none text-amber-800">Showing 100 of {filteredUsers.length} - use search or export CSV for full list.</div>}
                  </div>
                </div>
              )}
            </>
          )}
        </main>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawer && (
          <>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setDrawer(false)} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"/>
            <motion.aside initial={{x:-300}} animate={{x:0}} exit={{x:-300}} transition={{type:"spring",damping:28,stiffness:260}} className="fixed inset-y-0 left-0 w-[300px] bg-ink z-50 lg:hidden flex flex-col">
              <div className="h-16 px-6 flex items-center justify-between gap-3 border-b border-white/10">
                <Logo light className="text-xl leading-none"/>
                <button onClick={()=>setDrawer(false)} className="h-8 w-8 shrink-0 inline-flex items-center justify-center rounded-full border border-white/10 text-white"><X size={14} className="shrink-0"/></button>
              </div>
              <nav className="flex-1 p-4 space-y-1">
                {NAV.map(n=>{
                  const Icon=n.icon; const active=tab===n.id
                  return <button key={n.id} onClick={()=>{setTab(n.id); setDrawer(false)}} className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-body text-sm font-medium leading-none ${active?"bg-white text-ink":"text-white/60"}`}><Icon size={16} className="shrink-0"/>{n.label}</button>
                })}
              </nav>
              <div className="p-4 border-t border-white/10">
                <button onClick={handleLogout} className="w-full inline-flex items-center justify-center gap-2 h-10 rounded-xl border border-white/10 text-white/70 font-body text-sm leading-none"><LogOut size={14} className="shrink-0"/> Log out</button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Blog modal */}
      <AnimatePresence>
        {showBlogModal && (
          <>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setShowBlogModal(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"/>
            <motion.div initial={{opacity:0, y:16, scale:0.98}} animate={{opacity:1, y:0, scale:1}} exit={{opacity:0, y:16, scale:0.98}} className="fixed inset-0 z-50 grid place-items-center p-4">
              <form onSubmit={saveBlog} className="w-full max-w-[640px] max-h-[90vh] overflow-auto rounded-2xl border border-black/5 bg-white shadow-2xl">
                <div className="sticky top-0 bg-white border-b border-black/5 px-6 py-4 flex items-center justify-between gap-3">
                  <h3 className="font-display font-semibold text-lg leading-none">{editingBlog?"Edit post":"New post"}</h3>
                  <button type="button" onClick={()=>setShowBlogModal(false)} className="h-8 w-8 shrink-0 inline-flex items-center justify-center rounded-full border border-black/10 hover:bg-black/5"><X size={14} className="shrink-0"/></button>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <label className="font-body text-xs font-medium leading-none text-black/60">Title *</label>
                    <input value={blogForm.title} onChange={e=>setBlogForm({...blogForm, title:e.target.value, slug: editingBlog?blogForm.slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"") })} placeholder="e.g. How we scale design systems" className="mt-1.5 h-11 w-full rounded-xl border border-black/10 px-3 font-body text-sm leading-none focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15" required/>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-body text-xs font-medium leading-none text-black/60">Slug</label>
                      <input value={blogForm.slug} onChange={e=>setBlogForm({...blogForm, slug:e.target.value})} placeholder="how-we-scale-design-systems" className="mt-1.5 h-11 w-full rounded-xl border border-black/10 px-3 font-mono text-sm leading-none focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15"/>
                    </div>
                    <div>
                      <label className="font-body text-xs font-medium leading-none text-black/60">Cover image URL</label>
                      <input value={blogForm.cover} onChange={e=>setBlogForm({...blogForm, cover:e.target.value})} placeholder="https://..." className="mt-1.5 h-11 w-full rounded-xl border border-black/10 px-3 font-body text-sm leading-none focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15"/>
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium leading-none text-black/60">Excerpt</label>
                    <input value={blogForm.excerpt} onChange={e=>setBlogForm({...blogForm, excerpt:e.target.value})} placeholder="Short summary (160 chars)" className="mt-1.5 h-11 w-full rounded-xl border border-black/10 px-3 font-body text-sm leading-none focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15"/>
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium leading-none text-black/60">Content *</label>
                    <textarea value={blogForm.content} onChange={e=>setBlogForm({...blogForm, content:e.target.value})} placeholder="Write your blog content (markdown / HTML supported)..." rows={8} className="mt-1.5 w-full rounded-xl border border-black/10 p-3 font-body text-sm focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15" required/>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-body text-xs font-medium leading-none text-black/60">Tags (comma separated)</label>
                      <input value={blogForm.tags} onChange={e=>setBlogForm({...blogForm, tags:e.target.value})} placeholder="design, branding, product" className="mt-1.5 h-11 w-full rounded-xl border border-black/10 px-3 font-body text-sm leading-none focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15"/>
                    </div>
                    <label className="inline-flex items-center gap-2 mt-7 cursor-pointer leading-none">
                      <input type="checkbox" checked={blogForm.published} onChange={e=>setBlogForm({...blogForm, published:e.target.checked})} className="h-4 w-4 shrink-0 rounded border-black/20 text-violet"/>
                      <span className="font-body text-sm leading-none">Published</span>
                    </label>
                  </div>
                </div>
                <div className="sticky bottom-0 bg-white border-t border-black/5 px-6 py-4 flex items-center justify-end gap-3">
                  <button type="button" onClick={()=>setShowBlogModal(false)} className="h-10 px-5 inline-flex items-center justify-center rounded-full border border-black/10 font-body text-sm font-medium leading-none">Cancel</button>
                  <button disabled={savingBlog} className="h-10 px-6 inline-flex items-center justify-center rounded-full bg-violet text-white font-body text-sm font-semibold leading-none hover:bg-violet-deep disabled:opacity-60">
                    {savingBlog?"Saving...": editingBlog?"Update post":"Publish post"}
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

import { useEffect, useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { Search, ArrowUpRight, Clock, Tag, FileText, Sparkles } from "lucide-react"
import { api } from "../lib/api.js"
import CTASection from "../components/home/CTASection.jsx"
import SEO from "../components/common/SEO.jsx"
import { PAGE_SEO } from "../utils/seo.js"

function formatDate(d) {
  try { return new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) } catch { return "" }
}

export default function Blog() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState("")
  const [q, setQ] = useState("")
  const [tag, setTag] = useState("All")

  useEffect(() => {
    let alive = true
    setLoading(true)
    api.blogs()
      .then(r => { if (alive) setBlogs(r.blogs || []) })
      .catch(e => { if (alive) setErr(e.message) })
      .finally(() => { if (alive) setLoading(false) })
    return () => { alive = false }
  }, [])

  const allTags = useMemo(() => {
    const s = new Set()
    blogs.forEach(b => (b.tags || []).forEach(t => s.add(t)))
    return ["All", ...[...s].sort()]
  }, [blogs])

  const filtered = useMemo(() => {
    return blogs.filter(b => {
      const matchQ = !q.trim() || `${b.title} ${b.excerpt} ${b.slug} ${(b.tags||[]).join(" ")}`.toLowerCase().includes(q.toLowerCase())
      const matchTag = tag === "All" || (b.tags || []).includes(tag)
      return matchQ && matchTag
    })
  }, [blogs, q, tag])

  return (
    <div className="bg-paper">
      <SEO {...PAGE_SEO.blog} path="/blog" />

      {/* Hero */}
      <section className="bg-ink text-paper overflow-hidden relative">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div aria-hidden className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full opacity-[0.12] blur-[70px]" style={{ background: "radial-gradient(circle at center, #6D28D9 0%, #3B1877 45%, transparent 70%)" }} />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 py-10 sm:py-14 md:py-16">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 font-body text-[11px] tracking-[0.18em] font-medium text-violet-light">
              <Sparkles size={12} /> Insights &amp; playbooks
            </span>
            <h1 className="font-display font-semibold text-[32px] sm:text-4xl md:text-5xl leading-[0.92] tracking-tight mt-4">
              Ideas turned into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-light to-violet">systems that ship.</span>
            </h1>
            <p className="font-body text-[15px] sm:text-base leading-relaxed text-paper/60 mt-4 max-w-lg">
              No fluff. Practical notes from building web, mobile, AI and growth -c straight from our sprints and shipped work.
            </p>
          </motion.div>

          {/* search + filter */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-8 flex flex-col lg:flex-row gap-3 lg:items-center justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                value={q}
                onChange={e => setQ(e.target.value)}
                placeholder="Search posts, tags, topics..."
                className="h-11 w-full rounded-full border border-white/10 bg-white/[0.06] pl-10 pr-4 font-body text-sm text-paper placeholder:text-white/40 focus:outline-none focus:border-violet/40 focus:bg-white/[0.08] transition"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
              {allTags.map(t => (
                <button
                  key={t}
                  onClick={() => setTag(t)}
                  className={`shrink-0 inline-flex items-center rounded-full px-4 py-2 font-body text-xs font-medium border transition ${tag === t ? "bg-violet border-violet text-white shadow-[0_8px_20px_rgba(109,40,217,0.3)]" : "bg-white/[0.06] border-white/10 text-paper/70 hover:bg-white/10 hover:text-paper"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Listing */}
      <section className="py-10 sm:py-12 md:py-14">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <p className="font-body text-xs font-medium text-black/40">
              {loading ? "Loading…" : <>Showing <span className="text-ink font-semibold">{filtered.length}</span> of {blogs.length}</>}
            </p>
            {!loading && filtered.length > 0 && (
              <p className="hidden sm:block font-body text-xs text-black/30">{tag !== "All" ? `Filtered by "${tag}"` : "Latest first"}</p>
            )}
          </div>

          {err && (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-4 font-body text-sm text-red-700">
              Failed to load blogs: {err} — check the server (port 5000) is running.
            </div>
          )}

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white animate-pulse">
                  <div className="h-44 bg-black/[0.06] relative">
                    <div className="absolute left-3 top-3 h-6 w-24 rounded-full bg-black/10" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex gap-1.5 mb-3">
                      <div className="h-6 w-16 rounded-full bg-black/5" />
                      <div className="h-6 w-14 rounded-full bg-black/5" />
                    </div>
                    <div className="h-5 rounded bg-black/10 w-5/6" />
                    <div className="h-5 rounded bg-black/10 w-3/4 mt-1.5" />
                    <div className="h-3 rounded bg-black/5 w-full mt-3" />
                    <div className="h-3 rounded bg-black/5 w-5/6 mt-1.5" />
                    <div className="mt-4 pt-4 border-t border-black/5 flex items-center justify-between">
                      <div className="h-3 rounded bg-black/5 w-16" />
                      <div className="h-3 rounded bg-violet/10 w-10" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-2xl border border-dashed border-black/15 bg-white p-10 text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-violet/10 grid place-items-center text-violet mb-3"><FileText size={20} /></div>
              <p className="font-display font-semibold text-lg text-ink">{blogs.length === 0 ? "No posts yet" : "No matching posts"}</p>
              <p className="font-body text-sm text-black/50 mt-1 max-w-md mx-auto">
                {blogs.length === 0 ? "Blogs you publish from Admin → Blogs will appear here instantly." : "Try a different search or tag."}
              </p>
              {blogs.length === 0 ? (
                <Link to="/admin" className="mt-4 inline-flex rounded-full bg-ink px-5 py-2.5 font-body text-sm font-medium text-white">Go to Admin →</Link>
              ) : (
                <button onClick={() => { setQ(""); setTag("All") }} className="mt-4 inline-flex rounded-full border border-black/10 px-5 py-2.5 font-body text-sm font-medium hover:bg-black/5">Clear filters</button>
              )}
            </motion.div>
          ) : (
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {filtered.map((b, idx) => (
                  <motion.div
                    key={b.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, delay: idx * 0.02 }}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-violet/15 bg-white transition-all hover:border-violet/30 hover:shadow-[0_12px_32px_rgba(109,40,217,0.12)] hover:-translate-y-0.5"
                  >
                    <Link to={`/blog/${b.slug}`} className="block relative">
                      <div className="relative h-44 overflow-hidden bg-black/5">
                        {b.cover ? (
                          <img src={b.cover} alt={b.title} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
                        ) : (
                          <div className="h-full w-full grid place-items-center bg-gradient-to-br from-violet/10 via-violet/5 to-white">
                            <div className="h-12 w-12 rounded-xl grid place-items-center bg-violet/10 text-violet">
                              <FileText size={20} />
                            </div>
                          </div>
                        )}
                        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur px-2.5 py-1 font-body text-[11px] font-medium text-ink border border-black/5 shadow-sm">
                          <Clock size={11} /> {formatDate(b.createdAt)}
                        </span>
                      </div>
                    </Link>

                    <div className="p-5 flex flex-col flex-1">
                      {(b.tags || []).length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {b.tags.slice(0, 3).map(t => (
                            <span key={t} className="inline-flex items-center gap-1 rounded-full border border-violet/15 bg-violet/[0.06] px-2.5 py-1 font-body text-[11px] font-medium text-violet">
                              <Tag size={10} /> {t}
                            </span>
                          ))}
                        </div>
                      )}
                      <Link to={`/blog/${b.slug}`} className="block">
                        <h3 className="font-display font-semibold text-[18px] leading-tight text-ink line-clamp-2">{b.title}</h3>
                      </Link>
                      <p className="font-body text-sm leading-relaxed text-black/60 mt-2 line-clamp-2 flex-1">
                        {b.excerpt || (b.content ? b.content.slice(0, 120) : "")}
                      </p>
                      <div className="mt-4 flex items-center justify-between pt-4 border-t border-black/5">
                        <span className="font-body text-xs text-black/40 truncate max-w-[140px]">/{b.slug}</span>
                        <Link to={`/blog/${b.slug}`} className="inline-flex items-center gap-1 font-body text-xs font-semibold text-violet hover:text-violet-deep transition-colors">
                          Read <ArrowUpRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
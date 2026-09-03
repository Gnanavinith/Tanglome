import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "motion/react"
import { User, Mail, Phone, Lock, Eye, EyeOff, ArrowRight, CheckCircle2 } from "lucide-react"
import Logo from "../components/common/Logo.jsx"
import { services } from "../data/services.js"
import { api } from "../lib/api.js"
import SEO from "../components/common/SEO.jsx"

export default function Signup() {
 const navigate = useNavigate()
 const [show, setShow] = useState(false)
 const [form, setForm] = useState({ name: "", email: "", phone: "", password: "", confirm: "", service: "", agree: false })
 const [error, setError] = useState("")
 const [loading, setLoading] = useState(false)

 const onSubmit = async (e) => {
 e.preventDefault()
 if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.password) {
 setError("Name, email, phone and password are required.")
 return
 }
 if (!/^\S+@\S+\.\S+$/.test(form.email)) {
 setError("Enter a valid email.")
 return
 }
 if (form.password.length < 6) {
 setError("Password must be at least 6 characters.")
 return
 }
 if (form.password !== form.confirm) {
 setError("Passwords do not match.")
 return
 }
 if (!form.agree) {
 setError("Please agree to Terms & Privacy.")
 return
 }
 setError("")
 setLoading(true)
 try {
 await api.signup({ name: form.name, email: form.email, phone: form.phone, service: form.service })
 navigate("/login")
 } catch (err) {
 setError(err.message || "Signup failed. Try again.")
 } finally {
 setLoading(false)
 }
 }

  return (
  <div className="min-h-[calc(100vh-64px)] bg-ink flex items-center justify-center px-4 sm:px-6 py-8 sm:py-10 relative overflow-hidden">
  <SEO title="Create Account - Tanglome" description="Create your Tanglome account." path="/signup" noindex />
 <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
 <div aria-hidden className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full opacity-[0.12] blur-[70px]" style={{ background: "radial-gradient(circle at center, #6D28D9 0%, #3B1877 45%, transparent 70%)" }} />

 <div className="relative w-full max-w-[520px]">
 <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="rounded-[20px] sm:rounded-[24px] border border-white/10 bg-white p-6 sm:p-8 shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
 <div className="text-center">
 <Logo light={false} className="text-2xl justify-center" />
 <h1 className="font-display font-semibold text-2xl sm:text-[28px] leading-tight mt-4 text-ink">Create your account</h1>
 <p className="font-body text-sm text-black/60 mt-1">Start your 21-day plan and no spam, just shipped.</p>
 </div>

 <form onSubmit={onSubmit} className="mt-6 space-y-4">
 <div className="grid sm:grid-cols-2 gap-3">
 <div>
 <label className="font-body text-xs font-medium text-black/60">Full name *</label>
 <div className="mt-1.5 relative">
 <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30" />
 <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Aarav Mehta" className="h-11 w-full rounded-xl border border-black/10 bg-white pl-10 pr-3 font-body text-sm placeholder:text-black/30 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15" />
 </div>
 </div>
 <div>
 <label className="font-body text-xs font-medium text-black/60">Phone *</label>
 <div className="mt-1.5 relative">
 <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30" />
 <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 ..." inputMode="tel" className="h-11 w-full rounded-xl border border-black/10 bg-white pl-10 pr-3 font-body text-sm placeholder:text-black/30 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15" />
 </div>
 </div>
 </div>

 <div>
 <label className="font-body text-xs font-medium text-black/60">Email *</label>
 <div className="mt-1.5 relative">
 <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30" />
 <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className="h-11 w-full rounded-xl border border-black/10 bg-white pl-10 pr-3 font-body text-sm placeholder:text-black/30 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15" />
 </div>
 </div>

 <div>
 <label className="font-body text-xs font-medium text-black/60">Interested service</label>
 <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="mt-1.5 h-11 w-full rounded-xl border border-black/10 bg-white px-3 font-body text-sm text-ink focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15">
 <option value="">Select (optional)</option>
 {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
 </select>
 </div>

 <div className="grid sm:grid-cols-2 gap-3">
 <div>
 <label className="font-body text-xs font-medium text-black/60">Password *</label>
 <div className="mt-1.5 relative">
 <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30" />
 <input type={show ? "text" : "password"} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="••••••••" className="h-11 w-full rounded-xl border border-black/10 bg-white pl-10 pr-10 font-body text-sm focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15" />
 <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-black/40">{show ? <EyeOff size={16} /> : <Eye size={16} />}</button>
 </div>
 </div>
 <div>
 <label className="font-body text-xs font-medium text-black/60">Confirm *</label>
 <div className="mt-1.5 relative">
 <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30" />
 <input type={show ? "text" : "password"} value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })} placeholder="••••••••" className="h-11 w-full rounded-xl border border-black/10 bg-white pl-10 pr-3 font-body text-sm focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15" />
 </div>
 </div>
 </div>

 <label className="flex items-start gap-2 cursor-pointer">
 <input type="checkbox" checked={form.agree} onChange={(e) => setForm({ ...form, agree: e.target.checked })} className="mt-0.5 h-4 w-4 rounded border-black/20 text-violet" />
 <span className="font-body text-xs leading-relaxed text-black/60">I agree to <Link to="#" className="text-violet font-medium">Terms</Link> & <Link to="#" className="text-violet font-medium">Privacy</Link>. No spam and just your plan.</span>
 </label>

 {error && <p className="font-body text-xs font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}

 <button type="submit" disabled={loading} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet px-6 py-3 font-body text-sm font-semibold text-white hover:bg-violet-deep active:scale-[0.99] transition-all disabled:opacity-60 shadow-[0_8px_20px_rgba(109,40,217,0.25)]">
 {loading ? "Creating..." : "Create account"} {!loading && <ArrowRight size={16} />}
 </button>
 </form>

 <p className="font-body text-sm text-center text-black/60 mt-6">
 Already have an account? <Link to="/login" className="font-medium text-violet hover:text-violet-deep">Log in</Link>
 </p>
 </motion.div>
 </div>
 </div>
 )
}

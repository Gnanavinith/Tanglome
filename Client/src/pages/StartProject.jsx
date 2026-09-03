import { useState } from "react"
import { motion } from "motion/react"
import { ArrowRight, CheckCircle2, Sparkles, Clock, ShieldCheck, Rocket, Send } from "lucide-react"
import { BRAND } from "../utils/constants.js"
import { services } from "../data/services.js"
import { api } from "../lib/api.js"
import SEO from "../components/common/SEO.jsx"

export default function StartProject() {
 const [step, setStep] = useState(1)
 const [form, setForm] = useState({
 services: [],
 budget: "",
 timeline: "",
 name: "",
 email: "",
 phone: "",
 company: "",
 details: "",
 })
 const [error, setError] = useState("")
 const [sent, setSent] = useState(false)

 const toggleService = (title) => {
 setForm((f) => ({
 ...f,
 services: f.services.includes(title) ? f.services.filter((s) => s !== title) : [...f.services, title],
 }))
 }

 const next = () => {
 if (step === 1 && form.services.length === 0) { setError("Pick at least one service."); return }
 if (step === 2 && !form.budget) { setError("Select a budget."); return }
 setError("")
 setStep((s) => Math.min(3, s + 1))
 }
 const back = () => { setError(""); setStep((s) => Math.max(1, s - 1)) }

 const [loading, setLoading] = useState(false)
 const onSubmit = async (e) => {
 e.preventDefault()
 if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) { setError("Name, email and phone are required."); return }
 if (!/^\S+@\S+\.\S+$/.test(form.email)) { setError("Valid email required."); return }
 setError("")
 setLoading(true)
 try {
 await api.startProject({
 services: form.services,
 budget: form.budget,
 timeline: form.timeline,
 name: form.name,
 email: form.email,
 phone: form.phone,
 company: form.company,
 details: form.details,
 })
 setSent(true)
 setTimeout(() => setSent(false), 3500)
 } catch (err) {
 setError(err.message || "Failed to send. Try again.")
 } finally {
 setLoading(false)
 }
 }

  return (
  <div className="bg-paper">
  <SEO title="Start a Project - Free 21-Day Plan | Tanglome Coimbatore, All India" description="Start your project with Tanglome. Free 21-day plan with scope, timeline & fixed price. Live link in 48h. Coimbatore studio serving all India - web, apps, AI & growth." path="/start-project" />
  {/* Hero */}
 <section className="bg-ink text-paper overflow-hidden relative">
 <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
 <div aria-hidden className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full opacity-[0.12] blur-[70px]" style={{ background: "radial-gradient(circle at center, #6D28D9 0%, #3B1877 45%, transparent 70%)" }} />
 <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 py-10 sm:py-14">
 <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
 <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 font-body text-[11px] tracking-[0.18em] font-medium text-violet-light"><Sparkles size={12} /> START A PROJECT and FREE 21-DAY PLAN</span>
 <h1 className="font-display font-semibold text-[32px] sm:text-4xl md:text-5xl leading-[0.9] tracking-tight mt-4">Tell us the idea.<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-light to-violet">We map the plan.</span></h1>
 <p className="font-body text-[15px] sm:text-base leading-relaxed text-paper/60 mt-4 max-w-2xl">3 steps, 2 minutes. You get scope, timeline & fixed price on one page and live link in 48 hours. No pitch.</p>
 <div className="mt-6 flex flex-wrap gap-2 font-body text-xs">
 <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-paper/70"><Clock size={12} /> 2h reply</span>
 <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-paper/70"><ShieldCheck size={12} /> Fixed price</span>
 <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-3 py-1.5 text-paper/70"><Rocket size={12} /> 48h link</span>
 </div>
 </motion.div>
 </div>
 </section>

 {/* Stepper + form */}
 <section className="py-8 sm:py-10 md:py-12">
 <div className="mx-auto max-w-[900px] px-4 sm:px-6">
 {/* stepper */}
 <div className="flex items-center justify-center gap-2 sm:gap-3">
 {[1, 2, 3].map((n) => (
 <div key={n} className="flex items-center gap-2 sm:gap-3">
 <div className={`flex h-8 w-8 items-center justify-center rounded-full border font-body text-xs font-bold transition-colors ${step >= n ? "bg-violet border-violet text-white shadow-[0_4px_12px_rgba(109,40,217,0.25)]" : "bg-white border-black/10 text-black/40"}`}>{n}</div>
 <span className={`hidden sm:block font-body text-xs font-medium ${step >= n ? "text-ink" : "text-black/40"}`}>{n === 1 ? "Services" : n === 2 ? "Budget & Timeline" : "Contact"}</span>
 {n < 3 && <span className={`hidden sm:block h-px w-10 ${step > n ? "bg-violet" : "bg-black/10"}`} />}
 </div>
 ))}
 </div>

 <motion.div key={step} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mt-8 rounded-[20px] sm:rounded-[24px] border border-black/10 bg-white p-5 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
 {step === 1 && (
 <div>
 <h2 className="font-display font-semibold text-xl text-ink">What do you need?</h2>
 <p className="font-body text-sm text-black/50 mt-1">Pick one or more and we&apos;ll bundle them into one plan.</p>
 <div className="mt-5 grid sm:grid-cols-2 gap-3">
 {services.map((s) => {
 const Icon = s.icon
 const active = form.services.includes(s.title)
 return (
 <button key={s.slug} type="button" onClick={() => toggleService(s.title)} className={`text-left rounded-xl border p-4 flex gap-3 items-start transition-colors ${active ? "border-violet bg-violet/5 shadow-[0_4px_12px_rgba(109,40,217,0.08)]" : "border-black/10 bg-white hover:border-black/15"}`}>
 <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${active ? "bg-violet text-white" : "bg-violet/10 text-violet"}`}><Icon size={16} /></span>
 <div className="min-w-0">
 <p className="font-body text-sm font-medium text-ink leading-tight">{s.title}</p>
 <p className="font-body text-xs text-black/50 mt-1 leading-relaxed line-clamp-2">{s.shortDesc}</p>
 </div>
 {active && <CheckCircle2 size={18} className="ml-auto text-violet shrink-0 mt-1" />}
 </button>
 )
 })}
 </div>
 </div>
 )}

 {step === 2 && (
 <div>
 <h2 className="font-display font-semibold text-xl text-ink">Budget & timeline</h2>
 <p className="font-body text-sm text-black/50 mt-1">So we scope correctly and no surprises later.</p>
 <div className="mt-5 grid sm:grid-cols-2 gap-4">
 <div>
 <label className="font-body text-xs font-medium text-black/60">Budget *</label>
 <div className="mt-2 grid grid-cols-2 gap-2">
 {["Under ₹50k", "₹50k and 1L", "₹1L and 3L", "₹3L+"].map((b) => (
 <button key={b} type="button" onClick={() => setForm({ ...form, budget: b })} className={`rounded-xl border px-3 py-3 font-body text-sm font-medium transition-colors ${form.budget === b ? "bg-ink border-ink text-white" : "bg-white border-black/10 text-black/70 hover:border-black/15"}`}>{b}</button>
 ))}
 </div>
 </div>
 <div>
 <label className="font-body text-xs font-medium text-black/60">Timeline</label>
 <div className="mt-2 grid grid-cols-2 gap-2">
 {["ASAP", "In 2 weeks", "In a month", "Flexible"].map((t) => (
 <button key={t} type="button" onClick={() => setForm({ ...form, timeline: t })} className={`rounded-xl border px-3 py-3 font-body text-sm font-medium transition-colors ${form.timeline === t ? "bg-violet border-violet text-white" : "bg-white border-black/10 text-black/70 hover:border-black/15"}`}>{t}</button>
 ))}
 </div>
 </div>
 <div className="sm:col-span-2">
 <label className="font-body text-xs font-medium text-black/60">Tell us more (optional)</label>
 <textarea value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} placeholder="Goals, references, must-haves..." rows={4} className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-3 py-3 font-body text-sm placeholder:text-black/30 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15 resize-none" />
 </div>
 </div>
 </div>
 )}

 {step === 3 && (
 <form onSubmit={onSubmit} className="space-y-4">
 <h2 className="font-display font-semibold text-xl text-ink">How can we reach you?</h2>
 <p className="font-body text-sm text-black/50 -mt-1">We&apos;ll send the plan here and reply in 2 hours.</p>
 <div className="grid sm:grid-cols-2 gap-4">
 <div>
 <label className="font-body text-xs font-medium text-black/60">Name *</label>
 <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="mt-1.5 h-11 w-full rounded-xl border border-black/10 bg-white px-3 font-body text-sm placeholder:text-black/30 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15" />
 </div>
 <div>
 <label className="font-body text-xs font-medium text-black/60">Company</label>
 <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Tanglome (optional)" className="mt-1.5 h-11 w-full rounded-xl border border-black/10 bg-white px-3 font-body text-sm placeholder:text-black/30 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15" />
 </div>
 <div>
 <label className="font-body text-xs font-medium text-black/60">Email *</label>
 <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className="mt-1.5 h-11 w-full rounded-xl border border-black/10 bg-white px-3 font-body text-sm placeholder:text-black/30 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15" />
 </div>
 <div>
 <label className="font-body text-xs font-medium text-black/60">Phone *</label>
 <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 ..." inputMode="tel" className="mt-1.5 h-11 w-full rounded-xl border border-black/10 bg-white px-3 font-body text-sm placeholder:text-black/30 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15" />
 </div>
 </div>
 <div className="rounded-xl bg-ink/[0.04] border border-black/5 p-3">
 <p className="font-body text-xs font-medium text-black/60">Selected</p>
 <div className="mt-2 flex flex-wrap gap-1.5">
 {form.services.length ? form.services.map((s) => <span key={s} className="rounded-full bg-white border border-black/10 px-2.5 py-1 font-body text-xs font-medium text-ink">{s}</span>) : <span className="font-body text-xs text-black/40">No service selected</span>}
 </div>
 {form.budget && <p className="font-body text-xs text-black/50 mt-2">{form.budget} • {form.timeline || "No timeline"}</p>}
 </div>
 </form>
 )}

 {error && <p className="mt-4 font-body text-xs font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}
 {sent && <p className="mt-4 inline-flex items-center gap-1.5 font-body text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2"><CheckCircle2 size={14} /> Sent and we&apos;ll call within 2 hours.</p>}

 <div className="mt-6 flex gap-3">
 {step > 1 && <button onClick={back} className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 font-body text-sm font-medium text-ink hover:bg-black/[0.02]">Back</button>}
 {step < 3 ? (
 <button onClick={next} className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-violet px-6 py-3 font-body text-sm font-semibold text-white hover:bg-violet-deep shadow-[0_8px_20px_rgba(109,40,217,0.2)]">Next <ArrowRight size={14} /></button>
 ) : (
 <button onClick={onSubmit} disabled={loading} className="ml-auto inline-flex items-center gap-2 rounded-full bg-violet px-6 py-3 font-body text-sm font-semibold text-white hover:bg-violet-deep shadow-[0_8px_20px_rgba(109,40,217,0.2)] disabled:opacity-60">{loading ? "Sending..." : "Send request"} <Send size={14} /></button>
 )}
 </div>
 </motion.div>

 <p className="font-body text-xs text-center text-black/30 mt-4">Avg response 2h • {BRAND.email} • {BRAND.phone} • Also on WhatsApp</p>
 </div>
 </section>
 </div>
 )
}

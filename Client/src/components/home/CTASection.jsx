import { useState } from "react"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { api } from "../../lib/api.js"

const SERVICES = ["Web Development", "AI Automation", "Editing & Cinematography", "Ad Campaigns", "Social Media Marketing", "Mobile App Development"]

const EASE = [0.16, 1, 0.3, 1]

const INPUT_CLS =
 "h-12 w-full rounded-full border border-white/10 bg-white/[0.05] px-4 font-body text-sm text-paper placeholder:text-paper/30 focus:outline-none focus:border-violet-light focus:bg-white/[0.08]"

export default function CTASection() {
 const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "" })
 const [sent, setSent] = useState(false)
 const [error, setError] = useState("")
 const [loading, setLoading] = useState(false)

 const onSubmit = async (e) => {
  e.preventDefault()
  if (!form.name.trim() || !form.phone.trim() || !form.service) {
  setError("Name, phone and service are required.")
  return
  }
  if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
  setError("Please enter a valid email.")
  return
  }
  setError("")
  setLoading(true)
  try {
  await api.claimPlan(form)
  setSent(true)
  setTimeout(() => setSent(false), 5000)
  setForm({ name: "", company: "", email: "", phone: "", service: "" })
  } catch (err) {
  setError(err.message || "Failed to send. Try again.")
  } finally {
  setLoading(false)
  }
 }

 return (
 <section id="claim-plan" className="relative scroll-mt-20 overflow-hidden bg-ink py-16 md:py-24 border-t border-white/[0.06]">
  <span id="contact" className="block -mt-20 pt-20" aria-hidden />

  {/* hero-style aurora */}
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
  <div
   className="absolute left-[8%] top-[-18%] h-[46vh] w-[46vh] rounded-full blur-[100px]"
   style={{
   background: "radial-gradient(circle, rgba(109,40,217,0.18) 0%, rgba(59,24,119,0.1) 50%, transparent 75%)",
   }}
  />
  <div
   className="absolute right-[4%] bottom-[-22%] h-[44vh] w-[44vh] rounded-full blur-[110px]"
   style={{
   background: "radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 70%)",
   }}
  />
  </div>

  <div className="relative mx-auto max-w-7xl px-6">
  <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
   {/* left - pitch */}
   <motion.div
   initial={{ opacity: 0, y: 16 }}
   whileInView={{ opacity: 1, y: 0 }}
   viewport={{ once: true, margin: "-40px" }}
   transition={{ duration: 0.5, ease: EASE }}
   >
   <h2 className="font-display font-semibold tracking-tight leading-[0.92] text-4xl text-paper sm:text-5xl">
    Get your <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-light to-violet">21-day plan</span> free.
   </h2>
   <p className="mt-4 max-w-[460px] font-body text-base leading-relaxed text-paper/60">
    One call. Scope, timeline and price on one page. No pitch.
   </p>
   <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-5">
   {["We call in 2 hours", "Fixed price, no surprises", "Start only if you love it"].map((t) => (
    <span key={t} className="inline-flex items-center gap-2.5 font-body text-sm text-paper/70">
    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-light" aria-hidden />
    {t}
    </span>
   ))}
   </div>
   </motion.div>

   {/* right - form */}
   <motion.form
   onSubmit={onSubmit}
   initial={{ opacity: 0, y: 16 }}
   whileInView={{ opacity: 1, y: 0 }}
   viewport={{ once: true, margin: "-40px" }}
   transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
   className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-7"
   >
   <h3 className="font-display font-semibold text-lg leading-none text-paper">Claim your slot</h3>
   <p className="mt-1.5 font-body text-sm text-paper/50">No spam. Just the plan.</p>

   <div className="mt-6 space-y-3">
    <input
    value={form.name}
    onChange={(e) => setForm({ ...form, name: e.target.value })}
    placeholder="Name *"
    className={INPUT_CLS}
    />
    <input
    value={form.company}
    onChange={(e) => setForm({ ...form, company: e.target.value })}
    placeholder="Company name"
    className={INPUT_CLS}
    />
    <input
    value={form.email}
    onChange={(e) => setForm({ ...form, email: e.target.value })}
    placeholder="Email"
    type="email"
    className={INPUT_CLS}
    />
    <input
    value={form.phone}
    onChange={(e) => setForm({ ...form, phone: e.target.value })}
    placeholder="Phone *"
    inputMode="tel"
    className={INPUT_CLS}
    />
    <select
    value={form.service}
    onChange={(e) => setForm({ ...form, service: e.target.value })}
    className={INPUT_CLS}
    >
    <option value="" className="bg-ink">Service *</option>
    {SERVICES.map((s) => (
     <option key={s} value={s} className="bg-ink">{s}</option>
    ))}
    </select>
   </div>

   {error && <p className="mt-3 font-body text-xs text-red-400">{error}</p>}
   {sent && (
    <p className="mt-3 inline-flex items-center gap-1.5 font-body text-xs font-medium text-emerald-400">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
    Locked — we'll call within 2 hours.
    </p>
   )}

   <button
    type="submit"
    disabled={loading || sent}
    className={`mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-6 font-body text-sm font-semibold text-white transition-colors disabled:opacity-60 ${sent ? "bg-emerald-600 hover:bg-emerald-600" : "bg-violet hover:bg-violet-deep"}`}
   >
    {loading ? "Sending..." : sent ? "Sent — check your phone" : "Start a project"} {sent ? <span aria-hidden>✓</span> : <ArrowUpRight size={16} strokeWidth={2} />}
   </button>
   <p className="mt-3 text-center font-body text-[11px] text-paper/30">Risk-free. Pay nothing if you don't love it.</p>
   </motion.form>
  </div>
  </div>
 </section>
 )
}
import { useState } from "react"
import { motion } from "motion/react"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { api } from "../../lib/api.js"
import HeroWave from "../ui/dynamic-wave-canvas-background.jsx"

const SERVICES = ["Web Development", "AI Automation", "Editing & Cinematography", "Ad Campaigns", "Social Media Marketing", "Mobile App Development"]

const STATS = [
  { value: "28+", label: "Projects shipped" },
  { value: "19", label: "Avg. days to launch" },
  { value: "40+", label: "Founders served" },
]

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
    <section id="claim-plan" className="bg-black py-12 md:py-16 overflow-hidden scroll-mt-20 relative isolate">
      <span id="contact" className="block -mt-20 pt-20" aria-hidden />

      {/* dynamic wave canvas background */}
      <div className="pointer-events-none absolute inset-0">
        <HeroWave />
        {/* darken + violet tint so text stays readable */}
        <div className="absolute inset-0 bg-black/55" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" aria-hidden />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6">
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* left — pitch */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[20px] border border-white/10 p-6 sm:p-7 flex flex-col text-paper"
          >
            <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5">
              <Sparkles size={12} className="text-violet-light" />
              <span className="font-body text-[11px] font-medium tracking-wide text-paper/80">Limited slots this month</span>
            </div>

            <h2 className="font-display font-semibold text-3xl md:text-4xl leading-[0.95] mt-5">
              Get your <span className="text-violet-light">21-day plan</span> free.
            </h2>
            <p className="font-body text-sm text-paper/60 mt-2 leading-relaxed">One call. Scope, timeline &amp; price on one page. No pitch.</p>

            <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-white/10">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-display font-semibold text-xl sm:text-2xl text-paper leading-none">{s.value}</p>
                  <p className="font-body text-[11px] text-paper/45 mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-2.5">
              {["We call in 2 hours", "Fixed price, no surprises", "Start only if you love it"].map((t, i) => (
                <div key={t} className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-ink font-body text-xs font-bold">{i + 1}</span>
                  <p className="font-body text-sm text-paper">{t}</p>
                </div>
              ))}
            </div>

            <p className="font-body text-xs text-paper/35 mt-auto pt-6">40+ founders • hellotanglome@gmail.com • +91 95854 58794</p>
          </motion.div>

          {/* right — form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[20px] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6 flex flex-col"
          >
            <h3 className="font-display font-semibold text-lg text-paper leading-none">Claim your slot</h3>
            <p className="font-body text-xs text-paper/50 mt-1">No spam. Just the plan.</p>

            <div className="mt-5 space-y-3">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Name *"
                className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.05] px-3 font-body text-sm text-paper placeholder:text-paper/30 focus:outline-none focus:border-violet-light focus:ring-2 focus:ring-violet/20"
              />
              <input
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Company name"
                className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.05] px-3 font-body text-sm text-paper placeholder:text-paper/30 focus:outline-none focus:border-violet-light focus:ring-2 focus:ring-violet/20"
              />
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email"
                type="email"
                className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.05] px-3 font-body text-sm text-paper placeholder:text-paper/30 focus:outline-none focus:border-violet-light focus:ring-2 focus:ring-violet/20"
              />
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Phone *"
                inputMode="tel"
                className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.05] px-3 font-body text-sm text-paper placeholder:text-paper/30 focus:outline-none focus:border-violet-light focus:ring-2 focus:ring-violet/20"
              />
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.05] px-3 font-body text-sm text-paper focus:outline-none focus:border-violet-light focus:ring-2 focus:ring-violet/20"
              >
                <option value="" className="bg-ink">Service *</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s} className="bg-ink">{s}</option>
                ))}
              </select>
            </div>

            {error && <p className="mt-2 font-body text-xs text-red-400">{error}</p>}
            {sent && <p className="mt-2 inline-flex items-center gap-1.5 font-body text-xs font-medium text-emerald-400"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"/> Locked — we'll call within 2 hours.</p>}

            <button
              type="submit"
              disabled={loading || sent}
              className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold text-white transition-colors disabled:opacity-60 ${sent ? "bg-emerald-600 hover:bg-emerald-600" : "bg-violet hover:bg-violet-deep"}`}
            >
              {loading ? "Sending..." : sent ? "Sent — check your phone" : "Start a project"} {sent ? <span aria-hidden>✓</span> : <ArrowUpRight size={16} strokeWidth={2} />}
            </button>
            <p className="font-body text-[11px] text-paper/30 text-center mt-2">Risk-free. Pay nothing if you don't love it.</p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
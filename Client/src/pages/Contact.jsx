import { useState } from "react"
import { motion } from "motion/react"
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiArrowUpRight, FiCheckCircle } from "react-icons/fi"
import { FaWhatsapp } from "react-icons/fa"
import { BRAND, SOCIALS } from "../utils/constants.js"
import { services } from "../data/services.js"
import { api } from "../lib/api.js"
import SEO from "../components/common/SEO.jsx"
import { PAGE_SEO } from "../utils/seo.js"

function Reveal({ children, delay = 0, className = "" }) {
 return (
 <motion.div
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
 className={className}
 >
 {children}
 </motion.div>
 )
}

export default function Contact() {
 const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", budget: "", message: "" })
 const [error, setError] = useState("")
 const [sent, setSent] = useState(false)
 const [loading, setLoading] = useState(false)

 const whatsappHref = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hi Tanglome and I want to start a project.")}`
 const telHref = `tel:${BRAND.phone.replace(/[^+0-9]/g, "")}`

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
 await api.contact(form)
 setSent(true)
 setTimeout(() => setSent(false), 3200)
 setForm({ name: "", email: "", phone: "", service: "", budget: "", message: "" })
 } catch (err) {
 setError(err.message || "Failed to send. Try again.")
 } finally {
 setLoading(false)
 }
 }

  return (
  <div className="bg-paper">
  <SEO {...PAGE_SEO.contact} path="/contact" />
  {/* Hero - ink */}
 <section className="bg-ink text-paper overflow-hidden relative">
 <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
 <div aria-hidden className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full opacity-[0.12] blur-[70px]" style={{ background: "radial-gradient(circle at center, #6D28D9 0%, #3B1877 45%, transparent 70%)" }} />

 <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 py-10 sm:py-14 md:py-16">
 <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-center">
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
 <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 font-body text-[11px] tracking-[0.18em] font-medium text-violet-light">
 <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> CONTACT and RESPONSE IN 2H
 </span>
 <h1 className="font-display font-semibold text-[32px] sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight mt-4">
 Let&apos;s build <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-light to-violet">something real.</span>
 </h1>
 <p className="font-body text-[15px] sm:text-base md:text-lg leading-relaxed text-paper/60 mt-4 max-w-xl">
 Tell us your idea and we&apos;ll map a 21-day plan, scope & fixed price on one page. No pitch, no spam.
 </p>

 <div className="mt-6 flex flex-wrap gap-2">
 <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 font-body text-sm font-semibold text-white hover:bg-[#20BD5A] transition-colors">
 <FaWhatsapp size={16} /> WhatsApp us
 </a>
 <a href={telHref} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 font-body text-sm font-medium text-paper hover:bg-white/10 transition-colors">
 <FiPhone size={16} /> {BRAND.phone}
 </a>
 </div>

 <div className="mt-6 flex flex-wrap items-center gap-3 font-body text-xs text-paper/40">
 <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Avg reply 2h</span>
 <span className="h-3 w-px bg-white/10" />
 <span>Live link in 48h</span>
 <span className="h-3 w-px bg-white/10" />
 <span>Fixed price</span>
 </div>
 </motion.div>

 <motion.div initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.12 }} className="relative">
 <div className="rounded-[20px] sm:rounded-[24px] border border-white/10 bg-gradient-to-br from-[#1A1033] to-[#0F0F0F] p-5 sm:p-6 overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.45)]">
 <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-violet opacity-20 blur-3xl" />
 <p className="font-body text-[11px] tracking-[0.16em] font-medium text-paper/30">QUICK CONTACT</p>
 <div className="mt-4 grid gap-3">
 <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 hover:bg-white/[0.06] transition-colors group">
 <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-ink group-hover:bg-violet group-hover:text-white transition-colors"><FiMail size={16} /></span>
 <div className="min-w-0">
 <p className="font-body text-xs text-paper/50 leading-none">Email</p>
 <p className="font-body text-sm font-medium text-paper truncate">{BRAND.email}</p>
 </div>
 <FiArrowUpRight size={14} className="ml-auto text-paper/30 group-hover:text-paper transition-colors" />
 </a>
 <a href={telHref} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 hover:bg-white/[0.06] transition-colors group">
 <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-ink group-hover:bg-violet group-hover:text-white transition-colors"><FiPhone size={16} /></span>
 <div className="min-w-0">
 <p className="font-body text-xs text-paper/50 leading-none">Call</p>
 <p className="font-body text-sm font-medium text-paper">{BRAND.phone}</p>
 </div>
 <FiArrowUpRight size={14} className="ml-auto text-paper/30" />
 </a>
 <a href={whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#25D366]/15 p-3 hover:bg-[#25D366]/20 transition-colors group">
 <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25D366] text-white"><FaWhatsapp size={16} /></span>
 <div>
 <p className="font-body text-xs text-paper/60 leading-none">WhatsApp</p>
 <p className="font-body text-sm font-medium text-paper">Chat now and reply in minutes</p>
 </div>
 </a>
 </div>
 <div className="mt-4 flex items-center gap-3 rounded-xl bg-white p-3">
 <FiMapPin size={16} className="text-violet shrink-0" />
 <p className="font-body text-xs text-black/60"><span className="font-medium text-ink">{BRAND.address}</span> • Remote worldwide • Available for onsite shoots</p>
 </div>
 </div>
 </motion.div>
 </div>
 </div>
 </section>

 {/* Form + info */}
 <section className="py-10 sm:py-12 md:py-16">
 <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
 <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 md:gap-8 items-start">
 {/* Left - info */}
 <div className="space-y-4 sm:space-y-5">
 <Reveal>
 <div className="rounded-[20px] border border-black/10 bg-white p-5 sm:p-6">
 <p className="font-body font-medium text-sm tracking-wide text-violet">Visit / Call</p>
 <h2 className="font-display font-semibold text-2xl leading-tight mt-1 text-ink">We&apos;d love to hear your idea.</h2>
 <p className="font-body text-sm leading-relaxed text-black/60 mt-2">Fill the form or reach us directly and we&apos;ll respond within 2 hours in work hours.</p>

 <div className="mt-5 space-y-3">
 <div className="flex gap-3 rounded-xl border border-black/10 bg-white p-3">
 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet/10 text-violet"><FiMail size={16} /></span>
 <div>
 <p className="font-body text-xs font-medium text-black/40">Email</p>
 <a href={`mailto:${BRAND.email}`} className="font-body text-sm font-medium text-ink hover:text-violet">{BRAND.email}</a>
 </div>
 </div>
 <div className="flex gap-3 rounded-xl border border-black/10 bg-white p-3">
 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet/10 text-violet"><FiPhone size={16} /></span>
 <div>
 <p className="font-body text-xs font-medium text-black/40">Phone & WhatsApp</p>
 <a href={telHref} className="font-body text-sm font-medium text-ink hover:text-violet block">{BRAND.phone}</a>
 <a href={whatsappHref} target="_blank" rel="noreferrer" className="font-body text-xs font-medium text-emerald-600 hover:underline">WhatsApp: +{BRAND.whatsapp}</a>
 </div>
 </div>
 <div className="flex gap-3 rounded-xl border border-black/10 bg-white p-3">
 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet/10 text-violet"><FiMapPin size={16} /></span>
 <div>
 <p className="font-body text-xs font-medium text-black/40">Location</p>
 <p className="font-body text-sm font-medium text-ink">{BRAND.address} and remote & onsite</p>
 </div>
 </div>
 <div className="flex gap-3 rounded-xl border border-black/10 bg-white p-3">
 <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet/10 text-violet"><FiClock size={16} /></span>
 <div>
 <p className="font-body text-xs font-medium text-black/40">Hours</p>
 <p className="font-body text-sm font-medium text-ink">Mon Sat, 9am 7pm IST</p>
 <p className="font-body text-xs text-black/50">Avg response 2 hours</p>
 </div>
 </div>
 </div>

 <div className="mt-5 flex gap-2">
 <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white hover:border-violet/20 hover:bg-violet/5 transition-colors font-body text-xs font-bold text-black/60">IG</a>
 <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white hover:border-violet/20 hover:bg-violet/5 transition-colors font-body text-xs font-bold text-black/60">In</a>
 </div>
 </div>
 </Reveal>

 <Reveal delay={0.08}>
 <div className="rounded-[20px] bg-ink p-5 sm:p-6 text-paper overflow-hidden relative">
 <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-violet opacity-15 blur-2xl" />
 <h3 className="font-display font-semibold text-lg leading-tight">What happens after you send?</h3>
 <ol className="mt-4 space-y-3">
 {["We reply within 2 hours", "One call → 21-day plan on one page", "Start only if you love it"].map((t, i) => (
 <li key={t} className="flex gap-3">
 <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-ink font-body text-xs font-bold">{i + 1}</span>
 <p className="font-body text-sm text-paper/80">{t}</p>
 </li>
 ))}
 </ol>
 </div>
 </Reveal>
 </div>

 {/* Right - form */}
 <Reveal delay={0.12}>
 <form onSubmit={onSubmit} className="rounded-[20px] sm:rounded-[24px] border border-black/10 bg-white p-5 sm:p-6 md:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
 <h3 className="font-display font-semibold text-xl sm:text-2xl leading-tight text-ink">Start a project</h3>
 <p className="font-body text-sm text-black/50 mt-1">No spam. Just the plan and we&apos;ll call you.</p>

 <div className="mt-6 grid sm:grid-cols-2 gap-3 sm:gap-4">
 <div className="sm:col-span-2 md:col-span-1">
 <label className="font-body text-xs font-medium text-black/60">Name *</label>
 <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="mt-1.5 h-11 w-full rounded-xl border border-black/10 bg-white px-3 font-body text-sm placeholder:text-black/30 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15" />
 </div>
 <div>
 <label className="font-body text-xs font-medium text-black/60">Phone *</label>
 <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 ..." inputMode="tel" className="mt-1.5 h-11 w-full rounded-xl border border-black/10 bg-white px-3 font-body text-sm placeholder:text-black/30 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15" />
 </div>
 <div>
 <label className="font-body text-xs font-medium text-black/60">Email</label>
 <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" type="email" className="mt-1.5 h-11 w-full rounded-xl border border-black/10 bg-white px-3 font-body text-sm placeholder:text-black/30 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15" />
 </div>
 <div>
 <label className="font-body text-xs font-medium text-black/60">Service *</label>
 <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="mt-1.5 h-11 w-full rounded-xl border border-black/10 bg-white px-3 font-body text-sm text-ink focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15">
 <option value="">Select a service</option>
 {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
 </select>
 </div>
 <div className="sm:col-span-2">
 <label className="font-body text-xs font-medium text-black/60">Budget (optional)</label>
 <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="mt-1.5 h-11 w-full rounded-xl border border-black/10 bg-white px-3 font-body text-sm text-ink focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15">
 <option value="">Select budget</option>
 <option>Under ₹50k</option>
 <option>₹50k and 1L</option>
 <option>₹1L and 3L</option>
 <option>₹3L+</option>
 </select>
 </div>
 <div className="sm:col-span-2">
 <label className="font-body text-xs font-medium text-black/60">Message</label>
 <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your idea..." rows={4} className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-3 py-3 font-body text-sm placeholder:text-black/30 focus:outline-none focus:border-violet focus:ring-2 focus:ring-violet/15 resize-none" />
 </div>
 </div>

 {error && <p className="mt-3 font-body text-xs font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}
 {sent && <p className="mt-3 inline-flex items-center gap-1.5 font-body text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2"><FiCheckCircle size={14} /> Sent and we&apos;ll call within 2 hours.</p>}

 <button type="submit" disabled={loading} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet px-6 py-3 font-body text-sm font-semibold text-white hover:bg-violet-deep active:scale-[0.99] transition-all shadow-[0_8px_20px_rgba(109,40,217,0.25)] disabled:opacity-60">
 {loading ? "Sending..." : "Send message"} <FiSend size={16} strokeWidth={2} />
 </button>
 <p className="font-body text-[11px] text-black/30 text-center mt-2">By sending, you agree we can contact you about your project.</p>
 </form>
 </Reveal>
 </div>

 {/* Map / extra */}
 <Reveal delay={0.16} className="mt-6 sm:mt-8">
 <div className="rounded-[20px] border border-black/10 bg-white p-3 overflow-hidden">
 <div className="rounded-[14px] bg-[#F6F5F3] h-[220px] sm:h-[280px] grid place-items-center overflow-hidden relative">
 <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
 <div className="relative text-center px-6">
 <FiMapPin size={28} className="mx-auto text-violet" />
 <p className="font-display font-semibold text-lg text-ink mt-2">India and remote worldwide</p>
 <p className="font-body text-sm text-black/60 mt-1 max-w-md">We work remote-first. Onsite for shoots & workshops in India on request.</p>
 <a href={whatsappHref} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 font-body text-xs font-semibold text-white hover:bg-black transition-colors">
 Pin us on WhatsApp <FiArrowUpRight size={13} />
 </a>
 </div>
 </div>
 </div>
 </Reveal>
 </div>
 </section>
 </div>
 )
}

import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { ArrowUpRight, ArrowRight, Zap, Layers, ShieldCheck, Heart } from "lucide-react"
import CTASection from "../components/home/CTASection.jsx"
import SEO from "../components/common/SEO.jsx"
import { PAGE_SEO } from "../utils/seo.js"

const VALUES = [
 { icon: Zap, title: "Ship fast, stay honest", desc: "Live link in 48h. Fixed sprints, daily updates with no surprise invoices." },
 { icon: Layers, title: "One team, zero handoffs", desc: "Same people who design, build and grow it. Web, app, AI and marketing together." },
 { icon: ShieldCheck, title: "Outcome over output", desc: "We sell a live product that earns, not hours or tickets." },
 { icon: Heart, title: "Stay after launch", desc: "We tune, fix and grow with you post-launch. Founders, not vendors." },
]

const TIMELINE = [
 { year: "2024", title: "Started in a room", desc: "Two laptops, one client with a CRM that needed to ship yesterday." },
 { year: "2025", title: "Six crafts, one roof", desc: "Added AI, mobile and marketing so clients stop juggling freelancers." },
 { year: "2026", title: "Collaborated with Zeonhub", desc: "Partnered with Zeonhub to build and grow more products together." },
 { year: "2026", title: "Tanglome today", desc: "Design to growth with websites, apps, automation and reels under one roof." },
]

const TEAM = [
 { name: "Gnanavinith", role: "Ships the plan", initials: "G", accent: "bg-violet" },
 { name: "Aravind", role: "Makes it premium", initials: "A", accent: "bg-ink" },
 { name: "Akash", role: "Builds it right", initials: "A", accent: "bg-violet" },
 { name: "Harishkumar", role: "Gets it seen", initials: "H", accent: "bg-ink" },
]

function Reveal({ children, delay = 0, className = "" }) {
 return (
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
 className={className}
 >
 {children}
 </motion.div>
 )
}

export default function About() {
  return (
  <div className="bg-paper">
  <SEO {...PAGE_SEO.about} path="/about" />
 {/* Hero */}
 <section className="bg-ink text-paper overflow-hidden relative">
 {/* subtle grid + glow */}
 <div
 aria-hidden
 className="pointer-events-none absolute inset-0 opacity-[0.04]"
 style={{
 backgroundImage:
 "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
 backgroundSize: "40px 40px",
 }}
 />
 <div aria-hidden className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full opacity-[0.12] blur-[70px]" style={{ background: "radial-gradient(circle at center, #6D28D9 0%, #3B1877 45%, transparent 70%)" }} />

 <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 py-10 sm:py-14 md:py-20">
 <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-center">
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
 <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 font-body text-[11px] tracking-[0.18em] font-medium text-violet-light">
 <span className="h-1.5 w-1.5 rounded-full bg-violet-light animate-pulse" /> ABOUT TANGLOME
 </span>
 <h1 className="font-display font-semibold text-[32px] sm:text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-tight mt-4">
 Tangled ideas, <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-light to-violet">simple products.</span>
 </h1>
 <p className="font-body text-[15px] sm:text-base md:text-lg leading-relaxed text-paper/60 mt-4 max-w-xl">
 We untangle complex ideas into products that launch fast, look premium and grow from week one. No suits. Just shipped work with web, mobile, AI and marketing under one roof.
 </p>
 <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row gap-3">
 <Link to="/work" className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-full bg-white px-6 py-3 font-body text-sm font-semibold text-ink hover:bg-paper transition-colors">
 See our work <ArrowUpRight size={16} strokeWidth={2} />
 </Link>
 <a href="#claim-plan" className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 font-body text-sm font-medium text-paper hover:bg-white/10 transition-colors backdrop-blur">
 Start a project <ArrowRight size={16} strokeWidth={2} className="opacity-60" />
 </a>
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 20, scale: 0.98 }}
 animate={{ opacity: 1, y: 0, scale: 1 }}
 transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
 className="relative"
 >
 <div className="relative rounded-[20px] sm:rounded-[24px] border border-white/10 bg-gradient-to-br from-[#1A1033] to-[#0F0F0F] p-5 sm:p-6 md:p-7 overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.45)]">
 <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-violet opacity-20 blur-3xl" aria-hidden />
 <div className="flex items-center gap-3">
 <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
 <p className="font-body text-xs font-medium tracking-wide text-paper/50">Available for new projects</p>
 <span className="ml-auto hidden sm:inline-flex rounded-full bg-white/10 border border-white/10 px-2.5 py-1 font-body text-[11px] font-medium text-paper/60">Response in 2h</span>
 </div>

 <div className="mt-5 rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 backdrop-blur">
 <p className="font-body text-sm sm:text-[15px] leading-relaxed text-paper font-medium">
 “Most agencies sell services. We sell outcome and a live product that earns.”
 </p>
 <p className="font-body text-xs text-paper/40 mt-3"> Tanglome principle</p>
 </div>

 <div className="mt-4 sm:mt-5">
 <p className="font-body text-[11px] tracking-[0.16em] font-medium text-paper/30">CRAFTS UNDER ONE ROOF</p>
 <div className="mt-3 flex flex-wrap gap-2">
 {["Web Development", "Mobile Apps", "AI Automation", "Ad Campaigns", "Social Growth", "Editing"].map((t, i) => (
 <motion.span
 key={t}
 initial={{ opacity: 0, y: 8 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: 0.5 + i * 0.06, duration: 0.4 }}
 className="rounded-full bg-white px-3 sm:px-3.5 py-1.5 font-body text-xs font-medium text-ink hover:bg-paper transition-colors"
 >
 {t}
 </motion.span>
 ))}
 </div>
 </div>

 <p className="font-body text-xs text-paper/25 text-center mt-4 sm:mt-5">Fixed price • Live link in 48h • No pitch</p>
 </div>
 </motion.div>
 </div>
 </div>
 </section>

 {/* Story + Timeline */}
 <section className="py-12 sm:py-16 md:py-20 overflow-hidden">
 <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
 <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
 <Reveal>
 <p className="font-body font-medium text-sm tracking-wide text-violet">Our story</p>
 <h2 className="font-display font-semibold text-[28px] sm:text-3xl md:text-4xl leading-[0.95] mt-2 text-ink">Built to ship.</h2>
 <div className="mt-4 space-y-3 sm:space-y-4">
 <p className="font-body text-[15px] sm:text-base leading-relaxed text-black/60">
 Tanglome started because founders were stuck between slow agencies and scattered freelancers. Design from one, code from another, marketing from a third so nothing shipped together.
 </p>
 <p className="font-body text-[15px] sm:text-base leading-relaxed text-black/60">
 We fixed it by putting six crafts under one roof with web, mobile, AI automation, ad campaigns, social and editing. Same team maps, builds and grows. You get a 21-day plan, daily updates and a live link in 48 hours.
 </p>
 <p className="font-body text-[15px] sm:text-base leading-relaxed text-black/60">
 No handoffs. No pitch decks that go nowhere. Just a clear plan and a product that goes live.
 </p>
 </div>
 <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
 <Link to="/work" className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-full bg-ink px-5 py-3 font-body text-sm font-semibold text-white hover:bg-black transition-colors">
 Explore work <ArrowUpRight size={14} strokeWidth={2} />
 </Link>
 <a href="#claim-plan" className="inline-flex items-center justify-center sm:justify-start gap-1 font-body text-sm font-medium text-violet hover:text-violet-deep transition-colors">
 Get a 21-day quote <span aria-hidden>→</span>
 </a>
 </div>
 </Reveal>

 <div className="relative">
 {/* timeline line - visible on all screens now, responsive position */}
 <div className="absolute left-4 sm:left-[15px] top-2 bottom-2 w-px bg-black/10 hidden sm:block" aria-hidden />
 <div className="absolute left-4 top-2 bottom-2 w-px bg-black/[0.06] sm:hidden" aria-hidden />
 <div className="space-y-4 sm:space-y-5">
 {TIMELINE.map((t, i) => (
 <motion.div
 key={`${t.year}-${i}`}
 initial={{ opacity: 0, x: 16 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-40px" }}
 transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
 className="relative flex gap-3 sm:gap-4"
 >
 {/* dot */}
 <span className="relative hidden sm:flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-white font-body text-xs font-bold border-2 border-white shadow-[0_2px_8px_rgba(0,0,0,0.12)] mt-1">
 {t.year.slice(2)}
 </span>
 <span className="sm:hidden relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-white font-body text-[11px] font-bold mt-1">
 {t.year.slice(2)}
 </span>

 <div className="flex-1 rounded-2xl border border-black/10 bg-white p-4 sm:p-5 hover:border-black/15 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all">
 <p className="font-body text-[11px] tracking-[0.14em] font-medium text-violet">{t.year}</p>
 <h3 className="font-display font-semibold text-[17px] sm:text-lg leading-tight mt-1 text-ink">{t.title}</h3>
 <p className="font-body text-sm leading-relaxed text-black/60 mt-1.5">{t.desc}</p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Values */}
 <section className="bg-ink text-paper py-12 sm:py-16 md:py-20 border-y border-white/[0.06] overflow-hidden relative">
 <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "48px 48px", maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 60%, transparent 100%)" }} />
 <div aria-hidden className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full opacity-[0.08] blur-[70px]" style={{ background: "radial-gradient(circle at center, #6D28D9 0%, #3B1877 45%, transparent 70%)" }} />
 <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6">
 <Reveal>
 <p className="font-body font-medium text-sm tracking-wide text-violet-light">Values</p>
 <h2 className="font-display font-semibold text-[28px] sm:text-3xl md:text-4xl leading-[0.95] mt-2">How we work matters.</h2>
 <p className="font-body text-sm sm:text-base text-paper/60 mt-3 max-w-2xl leading-relaxed">Principles that keep us fast, honest and useful and not just busy.</p>
 </Reveal>

 <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
 {VALUES.map((v, i) => {
 const Icon = v.icon
 return (
 <motion.div
 key={v.title}
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-40px" }}
 transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
 whileHover={{ y: -4 }}
 className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.04] p-5 sm:p-6 hover:bg-white/[0.06] hover:border-white/15 transition-colors"
 >
 <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
 <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet text-white group-hover:bg-violet-light transition-colors">
 <Icon size={18} strokeWidth={1.75} />
 </span>
 <h3 className="font-display font-semibold text-[17px] sm:text-lg leading-tight mt-4">{v.title}</h3>
 <p className="font-body text-sm leading-relaxed text-paper/60 mt-2">{v.desc}</p>
 </motion.div>
 )
 })}
 </div>
 </div>
 </section>

 {/* Team */}
 <section className="py-12 sm:py-16 md:py-20 overflow-hidden">
 <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
 <Reveal>
 <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
 <div>
 <p className="font-body font-medium text-sm tracking-wide text-violet">Team</p>
 <h2 className="font-display font-semibold text-[28px] sm:text-3xl md:text-4xl leading-[0.95] mt-2 text-ink">Small team. Big output.</h2>
 </div>
 <p className="font-body text-sm sm:text-[15px] text-black/60 max-w-md leading-relaxed">Senior folks only. No juniors learning on your dime. We ship with you, daily.</p>
 </div>
 </Reveal>

 <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
 {TEAM.map((m, i) => (
 <motion.div
 key={m.name}
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-40px" }}
 transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
 whileHover={{ y: -3 }}
 className="rounded-[16px] sm:rounded-[20px] border border-black/10 bg-white p-4 sm:p-6 text-center hover:border-black/15 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all"
 >
 <div className={`mx-auto flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl text-white font-display font-bold text-lg sm:text-xl ${m.accent} shadow-[0_8px_20px_rgba(0,0,0,0.12)]`}>
 {m.initials}
 </div>
 <h3 className="font-display font-semibold text-[15px] sm:text-lg mt-3 text-ink leading-tight">{m.name}</h3>
 <p className="font-body text-xs tracking-wide text-black/50 mt-1">{m.role}</p>
 <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1">
 <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
 <span className="font-body text-[11px] font-medium text-emerald-700">Available</span>
 </div>
 </motion.div>
 ))}
 </div>

 <Reveal delay={0.2} className="mt-8">
 <div className="rounded-[16px] sm:rounded-[20px] border border-black/10 bg-white p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
 <div className="flex -space-x-2 shrink-0">
 <span className="h-9 w-9 rounded-full border-2 border-white bg-ink grid place-items-center text-white font-body text-xs font-bold shadow-sm">T</span>
 <span className="h-9 w-9 rounded-full border-2 border-white bg-violet grid place-items-center text-white font-body text-xs font-bold shadow-sm">L</span>
 <span className="h-9 w-9 rounded-full border-2 border-white bg-white border-black/10 grid place-items-center text-ink font-body text-xs font-bold shadow-sm">→</span>
 </div>
 <p className="font-body text-sm sm:text-[15px] text-black/60 flex-1 text-center sm:text-left leading-relaxed">Trusted by founders from Nexora, Velvet, Lumen and more, from idea to revenue.</p>
 <Link to="/work" className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-full bg-violet px-5 py-2.5 font-body text-sm font-semibold text-white hover:bg-violet-deep transition-colors shrink-0">
 View work <ArrowUpRight size={14} strokeWidth={2} />
 </Link>
 </div>
 </Reveal>
 </div>
 </section>

 <CTASection />
 </div>
 )
}

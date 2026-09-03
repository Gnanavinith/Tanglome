import { useParams, Link } from "react-router-dom"
import { motion } from "motion/react"
import { ArrowUpRight, ArrowLeft, Check, ChevronDown } from "lucide-react"
import { getServiceBySlug, services } from "../../data/services.js"
import CTASection from "../../components/home/CTASection.jsx"
import SEO from "../../components/common/SEO.jsx"
import { PAGE_SEO, SITE } from "../../utils/seo.js"
import { useState } from "react"

const heroContainer = {
 hidden: {},
 show: {
 transition: { staggerChildren: 0.09, delayChildren: 0.05 },
 },
}

const heroItem = {
 hidden: { opacity: 0, y: 14 },
 show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

function FAQItem({ q, a }) {
 const [open, setOpen] = useState(false)
 return (
 <div className="border-b border-black/10">
 <button
 onClick={() => setOpen(!open)}
 className="flex w-full items-center justify-between gap-4 py-4 text-left"
 >
 <span className="font-body font-medium text-sm md:text-[15px] text-ink">{q}</span>
 <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors ${open ? "bg-ink text-white border-ink" : "bg-white border-black/10 text-black/40"}`}>
 <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
 </span>
 </button>
 {open && <p className="font-body text-sm leading-relaxed text-black/60 pb-4 pr-10">{a}</p>}
 </div>
 )
}

export default function ServiceDetail() {
 const { slug } = useParams()
 const service = getServiceBySlug(slug)

 if (!service) {
 return (
 <div className="bg-paper min-h-[60vh] flex flex-col items-center justify-center px-6 py-24 text-center">
 <p className="font-body text-sm tracking-widest text-violet font-medium">404</p>
 <h1 className="font-display font-semibold text-3xl text-ink mt-2">Service not found</h1>
 <p className="font-body text-sm text-black/60 mt-2 max-w-md">We couldn't find that service. Explore what we do.</p>
 <div className="mt-6 flex gap-3">
 <Link to="/" className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 font-body text-sm font-semibold text-white">
 Back home <ArrowUpRight size={14} />
 </Link>
 <Link to="/services/web-development" className="inline-flex items-center gap-1.5 rounded-full border border-black/10 px-5 py-2.5 font-body text-sm font-medium">Browse services</Link>
 </div>
 </div>
 )
 }

  const Icon = service.icon
  const seo = PAGE_SEO.services[service.slug] || PAGE_SEO.home
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.desc,
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: service.title,
    url: `${SITE.url}/services/${service.slug}`,
  }

  return (
  <div className="bg-paper">
  <SEO title={seo.title} description={seo.description} keywords={seo.keywords} path={`/services/${service.slug}`} jsonLd={serviceJsonLd} />
 {/* Hero - ink */}
 <section className="bg-ink text-paper overflow-hidden relative">
 {/* ambient glow, sits behind everything, breathes slowly */}
 <motion.div
 aria-hidden
 className="pointer-events-none absolute -top-32 right-[8%] h-[420px] w-[420px] rounded-full bg-violet/25 blur-[120px]"
 animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.08, 1] }}
 transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
 />

 <div className="mx-auto max-w-[1280px] px-6 py-10 md:py-16 relative">
 <Link to="/" className="inline-flex items-center gap-1.5 font-body text-xs font-medium text-paper/50 hover:text-paper transition-colors">
 <ArrowLeft size={13} /> Back to home
 </Link>

 <motion.div
 variants={heroContainer}
 initial="hidden"
 animate="show"
 className="mt-7 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-12 items-center"
 >
 <div>
 <motion.span variants={heroItem} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 font-body text-[11px] tracking-widest font-medium text-violet-light">
 <span className="h-1.5 w-1.5 rounded-full bg-violet-light animate-pulse" /> {service.badge}
 </motion.span>

 <motion.h1 variants={heroItem} className="font-display font-semibold text-4xl md:text-5xl lg:text-[58px] leading-[0.92] tracking-tight mt-5 whitespace-pre-line">
 {service.heroTitle}
 </motion.h1>

 <motion.p variants={heroItem} className="font-body text-base md:text-lg leading-relaxed text-paper/60 mt-5 max-w-xl">
 {service.heroDesc}
 </motion.p>

 <motion.div variants={heroItem} className="mt-8 flex flex-wrap gap-3">
 <a href="#claim-plan" className="inline-flex items-center gap-1.5 rounded-full bg-violet px-6 py-3 font-body text-sm font-semibold text-white hover:bg-violet-light transition-colors">
 Get my free 21-day plan <ArrowUpRight size={16} />
 </a>
 <a href={`#features-${service.slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 font-body text-sm font-medium text-paper hover:bg-white/10 transition-colors">
 See what's included
 </a>
 </motion.div>

 <motion.div variants={heroItem} className="mt-9 h-px w-full max-w-xl bg-gradient-to-r from-white/20 via-white/5 to-transparent" />

 <motion.p variants={heroItem} className="font-body text-sm text-paper/40 mt-5 max-w-md leading-relaxed">
 One senior team from strategy to ship and no handoffs, no juniors learning on your dime.
 </motion.p>
 </div>

 {/* Visual */}
 <motion.div variants={heroItem} className="relative">
 <motion.div
 animate={{ y: [0, -10, 0] }}
 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
 className="relative rounded-[24px] border border-white/10 bg-gradient-to-br from-[#1A1033] to-[#0F0F0F] p-6 md:p-7 overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.5)]"
 >
 <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-violet opacity-20 blur-3xl" />
 <div className="flex items-center gap-3">
 <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet text-white">
 <Icon size={20} strokeWidth={1.75} />
 </span>
 <div>
 <p className="font-body text-xs tracking-widest font-medium text-paper/40">SERVICE</p>
 <p className="font-display font-semibold text-lg leading-none text-paper mt-1">{service.title}</p>
 </div>
 <span className="ml-auto hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-500/20 px-2.5 py-1 font-body text-[11px] font-medium text-emerald-400">
 <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Available this week
 </span>
 </div>

 <div className="mt-6 grid grid-cols-2 gap-3">
 {service.deliverables.slice(0, 4).map((d) => (
 <div key={d} className="rounded-xl border border-white/10 bg-white/[0.04] p-3 flex items-center gap-2">
 <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet text-white"><Check size={12} /></span>
 <span className="font-body text-xs font-medium text-paper/90 leading-tight">{d}</span>
 </div>
 ))}
 </div>

 <div className="mt-4 rounded-xl bg-white p-4">
 <p className="font-body text-[11px] tracking-widest font-medium text-black/40">TECH STACK</p>
 <div className="mt-2 flex flex-wrap gap-1.5">
 {service.tech.map((t) => (
 <span key={t} className="rounded-full bg-ink px-2.5 py-1 font-body text-xs font-medium text-paper">{t}</span>
 ))}
 </div>
 </div>

 <p className="font-body text-xs text-paper/30 text-center mt-3">Preview link in 48 hours • fixed price • no pitch</p>
 </motion.div>

 {/* floating reassurance */}
 <div className="absolute -bottom-4 -left-2 md:-left-4 rounded-full border border-black/10 bg-white px-4 py-2 shadow-lg flex items-center gap-2">
 <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
 <span className="font-body text-xs font-medium text-ink">2 slots left this week</span>
 </div>
 </motion.div>
 </motion.div>
 </div>
 </section>

 {/* Features */}
 <section id={`features-${service.slug}`} className="py-16 md:py-20">
 <div className="mx-auto max-w-[1280px] px-6">
 <p className="font-body font-medium text-sm tracking-wide text-violet">What you get</p>
 <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight leading-[0.95] mt-2 text-ink">Everything done-for-you.</h2>
 <p className="font-body text-base text-black/60 mt-3 max-w-2xl leading-relaxed">No fragmented freelancers. One team, one plan and from strategy to ship.</p>

 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-10">
 {service.features.map((f, i) => {
 const FIcon = f.icon
 const dark = i % 3 === 1
 return (
 <div key={f.title} className={`rounded-[20px] border p-6 flex flex-col ${dark ? "bg-ink border-white/10 text-paper" : "bg-white border-black/10"}`}>
 <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${dark ? "bg-violet text-white" : "bg-violet/10 text-violet"}`}>
 <FIcon size={18} strokeWidth={1.75} />
 </span>
 <h3 className={`font-display font-semibold text-lg leading-tight mt-4 ${dark ? "text-paper" : "text-ink"}`}>{f.title}</h3>
 <p className={`font-body text-sm leading-relaxed mt-2 ${dark ? "text-paper/60" : "text-black/60"}`}>{f.desc}</p>
 </div>
 )
 })}
 </div>
 </div>
 </section>

 {/* Process */}
 <section className="bg-ink text-paper py-16 md:py-20">
 <div className="mx-auto max-w-[1280px] px-6">
 <p className="font-body font-medium text-sm tracking-wide text-violet-light">How it works</p>
 <h2 className="font-display font-semibold text-3xl md:text-4xl leading-[0.95] mt-2">From idea → live in 21 days.</h2>
 <div className="mt-10 grid md:grid-cols-3 gap-4 md:gap-6">
 {service.process.map((p) => (
 <div key={p.n} className="rounded-[20px] border border-white/10 bg-white/[0.04] p-6 text-center">
 <span className="font-display font-bold text-xs tracking-[0.2em] text-violet-light">{p.n}</span>
 <h3 className="font-display font-semibold text-xl mt-2">{p.title}</h3>
 <p className="font-body text-sm leading-relaxed text-paper/60 mt-2">{p.desc}</p>
 </div>
 ))}
 </div>
 <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
 <p className="font-body text-sm text-paper/60">Ready to map your plan?</p>
 <a href="#claim-plan" className="inline-flex items-center gap-1.5 rounded-full bg-violet px-6 py-3 font-body text-sm font-semibold text-white hover:bg-violet-light transition-colors">
 Claim my free plan <ArrowUpRight size={14} />
 </a>
 </div>
 </div>
 </section>

 {/* Deliverables + FAQ */}
 <section className="py-16 md:py-20">
 <div className="mx-auto max-w-[1280px] px-6 grid lg:grid-cols-2 gap-10 md:gap-12">
 <div>
 <h2 className="font-display font-semibold text-2xl md:text-3xl leading-tight text-ink">Deliverables. No surprises.</h2>
 <p className="font-body text-sm text-black/60 mt-2 leading-relaxed">Fixed scope, fixed price. You know exactly what ships.</p>
 <ul className="mt-6 space-y-3">
 {service.deliverables.map((d) => (
 <li key={d} className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-3">
 <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white"><Check size={14} strokeWidth={2.5} /></span>
 <span className="font-body text-sm font-medium text-ink">{d}</span>
 </li>
 ))}
 </ul>
 <div className="mt-6 rounded-2xl border border-violet/15 bg-violet/5 p-4 flex items-center justify-between">
 <p className="font-body text-sm text-ink"><span className="font-semibold">Other services?</span> We do all six.</p>
 <Link to="/" className="font-body text-xs font-medium text-violet hover:text-violet-deep">View all →</Link>
 </div>
 </div>

 <div>
 <h3 className="font-display font-semibold text-xl text-ink">Questions, answered.</h3>
 <div className="mt-4">
 {service.faqs.map((f) => (
 <FAQItem key={f.q} q={f.q} a={f.a} />
 ))}
 </div>
 <p className="font-body text-xs text-black/40 mt-4">Have a different question? <a href="#claim-plan" className="text-violet font-medium hover:underline">Ask on the call</a> and no pitch, just clarity.</p>
 </div>
 </div>
 </section>

 {/* Other services */}
 <section className="border-t border-black/10 bg-white py-10">
 <div className="mx-auto max-w-[1280px] px-6">
 <p className="font-body text-xs tracking-widest font-medium text-black/40">EXPLORE OTHER SERVICES</p>
 <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
 {services.filter((s) => s.slug !== service.slug).slice(0, 3).map((s) => {
 const I = s.icon
 return (
 <Link key={s.slug} to={`/services/${s.slug}`} className="group rounded-2xl border border-black/10 p-4 flex items-center gap-3 hover:border-violet/20 hover:bg-violet/5 transition-colors">
 <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white group-hover:bg-violet transition-colors"><I size={18} /></span>
 <div>
 <p className="font-body font-medium text-sm text-ink">{s.title}</p>
 <p className="font-body text-xs text-black/50">{s.shortDesc}</p>
 </div>
 <ArrowUpRight size={14} className="ml-auto text-black/20 group-hover:text-violet transition-colors" />
 </Link>
 )
 })}
 </div>
 </div>
 </section>

 <CTASection />
 </div>
 )
}
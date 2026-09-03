import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { services } from "../../data/services.js"

const SERVICE_META = {
 "web-development": { accent: "Next.js • MERN", stat: "120+ shipped" },
 "ai-automation": { accent: "LLMs • n8n • Zapier", stat: "30k hrs saved" },
 "editing-cinematography": { accent: "Premiere • DaVinci • AE", stat: "500+ edits" },
 "ad-campaigns": { accent: "Meta • Google • LinkedIn", stat: "4.2× ROAS" },
 "social-media-marketing": { accent: "IG • YT • LinkedIn", stat: "2M+ reach/mo" },
 "mobile-app-development": { accent: "React Native • Expo", stat: "25+ apps live" },
}

export default function ServicesGrid() {
 return (
 <section id="services" className="relative overflow-hidden bg-paper py-16 md:py-24">
 <div className="relative mx-auto max-w-[1280px] px-6">
 <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight leading-[0.95] text-ink">
 Six crafts, one roof.
 </h2>
 <p className="font-body text-base md:text-lg text-black/60 mt-3 max-w-2xl leading-relaxed">
 From code to cut - everything your business needs to launch and get seen.
 </p>

 {/* simple grid and matches Hero typography + ink/violet tokens */}
 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-10">
 {services.map((s, i) => {
 const Icon = s.icon
 const meta = SERVICE_META[s.slug] || {}
 const isDark = i % 3 === 1 // middle column gets dark accent instead of violet
 return (
 <Link
 key={s.slug}
 to={`/services/${s.slug}`}
 className={`group relative overflow-hidden rounded-[20px] border p-6 flex flex-col min-h-[210px] transition-all duration-200 hover:-translate-y-[2px] ${
 isDark
 ? "bg-ink border-white/10 hover:border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
 : "bg-white border-black/10 hover:border-black/15 hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
 }`}
 >
 <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent ${isDark ? "via-white/10" : "via-black/5"}`} />

 <div className="flex items-start justify-between gap-4">
 <span
 className={`flex h-10 w-10 items-center justify-center rounded-xl shrink-0 transition-colors ${
 isDark ? "bg-violet text-white group-hover:bg-violet-light" : "bg-violet/10 text-violet group-hover:bg-violet group-hover:text-white"
 }`}
 >
 <Icon size={18} strokeWidth={1.75} />
 </span>
 <span className={`font-body text-[11px] tracking-widest font-medium ${isDark ? "text-paper/35" : "text-black/30"}`}>
 0{i + 1}
 </span>
 </div>

 <p className={`font-body text-[11px] tracking-[0.14em] font-medium mt-4 ${isDark ? "text-paper/40" : "text-black/35"}`}>
 {meta.accent}
 </p>
 <h3 className={`font-display font-semibold text-xl leading-tight mt-1 ${isDark ? "text-paper" : "text-ink"}`}>
 {s.title}
 </h3>
 <p className={`font-body text-sm leading-relaxed mt-2 ${isDark ? "text-paper/60" : "text-black/60"}`}>{s.shortDesc}</p>

 <div className="mt-auto flex items-center gap-2 pt-5">
 <span className={`inline-flex items-center gap-1 font-body text-xs font-medium ${isDark ? "text-violet-light group-hover:text-white" : "text-violet group-hover:text-violet-deep"}`}>
 Explore <ArrowUpRight size={13} strokeWidth={2} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
 </span>
 <span className={`ml-auto font-body text-xs ${isDark ? "text-paper/30" : "text-black/30"}`}>{meta.stat}</span>
 </div>
 </Link>
 )
 })}
 </div>

 {/* bridge and secondary micro-CTA keeps funnel warm */}
 <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 rounded-2xl border border-black/10 bg-white p-4 sm:p-5 text-center">
 <p className="font-body text-sm text-black/60">Not sure which service you need?</p>
 <a href="#claim-plan" className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 font-body text-sm font-semibold text-white hover:bg-black transition-colors">
 Start a project <ArrowUpRight size={14} strokeWidth={2} />
 </a>
 </div>
 </div>
 </section>
 )
}

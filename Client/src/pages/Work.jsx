import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { projects, categories } from "../data/portfolio.js"
import CTASection from "../components/home/CTASection.jsx"
import SEO from "../components/common/SEO.jsx"
import { PAGE_SEO } from "../utils/seo.js"

export default function Work() {
 const [active, setActive] = useState("All")
 const filtered = useMemo(() => (active === "All" ? projects : projects.filter((p) => p.category === active)), [active])

  return (
  <div className="bg-paper">
  <SEO {...PAGE_SEO.work} path="/work" />
  {/* Hero */}
  <section className="bg-ink text-paper">
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10 sm:py-14 md:py-16">
      <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="font-display font-semibold text-[32px] sm:text-4xl md:text-5xl leading-[0.95] tracking-tight">
        Names that ship. <br />
        <span className="text-violet-light">Not just slides.</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }} className="font-body text-sm sm:text-base leading-relaxed text-paper/60 mt-3 max-w-2xl">
        Real products we built — MERN, SaaS, WordPress, SEO and ads under one roof.
      </motion.p>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.1 }} className="mt-6 flex flex-wrap gap-2">
        {categories.map((c) => {
          const count = c === "All" ? projects.length : projects.filter((p) => p.category === c).length
          const isActive = active === c
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-body text-xs font-medium border transition ${
                isActive
                  ? "bg-violet border-violet text-white"
                  : "bg-white/[0.06] border-white/10 text-paper/60 hover:bg-white/10 hover:text-paper"
              }`}
            >
              {c}
              <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium leading-none ${isActive ? "bg-white text-violet" : "bg-white/10 text-paper/50"}`}>{count}</span>
            </button>
          )
        })}
      </motion.div>
    </div>
  </section>

  <section className="py-8 sm:py-10 md:py-12">
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
      <div className="flex items-center justify-between mb-6">
        <p className="font-body text-xs tracking-widest font-medium text-black/40">
          SHOWING <span className="text-ink font-semibold">{filtered.length}</span> / {projects.length}
        </p>
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, idx) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, delay: idx * 0.015 }}
              className="group relative flex flex-col min-h-[260px] rounded-2xl border border-black/10 bg-white p-5 sm:p-6 hover:border-black/15 hover:shadow-sm transition-all"
            >
              <span className="inline-flex w-fit items-center rounded-full border border-black/10 bg-black/[0.03] px-2.5 py-1 font-body text-[11px] font-medium text-black/60">
                {p.category}
              </span>

              <h3 className="font-display font-semibold text-[18px] leading-tight mt-3 text-ink line-clamp-2">{p.title}</h3>
              <p className="font-body text-xs text-black/40 mt-1">{p.client} · {p.accent} · {p.year}</p>
              <p className="font-body text-sm leading-relaxed text-black/60 mt-3 line-clamp-3 flex-1">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 4).map((t) => (
                  <span key={t} className="rounded-full bg-black/[0.04] border border-black/5 px-2.5 py-1 font-body text-[11px] font-medium text-black/60">
                    {t}
                  </span>
                ))}
                {p.stack.length > 4 && (
                  <span className="rounded-full bg-black/[0.04] px-2.5 py-1 font-body text-[11px] font-medium text-black/40">+{p.stack.length - 4}</span>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-black/5 flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1 font-body text-[11px] font-medium text-emerald-700">
                  {p.result}
                </span>
                <div className="ml-auto flex items-center gap-2">
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full border border-black/10 px-3 py-1.5 font-body text-xs font-medium text-ink hover:bg-ink hover:text-white transition-colors">
                      Live <ArrowUpRight size={12} strokeWidth={2} />
                    </a>
                  )}
                  <Link to={`/services/${p.service}`} className="inline-flex items-center gap-1 font-body text-xs font-medium text-violet hover:text-violet-deep">
                    View service <ArrowUpRight size={12} strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="rounded-2xl border border-dashed border-black/15 bg-white p-10 text-center mt-6">
          <p className="font-body text-sm text-black/60">No projects in this category.</p>
          <button onClick={() => setActive("All")} className="mt-3 inline-flex rounded-full bg-ink px-5 py-2 font-body text-sm font-medium text-white hover:bg-black">Show all</button>
        </div>
      )}
    </div>
  </section>

 <CTASection />
 </div>
 )
}

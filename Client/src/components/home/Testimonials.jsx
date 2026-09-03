import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronLeft, ChevronRight, Quote, Star, ArrowUpRight } from "lucide-react"
import { testimonials } from "../../data/testimonials.js"

function initials(name) {
 return name
 .split(" ")
 .map((w) => w[0])
 .slice(0, 2)
 .join("")
 .toUpperCase()
}

export default function Testimonials() {
 const [index, setIndex] = useState(0)
 const [dir, setDir] = useState(1)
 const [paused, setPaused] = useState(false)

 const next = () => {
 setDir(1)
 setIndex((i) => (i + 1) % testimonials.length)
 }
 const prev = () => {
 setDir(-1)
 setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
 }

 useEffect(() => {
 if (paused) return
 const id = setInterval(next, 4200)
 return () => clearInterval(id)
 }, [paused])

 const t = testimonials[index]

 return (
 <section className="relative overflow-hidden bg-ink py-16 md:py-20 border-y border-white/[0.06]">
 {/* subtle glow like Hero */}
 <div
 aria-hidden
 className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[800px] rounded-full opacity-[0.08] blur-[70px]"
 style={{ background: "radial-gradient(circle at center, #6D28D9 0%, transparent 70%)" }}
 />

 <div className="relative mx-auto max-w-[1280px] px-6">
 <div className="flex flex-wrap items-end justify-between gap-4">
 <div>
 <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight leading-none text-paper">
 Real words, real growth.
 </h2>
 </div>
 <div className="hidden sm:flex items-center gap-2">
 <button
 onClick={prev}
 aria-label="Previous"
 className="h-9 w-9 grid place-items-center rounded-full border border-white/10 bg-white/[0.04] text-paper hover:bg-white/10 transition-colors"
 >
 <ChevronLeft size={16} />
 </button>
 <button
 onClick={next}
 aria-label="Next"
 className="h-9 w-9 grid place-items-center rounded-full bg-violet text-white hover:bg-violet-light transition-colors"
 >
 <ChevronRight size={16} />
 </button>
 </div>
 </div>

 <div
 className="relative mt-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur"
 onMouseEnter={() => setPaused(true)}
 onMouseLeave={() => setPaused(false)}
 onTouchStart={() => setPaused(true)}
 onTouchEnd={() => setPaused(false)}
 >
 <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

 <div className="relative min-h-[280px] sm:min-h-[260px]">
 <AnimatePresence initial={false} custom={dir} mode="popLayout">
 <motion.div
 key={index}
 custom={dir}
 initial={{ opacity: 0, x: dir * 48 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: dir * -48 }}
 transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
 drag="x"
 dragConstraints={{ left: 0, right: 0 }}
 dragElastic={0.2}
 onDragEnd={(_, info) => {
 if (info.offset.x < -60) next()
 else if (info.offset.x > 60) prev()
 }}
 className="absolute inset-0 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 cursor-grab active:cursor-grabbing"
 >
 <div className="flex-1 min-w-0">
 <Quote size={22} className="text-violet-light/60" />
 <p className="font-display font-medium text-xl sm:text-2xl leading-[1.25] text-paper mt-3">“{t.quote}”</p>
 <div className="flex items-center gap-1 mt-4 text-violet-light">
 {Array.from({ length: 5 }).map((_, i) => (
 <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
 ))}
 <span className="ml-2 font-body text-xs tracking-wide text-paper/40">5.0 and verified</span>
 </div>
 </div>

 <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:w-[220px] shrink-0 sm:border-l sm:border-white/10 sm:pl-8 pt-4 sm:pt-2 border-t sm:border-t-0 border-white/10">
 {t.avatar ? (
 <img src={t.avatar} alt={t.name} width={48} height={48} className="h-12 w-12 rounded-full object-cover border-2 border-white/10" loading="lazy" />
 ) : (
 <div className="h-12 w-12 shrink-0 rounded-full border-2 border-white/10 bg-violet/20 grid place-items-center">
 <span className="font-display font-semibold text-sm text-violet-light">{initials(t.name)}</span>
 </div>
 )}
 <div>
 <p className="font-body font-semibold text-sm text-paper leading-none">{t.name}</p>
 <p className="font-body text-xs text-paper/50 mt-1">{t.role}</p>
 </div>
 </div>
 </motion.div>
 </AnimatePresence>
 </div>

 {/* progress + dots */}
 <div className="flex items-center justify-between gap-4 px-6 pb-4">
 <div className="flex items-center gap-2">
 {testimonials.map((_, i) => (
 <button
 key={i}
 onClick={() => {
 setDir(i > index ? 1 : -1)
 setIndex(i)
 }}
 aria-label={`Go to ${i + 1}`}
 className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-violet" : "w-3 bg-white/15 hover:bg-white/25"}`}
 />
 ))}
 </div>
 <div className="hidden sm:block h-1 flex-1 max-w-[160px] rounded-full bg-white/10 overflow-hidden">
 <motion.div
 key={index}
 initial={{ width: "0%" }}
 animate={{ width: "100%" }}
 transition={{ duration: 4.2, ease: "linear" }}
 className="h-full bg-violet"
 />
 </div>
 <span className="font-body text-xs tabular-nums text-paper/30">
 {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
 </span>
 </div>
 </div>

 {/* mobile arrows */}
 <div className="flex sm:hidden items-center justify-center gap-3 mt-6">
 <button onClick={prev} className="h-10 w-10 grid place-items-center rounded-full border border-white/10 text-paper">
 <ChevronLeft size={16} />
 </button>
 <button onClick={next} className="h-10 w-10 grid place-items-center rounded-full bg-violet text-white">
 <ChevronRight size={16} />
 </button>
 </div>

 {/* CTA after social proof and converts trust */}
 <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
 <p className="font-body text-sm text-paper/60">Ready for results like this?</p>
 <a href="#claim-plan" className="inline-flex items-center gap-1.5 rounded-full bg-white px-6 py-3 font-body text-sm font-semibold text-ink hover:bg-white/90 transition-colors">
 Start a project <ArrowUpRight size={14} strokeWidth={2} />
 </a>
 </div>
 </div>
 </section>
 )
}
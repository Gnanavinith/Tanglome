import { MessageCircle, Hammer, Rocket, Lightbulb, ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"

const STEPS = [
 {
 n: "01",
 icon: MessageCircle,
 title: "We listen first",
 desc: "You talk, we map. In one call we turn your tangled idea into a clear 21-day plan and no jargon, just what gets shipped.",
 },
 {
 n: "02",
 icon: Hammer,
 title: "We build with you",
 desc: "Daily updates, live link in 48 hours. You see it take shape and steer it and no surprises at the end.",
 },
 {
 n: "03",
 icon: Rocket,
 title: "We launch & stay",
 desc: "We don't vanish after launch. We tune ads, fix bugs, and help you get seen and till it's growing without you worrying.",
 },
]

export default function ProcessSteps() {
 return (
 <section className="bg-paper py-16 md:py-20 overflow-hidden">
 <div className="mx-auto max-w-[1280px] px-6">
 <p className="font-body font-medium text-sm tracking-wide text-violet">How we work</p>
 <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight leading-[0.95] mt-2 text-ink">
 No suits. Just shipped.
 </h2>
 <p className="font-body text-base text-black/60 mt-3 max-w-xl leading-relaxed">
 Three human steps and you’re in the loop the whole way.
 </p>

 {/* Tree */}
 <div className="relative mt-10">
 {/* desktop tree lines */}
 <svg
 className="pointer-events-none absolute inset-0 hidden md:block h-full w-full"
 viewBox="0 0 1000 420"
 preserveAspectRatio="none"
 aria-hidden
 >
 {/* trunk: root → branch */}
 <motion.path
 d="M500 28 L500 90"
 stroke="#6D28D9"
 strokeWidth="2"
 strokeLinecap="round"
 fill="none"
 initial={{ pathLength: 0, opacity: 0 }}
 whileInView={{ pathLength: 1, opacity: 1 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 0.6, ease: "easeOut" }}
 />
 {/* horizontal branch */}
 <motion.path
 d="M170 90 L830 90"
 stroke="#E5E0F5"
 strokeWidth="2"
 strokeLinecap="round"
 fill="none"
 initial={{ pathLength: 0, opacity: 0 }}
 whileInView={{ pathLength: 1, opacity: 1 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
 />
 {/* 3 drops */}
 {[
 "M170 90 L170 145",
 "M500 90 L500 145",
 "M830 90 L830 145",
 ].map((d, i) => (
 <motion.path
 key={d}
 d={d}
 stroke={i === 1 ? "#6D28D9" : "#E5E0F5"}
 strokeWidth="2"
 strokeLinecap="round"
 fill="none"
 initial={{ pathLength: 0, opacity: 0 }}
 whileInView={{ pathLength: 1, opacity: 1 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 0.4, delay: 0.75 + i * 0.12, ease: "easeOut" }}
 />
 ))}
 {/* dots */}
 <motion.circle cx="500" cy="90" r="6" fill="#6D28D9" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.9, type: "spring", stiffness: 300 }} />
 {[
 [170, 145],
 [500, 145],
 [830, 145],
 ].map(([x, y], i) => (
 <motion.circle
 key={`${x}-${y}`}
 cx={x}
 cy={y}
 r="4"
 fill={i === 1 ? "#6D28D9" : "#fff"}
 stroke={i === 1 ? "#6D28D9" : "#6D28D9"}
 strokeWidth="2"
 initial={{ scale: 0 }}
 whileInView={{ scale: 1 }}
 viewport={{ once: true }}
 transition={{ delay: 1.0 + i * 0.08, type: "spring", stiffness: 300 }}
 />
 ))}
 </svg>

 {/* mobile and centered spine, dots on top of cards */}
 <div className="pointer-events-none absolute left-1/2 top-[52px] bottom-8 w-px -translate-x-1/2 md:hidden" aria-hidden>
 <motion.div
 className="h-full w-px bg-[#E5E0F5]"
 initial={{ scaleY: 0 }}
 whileInView={{ scaleY: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.9, ease: "easeOut" }}
 style={{ transformOrigin: "top" }}
 />
 </div>

 {/* root node */}
 <div className="relative flex justify-center">
 <motion.div
 initial={{ opacity: 0, y: 8, scale: 0.96 }}
 whileInView={{ opacity: 1, y: 0, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
 className="relative inline-flex items-center gap-2 rounded-full border border-violet/15 bg-violet px-4 py-2 shadow-[0_8px_20px_rgba(109,40,217,0.25)]"
 >
 <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-violet">
 <Lightbulb size={14} strokeWidth={2} />
 </span>
 <span className="font-body text-xs font-semibold tracking-wide text-white">Your idea</span>
 {/* mobile connector dot below root */}
 <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full bg-violet border-2 border-white shadow md:hidden" aria-hidden />
 </motion.div>
 </div>

 {/* cards and mobile: centered stack with top dots, desktop: 3 across */}
 <ol className="relative mt-8 md:mt-[72px] grid gap-6 md:grid-cols-3 md:gap-6">
 {STEPS.map((s, i) => {
 const Icon = s.icon
 return (
 <motion.li
 key={s.n}
 initial={{ opacity: 0, y: 14 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-40px" }}
 transition={{ duration: 0.45, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
 className="group relative rounded-[20px] border border-black/10 bg-white p-6 pt-7 flex flex-col text-center hover:border-violet/15 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all"
 >
 {/* centered top connector dot and mobile only */}
 <span className="absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-white border-2 border-violet shadow-sm md:hidden" aria-hidden />
 <span className="absolute -top-2 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-violet md:hidden" aria-hidden />
 <div className="flex flex-col items-center gap-2.5">
 <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet text-white group-hover:bg-violet-deep transition-colors">
 <Icon size={19} strokeWidth={1.75} />
 </span>
 <span className="font-display font-bold text-[11px] tracking-[0.18em] text-violet">{s.n}</span>
 </div>
 <h3 className="font-display font-semibold text-[19px] leading-tight mt-3 text-ink">{s.title}</h3>
 <p className="font-body text-[14px] leading-relaxed text-black/60 mt-2">{s.desc}</p>
 </motion.li>
 )
 })}
 </ol>

 {/* CTA after process and captures momentum */}
 <motion.div
 initial={{ opacity: 0, y: 12 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 1.2, duration: 0.5 }}
 className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
 >
 <p className="font-body text-sm text-black/60 text-center">Like how easy that sounds?</p>
 <a href="#claim-plan" className="inline-flex items-center gap-1.5 rounded-full bg-violet px-6 py-3 font-body text-sm font-semibold text-white hover:bg-violet-deep transition-colors shadow-[0_8px_20px_rgba(109,40,217,0.25)]">
 See if we’re a fit <ArrowUpRight size={14} strokeWidth={2} />
 </a>
 </motion.div>
 </div>
 </div>
 </section>
 )
}

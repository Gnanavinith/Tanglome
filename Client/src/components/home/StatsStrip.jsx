import { useEffect, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react"

function AnimatedNumber({ value, suffix = "", decimals = 0 }) {
 const ref = useRef(null)
 const inView = useInView(ref, { once: true, margin: "-40px" })
 const motionValue = useMotionValue(0)
 const spring = useSpring(motionValue, { damping: 30, stiffness: 90 })
 const display = useTransform(spring, (v) => (decimals ? v.toFixed(decimals) : Math.floor(v).toString()))

 useEffect(() => {
 if (inView) motionValue.set(value)
 }, [inView, value, motionValue])

 return (
 <span ref={ref} className="tabular-nums">
 <motion.span>{display}</motion.span>
 {suffix}
 </span>
 )
}

const STATS = [
 { value: 40, suffix: "+", label: "Clients", sub: "founders & teams" },
 { value: 50, suffix: "+", label: "Projects", sub: "shipped live" },
 { value: 4.9, suffix: "★", label: "Rating", sub: "average", decimals: 1 },
]

export default function StatsStrip() {
 return (
 <section className="relative overflow-hidden bg-violet py-10 md:py-12 border-y border-white/10">
 {/* subtle sheen like Hero */}
 <div
 aria-hidden
 className="pointer-events-none absolute inset-0 opacity-[0.08]"
 style={{
 backgroundImage:
 "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
 backgroundSize: "32px 32px",
 }}
 />
 <div className="relative mx-auto max-w-[1280px] px-6 grid grid-cols-3 gap-4 md:gap-8 text-center text-white">
 {STATS.map((s, i) => (
 <motion.div
 key={s.label}
 initial={{ opacity: 0, y: 12 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-40px" }}
 transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
 className="relative"
 >
 <p className="font-display font-bold text-3xl md:text-4xl leading-none tracking-tight">
 <AnimatedNumber value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
 </p>
 <p className="font-body font-medium text-sm mt-1.5 tracking-wide">{s.label}</p>
 <p className="font-body text-xs opacity-60 mt-0.5 hidden sm:block">{s.sub}</p>

 {i < STATS.length - 1 && (
 <span aria-hidden className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block h-10 w-px bg-white/15" />
 )}
 </motion.div>
 ))}
 </div>
 </section>
 )
}

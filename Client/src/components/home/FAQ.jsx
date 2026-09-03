import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Plus, Minus } from "lucide-react"
import faqImg from "../../assets/Faq.png"

const FAQS = [
 {
 q: "How fast can you actually ship?",
 a: "Most sites and CRMs go live in 21 days. You get a live link in 48 hours with weekly demos.",
 },
 {
 q: "Do I need to hire separate teams?",
 a: "No. One Tanglome team does web, app, AI and marketing. Same people build it and grow it. Zero handoffs.",
 },
 {
 q: "What does it cost?",
 a: "Fixed price per sprint, shared on day one. No hourly surprises. You approve the scope and we stick to it.",
 },
 {
 q: "Will you handle the marketing too?",
 a: "Yes. Ads on Meta, Google and LinkedIn, plus social and automation built to drive leads from the product we ship.",
 },
 {
 q: "What if I already have a site/app?",
 a: "We audit and upgrade what you have. CRM, billing, automation, or just the parts leaking revenue.",
 },
 {
 q: "How do we start?",
 a: "Fill the form below or book a 30 minute call. We map your idea to a free 21-day plan. No pitch.",
 },
]

export default function FAQ() {
 const [open, setOpen] = useState(0)

 return (
 <section className="bg-paper py-16 md:py-20 border-t border-black/[0.06]">
 <div className="mx-auto max-w-[1280px] px-6">
 <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-12 items-start">
 <div className="lg:sticky lg:top-24">
 <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight leading-[0.95] text-ink">
 Got questions?
 <br />
 <span className="text-black/30">We’ve got answers.</span>
 </h2>
 <p className="font-body text-base text-black/60 mt-3 max-w-md leading-relaxed">
 Human answers, not docs. If it’s not here, just ask and we reply in ~2 hours.
 </p>
 <div className="mt-6 hidden lg:block rounded-[20px] overflow-hidden border border-black/10 bg-white shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
 <img
 src={faqImg}
 alt="FAQ and Got questions? We've got answers."
 width={480}
 height={360}
 className="w-full h-[280px] object-cover"
 loading="lazy"
 />
 </div>
 {/* mobile image */}
 <div className="mt-6 lg:hidden rounded-[20px] overflow-hidden border border-black/10 bg-white">
 <img
 src={faqImg}
 alt="FAQ and Got questions? We've got answers."
 width={480}
 height={280}
 className="w-full h-[220px] object-cover"
 loading="lazy"
 />
 </div>
 </div>

 <div className="space-y-3">
 {FAQS.map((f, i) => {
 const isOpen = open === i
 return (
 <div
 key={f.q}
 className={`rounded-[16px] border bg-white overflow-hidden transition-colors ${isOpen ? "border-violet/20 shadow-[0_8px_24px_rgba(109,40,217,0.08)]" : "border-black/10 hover:border-black/15"}`}
 >
 <button
 onClick={() => setOpen(isOpen ? -1 : i)}
 className="w-full flex items-start justify-between gap-4 p-5 text-left"
 >
 <span className="font-body font-medium text-[15px] leading-tight text-ink">{f.q}</span>
 <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors ${isOpen ? "bg-violet border-violet text-white" : "bg-white border-black/10 text-black/40"}`}>
 {isOpen ? <Minus size={14} /> : <Plus size={14} />}
 </span>
 </button>
 <AnimatePresence initial={false}>
 {isOpen && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: "auto", opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
 >
 <p className="font-body text-sm leading-relaxed text-black/60 px-5 pb-5 -mt-1">{f.a}</p>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 )
 })}
 {/* exit CTA and catches hesitation */}
 <div className="mt-6 rounded-[16px] border border-violet/15 bg-violet/[0.04] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
 <div>
 <p className="font-body font-medium text-sm text-ink">Still have questions?</p>
 <p className="font-body text-xs text-black/50 mt-1">Book a free 15 minute call. No pitch, just answers.</p>
 </div>
 <a href="#claim-plan" className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-violet px-5 py-2.5 font-body text-sm font-semibold text-white hover:bg-violet-deep transition-colors">
 Start a project <Plus size={14} />
 </a>
 </div>
 </div>
 </div>
 </div>
 </section>
 )
}

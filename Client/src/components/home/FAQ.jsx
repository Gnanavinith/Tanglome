import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Plus } from "lucide-react"

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

const EASE = [0.16, 1, 0.3, 1]

export default function FAQ() {
 const [open, setOpen] = useState(0)

 return (
 <section className="relative overflow-hidden bg-paper py-16 md:py-24 border-y border-black/[0.06]">
  {/* soft violet tint */}
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
  <div
   className="absolute right-[-8%] top-[-12%] h-[42vh] w-[42vh] rounded-full blur-[110px]"
   style={{
   background: "radial-gradient(ellipse, rgba(139,92,246,0.12), transparent 70%)",
   }}
  />
  </div>

  <div className="relative mx-auto max-w-7xl px-6">
  <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
   <div className="lg:sticky lg:top-24">
   <h2 className="font-display font-semibold tracking-tight leading-[0.92] text-4xl sm:text-5xl text-ink">
    Got questions?
    <br />
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-light to-violet">
    We’ve got answers.
    </span>
   </h2>
   <p className="mt-4 max-w-md font-body text-base leading-relaxed text-ink/60">
    Human answers, not docs. If it’s not here, just ask and we’ll get back to you.
   </p>
   <div className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-black/[0.03] px-3.5 py-2">
    <span className="h-1.5 w-1.5 rounded-full bg-violet-light animate-pulse" aria-hidden />
    <span className="font-body text-sm font-medium text-ink/80">Replies in ~2 hours</span>
   </div>
   </div>

   <div className="space-y-3">
   {FAQS.map((f, i) => {
    const isOpen = open === i
    return (
    <div
     key={f.q}
     className={`rounded-2xl border bg-white transition-colors duration-300 ${isOpen ? "border-violet/20 shadow-[0_8px_24px_rgba(109,40,217,0.10)]" : "border-black/10 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:border-black/15"}`}
    >
     <button
     onClick={() => setOpen(isOpen ? -1 : i)}
     aria-expanded={isOpen}
     className="flex w-full items-center justify-between gap-4 p-5 text-left"
     >
     <span className="font-body font-medium text-[15px] leading-snug text-ink">{f.q}</span>
     <span
      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${isOpen ? "bg-violet text-white" : "border border-black/10 text-ink/50"}`}
     >
      <motion.span
      animate={{ rotate: isOpen ? 45 : 0 }}
      transition={{ duration: 0.25, ease: EASE }}
      >
      <Plus size={14} strokeWidth={2} />
      </motion.span>
     </span>
     </button>
     <AnimatePresence initial={false}>
     {isOpen && (
      <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: EASE }}
      >
      <p className="-mt-1 px-5 pb-5 font-body text-sm leading-relaxed text-ink/60">{f.a}</p>
      </motion.div>
     )}
     </AnimatePresence>
    </div>
    )
   })}
   <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-violet/15 bg-violet/[0.05] p-5 sm:flex-row sm:items-center">
    <div>
    <p className="font-body font-medium text-sm text-ink">Still have questions?</p>
    <p className="mt-1 font-body text-xs text-ink/55">Book a free 15 minute call. No pitch, just answers.</p>
    </div>
    <a
    href="#claim-plan"
    className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-violet px-5 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-violet-deep"
    >
    Start a project <Plus size={14} />
    </a>
   </div>
   </div>
  </div>
  </div>
 </section>
 )
}
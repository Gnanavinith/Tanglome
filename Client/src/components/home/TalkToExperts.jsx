import { ArrowUpRight } from "lucide-react"

export default function TalkToExperts() {
 return (
 <section className="relative overflow-hidden bg-violet">
  {/* soft light + dark glow, keeps the band dimensional */}
  <div aria-hidden className="pointer-events-none absolute inset-0">
  <div className="absolute -top-24 right-[4%] h-72 w-72 rounded-full bg-white/10 blur-3xl" />
  <div className="absolute -bottom-32 left-[8%] h-80 w-80 rounded-full bg-ink/20 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
  <div className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr] md:gap-12">
   <div>
   <h2 className="font-display font-semibold tracking-tight leading-[0.92] text-4xl text-white sm:text-5xl">
    Talk to our <span className="text-white/90">expert developers</span>.
   </h2>
   <p className="mt-4 max-w-lg font-body text-base leading-relaxed text-white/90">
    Skip the sales script. Get a straight answer from the people who&apos;ll actually build your
    product and run your campaigns.
   </p>
   </div>

   <div className="md:justify-self-end">
   <a
    href="#claim-plan"
    className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-white px-8 font-body text-base font-semibold text-ink transition-colors hover:bg-white/90 md:w-auto"
   >
    Book a free call <ArrowUpRight size={16} strokeWidth={2} />
   </a>
   <p className="mt-4 flex items-center justify-center gap-2.5 md:justify-end">
    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" aria-hidden />
    <span className="font-body text-sm font-medium text-white/85">A real dev replies in ~2 hours</span>
   </p>
   </div>
  </div>
  </div>
 </section>
 )
}
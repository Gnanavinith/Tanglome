import { Zap, Layers, Sparkles, ArrowUpRight, Check } from "lucide-react"
import Button from "../common/Button.jsx"

const REASONS = [
  {
    icon: Zap,
    title: "Ship in 21 days, not 6 months",
    desc: "Fixed sprints, daily updates, no agency fluff. You see progress every 48 hours.",
    meta: "Avg. launch",
  },
  {
    icon: Layers,
    title: "One team = zero handoffs",
    desc: "Web, app, AI and marketing under one roof - same people who build it, grow it.",
    meta: "6 crafts",
  },
  {
    icon: Sparkles,
    title: "AI where it actually pays",
    desc: "We automate the boring 30% and bots, CRM flows, bulk outreach - so your team sells more.",
    meta: "30k hrs saved",
  },
]

const HIGHLIGHTS = [
  "Live product in 21 days, not a slide deck",
  "One team across web, app, AI & marketing",
  "Fixed price - no surprise invoices",
]

export default function WhyTanglome() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 md:py-24 border-y border-white/[0.06]">
      {/* match Hero and subtle grid + violet glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 60%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full opacity-[0.10] blur-[70px]"
        style={{ background: "radial-gradient(circle at center, #6D28D9 0%, #3B1877 45%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-start">
          {/* left - copy */}
          <div>
            <p className="font-body font-medium text-sm tracking-wide text-violet-light">Why Tanglome</p>
            <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight leading-[0.95] mt-2 text-paper">
              Tangled ideas,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-light to-violet">
                simple products.
              </span>
            </h2>
            <p className="font-body text-base md:text-lg text-paper/60 mt-4 max-w-xl leading-relaxed">
              Most agencies sell you services. We sell you <span className="text-paper font-medium">outcome</span> and a live product that looks premium and grows revenue from week one.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#claim-plan" size="lg" className="gap-2">
                Start a project <ArrowUpRight size={16} strokeWidth={2} />
              </Button>
              <a href="#services" className="font-body text-sm font-medium text-paper/60 hover:text-paper transition-colors px-2">
                See services →
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 space-y-3.5 max-w-md">
              {HIGHLIGHTS.map((h) => (
                <div key={h} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet/20 text-violet-light mt-0.5">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  <p className="font-body text-sm text-paper/70 leading-relaxed">{h}</p>
                </div>
              ))}
            </div>
          </div>

          {/* right - single bento container breaks ServicesGrid card repetition */}
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] overflow-hidden divide-y divide-white/10">
            <div className="p-6 sm:p-7">
              <p className="font-body text-[11px] tracking-[0.16em] font-medium text-paper/40">WHY FOUNDERS SWITCH</p>
              <p className="font-display font-semibold text-2xl leading-tight text-paper mt-2">One roof, fixed sprints, live in 21 days.</p>
            </div>
            {REASONS.map((r) => {
              const Icon = r.icon
              return (
                <div key={r.title} className="flex gap-4 p-6 sm:p-6 group hover:bg-white/[0.03] transition-colors">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet text-white shadow-[0_8px_20px_rgba(109,40,217,0.3)]">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display font-semibold text-[17px] leading-tight text-paper">{r.title}</h3>
                      <span className="hidden sm:inline-flex shrink-0 rounded-full bg-white/10 border border-white/10 px-2.5 py-1 font-body text-[11px] font-medium tracking-wide text-paper/50">
                        {r.meta}
                      </span>
                    </div>
                    <p className="font-body text-sm leading-relaxed text-paper/60 mt-1.5">{r.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
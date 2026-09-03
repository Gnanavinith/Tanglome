import { Mark, Wordmark } from "../common/Logo.jsx"

export default function BrandBoard() {
 return (
 <section className="bg-[#0C0C0E] py-10">
 <div className="mx-auto max-w-[1080px] px-4">
 <div className="flex items-center justify-between mb-3">
 <p className="font-body text-[10px] tracking-[0.2em] text-paper/30">TANGLOME and BRAND KIT / 01</p>
 <p className="font-body text-[10px] tracking-[0.2em] text-paper/20">taste-skill • brandkit • 3× 3</p>
 </div>

 {/* outer canvas and dark charcoal with gutters */}
 <div className="rounded-[18px] bg-[#141418] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
 <div className="grid grid-cols-3 gap-3">
 {/* 1 Logo Cover */}
 <div className="rounded-xl bg-ink border border-white/5 p-6 aspect-square flex flex-col">
 <span className="font-body text-[9px] tracking-[0.2em] text-paper/20">01 and MARK</span>
 <div className="flex-1 grid place-items-center">
 <div className="flex flex-col items-center gap-3">
 <Mark size={56} className="text-paper" />
 <Wordmark light className="text-[18px]" />
 <span className="font-body text-[10px] tracking-[0.16em] text-paper/30">tanglome.in</span>
 </div>
 </div>
 <span className="font-body text-[8px] tracking-[0.18em] text-paper/15 self-end">× × 01</span>
 </div>

 {/* 2 Construction */}
 <div className="rounded-xl bg-paper p-5 aspect-square flex flex-col relative overflow-hidden">
 <span className="font-body text-[9px] tracking-[0.2em] text-black/30">02 and CONSTRUCTION</span>
 <div className="flex-1 grid place-items-center relative">
 <div className="absolute inset-4 rounded-lg border border-black/5" />
 {/* grid */}
 <svg viewBox="0 0 32 32" width="88" height="88" className="text-ink relative">
 <rect x="0.5" y="0.5" width="31" height="31" rx="7" fill="none" stroke="currentColor" strokeOpacity="0.08" />
 <path d="M16 0.5 V31.5 M0.5 16 H31.5" stroke="currentColor" strokeOpacity="0.06" strokeDasharray="2 2" />
 <path d="M9 10.2 H23" stroke="currentColor" strokeWidth="1.9" />
 <path d="M16 10.2 V24.2" stroke="currentColor" strokeWidth="1.9" />
 <circle cx="16" cy="17.1" r="3.4" fill="none" stroke="#6D28D9" strokeWidth="1.4" strokeDasharray="8 2.5" />
 <path d="M8 8 L10.5 10.2" stroke="#6D28D9" strokeWidth="0.8" strokeOpacity="0.5" />
 <text x="16" y="28.5" textAnchor="middle" fontSize="3.2" fontFamily="Satoshi" fill="currentColor" opacity="0.35">32 × 32 • 7r • 45° tension</text>
 </svg>
 </div>
 <span className="font-body text-[8px] leading-tight text-black/40">T-knot: tangle → line. Negative arrow in loop.</span>
 </div>

 {/* 3 Digital */}
 <div className="rounded-xl bg-[#0F0F0F] border border-white/5 p-3 aspect-square flex flex-col overflow-hidden">
 <span className="font-body text-[9px] tracking-[0.2em] text-paper/20 mb-2">03 and DIGITAL</span>
 <div className="flex-1 rounded-lg border border-white/10 bg-ink overflow-hidden flex flex-col">
 <div className="h-7 flex items-center gap-1.5 px-3 border-b border-white/5">
 <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
 <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
 <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
 <span className="ml-2 font-body text-[9px] text-paper/20">tanglome.in and 21-day plan</span>
 </div>
 <div className="flex-1 p-3 flex flex-col gap-2">
 <div className="h-7 rounded-full bg-white flex items-center px-3 gap-2">
 <span className="h-2 w-2 rounded-full bg-violet" />
 <span className="font-body text-[10px] text-black/40">What will you build today?</span>
 <span className="ml-auto font-body text-[9px] bg-ink text-white px-2 py-1 rounded-full">Build →</span>
 </div>
 <div className="flex gap-1.5">
 <span className="h-5 rounded-full bg-violet/15 border border-violet/20 px-2 font-body text-[8px] text-violet flex items-center">CRM</span>
 <span className="h-5 rounded-full bg-white/5 border border-white/10 px-2 font-body text-[8px] text-paper/40 flex items-center">AI</span>
 <span className="h-5 rounded-full bg-white/5 border border-white/10 px-2 font-body text-[8px] text-paper/40 flex items-center">App</span>
 </div>
 </div>
 </div>
 </div>

 {/* 4 Essence */}
 <div className="rounded-xl bg-paper p-6 aspect-square flex flex-col justify-center">
 <span className="font-body text-[9px] tracking-[0.2em] text-black/30">04 and ESSENCE</span>
 <h3 className="font-display font-semibold text-[22px] leading-[0.95] tracking-tight text-ink mt-3">
 Tangled ideas,
 <br />
 <span className="text-violet">simple products.</span>
 </h3>
 <p className="font-body text-[10px] leading-relaxed text-black/40 mt-3">One team. Six crafts. Ship in 21 days.</p>
 <span className="mt-4 h-px w-full bg-black/5" />
 <span className="font-body text-[8px] tracking-[0.18em] text-black/20 mt-2">TAGLINE • OUTCOME OVER SERVICES</span>
 </div>

 {/* 5 Color */}
 <div className="rounded-xl bg-ink border border-white/5 p-4 aspect-square flex flex-col">
 <span className="font-body text-[9px] tracking-[0.2em] text-paper/20">05 and COLOR</span>
 <div className="flex-1 flex flex-col justify-center gap-2 mt-2">
 <div className="flex gap-2">
 <div className="flex-1 h-14 rounded-lg bg-ink border border-white/10 flex flex-col justify-end p-2">
 <span className="font-body text-[8px] text-paper/40">INK</span>
 <span className="font-body text-[10px] font-medium text-paper">#0A0A0A 80%</span>
 </div>
 <div className="flex-1 h-14 rounded-lg bg-paper border border-black/5 flex flex-col justify-end p-2">
 <span className="font-body text-[8px] text-black/30">PAPER</span>
 <span className="font-body text-[10px] font-medium text-ink">#FFFFFF 15%</span>
 </div>
 </div>
 <div className="h-10 rounded-lg flex overflow-hidden border border-white/5">
 <div className="flex-1 bg-violet flex items-center justify-center"><span className="font-body text-[8px] font-medium text-white">#6D28D9 5%</span></div>
 <div className="flex-1 bg-violet-light flex items-center justify-center"><span className="font-body text-[8px] font-medium text-white">light</span></div>
 <div className="flex-1 bg-violet-deep flex items-center justify-center"><span className="font-body text-[8px] font-medium text-white">deep</span></div>
 </div>
 <p className="font-body text-[8px] leading-tight text-paper/30">Single violet accent. Ink 80 / paper 15 / violet 5. No rainbow.</p>
 </div>
 </div>

 {/* 6 Typography */}
 <div className="rounded-xl bg-paper p-5 aspect-square flex flex-col">
 <span className="font-body text-[9px] tracking-[0.2em] text-black/30">06 and TYPE</span>
 <p className="font-display font-semibold text-[22px] leading-none tracking-tight text-ink mt-2">Clash Display</p>
 <p className="font-display text-[11px] tracking-[0.16em] text-black/30">600 Semibold • Display</p>
 <p className="font-body font-medium text-[16px] text-ink mt-3">Satoshi</p>
 <p className="font-body text-[11px] tracking-[0.16em] text-black/30">400 Regular • Body</p>
 <p className="font-body text-[11px] leading-relaxed text-black/40 mt-3">Aa Bb Cc 0123 and build in 21 days</p>
 <div className="mt-auto flex gap-1">
 <span className="h-1.5 flex-1 rounded-full bg-ink" />
 <span className="h-1.5 flex-1 rounded-full bg-violet" />
 <span className="h-1.5 flex-1 rounded-full bg-black/10" />
 </div>
 </div>

 {/* 7 Physical */}
 <div className="rounded-xl bg-[#EDE9E6] p-4 aspect-square flex flex-col relative overflow-hidden">
 <span className="font-body text-[9px] tracking-[0.2em] text-black/30 relative">07 and OBJECT</span>
 <div className="flex-1 grid place-items-center relative">
 <div className="w-[160px] h-[96px] rounded-xl bg-ink border border-white/10 shadow-[0_12px_24px_rgba(0,0,0,0.25)] p-4 flex flex-col justify-between relative">
 <div className="flex items-center gap-2">
 <Mark size={20} className="text-paper" />
 <span className="font-display font-semibold text-xs text-paper">Tanglome</span>
 </div>
 <div>
 <p className="font-body text-[8px] tracking-[0.16em] text-paper/30">FOUNDER and 21-DAY PLAN</p>
 <p className="font-body text-[9px] text-paper/60 mt-1">hello@tanglome.in</p>
 </div>
 <span className="absolute top-3 right-3 h-6 w-6 rounded-full border border-white/10 grid place-items-center"><span className="h-1.5 w-1.5 rounded-full bg-violet" /></span>
 </div>
 <div className="absolute bottom-1 right-4 w-[120px] h-[28px] rounded-full bg-paper border border-black/5 shadow-sm flex items-center justify-center">
 <span className="font-body text-[8px] tracking-[0.16em] text-black/30">SEAL and T KNOT</span>
 </div>
 </div>
 </div>

 {/* 8 Image */}
 <div className="rounded-xl overflow-hidden aspect-square relative bg-[#0A0A0A] border border-white/5">
 <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
 <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
 <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
 <div className="absolute bottom-0 p-4">
 <span className="font-body text-[8px] tracking-[0.18em] text-white/40">08 and IMAGE</span>
 <p className="font-body text-[10px] leading-relaxed text-white/70 mt-1">Halftone dusk, mist ridge, violet haze. Calm operator world.</p>
 </div>
 </div>

 {/* 9 Detail */}
 <div className="rounded-xl bg-ink border border-white/5 p-4 aspect-square flex flex-col gap-3">
 <span className="font-body text-[9px] tracking-[0.2em] text-paper/20">09 and SYSTEM</span>
 <div className="rounded-xl bg-white/5 border border-white/10 p-3 flex flex-col gap-2">
 <div className="h-7 rounded-full bg-white flex items-center px-2 gap-1.5">
 <Mark size={16} className="text-ink" />
 <span className="font-body text-[9px] text-black/40">What will you build today?</span>
 </div>
 <div className="flex gap-1.5">
 <span className="flex-1 h-6 rounded-full bg-violet text-white grid place-items-center font-body text-[8px] font-medium">Build</span>
 <span className="flex-1 h-6 rounded-full bg-white/5 border border-white/10 text-paper/40 grid place-items-center font-body text-[8px]">Ship</span>
 </div>
 </div>
 <div className="flex items-center gap-1.5">
 <span className="h-6 w-6 rounded-lg bg-violet/15 border border-violet/20 grid place-items-center text-violet-light"><span className="h-1.5 w-1.5 rounded-full bg-violet" /></span>
 <span className="h-6 px-2 rounded-full bg-white text-ink font-body text-[8px] font-medium flex items-center">CRM</span>
 <span className="h-6 px-2 rounded-full bg-white/5 border border-white/10 text-paper/40 font-body text-[8px] flex items-center">AI</span>
 <span className="h-6 px-2 rounded-full bg-white/5 border border-white/10 text-paper/40 font-body text-[8px] flex items-center">App</span>
 </div>
 <span className="font-body text-[7px] tracking-[0.16em] text-paper/20 mt-auto">CHIPS • INPUT • BADGE • PATTERN</span>
 </div>
 </div>

 <p className="font-body text-[9px] tracking-[0.16em] text-paper/15 text-center mt-3">TANGLE → LINE • 32× 32 GRID • SINGLE VIOLET • T-KNOT MARK • CLASH + SATOSHI • INK 80 PAPER 15 VIOLET 5</p>
 </div>
 </div>
 </section>
 )
}

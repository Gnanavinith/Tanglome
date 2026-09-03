import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowUpRight } from "lucide-react"

export default function FloatingCTA() {
 const [visible, setVisible] = useState(false)

 useEffect(() => {
 const onScroll = () => {
 const y = window.scrollY
 const atForm = document.getElementById("claim-plan")
 const formTop = atForm ? atForm.getBoundingClientRect().top + window.scrollY : Infinity
 setVisible(y > 500 && y < formTop - 300)
 }
 window.addEventListener("scroll", onScroll, { passive: true })
 onScroll()
 return () => window.removeEventListener("scroll", onScroll)
 }, [])

 return (
 <AnimatePresence>
 {visible && (
 <motion.div
 initial={{ y: 24, opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 exit={{ y: 24, opacity: 0 }}
 transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
 className="fixed inset-x-0 z-40 md:hidden pointer-events-none px-3"
 style={{ bottom: "max(12px, env(safe-area-inset-bottom))" }}
 >
 {/* offset right to avoid WhatsAppFloat (h-14 circles at right-4) */}
 <div className="mx-auto max-w-[420px] mr-[64px] sm:mr-auto sm:max-w-[380px] pointer-events-auto">
 <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-ink/95 backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.45),0_2px_8px_rgba(0,0,0,0.2)] p-1.5 pl-3">
 {/* left status - always visible, compact */}
 <div className="flex items-center gap-2 min-w-0 flex-1">
 <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
 <div className="min-w-0 leading-none">
 <p className="font-body text-xs font-semibold text-paper leading-none truncate">2 slots left</p>
 <p className="font-body text-[11px] text-paper/45 leading-none truncate sm:hidden">Free plan</p>
 <p className="font-body hidden sm:block text-[11px] text-paper/45 leading-none truncate">Free 21-day plan</p>
 </div>
 <span className="hidden sm:inline-flex h-5 items-center rounded-full bg-white/10 border border-white/10 px-2 font-body text-[11px] font-medium text-paper/60 shrink-0">48h link</span>
 </div>

 <a
 href="#claim-plan"
 className="shrink-0 inline-flex items-center justify-center gap-1 rounded-full bg-violet px-4 sm:px-5 py-2.5 font-body text-xs sm:text-sm font-semibold text-white hover:bg-violet-light active:scale-[0.98] transition-all shadow-[0_4px_14px_rgba(109,40,217,0.35)]"
 >
 <span className="hidden min-[360px]:inline">Start a project</span>
 <span className="min-[360px]:hidden">Start</span>
 <ArrowUpRight size={14} strokeWidth={2.5} className="shrink-0" />
 </a>
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 )
}

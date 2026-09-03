import { useState } from "react"
import { Mail, ArrowUpRight } from "lucide-react"
import { api } from "../../lib/api.js"

export default function Subscribe() {
 const [email, setEmail] = useState("")
 const [status, setStatus] = useState({ type: "", msg: "" })

 const onSubmit = async (e) => {
 e.preventDefault()
 if (!/^\S+@\S+\.\S+$/.test(email)) {
 setStatus({ type: "error", msg: "Enter a valid email." })
 return
 }
 try {
 await api.subscribe({ email })
 setStatus({ type: "success", msg: "You’re in and we’ll send only useful stuff." })
 setEmail("")
 } catch (err) {
 setStatus({ type: "error", msg: err.message || "Failed. Try again." })
 }
 setTimeout(() => setStatus({ type: "", msg: "" }), 3000)
 }

 return (
 <section className="bg-paper py-10 border-y border-black/[0.06]">
 <div className="mx-auto max-w-[1280px] px-6">
 <div className="rounded-[20px] bg-ink p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center gap-6 relative overflow-hidden">
 <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-violet opacity-20 blur-3xl" aria-hidden />
 <div className="flex-1 min-w-0 relative">
 <p className="font-body text-xs tracking-[0.18em] font-medium text-violet-light">STAY IN LOOP</p>
 <h3 className="font-display font-semibold text-2xl sm:text-3xl leading-tight text-paper mt-1">
 Get playbooks, not spam.
 </h3>
 <p className="font-body text-sm text-paper/60 mt-2 max-w-md leading-relaxed">
 Monthly teardown: what we shipped, what worked, and templates you can steal.
 </p>
 </div>

 <form onSubmit={onSubmit} className="flex-1 lg:max-w-[420px] w-full relative">
 <div className="flex gap-2">
 <label className="flex-1 relative">
 <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-paper/30" />
 <input
 type="email"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 placeholder="you@company.com"
 className="h-11 w-full rounded-full border border-white/10 bg-white/[0.06] pl-10 pr-4 font-body text-sm text-paper placeholder:text-paper/30 focus:outline-none focus:border-violet-light focus:bg-white/[0.08]"
 />
 </label>
 <button type="submit" className="inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full bg-violet px-6 font-body text-sm font-semibold text-white hover:bg-violet-light transition-colors">
 Subscribe <ArrowUpRight size={14} strokeWidth={2} />
 </button>
 </div>
 {status.msg && (
 <p className={`mt-2 font-body text-xs ${status.type === "error" ? "text-red-400" : "text-emerald-300"}`}>{status.msg}</p>
 )}
 <p className="mt-2 font-body text-[11px] text-paper/30">No spam. Unsubscribe anytime.</p>
 </form>
 </div>
 </div>
 </section>
 )
}

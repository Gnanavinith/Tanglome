// components/common/Navbar.jsx
import { useState, useRef, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown, Menu, X, Mail, Phone } from "lucide-react"
import Logo from "./Logo.jsx"
import Button from "./Button.jsx"
import { services } from "../../data/services.js"
import { BRAND, SOCIALS } from "../../utils/constants.js"

function InstagramIcon(props) {
 return (
 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
 <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
 <line x1={17.5} y1={6.5} x2={17.51} y2={6.5} />
 </svg>
 )
}
function LinkedinIcon(props) {
 return (
 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
 <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
 <rect x={2} y={9} width={4} height={12} />
 <circle cx={4} cy={4} r={2} />
 </svg>
 )
}
function BehanceIcon(props) {
 return (
 <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
 <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.58.13 1.06.33 1.44.61.38.28.63.64.78 1.09.15.45.22.99.22 1.62 0 .66-.08 1.19-.24 1.6-.16.41-.38.73-.66.95-.28.22-.63.38-1.04.48.45.11.81.3 1.08.58.27.28.46.61.58 1 .12.39.18.84.18 1.36 0 .71-.07 1.28-.2 1.7-.13.42-.33.73-.6.93-.27.2-.63.35-1.08.44-.45.09-1 .13-1.64.13H2V4.51h4.938v-.007zM8 8.94H4.5v1.99H7.7c.28 0 .52-.03.71-.09.19-.06.34-.14.44-.25.1-.11.17-.24.2-.39.04-.15.06-.32.06-.52 0-.21-.02-.4-.06-.56-.04-.16-.11-.3-.21-.4-.1-.1-.25-.18-.44-.23-.19-.05-.43-.08-.72-.08H8v.53zm.12 4.62H4.5v2.12h3.82c.29 0 .54-.03.73-.09.19-.06.34-.14.45-.25.11-.11.18-.25.22-.42.04-.17.06-.37.06-.6 0-.23-.02-.43-.06-.6-.04-.17-.11-.31-.22-.42-.11-.11-.26-.19-.45-.24-.19-.05-.44-.08-.73-.08H8.12v.58zM16.6 8.25h4.32v1.15H16.6V8.25zm-1.4 4.06c.06.75.21 1.32.45 1.71.24.39.59.67 1.05.83.46.16 1.06.24 1.79.24.44 0 .85-.03 1.23-.09.38-.06.68-.14.9-.25l.3 1.05c-.24.12-.57.21-1 .28-.43.07-.95.1-1.56.1-.73 0-1.36-.08-1.89-.24-.53-.16-.95-.41-1.27-.75-.32-.34-.55-.79-.69-1.35-.14-.56-.2-1.22-.2-1.98 0-.77.08-1.42.25-1.95.17-.53.42-.95.75-1.27.33-.32.74-.55 1.23-.69.49-.14 1.05-.21 1.68-.21.65 0 1.2.08 1.66.25.46.17.82.42 1.08.75.26.33.45.73.56 1.2.11.47.16 1.01.16 1.62v.65h-6.52v-.85zm4.37-1.35c0-.39-.05-.71-.14-.96-.09-.25-.23-.44-.41-.57-.18-.13-.41-.22-.68-.27-.27-.05-.59-.07-.96-.07-.37 0-.7.03-.98.08-.28.05-.51.14-.69.27-.18.13-.32.31-.41.55-.09.24-.14.55-.15.93h4.42z" />
 </svg>
 )
}
function DribbbleIcon(props) {
 return (
 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
 <circle cx={12} cy={12} r={10} />
 <path d="M19.13 5.09C15.22 9.14 8.5 10.72 2.85 7.88" />
 <path d="M19.05 14.2A23 23 0 0 0 5 14.5" />
 <path d="M6.5 18.5l4.2-11.5" />
 <path d="M8.9 6.2l6.8 12.3" />
 </svg>
 )
}

const LINKS = [
  { label: "Services", href: "#services", mega: true },
  { label: "Work", href: "/work", page: true },
  { label: "Blog", href: "/blog", page: true },
  { label: "About", href: "/about", page: true },
  { label: "Contact", href: "/contact", page: true },
]

export default function Navbar() {
 const [open, setOpen] = useState(false)
 const [megaOpen, setMegaOpen] = useState(false)
 const [scrolled, setScrolled] = useState(false)
 const closeTimer = useRef(null)
 const location = useLocation()
 const navigate = useNavigate()

 const handleHashNav = (e, href) => {
 if (location.pathname !== "/") {
 e.preventDefault()
 navigate(`/${href}`)
 setTimeout(() => {
 document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
 }, 100)
 }
 }

 const openMega = () => {
 clearTimeout(closeTimer.current)
 setMegaOpen(true)
 }
 const scheduleClose = () => {
 closeTimer.current = setTimeout(() => setMegaOpen(false), 150)
 }

 useEffect(() => {
 const onKey = (e) => e.key === "Escape" && setMegaOpen(false)
 window.addEventListener("keydown", onKey)
 return () => window.removeEventListener("keydown", onKey)
 }, [])

 useEffect(() => {
 let ticking = false
 const onScroll = () => {
 if (ticking) return
 ticking = true
 requestAnimationFrame(() => {
 setScrolled(window.scrollY > 12)
 ticking = false
 })
 }
 window.addEventListener("scroll", onScroll, { passive: true })
 onScroll()
 return () => window.removeEventListener("scroll", onScroll)
 }, [])

 return (
 <header
 className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
 scrolled ? "border-white/10 bg-ink/90 shadow-[0_8px_32px_rgba(0,0,0,0.35)]" : "border-white/[0.06] bg-ink/80"
 }`}
 >
 {/* Topbar - contact + socials */}
 <div className="hidden sm:flex h-8 items-center border-b border-white/10 bg-ink">
 <div className="mx-auto max-w-[1280px] w-full px-6 flex items-center justify-between gap-4">
 <div className="flex items-center gap-4 font-body text-xs">
 <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-1.5 text-paper/60 hover:text-paper transition-colors">
 <Mail size={12} strokeWidth={2} /> {BRAND.email}
 </a>
 <span className="h-3 w-px bg-white/10" />
 <a href={`tel:${BRAND.phone.replace(/[^+0-9]/g, "")}`} className="inline-flex items-center gap-1.5 text-paper/60 hover:text-paper transition-colors">
 <Phone size={12} strokeWidth={2} /> {BRAND.phone}
 </a>
 </div>
 <div className="flex items-center gap-1.5">
 <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="h-7 w-7 grid place-items-center rounded-full bg-white/5 border border-white/10 text-paper/60 hover:text-paper hover:bg-white/10 hover:border-white/20 transition-colors">
 <InstagramIcon className="h-3.5 w-3.5" />
 </a>
 <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="h-7 w-7 grid place-items-center rounded-full bg-white/5 border border-white/10 text-paper/60 hover:text-paper hover:bg-white/10 hover:border-white/20 transition-colors">
 <LinkedinIcon className="h-3.5 w-3.5" />
 </a>
 
 </div>
 </div>
 </div>
 <motion.nav
 animate={{ height: scrolled ? 56 : 64 }}
 transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
 className="mx-auto max-w-[1280px] px-6 flex items-center justify-between gap-8"
 >
 <Logo className="text-xl md:text-2xl" />

 <ul className="hidden md:flex items-center gap-6">
 {LINKS.map((l) =>
 l.mega ? (
 <li
 key={l.label}
 className="relative"
 onMouseEnter={openMega}
 onMouseLeave={scheduleClose}
 >
 <button
 onClick={() => setMegaOpen((v) => !v)}
 className={`flex items-center gap-1.5 font-body text-sm font-medium transition-colors ${megaOpen ? "text-paper" : "text-paper/70 hover:text-paper"}`}
 aria-expanded={megaOpen}
 >
 {l.label}
 <motion.span
 animate={{ rotate: megaOpen ? 180 : 0 }}
 transition={{ duration: 0.2, ease: "easeOut" }}
 className={`grid place-items-center ${megaOpen ? "text-violet-light" : "text-paper/40"}`}
 >
 <ChevronDown size={14} strokeWidth={2} />
 </motion.span>
 </button>

 <AnimatePresence>
 {megaOpen && (
 <motion.div
 initial={{ opacity: 0, y: 8 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: 8 }}
 transition={{ duration: 0.18, ease: "easeOut" }}
 onMouseEnter={openMega}
 onMouseLeave={scheduleClose}
 className="absolute left-1/2 top-[calc(100%+16px)] w-[720px] -translate-x-1/2 rounded-2xl border border-white/[0.08] bg-[#0F0F0F] p-6 shadow-2xl shadow-black/50"
 >
 <div className="grid grid-cols-2 gap-2">
 {services.map((s) => (
 <Link
 key={s.slug}
 to={`/services/${s.slug}`}
 onClick={() => setMegaOpen(false)}
 className="group flex items-center gap-3 rounded-xl p-2.5 hover:bg-white/[0.04] transition-colors"
 >
 <img
 src={s.image}
 alt=""
 loading="lazy"
 className="h-[52px] w-[52px] rounded-lg object-cover shrink-0 bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors"
 />
 <div className="min-w-0 text-left">
 <p className="font-body font-medium text-sm leading-tight text-paper group-hover:text-white transition-colors">{s.title}</p>
 <p className="font-body text-xs text-paper/50 mt-1 leading-relaxed line-clamp-2">
 {s.shortDesc}
 </p>
 </div>
 </Link>
 ))}
 </div>

 <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
 <p className="font-body text-xs text-paper/50">Not sure what you need?</p>
 <a
 href="#claim-plan"
 className="font-body text-xs font-medium text-violet-light hover:text-paper transition-colors"
 >
 Start a project →
 </a>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </li>
 ) : l.page ? (
 <li key={l.label}>
 <Link
 to={l.href}
 className="font-body text-sm font-medium text-paper/70 hover:text-paper transition-colors"
 >
 {l.label}
 </Link>
 </li>
 ) : (
 <li key={l.label}>
 <a
 href={l.href}
 onClick={(e) => handleHashNav(e, l.href)}
 className="font-body text-sm font-medium text-paper/70 hover:text-paper transition-colors"
 >
 {l.label}
 </a>
 </li>
 )
 )}
 </ul>

 <div className="hidden md:flex items-center gap-3">
 <Link
 to="/login"
 className="font-body text-sm font-medium text-paper/70 hover:text-paper transition-colors"
 >
 Log in
 </Link>
 <Link to="/start-project" className="inline-flex h-9 px-5 items-center justify-center rounded-full bg-violet text-white font-body text-sm font-medium hover:bg-violet-light transition-colors">
 Start a project
 </Link>
 </div>

 <button
 onClick={() => setOpen((v) => !v)}
 className="md:hidden h-9 w-9 grid place-items-center rounded-full border border-white/10 text-paper hover:bg-white/[0.06] transition-colors"
 aria-label="Toggle menu"
 >
 <AnimatePresence mode="wait" initial={false}>
 {open ? (
 <motion.span
 key="close"
 initial={{ rotate: -90, opacity: 0 }}
 animate={{ rotate: 0, opacity: 1 }}
 exit={{ rotate: 90, opacity: 0 }}
 transition={{ duration: 0.18 }}
 >
 <X size={16} strokeWidth={2} />
 </motion.span>
 ) : (
 <motion.span
 key="menu"
 initial={{ rotate: 90, opacity: 0 }}
 animate={{ rotate: 0, opacity: 1 }}
 exit={{ rotate: -90, opacity: 0 }}
 transition={{ duration: 0.18 }}
 >
 <Menu size={16} strokeWidth={2} />
 </motion.span>
 )}
 </AnimatePresence>
 </button>
 </motion.nav>

 <AnimatePresence>
 {open && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: "auto", opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.25, ease: "easeOut" }}
 className="md:hidden border-t border-white/10 bg-ink overflow-hidden"
 >
 <div className="px-6 py-6 space-y-1">
 <details className="group">
 <summary className="flex items-center justify-between py-2 font-body font-medium text-paper/80 list-none cursor-pointer [&::-webkit-details-marker]:hidden">
 Services
 <span className="grid place-items-center h-6 w-6 rounded-full bg-white/[0.06] text-paper/50 group-open:bg-violet/15 group-open:text-violet-light transition-colors">
 <ChevronDown size={14} strokeWidth={2} className="transition-transform duration-200 group-open:rotate-180" />
 </span>
 </summary>
 <div className="pl-3 pt-1 pb-2 space-y-2">
 {services.map((s) => {
 const Icon = s.icon
 return (
 <Link
 key={s.slug}
 to={`/services/${s.slug}`}
 onClick={() => setOpen(false)}
 className="flex items-center gap-2.5 font-body text-sm text-paper/60 py-1.5"
 >
 <Icon size={16} strokeWidth={1.75} className="text-violet-light shrink-0" />
 {s.title}
 </Link>
 )
 })}
 </div>
 </details>

 {LINKS.filter((l) => !l.mega).map((l) => (
 l.page ? (
 <Link
 key={l.label}
 to={l.href}
 className="block font-body font-medium text-paper/80 py-2"
 onClick={() => setOpen(false)}
 >
 {l.label}
 </Link>
 ) : (
 <a
 key={l.label}
 href={l.href}
 className="block font-body font-medium text-paper/80 py-2"
 onClick={(e) => { setOpen(false); handleHashNav(e, l.href) }}
 >
 {l.label}
 </a>
 )
 ))}

 <div className="flex items-center gap-4 pt-3">
 <Link to="/login" onClick={() => setOpen(false)} className="font-body text-sm font-medium text-paper/70">
 Log in
 </Link>
 </div>
 <div className="flex gap-3 pt-3">
 <Link to="/signup" onClick={() => setOpen(false)} className="flex-1 inline-flex items-center justify-center rounded-full border border-white/15 h-11 px-7 font-body text-sm font-medium text-paper hover:bg-white/5">
 Sign up
 </Link>
 <Link to="/start-project" onClick={() => setOpen(false)} className="flex-1 inline-flex items-center justify-center rounded-full bg-violet h-11 px-7 font-body text-sm font-medium text-white hover:bg-violet-light">
 Start
 </Link>
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </header>
 )
}

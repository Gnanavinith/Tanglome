import { Link } from "react-router-dom"
import Logo from "./Logo.jsx"
import { BRAND, SOCIALS } from "../../utils/constants.js"
import { services } from "../../data/services.js"

export default function Footer() {
 return (
 <footer className="border-t border-white/10 bg-ink">
 <div className="mx-auto max-w-[1280px] px-6 py-12 md:py-16">
 <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
 <div>
 <Logo className="text-2xl" />
 <p className="font-body text-sm leading-relaxed text-paper/60 mt-4 max-w-sm">
 {BRAND.tagline} Design, development & growth and under one roof.
 </p>
 </div>
 <div>
 <p className="font-body font-medium text-sm text-paper mb-4">Services</p>
 <ul className="space-y-2 font-body text-sm text-paper/60">
 {services.slice(0,4).map((s) => (
 <li key={s.slug}><Link to={`/services/${s.slug}`} className="hover:text-paper transition-colors">{s.title}</Link></li>
 ))}
 </ul>
 </div>
 <div>
  <p className="font-body font-medium text-sm text-paper mb-4">Company</p>
  <ul className="space-y-2 font-body text-sm text-paper/60">
  <li><Link to="/about" className="hover:text-paper">About</Link></li>
  <li><Link to="/work" className="hover:text-paper">Work</Link></li>
  <li><Link to="/blog" className="hover:text-paper">Blog</Link></li>
  <li><Link to="/contact" className="hover:text-paper">Contact</Link></li>
  </ul>
 </div>
 <div>
 <p className="font-body font-medium text-sm text-paper mb-4">Contact</p>
 <p className="font-body text-sm text-paper/60">{BRAND.email}<br/>{BRAND.phone}</p>
 </div>
 </div>
 <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between items-center">
 <p className="font-body text-xs text-paper/40">© {new Date().getFullYear()} Tanglome. All rights reserved.</p>
 <div className="flex gap-4 font-body text-xs text-paper/40">
 <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
 <a href={SOCIALS.instagram} target="_blank" rel="noreferrer">Instagram</a>
 </div>
 </div>
 </div>
 </footer>
 )
}

/**
 * Tanglome Mark and T-knot: tangle → straight line
 * Construction: 32/32 grid, 45° tension, loop at center = knot untied.
 * Negative space in loop forms arrow → clarity.
 */
function Mark({ size = 32, className = "", violet = true }) {
 return (
 <svg viewBox="0 0 32 32" width={size} height={size} className={className} aria-hidden fill="none" xmlns="http://www.w3.org/2000/svg">
 {/* outer frame and subtle, for construction panel */}
 <rect x="0.75" y="0.75" width="30.5" height="30.5" rx="7.5" stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />
 {/* T top bar */}
 <path d="M9 10.2 H23" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
 {/* stem */}
 <path d="M16 10.2 V24.2" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
 {/* knot loop and dashed gap = untangled */}
 <circle cx="16" cy="17.1" r="3.4" stroke={violet ? "#6D28D9" : "currentColor"} strokeWidth="1.7" strokeLinecap="round" strokeDasharray="15 3.2" transform="rotate(-28 16 17.1)" />
 {/* invisible construction crosshair */}
 <path d="M16 0.75 V31.25 M0.75 16 H31.25" stroke="currentColor" strokeOpacity="0" strokeWidth="0.5" />
 </svg>
 )
}

export function Wordmark({ light = true, className = "" }) {
 return (
 <span className={`font-display font-bold tracking-[-0.02em] leading-none flex items-baseline ${className}`}>
 <span className={light ? "text-paper" : "text-ink"}>Tang</span>
 <span className="text-violet mx-[0.05em]">l</span>
 <span className={light ? "text-paper" : "text-ink"}>ome</span>
 </span>
 )
}

import { Link } from "react-router-dom"

export default function Logo({ className = "", light = true, withMark = true, size = 32 }) {
 return (
 <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
 {withMark && <Mark size={size} className={light ? "text-paper" : "text-ink"} />}
 <Wordmark light={light} className={withMark ? "text-[22px]" : "text-xl md:text-2xl"} />
 </Link>
 )
}

export { Mark }

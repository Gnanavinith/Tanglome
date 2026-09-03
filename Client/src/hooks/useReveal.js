import { useRef } from "react"

export function revealProps(delay = 0, y = 18) {
 return {
 initial: { opacity: 0, y },
 whileInView: { opacity: 1, y: 0 },
 viewport: { once: true, margin: "-60px" },
 transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
 }
}

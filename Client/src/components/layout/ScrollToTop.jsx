import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"
import { ArrowUp } from "lucide-react"

function scrollToTop() {
  const lenis = window.__lenis
  if (lenis?.scrollTo) {
    lenis.scrollTo(0, { immediate: false, duration: 1.1 })
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}

export default function ScrollToTop() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)

  // auto scroll to top on route change (pathname)
  useEffect(() => {
    const lenis = window.__lenis
    if (lenis?.scrollTo) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo({ top: 0, behavior: "instant" })
    }
    // also ensure native scroll is top for Safari/back-compat
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  // show button after scrolling down
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setVisible(window.scrollY > 400)
        ticking = false
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-4 left-3 sm:bottom-5 sm:left-4 md:bottom-6 md:left-6 z-40 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-ink text-white grid place-items-center shadow-[0_8px_24px_rgba(0,0,0,0.3)] border border-white/10 hover:bg-black hover:scale-105 transition-transform"
          >
            <ArrowUp size={18} strokeWidth={2} className="sm:hidden" />
            <ArrowUp size={20} strokeWidth={2} className="hidden sm:block" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

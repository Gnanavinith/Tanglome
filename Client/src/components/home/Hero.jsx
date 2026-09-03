import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { VolumetricStudio } from "@/components/ui/volumetric-studio"
import Button from "../common/Button.jsx"

const EYEBROW_WORDS = [
  "Web",
  "AI",
  "Mobile",
  "Marketing",
  "Automation",
  "Websites",
  "Design",
  "Branding",
  "E-commerce",
  "SEO",
  "Social Media",
  "Content Creation",
  "Email Marketing",
  "Analytics",
  "Strategy",
  "Consulting",
]
const WORD_INTERVAL = 1600 // ms each word stays before swiping to the next

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((i) => (i + 1) % EYEBROW_WORDS.length)
    }, WORD_INTERVAL)
    return () => clearInterval(timer)
  }, [])

  return (
    <VolumetricStudio className="min-h-[100dvh] rounded-none border-0">
      {/* bottom scrim sits ABOVE volumetric lights (z-16-31) but BELOW text (z-40) so light never overlays copy */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[52%] bg-gradient-to-t from-black via-black/70 to-transparent z-[35]" />

      {/* moved content down to clear spotlight fixtures - fixtures end ~155px from top, so pt-[168px] guarantees 12-16px clearance */}
      <div className="flex flex-col items-center justify-start w-full h-full text-center px-6 relative z-40 pointer-events-none pt-[168px] sm:pt-[188px] md:pt-[205px] lg:pt-[215px] pb-8 sm:pb-10">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur mb-6"
        >
          <span className="h-2 w-2 rounded-full bg-violet animate-pulse" aria-hidden />
          <span className="font-body font-medium text-sm text-paper/80 relative inline-flex items-center h-5 overflow-hidden min-w-[140px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={EYEBROW_WORDS[wordIndex]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
              >
                {EYEBROW_WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        {/* H1 and Clash Display, violet gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-semibold tracking-tight leading-[0.9] text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-paper drop-shadow-2xl"
        >
          Light up
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-light to-violet">
            your business.
          </span>
        </motion.h1>

        {/* Body and Satoshi muted */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-base sm:text-lg leading-relaxed text-paper/60 max-w-[580px] mt-6"
        >
          Tanglome builds the websites, apps, and automation your business needs to stand out and the marketing that gets it seen.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-3 mt-9 pointer-events-auto"
        >
          <Button size="lg" href="#claim-plan" className="w-full sm:w-auto">
            Start a project
          </Button>
          <Button variant="secondary" size="lg" href="#services" className="w-full sm:w-auto">
            See what we do
          </Button>
        </motion.div>
      </div>
    </VolumetricStudio>
  )
}
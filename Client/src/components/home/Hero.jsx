import { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import Button from "../common/Button.jsx"

const EASE = [0.16, 1, 0.3, 1]
const WORD_INTERVAL = 2400 // ms each service stays lit

const GRAIN_NOISE =
  'url("data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22g%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23g)%22/%3E%3C/svg%3E")'

/* ------------------------------------------------------------------ */
/* Tiny per-service visuals. `on` = this service is the lit one.       */
/* Only transform/opacity animate.                                     */
/* ------------------------------------------------------------------ */

function WebViz({ on, t }) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-white/10 bg-ink/70">
      <div className="flex items-center gap-1 border-b border-white/10 px-2 py-1 sm:px-2.5 sm:py-1.5">
        <span className="block h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="block h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="block h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="ml-2 block h-1.5 flex-1 rounded-full bg-white/10" />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-1.5 p-2.5 sm:gap-2 sm:p-3.5">
        <motion.span
          className="block h-2 origin-left rounded-full bg-violet-light sm:h-2.5"
          style={{ width: "62%" }}
          animate={{ scaleX: on ? 1 : 0.5, opacity: on ? 1 : 0.45 }}
          transition={t}
        />
        <motion.span
          className="block h-1.5 origin-left rounded-full bg-white/25 sm:h-2"
          style={{ width: "88%" }}
          animate={{ scaleX: on ? 1 : 0.6 }}
          transition={{ ...t, delay: on ? 0.08 : 0 }}
        />
        <motion.span
          className="block h-1.5 origin-left rounded-full bg-white/15 sm:h-2"
          style={{ width: "48%" }}
          animate={{ scaleX: on ? 1 : 0.6 }}
          transition={{ ...t, delay: on ? 0.16 : 0 }}
        />
        <motion.span
          className="mt-0.5 block h-4 w-14 rounded-md bg-violet sm:mt-1 sm:h-5 sm:w-16"
          animate={{ opacity: on ? 1 : 0.4 }}
          transition={t}
        />
      </div>
    </div>
  )
}

function MobileViz({ on, t }) {
  return (
    <div className="flex h-full w-auto flex-col items-center gap-1.5 rounded-xl border border-white/20 bg-ink/70 p-1.5 aspect-[9/16]">
      <span className="block h-1 w-5 shrink-0 rounded-full bg-white/20" />
      <motion.div
        className="w-full flex-1 rounded-md bg-violet-light/30"
        animate={{ opacity: on ? 1 : 0.4 }}
        transition={t}
      />
      <span className="block h-1 w-3/5 shrink-0 rounded-full bg-white/20" />
    </div>
  )
}

function SocialViz({ on, t }) {
  return (
    <div className="flex w-full items-center gap-2 sm:gap-2.5">
      <span className="block h-6 w-6 shrink-0 rounded-full bg-gradient-to-br from-violet-light to-violet sm:h-7 sm:w-7" />
      <div className="min-w-0 flex-1 space-y-1.5">
        <span className="block h-1.5 w-4/5 rounded-full bg-white/25" />
        <span className="block h-1.5 w-1/2 rounded-full bg-white/15" />
      </div>
      <motion.svg
        viewBox="0 0 24 24"
        className="h-4 w-4 shrink-0 text-violet-light sm:h-5 sm:w-5"
        fill="currentColor"
        aria-hidden
        animate={{ scale: on ? [1, 1.35, 1] : 1, opacity: on ? 1 : 0.4 }}
        transition={{ ...t, duration: on ? 0.7 : 0.4 }}
      >
        <path d="M12 21C7 17 3 13.500 3 9.500 3 7 5 5 7.500 5c1.800 0 3.400 1 4.500 2.700C13.100 6 14.700 5 16.500 5 19 5 21 7 21 9.500c0 4-4 7.500-9 11.500z" />
      </motion.svg>
    </div>
  )
}

function AdsViz({ on, t, reduce }) {
  const heights = [35, 50, 42, 68, 92]
  return (
    <div className="flex h-full w-full items-end gap-1 sm:gap-1.5">
      {heights.map((h, i) => (
        <motion.span
          key={i}
          className="flex-1 origin-bottom rounded-sm bg-violet-light"
          style={{ height: `${h}%` }}
          animate={{ scaleY: on ? 1 : 0.35, opacity: on ? 1 : 0.4 }}
          transition={{ ...t, delay: on && !reduce ? i * 0.06 : 0 }}
        />
      ))}
    </div>
  )
}

function AiViz({ on, reduce }) {
  const pulse = (i) =>
    on && !reduce
      ? {
          animate: { scale: [1, 1.18, 1], opacity: [0.5, 1, 0.5] },
          transition: { duration: 1.5, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" },
        }
      : {
          animate: { scale: 1, opacity: on ? 1 : 0.4 },
          transition: { duration: 0.3 },
        }
  return (
    <div className="flex w-full items-center px-1">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex flex-1 items-center last:flex-none">
          <motion.span
            className="block h-4 w-4 shrink-0 rounded-md border border-violet-light/70 bg-violet/40 sm:h-5 sm:w-5"
            {...pulse(i)}
          />
          {i < 2 && <span className="mx-1 block h-px flex-1 bg-white/20" />}
        </div>
      ))}
    </div>
  )
}

function FilmViz({ on, reduce }) {
  return (
    <div className="w-full space-y-2">
      <div className="flex gap-1">
        <span className="block h-5 flex-[3] rounded-md bg-violet/70 sm:h-6" />
        <span className="block h-5 flex-[2] rounded-md bg-violet-light/60 sm:h-6" />
        <span className="block h-5 flex-[4] rounded-md bg-white/20 sm:h-6" />
        <span className="block h-5 flex-[2] rounded-md bg-violet/50 sm:h-6" />
      </div>
      <div className="h-1 overflow-hidden rounded-full bg-white/10">
        <motion.span
          className="block h-full origin-left rounded-full bg-paper/80"
          animate={on ? (reduce ? { scaleX: 0.4 } : { scaleX: [0, 1] }) : { scaleX: 0 }}
          transition={
            on && !reduce
              ? { duration: 3, ease: "linear", repeat: Infinity }
              : { duration: 0.3 }
          }
        />
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Grid plan                                                          */
/* mobile (2 cols): [ web  web ] [ mobile social ] [ ads ai ] [ film ]*/
/* desktop (4 cols): web spans 2x2, mobile 1x2, then the rest.        */
/* ------------------------------------------------------------------ */

const SERVICES = [
  {
    id: "web",
    label: "Web Development",
    blurb: "Fast, custom sites that turn visitors into enquiries.",
    className: "col-span-2 rounded-2xl sm:rounded-3xl lg:row-span-2",
    Viz: WebViz,
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    blurb: "Android and iOS apps your customers keep installed.",
    className: "col-span-1 rounded-2xl lg:row-span-2",
    Viz: MobileViz,
  },
  {
    id: "social",
    label: "Social Media",
    blurb: "A steady content calendar that builds recognition.",
    className: "col-span-1 rounded-xl",
    Viz: SocialViz,
  },
  {
    id: "ads",
    label: "Ad Campaigns",
    blurb: "Meta and Google ads tuned to your cost per lead.",
    className: "col-span-1 rounded-xl",
    Viz: AdsViz,
  },
  {
    id: "ai",
    label: "AI Automation",
    blurb: "Repetitive work handed to workflows that never clock out.",
    className: "col-span-1 rounded-2xl lg:col-span-2",
    Viz: AiViz,
  },
  {
    id: "film",
    label: "Editing & Film",
    blurb: "Reels, ads and brand films cut to hold attention.",
    className: "col-span-2 rounded-2xl lg:col-span-2",
    Viz: FilmViz,
  },
]

function Tile({ svc, active, onSelect, t, reduce }) {
  const { Viz } = svc
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={`relative flex flex-col overflow-hidden border p-3 text-left transition-[background-color,border-color,opacity] duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-light sm:p-3.5 ${
        active
          ? "border-violet-light/50 bg-white/[0.08] opacity-100"
          : "border-white/10 bg-white/[0.03] opacity-60 hover:opacity-90"
      } ${svc.className}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: active ? 1 : 0,
          background:
            "radial-gradient(ellipse 80% 70% at 50% 0%, rgba(139,92,246,0.22), transparent 70%)",
        }}
      />
      <div className="relative min-h-0 flex-1">
        <div className="absolute inset-0 flex items-center justify-center">
          <Viz on={active} t={t} reduce={reduce} />
        </div>
      </div>
      <span className="relative mt-2 block font-body text-[11px] font-medium leading-tight text-paper/90 sm:mt-3 sm:text-[13px]">
        {svc.label}
      </span>
    </button>
  )
}

export default function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()

  // Auto-advance. Restarts after every change so a click gets a full dwell time.
  useEffect(() => {
    if (reduce || paused) return
    const timer = setTimeout(() => setActive((i) => (i + 1) % SERVICES.length), WORD_INTERVAL)
    return () => clearTimeout(timer)
  }, [active, paused, reduce])

  const enter = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.8, ease: EASE },
  })

  const t = reduce ? { duration: 0 } : { duration: 0.6, ease: EASE }
  const current = SERVICES[active]

  return (
    <section className="relative flex w-full items-center overflow-hidden bg-ink min-h-[100svh]">
      {/* Backdrop - aurora mesh, pure CSS, only transform/opacity animate, no WebGL */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-10%,rgba(109,40,217,0.14),transparent_65%)]" />

        <div
          className="aurora-drift-1 absolute left-[8%] top-[-10%] h-[38vh] w-[38vh] rounded-full blur-[60px] sm:h-[50vh] sm:w-[50vh] sm:blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.45) 0%, rgba(109,40,217,0.2) 50%, transparent 75%)",
            willChange: "transform, opacity",
          }}
        />
        <div
          className="aurora-drift-2 absolute right-[5%] top-[-5%] h-[34vh] w-[34vh] rounded-full blur-[60px] sm:h-[45vh] sm:w-[45vh] sm:blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(109,40,217,0.4) 0%, rgba(59,24,119,0.2) 50%, transparent 75%)",
            willChange: "transform, opacity",
          }}
        />
        <div
          className="aurora-drift-3 absolute left-1/2 top-[15%] h-[30vh] w-[90vw] -translate-x-1/2 rounded-full blur-[70px] sm:h-[40vh] sm:w-[80vw] sm:blur-[120px]"
          style={{
            background: "radial-gradient(ellipse, rgba(139,92,246,0.22) 0%, transparent 70%)",
            willChange: "transform, opacity",
          }}
        />
        <div
          className="absolute left-[12%] top-0 hidden h-full w-[160px] blur-2xl sm:block"
          style={{
            background:
              "linear-gradient(to bottom, rgba(230,240,255,0.08), rgba(230,240,255,0.02) 55%, transparent)",
          }}
        />
        <div
          className="absolute right-[12%] top-0 hidden h-full w-[160px] blur-2xl sm:block"
          style={{
            background:
              "linear-gradient(to bottom, rgba(230,240,255,0.06), rgba(230,240,255,0.015) 55%, transparent)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-screen"
          style={{ backgroundImage: GRAIN_NOISE, backgroundSize: "240px 240px" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink via-ink/70 to-transparent sm:h-44" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-20 sm:gap-12 sm:px-6 sm:py-28 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-10">
        {/* Left: copy */}
        <div className="flex flex-col items-start text-left">
          {/* Eyebrow - synced with the board */}
          <motion.div
            {...enter(0.7)}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur sm:mb-7 sm:px-3.5 sm:py-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet-light animate-pulse" aria-hidden />
            <span className="relative inline-flex h-5 w-[9.5rem] items-center overflow-hidden font-body text-[13px] font-medium text-paper/80 sm:text-sm">
              <AnimatePresence mode="wait">
                <motion.span
                  key={current.id}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="absolute inset-0 flex items-center whitespace-nowrap"
                >
                  {current.label}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.h1
            {...enter(0.85)}
            className="font-display font-semibold tracking-tight leading-[0.95] text-[clamp(2.15rem,10vw,2.9rem)] text-paper [text-shadow:0_2px_24px_rgba(10,10,10,0.55)] sm:text-6xl sm:leading-[0.92] md:text-7xl"
          >
            Light up
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-light to-violet">
              your business.
            </span>
          </motion.h1>

          <motion.p
            {...enter(1.0)}
            className="mt-5 max-w-[520px] font-body text-[15px] leading-relaxed text-paper/60 sm:mt-7 sm:text-lg"
          >
            Tanglome builds the websites, apps and automation you need to stand out, and the
            marketing that gets you seen.
          </motion.p>

          <motion.div
            {...enter(1.15)}
            className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center"
          >
            <Button size="lg" href="#claim-plan" className="w-full sm:w-auto">
              Start a project
            </Button>
            <Button variant="secondary" size="lg" href="#services" className="w-full sm:w-auto">
              See what we do
            </Button>
          </motion.div>
        </div>

        {/* Right: services board - the lit tile follows the eyebrow */}
        <motion.div
          {...enter(1.0)}
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onPointerDown={() => setPaused(true)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="grid auto-rows-[6.75rem] grid-cols-2 gap-2.5 sm:auto-rows-[8.5rem] sm:gap-3 lg:auto-rows-[7.75rem] lg:grid-cols-4">
            {SERVICES.map((svc, i) => (
              <Tile
                key={svc.id}
                svc={svc}
                active={i === active}
                onSelect={() => setActive(i)}
                t={t}
                reduce={reduce}
              />
            ))}
          </div>

          <div className="mt-4 flex min-h-[2.75rem] items-start sm:mt-5 sm:min-h-[1.5rem] sm:items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={current.id}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="font-body text-[13px] leading-snug text-paper/60 sm:text-sm"
              >
                {current.blurb}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes aurora-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(6%, 4%) scale(1.15); opacity: 1; }
        }
        @keyframes aurora-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(-8%, 6%) scale(1.1); opacity: 0.9; }
        }
        @keyframes aurora-drift-3 {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.5; }
          50% { transform: translateX(-48%) scale(1.08); opacity: 0.8; }
        }
        .aurora-drift-1 { animation: aurora-drift-1 11s ease-in-out infinite; }
        .aurora-drift-2 { animation: aurora-drift-2 13s ease-in-out 1.5s infinite; }
        .aurora-drift-3 { animation: aurora-drift-3 16s ease-in-out 3s infinite; }
        @media (prefers-reduced-motion: reduce) {
          .aurora-drift-1,
          .aurora-drift-2,
          .aurora-drift-3 { animation: none; }
        }
      `}</style>
    </section>
  )
}
import { useEffect, useState } from "react"
import { BRAND } from "../../utils/constants.js"
import { Phone, X } from "lucide-react"

const GREETING = "Hi Tanglome team! 👋 I visited your website and would like to discuss a project."

export default function WhatsAppFloat() {
  const telHref = `tel:${BRAND.phone.replace(/[^+0-9]/g, "")}`
  const waHref = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(GREETING)}`
  const [showGreeting, setShowGreeting] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return
    const t = setTimeout(() => setShowGreeting(true), 2500)
    return () => clearTimeout(t)
  }, [dismissed])

  // auto hide after 8s
  useEffect(() => {
    if (!showGreeting) return
    const t = setTimeout(() => setShowGreeting(false), 8000)
    return () => clearTimeout(t)
  }, [showGreeting])

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-5 sm:right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end gap-2.5 sm:gap-3">
      {/* Greeting bubble */}
      {showGreeting && (
        <div className="relative bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.18)] border border-black/5 p-3 pr-8 max-w-[260px] animate-in fade-in slide-in-from-bottom-2">
          <button
            onClick={() => { setShowGreeting(false); setDismissed(true) }}
            className="absolute top-2 right-2 h-5 w-5 inline-flex items-center justify-center rounded-full hover:bg-black/5 text-black/40"
            aria-label="Dismiss"
          >
            <X size={12} />
          </button>
          <p className="font-body text-[13px] leading-snug text-ink font-medium">Hi there! 👋</p>
          <p className="font-body text-xs leading-relaxed text-black/60 mt-0.5">Need help with your project? Chat with us on WhatsApp</p>
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => setShowGreeting(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-body text-xs font-semibold px-3 py-1.5 transition-colors"
          >
            Say hello →
          </a>
          {/* tail */}
          <span className="absolute -bottom-1.5 right-6 h-3 w-3 bg-white border-r border-b border-black/5 rotate-45" aria-hidden />
        </div>
      )}

      <div className="flex flex-col items-center gap-2.5 sm:gap-3">
        {/* Call Button */}
        <a
          href={telHref}
          aria-label="Call us"
          className="group relative h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white grid place-items-center shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform border border-black/5"
        >
          <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-100 animate-ping pointer-events-none" style={{ animationDuration: "1.8s" }} />
          <Phone size={20} strokeWidth={2} className="relative text-ink sm:hidden" aria-hidden />
          <Phone size={22} strokeWidth={2} className="relative text-ink hidden sm:block" aria-hidden />
          <span className="hidden md:grid absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 bg-ink text-paper text-xs font-body font-medium px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 shadow-lg">
            Call us
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#25D366] grid place-items-center shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform hover:bg-[#20BD5A]"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-100 animate-ping pointer-events-none" style={{ animationDuration: "1.8s" }} />
          <svg width="24" height="24" viewBox="0 0 448 512" fill="white" aria-hidden className="relative shrink-0 sm:hidden">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
          <svg width="28" height="28" viewBox="0 0 448 512" fill="white" aria-hidden className="relative shrink-0 hidden sm:block">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
          <span className="hidden md:grid absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 bg-ink text-paper text-xs font-body font-medium px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 shadow-lg">
            WhatsApp us
          </span>
        </a>
      </div>
    </div>
  )
}

// CSS-only animated backdrop (no canvas, no requestAnimationFrame).
// Slow drifting violet blobs over ink - animates only transform/opacity.
export default function HeroWave() {
  return (
    <>
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div
          className="aurora-blob aurora-blob-one absolute left-[18%] top-[10%] h-[440px] w-[440px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(139,92,246,0.30) 0%, rgba(59,24,119,0.14) 55%, transparent 75%)",
            willChange: "transform, opacity",
          }}
        />
        <div
          className="aurora-blob aurora-blob-two absolute right-[10%] top-[30%] h-[360px] w-[360px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle at center, rgba(109,40,217,0.24) 0%, transparent 70%)",
            willChange: "transform, opacity",
          }}
        />
        <div
          className="aurora-blob aurora-blob-three absolute bottom-[-140px] left-[28%] h-[400px] w-[400px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle at center, rgba(139,92,246,0.18) 0%, transparent 70%)",
            willChange: "transform, opacity",
          }}
        />
      </div>
      <style>{`
        @keyframes aurora-drift-one {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          50% { transform: translate(-6%, 4%) scale(1.08); opacity: 1; }
        }
        @keyframes aurora-drift-two {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          50% { transform: translate(5%, -3%) scale(1.06); opacity: 0.95; }
        }
        @keyframes aurora-drift-three {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          50% { transform: translate(-4%, -4%) scale(1.1); opacity: 0.9; }
        }
        .aurora-blob-one { animation: aurora-drift-one 18s ease-in-out infinite; }
        .aurora-blob-two { animation: aurora-drift-two 22s ease-in-out 3s infinite; }
        .aurora-blob-three { animation: aurora-drift-three 26s ease-in-out 6s infinite; }
        @media (prefers-reduced-motion: reduce) {
          .aurora-blob-one,
          .aurora-blob-two,
          .aurora-blob-three { animation: none; }
        }
      `}</style>
    </>
  )
}
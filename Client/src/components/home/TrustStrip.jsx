export default function TrustStrip() {
 const brands = [
 "NEXORA", "CRAFTLY", "CRAFTERA", "DIGILUME", "V AUDITORS",
 "TAMIL HARMONIC", "ZEQUIN", "VIDHYA AARI", "PIONEER EQUIPMENTS",
 "THANGAVELU TRAVELS", "PARKINGPRO", "GENBETA", "AURA JEWELLERY",
 "THUMBPRINT THREADZ", "TANGLOME", "VELVET STUDIO", "LUMEN",
 "ARC LABS", "NOVA", "ORVYN", "ZENITH HEALTH", "VANTRA AI",
 "VELORA JEWELS", "AURELIA ESTATE",
 ]

 // duplicate the list so the loop is seamless
 const loop = [...brands, ...brands]

 return (
 <section className="relative overflow-hidden bg-ink border-y border-white/10 py-5">
 <div
 className="absolute inset-0 opacity-[0.04]"
 style={{
 backgroundImage:
 "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
 backgroundSize: "32px 32px",
 }}
 aria-hidden
 />
 <div
 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-[600px] rounded-full bg-violet opacity-[0.10] blur-2xl"
 aria-hidden
 />

 <div className="relative mx-auto max-w-[1280px] px-6 flex items-center gap-8">
 <span className="font-body text-[11px] tracking-[0.2em] font-medium text-paper/40 shrink-0 hidden sm:block">
 TRUSTED BY
 </span>

 {/* fade masks on the edges */}
 <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
 <div className="flex w-max animate-marquee gap-10 sm:gap-12 hover:[animation-play-state:paused]">
 {loop.map((b, i) => (
 <span
 key={`${b}-${i}`}
 className="font-display font-semibold text-sm sm:text-[15px] tracking-[0.16em] text-paper/70 whitespace-nowrap shrink-0"
 >
 {b}
 </span>
 ))}
 </div>
 </div>
 </div>

 <style>{`
 @keyframes marquee {
 from {
 transform: translateX(0);
 }
 to {
 transform: translateX(-50%);
 }
 }
 .animate-marquee {
 animation: marquee 48s linear infinite;
 }
 @media (prefers-reduced-motion: reduce) {
 .animate-marquee {
 animation-duration: 96s;
 }
 }
 `}</style>
 </section>
 )
}
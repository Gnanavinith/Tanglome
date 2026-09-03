export default function SectionHeading({
 eyebrow,
 title,
 description,
 align = "left",
 light = true,
}) {
 const alignCls = align === "center" ? "text-center mx-auto" : "text-left"
 return (
 <div className={`max-w-3xl ${alignCls}`}>
 {eyebrow && (
 <p className="font-body font-medium text-sm tracking-wide text-violet-light mb-3">
 {eyebrow}
 </p>
 )}
 <h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight leading-[0.95] text-paper">
 {title}
 </h2>
 {description && (
 <p className="font-body text-base md:text-lg text-paper/70 mt-4 leading-relaxed">
 {description}
 </p>
 )}
 </div>
 )
}

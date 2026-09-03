export default function Button({
 children,
 variant = "primary",
 size = "md",
 className = "",
 ...props
}) {
 const base =
 "inline-flex items-center justify-center font-body font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 focus-visible:ring-offset-ink"

 const variants = {
 primary:
 "bg-violet text-white hover:bg-violet-light hover:shadow-[0_8px_24px_rgba(109,40,217,0.35)] active:scale-[0.98]",
 secondary:
 "bg-transparent text-paper border border-white/15 hover:border-white/30 hover:bg-white/5",
 ghost: "bg-white text-ink hover:bg-white/90",
 }

 const sizes = {
 sm: "h-9 px-5 text-sm",
 md: "h-11 px-7 text-[15px]",
 lg: "h-[52px] px-8 text-base",
 }

 const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`
 if (props.href) {
 return (
 <a className={cls} {...props}>
 {children}
 </a>
 )
 }
 return (
 <button className={cls} {...props}>
 {children}
 </button>
 )
}

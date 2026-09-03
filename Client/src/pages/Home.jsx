import { motion } from "motion/react"
import SEO, { orgJsonLd, localBusinessJsonLd } from "../components/common/SEO.jsx"
import { PAGE_SEO } from "../utils/seo.js"
import Hero from "../components/home/Hero.jsx"
import TrustStrip from "../components/home/TrustStrip.jsx"
import ServicesGrid from "../components/home/ServicesGrid.jsx"
import WhyTanglome from "../components/home/WhyTanglome.jsx"
import ProcessSteps from "../components/home/ProcessSteps.jsx"
import Testimonials from "../components/home/Testimonials.jsx"
import FAQ from "../components/home/FAQ.jsx"
import CTASection from "../components/home/CTASection.jsx"
import Subscribe from "../components/home/Subscribe.jsx"
import BrandBoard from "../components/ui/brand-board.jsx"

function Reveal({ children, delay = 0 }) {
 return (
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
 >
 {children}
 </motion.div>
 )
}

export default function Home(){
  return (
  <>
  <SEO {...PAGE_SEO.home} path="/" jsonLd={[orgJsonLd(), localBusinessJsonLd()]} />
  <Hero />
 <Reveal><TrustStrip /></Reveal>
 <Reveal><ServicesGrid /></Reveal>
 <Reveal><WhyTanglome /></Reveal>
 <Reveal><ProcessSteps /></Reveal>
 <Reveal><Testimonials /></Reveal>
 <Reveal><FAQ /></Reveal>
 <CTASection />
 <Subscribe />
 
 </>
 )
}

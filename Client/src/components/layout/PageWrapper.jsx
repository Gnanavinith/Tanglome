import Navbar from "../common/Navbar.jsx"
import Footer from "../common/Footer.jsx"
import WhatsAppFloat from "../common/WhatsAppFloat.jsx"
import FloatingCTA from "../common/FloatingCTA.jsx"

export default function PageWrapper({ children }) {
 return (
 <div className="min-h-dvh bg-ink text-paper antialiased">
 <Navbar />
 <main>{children}</main>
 <Footer />
 <WhatsAppFloat />
 <FloatingCTA />
 </div>
 )
}

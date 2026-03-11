import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import About from './Pages/About';
import Solutions from './Pages/Solutions';
import Portfolio from './Pages/Portfolio';
import Services from './Pages/Services';
import Careers from './Pages/Careers';
import ContactPage from './Pages/Contacts';
import ScheduleMeeting from './Pages/ScheduleMeeting';
import SitemapPage from './Pages/Sitemap';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import WhatsAppButton from './Components/Whatsup';
import Error from "./Components/Error"
import MobileBilling from './Pages/MobileBilling';
import CRMConsulting from './Pages/CRMConsulting';
import FAQPage from './Pages/FAQ';
import OurServices from './Pages/Ourservices';
import Products from './Pages/Products';
import Team from './Pages/Team';

// Import new service pages
import WebDevelopment from './Pages/Services/WebDevelopment';
import AppDevelopment from './Pages/Services/AppDevelopment';
import AISolutions from './Pages/Services/AISolutions';
import CloudServices from './Pages/Services/CloudServices';
import DigitalMarketing from './Pages/Services/DigitalMarketing';
import WhatsappAutomation from './Pages/Services/WhatsappAutomation';
import MVPDevelopment from './Pages/Services/MVPDevelopment';

function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/products/mobile-billing" element={<MobileBilling />} />
        <Route path="/products/crm-consulting" element={<CRMConsulting />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/schedule-meeting" element={<ScheduleMeeting />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/sitemap" element={<SitemapPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/products" element={<Products />} />
        <Route path="/team" element={<Team />} />
        {/* New service routes */}
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/app-development" element={<AppDevelopment />} />
        <Route path="/services/ai-solutions" element={<AISolutions />} />
        <Route path="/services/cloud-services" element={<CloudServices />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/whatsapp-automation" element={<WhatsappAutomation />} />
        <Route path="/services/mvp-development" element={<MVPDevelopment />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </Router>
  );
}

export default App;

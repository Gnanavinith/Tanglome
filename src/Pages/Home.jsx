import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import DataVisualization from "../Components/DataVisualization";
import Mantra from "../Components/Mantra";
import ServicesIntro from "../Components/ServicesIntro";
import Faq from "../Components/Faq";
import Process from "../Components/Process";
import Email from "../Components/Email";
import DedicatedDevelopers from "../Components/DedicatedDevelopers";
import HeroHeader from "../Components/HeroHeader";
import AdShoot from "../Components/AdShoot";
import AdCampaigns from "../Components/AdCampaign";
import Testimonial from "../Components/Testimonial";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Tanglome | No 1 IT Company in India & Tamil Nadu | Web Development, App Development, AI Solutions, Digital Marketing Services</title>
        <meta
          name="description"
          content="Tanglome - No 1 IT Company in India & Tamil Nadu. Professional web development, app development, AI solutions, cloud services, digital marketing, WhatsApp automation, and MVP development. Best IT services company in India with affordable solutions."
        />
        <meta name="keywords" content="Tanglome IT Solutions, Tanglome India, Tanglome Tamil Nadu, Tanglome Web Development Company, Tanglome Digital Agency India, No 1 IT Company in India, No 1 Web Development Company in India, No 1 IT Company in Tamil Nadu, Best Web Development Company in India, Web Development Company in Tamil Nadu, Mobile App Development Company India, Android App Development India, iOS App Development India, Hybrid App Development India, App Development Company Tamil Nadu, Custom Mobile App Development India, AI Development Company India, Artificial Intelligence Solutions India, AI Chatbot Development India, Business Automation AI India, Machine Learning Development India, AI Software Company Tamil Nadu, Cloud Services Company India, AWS Deployment Services India, Cloud Hosting Services India, DevOps Services India, Digital Marketing Company India, Digital Marketing Agency Tamil Nadu, SEO Company India, SEO Services Tamil Nadu, Google Ads Agency India, Facebook Ads Agency India, WhatsApp Automation Services India, WhatsApp Marketing Company India, Bulk WhatsApp Messaging India, MVP Development Company India, Startup MVP Development India, IT Company in Tamil Nadu, Software Company in Tamil Nadu, IT Services Company India, Best IT Company in India, Website Development Services India, Ecommerce Website Development India, Custom Website Development India, Professional Website Designers India, SEO Friendly Website Development, Corporate Website Development India, IT Company Coimbatore, Web Development Company Chennai, Software Solutions India, Technology Company Tamil Nadu" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600;700&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        * {
          font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Crimson Pro', Georgia, serif;
        }
        
        .font-mono {
          font-family: 'JetBrains Mono', 'Courier New', monospace;
        }
      `}</style>

      {/* Hero Header Section */}
      <HeroHeader />

      {/* Dedicated Developers Section - No gap */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="-mt-20"
      >
        <DedicatedDevelopers />
      </motion.div>

      {/* Main Sections - Optimized for smooth scrolling */}
      <main>
        {/* Smooth section container */}
        <div className="transition-all duration-700 ease-in-out">
          <motion.section
            id="data-visualization"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="py-2"
          >
            <DataVisualization />
          </motion.section>

          <motion.section
            id="ad-shoot"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="py-2"
          >
            <AdShoot />
          </motion.section>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="py-2"
          >
            <AdCampaigns />
          </motion.div>

          <motion.section
            id="mantra"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="py-2"
          >
            <Mantra />
          </motion.section>

          <motion.section
            id="services-intro"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="py-2"
          >
            <ServicesIntro />
          </motion.section>

          <motion.section
            id="testimonials"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="py-2"
          >
            <Testimonial />
          </motion.section>

          <motion.section
            id="process"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="py-2"
          >
            <Process />
          </motion.section>

          <motion.section
            id="faq"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="py-2"
          >
            <Faq />
          </motion.section>

          <motion.section
            id="email"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="py-2"
          >
            <Email />
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default Home;
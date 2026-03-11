import React from "react";
import { motion } from "framer-motion";

const HeroHeader = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="h-screen bg-white text-[#020202] flex items-center px-6 lg:px-10 xl:px-16 relative overflow-hidden">
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>

      <motion.div 
        className="grid lg:grid-cols-2 gap-8 sm:gap-12 w-full max-w-7xl mx-auto py-12 sm:py-16 md:py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* LEFT CONTENT */}
        <motion.div className="space-y-8" variants={itemVariants}>

          <motion.span 
            className="text-[#4922E5] tracking-widest uppercase text-sm font-semibold font-['Clash Display']"
            variants={itemVariants}
          >
            Tanglome IT Consulting
          </motion.span>

          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight font-['Clash Display']"
            variants={itemVariants}
          >
            Custom Digital <br />
            <span className="bg-gradient-to-r from-[#A556F8] to-[#4922E5] bg-clip-text text-transparent">
              Software Solutions
            </span>
          </motion.h1>

          <motion.p 
            className="text-[#4922E5]/80 max-w-md font-['Space Grotesk']"
            variants={itemVariants}
          >
            Delivering enterprise-grade software, automation, and AI-powered
            solutions to help businesses scale faster and smarter.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://wa.me/919585458794" target="_blank" rel="noopener noreferrer" className="block">
              <motion.button 
                className="w-full bg-white text-[#4922E5] px-6 py-4 rounded-xl font-semibold border-2 border-[#4922E5] hover:bg-[#4922E5] hover:text-white transition-colors shadow-lg font-['Space Grotesk']"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp Us
              </motion.button>
            </a>
            <a href="/schedule-meeting" className="block">
              <motion.button 
                className="w-full bg-gradient-to-r from-[#A556F8] to-[#4922E5] text-white px-6 py-4 rounded-xl font-semibold hover:opacity-90 transition shadow-lg font-['Space Grotesk']"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk →
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div className="relative" variants={itemVariants}>
          
          {/* Soft Glow - constrained to prevent horizontal overflow */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-[#A556F8]/30 to-[#4922E5]/30 blur-3xl rounded-3xl max-w-[100vw] max-h-[100vh]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.div 
            className="relative bg-white border border-[#4922E5]/30 rounded-3xl p-12 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            
            <motion.h2 
              className="text-2xl font-bold mb-4 text-[#020202] font-['Clash Display']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Empowering Businesses Through Technology
            </motion.h2>

            <motion.p 
              className="text-[#4922E5]/80 mb-8 font-['Space Grotesk']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              We design scalable platforms, SaaS products, and automation
              systems that drive measurable business outcomes.
            </motion.p>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                "Low-Code & Custom Development",
                "AI & Process Automation",
                "Cloud, DevOps & Security"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-[#020202] font-['Space Grotesk']"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                >
                  <span className="text-[#A556F8]">✔</span>
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default HeroHeader;
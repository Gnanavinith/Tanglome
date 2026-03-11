import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { 
  FaRocket, 
  FaLightbulb, 
  FaCode, 
  FaShieldAlt, 
  FaComments,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaUsers,
  FaClock,
  FaAward,
  FaHeart
} from "react-icons/fa";

const faqData = [
  {
    question: "Why should I choose Tanglome for my digital transformation?",
    answer: "At Tanglome, we don't just build software—we craft digital experiences that accelerate growth, optimize efficiency, and keep you ahead of the competition.",
    icon: <FaRocket className="text-purple-400" />
  },
  {
    question: "How can Tanglome turn my idea into reality?",
    answer: "From brainstorming to deployment, we guide you through every step—offering strategic insights, expert development, and scalable solutions tailored to your vision.",
    icon: <FaLightbulb className="text-yellow-400" />
  },
  {
    question: "What industries does Tanglome specialize in?",
    answer: "We cater to a wide range of industries, including e-commerce, healthcare, fintech, SaaS, and startups, delivering cutting-edge tech solutions that drive impact.",
    icon: <FaCode className="text-blue-400" />
  },
  {
    question: "How does Tanglome ensure project success?",
    answer: "We follow an agile methodology, providing transparent communication, iterative development, and data-driven decisions to deliver outstanding results.",
    icon: <FaShieldAlt className="text-green-400" />
  },
  {
    question: "What's the first step to working with Tanglome?",
    answer: "Let's talk! Schedule a free consultation, and we'll analyze your needs, propose a strategy, and help you take the next step toward digital excellence.",
    icon: <FaComments className="text-pink-400" />
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
    

      {/* White Background with Subtle Elements */}
      <div className="relative bg-white">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-bl from-[#A556F8]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-[#4922E5]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>

        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            {/* Header Section */}
            <motion.div
              variants={itemVariants}
              className="text-center mb-16"
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#A556F8]/10 to-[#4922E5]/10 px-4 py-2 rounded-full border-2 border-[#A556F8]/20 shadow-sm mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-[#4922E5] font-semibold font-['Space Grotesk'] text-sm sm:text-base">
                  Your Questions Answered
                </span>
              </div>

              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#020202] leading-[1.1] mb-3 sm:mb-4"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="block sm:inline">Frequently Asked</span>
                <span className="block sm:inline">
                  <span className="text-[#A556F8]"> Questions</span>
                  <svg className="hidden sm:block absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                    <path d="M0,4 Q25,0 50,4 T100,4" stroke="#A556F8" strokeWidth="3" fill="none" opacity="0.3"/>
                  </svg>
                </span>
              </motion.h1>
              
              <motion.p
                className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-md sm:max-w-2xl mx-auto px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Everything you need to know about working with Tanglome
              </motion.p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* FAQ Content */}
              <motion.div
                variants={itemVariants}
                className="w-full lg:w-1/2"
              >
                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <motion.div
                      key={index}
                      className="rounded-2xl overflow-hidden bg-white border-2 border-gray-100 hover:border-[#A556F8]/30 shadow-lg hover:shadow-2xl transition-all duration-500"
                      whileHover={{ scale: 1.02 }}
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center p-6 text-left font-semibold text-[#020202] hover:bg-[#A556F8]/5 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#A556F8] to-[#4922E5] rounded-full flex items-center justify-center mr-4"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          {faq.icon}
                        </motion.div>
                        <span className="text-base sm:text-lg pr-4 flex-1">{faq.question}</span>
                        <motion.span
                          animate={{ rotate: openIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-[#A556F8] to-[#4922E5] rounded-full flex items-center justify-center text-white text-sm"
                        >
                          ▼
                        </motion.span>
                      </motion.button>

                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                              className="p-6 bg-gradient-to-r from-[#A556F8]/5 to-[#4922E5]/5 border-t border-[#A556F8]/20"
                            >
                              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                {faq.answer}
                              </p>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Side - Benefits & Stats */}
              <motion.div
                variants={itemVariants}
                className="w-full lg:w-1/2"
              >
                <div className="space-y-8">
                  {/* Key Benefits */}
                  <motion.div
                    className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-[#A556F8]/30 shadow-lg hover:shadow-2xl transition-all duration-500"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold text-[#020202] mb-4 sm:mb-6 flex items-center">
                      <FaAward className="mr-3 text-[#A556F8]" />
                      Why Choose Us?
                    </h3>
                    <div className="space-y-4">
                      {[
                        { 
                          icon: <FaRocket className="text-[#A556F8]" />, 
                          title: "Fast Delivery", 
                          desc: "Quick turnaround without compromising quality" 
                        },
                        { 
                          icon: <FaUsers className="text-[#4922E5]" />, 
                          title: "Expert Team", 
                          desc: "Seasoned professionals with diverse expertise" 
                        },
                        { 
                          icon: <FaHeart className="text-pink-500" />, 
                          title: "Client-Focused", 
                          desc: "Your success is our top priority" 
                        },
                        { 
                          icon: <FaShieldAlt className="text-green-500" />, 
                          title: "Quality Assurance", 
                          desc: "Rigorous testing and quality checks" 
                        },
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-4 p-3 rounded-lg bg-[#A556F8]/5 hover:bg-[#A556F8]/10 transition-all duration-300"
                          whileHover={{ scale: 1.03, x: 5 }}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#A556F8] to-[#4922E5] rounded-full flex items-center justify-center">
                            {benefit.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-[#020202] font-semibold text-sm sm:text-base">{benefit.title}</h4>
                            <p className="text-gray-600 text-xs sm:text-sm">{benefit.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  

                  {/* Process Steps */}
                 
                </div>
              </motion.div>
            </div>

            {/* CTA Section */}
            <motion.div
              variants={itemVariants}
              className="text-center mt-16"
            >
              <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-100 hover:border-[#A556F8]/30 shadow-lg hover:shadow-2xl transition-all duration-500">
                <h3 className="text-xl sm:text-2xl font-bold text-[#020202] mb-3 sm:mb-4">
                  Ready to start your project?
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 px-2">
                  Let's discuss how Tanglome can bring your ideas to life.
                </p>
                <motion.button
                  className="group relative overflow-hidden px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-[#A556F8] to-[#4922E5] text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center space-x-2 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="relative">Get Started</span>
                  <FaArrowRight className="relative group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </>
  );
};

export default Faq;
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
    

      {/* Animated Background */}
      <div className="min-h-screen relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700  overflow-hidden">
        {/* Floating Background Elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />

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
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Frequently Asked
                </span>
                <br />
                <span className="text-white">Questions</span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-gray-300 max-w-2xl mx-auto"
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
                      className="rounded-2xl overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10"
                      whileHover={{ scale: 1.02 }}
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center p-6 text-left font-semibold text-white hover:bg-white/5 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          {faq.icon}
                        </motion.div>
                        <span className="text-lg pr-4 flex-1">{faq.question}</span>
                        <motion.span
                          animate={{ rotate: openIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm"
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
                              className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-t border-white/10"
                            >
                              <p className="text-gray-200 text-lg leading-relaxed">
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
                    className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <FaAward className="mr-3 text-yellow-400" />
                      Why Choose Us?
                    </h3>
                    <div className="space-y-4">
                      {[
                        { 
                          icon: <FaRocket className="text-purple-400" />, 
                          title: "Fast Delivery", 
                          desc: "Quick turnaround without compromising quality" 
                        },
                        { 
                          icon: <FaUsers className="text-blue-400" />, 
                          title: "Expert Team", 
                          desc: "Seasoned professionals with diverse expertise" 
                        },
                        { 
                          icon: <FaHeart className="text-pink-400" />, 
                          title: "Client-Focused", 
                          desc: "Your success is our top priority" 
                        },
                        { 
                          icon: <FaShieldAlt className="text-green-400" />, 
                          title: "Quality Assurance", 
                          desc: "Rigorous testing and quality checks" 
                        },
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                          whileHover={{ scale: 1.03, x: 5 }}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                            {benefit.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-semibold">{benefit.title}</h4>
                            <p className="text-gray-400 text-sm">{benefit.desc}</p>
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
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to start your project?
                </h3>
                <p className="text-gray-300 mb-6">
                  Let's discuss how Tanglome can bring your ideas to life.
                </p>
                <motion.button
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg flex items-center space-x-2 mx-auto"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 30px rgba(192, 132, 252, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get Started</span>
                  <FaArrowRight />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Faq;
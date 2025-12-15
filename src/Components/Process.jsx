import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaPencilRuler, FaRocket, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: <FaSearch className="text-white text-base sm:text-lg" />,
    time: "(0 TO 1 WEEK)",
    title: "User Research & Problem Definition",
    description:
      "Our product and design team collaborates with founders to refine the problem statement and understand user needs. We assist with interviews, journey mapping, and surveys to identify key pain points and opportunities.",
  },
  {
    icon: <FaPencilRuler className="text-white text-base sm:text-lg" />,
    time: "(1 TO 2 WEEKS)",
    title: "Rapid Prototyping & Testing",
    description:
      "This phase focuses on idea generation, wireframing, testing, and rapid iteration to validate user-centered solutions before development.",
  },
  {
    icon: <FaRocket className="text-white text-base sm:text-lg" />,
    time: "(2 TO 4 WEEKS)",
    title: "Building the MVP",
    description:
      "We define the MVP scope, prioritize features, and build a functional version using best practices, No-Code tools, and modern APIs.",
  },
  {
    icon: <FaCogs className="text-white text-base sm:text-lg" />,
    time: "(6 TO 18 MONTHS)",
    title: "Scaling & Optimization",
    description:
      "With product-market fit achieved, we optimize for scalability, performance, and future features, ensuring a reliable and cost-effective product.",
  },
];

const Process = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 px-4 sm:px-6 py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header Section */}
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-10 mb-6 drop-shadow-2xl"
        >
          Tanglome's{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
            Proven Process
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text leading-relaxed">
            Tanglome collaborates with founders to take products from idea to launch and scale — fast.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block mt-20 relative">
          {/* Central Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 shadow-2xl"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex items-center mb-20 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className={`w-5/12 ${
                  index % 2 === 0 ? "pr-12" : "pl-12"
                }`}
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
                  <motion.h2
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-3"
                  >
                    {step.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.3 + 0.3 }}
                    className="text-cyan-200 font-semibold text-lg mb-4"
                  >
                    {step.time}
                  </motion.p>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>

              {/* Icon Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                <motion.div
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                  animate={{ 
                    y: [0, -15, 0],
                    boxShadow: [
                      "0 0 0px rgba(59, 130, 246, 0.5)",
                      "0 0 30px rgba(59, 130, 246, 0.8)",
                      "0 0 0px rgba(59, 130, 246, 0.5)"
                    ]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/20"
                >
                  {step.icon}
                </motion.div>
              </div>

              {/* Empty Space for alternating sides */}
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="block lg:hidden mt-12 relative">
          {/* Vertical Timeline */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-400 to-pink-400 shadow-2xl"></div>
          
          <div className="space-y-12 pl-16 sm:pl-20">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                {/* Icon Node */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  animate={{ 
                    y: [0, -8, 0],
                    boxShadow: [
                      "0 0 0px rgba(59, 130, 246, 0.5)",
                      "0 0 20px rgba(59, 130, 246, 0.8)",
                      "0 0 0px rgba(59, 130, 246, 0.5)"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -left-14 sm:-left-16 top-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-xl border-2 border-white/20 z-10"
                >
                  {step.icon}
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-2xl"
                >
                  <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-3">
                    {step.title}
                  </h2>
                  <p className="text-cyan-200 font-semibold text-base mb-4">
                    {step.time}
                  </p>
                  <p className="text-gray-200 text-base leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg border border-cyan-400/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-400 rounded-full blur-3xl opacity-10"></div>
          
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
            >
              Need Something More Specific?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
            >
              Sometimes your project may require a developer with a particular blend of skills.
              Contact us today to learn more about how we can help you succeed.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/schedule-meeting">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-2xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-2xl"
                >
                  Schedule a Call
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Process;
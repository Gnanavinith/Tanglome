import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdCode, MdSmartphone, MdRocketLaunch, MdSecurity, MdTrendingUp, MdGroups } from "react-icons/md";

const DedicatedDevelopers = () => {
  const developers = [
    {
      icon: MdCode,
      title: "Frontend Experts",
      description: "React, Vue, Angular specialists",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MdSmartphone,
      title: "Mobile Developers",
      description: "iOS & Android native experts",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MdRocketLaunch,
      title: "Backend Architects",
      description: "Scalable server solutions",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: MdSecurity,
      title: "DevOps & Security",
      description: "Secure deployment & maintenance",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered", icon: "🚀" },
    { number: "98%", label: "Client Satisfaction", icon: "⭐" },
    { number: "24/7", label: "Dedicated Support", icon: "🛡️" },
    { number: "2x", label: "Faster Delivery", icon: "⚡" }
  ];

  return (
    <section className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-20 px-6 sm:px-10 md:px-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-400/30"
              >
                <MdGroups className="text-blue-300 text-xl" />
                <span className="text-blue-300 font-semibold text-sm"> Tanglome Elite Development Team</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
              >
                Hire{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Dedicated
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Developers
                </span>
              </motion.h2>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Our professional developers create <span className="text-white font-semibold">high-quality applications</span> tailored to your business needs. We empower small, medium, and enterprise-level companies to scale and thrive in the digital age.
              </p>
              <p className="text-lg text-gray-300 font-medium">
                A <span className="text-cyan-300 font-semibold">Trusted Partner</span> to Fuel Your Business Growth.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm">{stat.icon}</span>
                    <span className="text-gray-400 text-sm">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link to="/schedule-meeting">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-2xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative flex items-center gap-2">
                    <MdRocketLaunch className="text-xl" />
                    Book a Free Consultancy
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Developer Cards - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {developers.map((dev, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${dev.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${dev.color} text-white mb-4`}
                  >
                    <dev.icon className="text-2xl" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">{dev.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{dev.description}</p>

                  {/* Hover Indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className="h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mt-4 transition-all duration-300"
                  ></motion.div>
                </div>
              </motion.div>
            ))}

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl rotate-12 opacity-20"
            ></motion.div>

            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -8, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 2
              }}
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl -rotate-12 opacity-20"
            ></motion.div>
          </motion.div>
        </div>

        {/* Mobile Developer Cards - Only show on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12"
        >
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="group relative p-4 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${dev.color}`}>
                  <dev.icon className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">{dev.title}</h3>
                  <p className="text-gray-400 text-xs">{dev.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl border border-cyan-400/30 p-8 text-center relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Let's discuss your project and match you with the perfect development team.
            </p>
            <Link to="/schedule-meeting">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                Start Your Project Today
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DedicatedDevelopers;
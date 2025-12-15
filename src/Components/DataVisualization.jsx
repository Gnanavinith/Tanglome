import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { MdKeyboardArrowRight, MdBarChart, MdTrendingUp, MdInsights } from "react-icons/md";
import { Link } from "react-router-dom";

const DataVisualization = () => {
  return (
    <>
      <Helmet>
        <title>Tanglome – Data Visualization & Business Insights</title>
        <meta
          name="description"
          content="Discover how Tanglome helps businesses make smarter decisions through data visualization and actionable insights. Book your Web & App eCommerce project and get 3 months free access."
        />
      </Helmet>

      <section className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-16 px-4 sm:px-6 md:px-20 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full mb-6 border border-blue-400/30"
                >
                  <MdInsights className="text-blue-300 text-xl" />
                  <span className="text-blue-300 font-semibold"> Tanglome Smart Analytics</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
                >
                  Transform{" "}
                  <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                    Data
                  </span>{" "}
                  Into{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Action
                  </span>
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg text-gray-300 leading-relaxed"
              >
                Every business generates data from what customers are buying to how they interact with your website and campaigns. But just having data isn't enough—you need to see the full picture.
              </motion.p>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {[
                  { icon: MdBarChart, text: "Real-time Revenue Tracking" },
                  { icon: MdTrendingUp, text: "Performance Analytics" },
                  { icon: MdInsights, text: "Customer Journey Mapping" },
                  { icon: "📊", text: "Interactive Dashboards" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <div className="text-2xl text-cyan-400">
                      {feature.icon === "📊" ? "📊" : React.createElement(feature.icon)}
                    </div>
                    <span className="text-white font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Special Offer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-2xl border border-cyan-400/30 relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-yellow-400 rounded-full blur-2xl opacity-30"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="px-3 py-1 bg-yellow-400 text-gray-900 font-bold text-center rounded-full text-sm">
                      SPECIAL OFFER
                    </div>
                    <span className="text-yellow-300 font-semibold">Limited Time</span>
                  </div>
                  <p className="text-white">
                    Get <span className="font-bold text-cyan-300">3 Months Free Access</span> to our premium analytics dashboard when you choose Tanglome for your web or app development.
                  </p>
                </div>
              </motion.div>

              {/* CTA Button */}
              <Link to="/schedule-meeting">
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-2xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <span className="relative flex items-center gap-3">
                    Claim Free Access 
                    <MdKeyboardArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>

            {/* Right Side - Animated Dashboard - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative hidden lg:block"
            >
              {/* Main Dashboard */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gray-800/40 backdrop-blur-lg rounded-3xl border border-white/10 p-6 shadow-2xl"
              >
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-white font-semibold ml-2">Analytics Dashboard</span>
                  </div>
                  <div className="text-gray-400 text-sm">Live Data</div>
                </div>

                {/* Chart Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Chart 1 */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.02, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-cyan-400/20"
                  >
                    <div className="h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-80"></div>
                  </motion.div>

                  {/* Chart 2 */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.02, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1
                    }}
                    className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-400/20"
                  >
                    <div className="h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg opacity-80"></div>
                  </motion.div>

                  {/* Chart 3 */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.02, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 2
                    }}
                    className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-400/20"
                  >
                    <div className="h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg opacity-80"></div>
                  </motion.div>

                  {/* Chart 4 */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.02, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 3
                    }}
                    className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-4 border border-orange-400/20"
                  >
                    <div className="h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg opacity-80"></div>
                  </motion.div>
                </div>

                {/* Metrics Bar */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "+42%", label: "Revenue", color: "text-green-400" },
                    { value: "1.2K", label: "Visits", color: "text-blue-400" },
                    { value: "87%", label: "Engagement", color: "text-purple-400" }
                  ].map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                      className="text-center p-3 bg-white/5 rounded-lg border border-white/5"
                    >
                      <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                      <div className="text-gray-400 text-sm">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

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
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl rotate-12 shadow-2xl"
              ></motion.div>

              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl -rotate-12 shadow-2xl"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataVisualization;
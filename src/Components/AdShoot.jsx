import React from "react";
import { motion } from "framer-motion";
import { MdCamera, MdVideocam, MdPhotoCamera, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const AdShoot = () => {
  const services = [
    {
      icon: MdCamera,
      title: "Professional Photography",
      description: "High-quality product and brand photography for your marketing campaigns",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: MdVideocam,
      title: "Video Production",
      description: "Engaging video content for social media, commercials, and promotional materials",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MdPhotoCamera,
      title: "Brand Shoot",
      description: "Complete brand photography sessions to showcase your products and services",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-16 px-4 sm:px-6 md:px-20 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
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
                className="inline-flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full mb-6 border border-purple-400/30"
              >
                <MdCamera className="text-purple-300 text-xl" />
                <span className="text-purple-300 font-semibold">Tanglome Creative Studio</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              >
                Professional{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Ad Shoots
                </span>{" "}
                &{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Content
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Bring your brand to life with our professional photography and videography services. From product shoots to brand campaigns, we create stunning visual content that captures your audience's attention and drives engagement.
            </motion.p>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="space-y-4"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                >
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg`}>
                    <service.icon className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <Link to="/schedule-meeting">
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px rgba(168, 85, 247, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative flex items-center gap-3">
                  Book Your Shoot 
                  <MdKeyboardArrowRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Side - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            {/* Main Camera/Studio Setup */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gray-800/40 backdrop-blur-lg rounded-3xl border border-white/10 p-8 shadow-2xl"
            >
              {/* Camera Setup Visualization */}
              <div className="space-y-6">
                {/* Studio Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-white font-semibold ml-2">Creative Studio</span>
                  </div>
                  <div className="text-gray-400 text-sm">Live Session</div>
                </div>

                {/* Camera Equipment Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Camera 1 */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.02, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                    className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-400/20 text-center"
                  >
                    <MdCamera className="text-3xl text-purple-400 mx-auto mb-2" />
                    <span className="text-white/80 text-sm">DSLR Setup</span>
                  </motion.div>

                  {/* Video Camera */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.02, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 1
                    }}
                    className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-4 border border-cyan-400/20 text-center"
                  >
                    <MdVideocam className="text-3xl text-cyan-400 mx-auto mb-2" />
                    <span className="text-white/80 text-sm">4K Video</span>
                  </motion.div>

                  {/* Studio Light */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.02, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 2
                    }}
                    className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-4 border border-orange-400/20 text-center"
                  >
                    <div className="text-3xl mx-auto mb-2">💡</div>
                    <span className="text-white/80 text-sm">Studio Lights</span>
                  </motion.div>

                  {/* Editing Suite */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.02, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 3
                    }}
                    className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-400/20 text-center"
                  >
                    <div className="text-3xl mx-auto mb-2">🎬</div>
                    <span className="text-white/80 text-sm">Post Production</span>
                  </motion.div>
                </div>

                {/* Progress Indicators */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Shoot Progress</span>
                    <span className="text-cyan-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 2, delay: 1 }}
                      className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
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
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl rotate-12 shadow-2xl"
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
              className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl -rotate-12 shadow-2xl"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdShoot;

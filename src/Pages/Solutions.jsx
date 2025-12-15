import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Contact from "../Components/Contact";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaShoppingCart,
  FaSearch,
  FaDatabase,
  FaPaintBrush,
  FaBullhorn,
  FaChartLine,
  FaServer,
  FaRocket,
  FaArrowRight,
  FaArrowLeft,
  FaPlay,
  FaPause
} from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

const Solutions = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const solutionCategories = [
    {
      title: "Digital Products",
      color: "from-purple-500 to-pink-500",
      icon: <FaRocket className="text-2xl" />,
      solutions: [
        {
          title: "App Development",
          icon: <FaMobileAlt className="text-2xl" />,
          description: "We build high-performance mobile applications using React Native, Flutter, and native technologies with continuous performance monitoring.",
          stats: "4.8+ star ratings • 40% higher retention",
          features: ["Cross-platform", "Real-time analytics", "App Store optimization"]
        },
        {
          title: "Web Development",
          icon: <FaLaptopCode className="text-2xl" />,
          description: "Blazing-fast, SEO-optimized websites with advanced caching strategies for 80% faster load times than industry standards.",
          stats: "90+ Core Web Vitals • 2x conversion rates",
          features: ["Progressive Web Apps", "SEO-optimized", "Lightning-fast"]
        }
      ]
    },
    {
      title: "Enterprise Solutions",
      color: "from-blue-500 to-cyan-500",
      icon: <RiComputerFill className="text-2xl" />,
      solutions: [
        {
          title: "Windows Applications",
          icon: <RiComputerFill className="text-2xl" />,
          description: "Enterprise-grade desktop solutions with 60% cost reduction in legacy system upgrades and complete data integrity.",
          stats: "60% cost reduction • Seamless integration",
          features: ["Legacy integration", "Enterprise security", "Auto-updates"]
        },
        {
          title: "Software Development",
          icon: <FaDatabase className="text-2xl" />,
          description: "End-to-end development with 40% faster time-to-market using agile methodology and cloud-native architecture.",
          stats: "40% faster delivery • Superior code quality",
          features: ["Microservices", "CI/CD pipelines", "Cloud-native"]
        }
      ]
    },
    {
      title: "E-Commerce & Marketing",
      color: "from-green-500 to-emerald-500",
      icon: <FaShoppingCart className="text-2xl" />,
      solutions: [
        {
          title: "E-Commerce Solutions",
          icon: <FaShoppingCart className="text-2xl" />,
          description: "Complete ecosystems with AI-powered recommendations increasing average order value by 35% through personalized upselling.",
          stats: "35% higher AOV • AI recommendations",
          features: ["AI recommendations", "Multi-currency", "Fraud detection"]
        },
        {
          title: "Paid Advertising",
          icon: <FaBullhorn className="text-2xl" />,
          description: "Machine learning bidding strategies reducing cost-per-acquisition by 50% compared to manual bidding approaches.",
          stats: "50% lower CPA • Advanced targeting",
          features: ["Multi-channel", "AI bidding", "ROI optimization"]
        }
      ]
    },
    {
      title: "Design & Visibility",
      color: "from-orange-500 to-red-500",
      icon: <FaPaintBrush className="text-2xl" />,
      solutions: [
        {
          title: "Graphics Design",
          icon: <FaPaintBrush className="text-2xl" />,
          description: "Data-driven designs increasing user engagement by 45% with beautiful, conversion-focused visual experiences.",
          stats: "45% engagement boost • Data-driven",
          features: ["UI/UX design", "Brand identity", "Interactive prototypes"]
        },
        {
          title: "SEO Services",
          icon: <FaSearch className="text-2xl" />,
          description: "AI-powered optimization increasing organic traffic by 150% within 6 months using machine learning algorithms.",
          stats: "150% traffic growth • AI-powered",
          features: ["Technical SEO", "Content strategy", "Competitor analysis"]
        }
      ]
    },
    {
      title: "Growth & Infrastructure",
      color: "from-yellow-500 to-amber-500",
      icon: <FaChartLine className="text-2xl" />,
      solutions: [
        {
          title: "Product Development",
          icon: <FaChartLine className="text-2xl" />,
          description: "Complete product lifecycle management helping clients avoid 70% of common product failure pitfalls.",
          stats: "70% risk reduction • Market validation",
          features: ["Market research", "MVP development", "Scalability planning"]
        },
        {
          title: "Hosting Services",
          icon: <FaServer className="text-2xl" />,
          description: "Enterprise infrastructure with 99.9% uptime and proprietary monitoring resolving 95% of issues proactively.",
          stats: "99.9% uptime • Proactive monitoring",
          features: ["Auto-scaling", "DDoS protection", "24/7 monitoring"]
        }
      ]
    }
  ];

  const allSolutions = [
    {
      title: "App Development",
      icon: <FaMobileAlt className="text-green-400 text-2xl" />,
      description: "We build high-performance mobile applications using React Native, Flutter, and native technologies with continuous performance monitoring.",
      stats: "4.8+ star ratings • 40% higher retention",
      features: ["Cross-platform", "Real-time analytics", "App Store optimization"]
    },
    {
      title: "Web Development",
      icon: <FaLaptopCode className="text-blue-400 text-2xl" />,
      description: "Blazing-fast, SEO-optimized websites with advanced caching strategies for 80% faster load times than industry standards.",
      stats: "90+ Core Web Vitals • 2x conversion rates",
      features: ["Progressive Web Apps", "SEO-optimized", "Lightning-fast"]
    },
    {
      title: "Windows Applications",
      icon: <RiComputerFill className="text-blue-500 text-2xl" />,
      description: "Enterprise-grade desktop solutions with 60% cost reduction in legacy system upgrades and complete data integrity.",
      stats: "60% cost reduction • Seamless integration",
      features: ["Legacy integration", "Enterprise security", "Auto-updates"]
    },
    {
      title: "Software Development",
      icon: <FaDatabase className="text-orange-400 text-2xl" />,
      description: "End-to-end development with 40% faster time-to-market using agile methodology and cloud-native architecture.",
      stats: "40% faster delivery • Superior code quality",
      features: ["Microservices", "CI/CD pipelines", "Cloud-native"]
    },
    {
      title: "E-Commerce Solutions",
      icon: <FaShoppingCart className="text-emerald-400 text-2xl" />,
      description: "Complete ecosystems with AI-powered recommendations increasing average order value by 35% through personalized upselling.",
      stats: "35% higher AOV • AI recommendations",
      features: ["AI recommendations", "Multi-currency", "Fraud detection"]
    },
    {
      title: "Paid Advertising",
      icon: <FaBullhorn className="text-red-400 text-2xl" />,
      description: "Machine learning bidding strategies reducing cost-per-acquisition by 50% compared to manual bidding approaches.",
      stats: "50% lower CPA • Advanced targeting",
      features: ["Multi-channel", "AI bidding", "ROI optimization"]
    },
    {
      title: "Graphics Design",
      icon: <FaPaintBrush className="text-purple-400 text-2xl" />,
      description: "Data-driven designs increasing user engagement by 45% with beautiful, conversion-focused visual experiences.",
      stats: "45% engagement boost • Data-driven",
      features: ["UI/UX design", "Brand identity", "Interactive prototypes"]
    },
    {
      title: "SEO Services",
      icon: <FaSearch className="text-yellow-400 text-2xl" />,
      description: "AI-powered optimization increasing organic traffic by 150% within 6 months using machine learning algorithms.",
      stats: "150% traffic growth • AI-powered",
      features: ["Technical SEO", "Content strategy", "Competitor analysis"]
    },
    {
      title: "Product Development",
      icon: <FaChartLine className="text-pink-400 text-2xl" />,
      description: "Complete product lifecycle management helping clients avoid 70% of common product failure pitfalls.",
      stats: "70% risk reduction • Market validation",
      features: ["Market research", "MVP development", "Scalability planning"]
    },
    {
      title: "Hosting Services",
      icon: <FaServer className="text-gray-400 text-2xl" />,
      description: "Enterprise infrastructure with 99.9% uptime and proprietary monitoring resolving 95% of issues proactively.",
      stats: "99.9% uptime • Proactive monitoring",
      features: ["Auto-scaling", "DDoS protection", "24/7 monitoring"]
    },
    {
      title: "Responsive Design",
      icon: <TiTick className="text-cyan-400 text-2xl" />,
      description: "Mobile-first responsive development ensuring optimal performance across all devices with superior user experience.",
      stats: "90+ Core Web Vitals • Mobile-first",
      features: ["Mobile-first", "Touch-optimized", "Performance focused"]
    },
    {
      title: "Social Media Marketing",
      icon: <FaBullhorn className="text-teal-400 text-2xl" />,
      description: "Strategic marketing campaigns achieving 3x higher engagement rates than industry benchmarks.",
      stats: "3x engagement • Viral content",
      features: ["Content strategy", "Community management", "Performance analytics"]
    }
  ];

  // Auto-rotate categories for desktop
  React.useEffect(() => {
    if (!autoPlay || window.innerWidth < 1024) return;

    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % solutionCategories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay, solutionCategories.length]);

  const nextCategory = () => {
    setActiveCategory((prev) => (prev + 1) % solutionCategories.length);
  };

  const prevCategory = () => {
    setActiveCategory((prev) => (prev - 1 + solutionCategories.length) % solutionCategories.length);
  };

  return (
    <>
      <Helmet>
        <title>Solutions | IT Consulting & Digital Solutions | Tanglome Coimbatore</title>
        <meta
          name="description"
          content="Comprehensive IT solutions by Tanglome: App Development, Web Development, E-Commerce, Windows Applications, Software Development, Paid Advertising, Graphics Design, SEO Services, Product Development, and Hosting Services in Coimbatore, India."
        />
        <meta
          name="keywords"
          content="IT solutions, app development solutions, web development solutions, e-commerce solutions, Windows applications, software development solutions, paid advertising, graphics design solutions, SEO services, product development, hosting services, IT consulting solutions, digital transformation, business solutions Coimbatore, IT solutions India, AI agent development, AI agent development company, custom AI agent development, AI voice agent development, AI virtual agent development, AI coding agents, AI agent development framework, AI agent development services"
        />
        <meta name="author" content="Tanglome" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore" />
        <meta property="og:title" content="IT Solutions & Services | Tanglome" />
        <meta property="og:description" content="Comprehensive IT solutions: App Development, Web Development, E-Commerce, Software Development, and more in Coimbatore." />
        <meta property="og:url" content="https://tanglome.com/solutions" />
        <meta property="og:type" content="website" />
      </Helmet>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 lg:bg-gradient-to-r lg:from-gray-900 lg:via-gray-800 lg:to-gray-700 relative overflow-hidden">
      {/* Animated Background for Desktop */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl hidden lg:block"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl hidden lg:block"
        />
      </div>

      <div className="relative z-10">
        {/* ===== MOBILE LAYOUT ===== */}
        <div className="lg:hidden">
          {/* Mobile Header */}
          <section className="w-full px-4 py-12">
            <div className="text-center mt-10">
              

              <h1 className="text-3xl font-bold text-white leading-tight mb-4">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                  Business
                </span>
              </h1>

              <p className="text-gray-300 leading-relaxed max-w-md mx-auto">
                Discover our cutting-edge solutions designed to drive growth and deliver measurable results.
              </p>
            </div>
          </section>

          {/* Mobile Cards Grid */}
          <section className="w-full px-4 pb-12">
            <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
              {allSolutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6"
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      {solution.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {solution.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        <span className="text-cyan-300 text-xs">{solution.stats}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-white/10 rounded-lg text-white text-xs border border-white/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mobile CTA */}
          <section className="w-full px-4 pb-16">
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-cyan-400/30 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                Ready to Get Started?
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                Join businesses that have transformed with our solutions.
              </p>
              <Link to="/schedule-meeting">
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-3 px-6 rounded-xl">
                  Start Your Project
                </button>
              </Link>
            </div>
          </section>
        </div>

        {/* ===== DESKTOP LAYOUT ===== */}
        <div className="hidden lg:block">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center pt-20 pb-16 px-6"
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Transform Your{" "}
              <motion.span
                animate={{ 
                  backgroundPosition: ["0%", "100%", "0%"] 
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity 
                }}
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text bg-[length:200%_auto]"
              >
                Business
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Discover our cutting-edge solutions designed to drive growth, 
              enhance efficiency, and deliver measurable results that outperform industry standards.
            </motion.p>
          </motion.section>

          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center mb-12 px-6"
          >
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
              {solutionCategories.map((category, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(index)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-lg border ${
                    activeCategory === index
                      ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-2xl`
                      : "bg-white/10 text-gray-300 border-white/10 hover:bg-white/20"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {category.icon}
                    {category.title}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Solutions Carousel */}
          <div className="relative max-w-6xl mx-auto px-6 mb-20">
            {/* Navigation Arrows */}
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevCategory}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <FaArrowLeft />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextCategory}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              <FaArrowRight />
            </motion.button>

            {/* Auto-play Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setAutoPlay(!autoPlay)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            >
              {autoPlay ? <FaPause /> : <FaPlay />}
            </motion.button>

            {/* Solutions Display */}
            <div className="relative h-96">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                    {solutionCategories[activeCategory].solutions.map((solution, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 overflow-hidden"
                      >
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${solutionCategories[activeCategory].color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                        
                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex items-center gap-4 mb-6">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className={`p-3 rounded-2xl bg-gradient-to-r ${solutionCategories[activeCategory].color}`}
                            >
                              {solution.icon}
                            </motion.div>
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-2">
                                {solution.title}
                              </h3>
                              <div className="flex items-center gap-2 text-sm text-cyan-300">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                                {solution.stats}
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 leading-relaxed mb-6">
                            {solution.description}
                          </p>

                          {/* Features */}
                          <div className="flex flex-wrap gap-2">
                            {solution.features.map((feature, featureIndex) => (
                              <motion.span
                                key={featureIndex}
                                whileHover={{ scale: 1.05 }}
                                className="px-3 py-1 bg-white/10 rounded-full text-white text-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                              >
                                {feature}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {solutionCategories.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setActiveCategory(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeCategory === index
                      ? "bg-cyan-400 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center px-6 pb-20"
          >
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-400/30 rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-400 rounded-2xl rotate-12 opacity-20"
              />
              
              <motion.div
                animate={{
                  y: [10, -10, 10],
                  rotate: [0, -8, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -bottom-8 -left-8 w-20 h-20 bg-purple-400 rounded-2xl -rotate-12 opacity-20"
              />

              <div className="relative z-10">
                <motion.h3
                  whileHover={{ scale: 1.02 }}
                  className="text-4xl font-bold text-white mb-4"
                >
                  Ready to Experience Excellence?
                </motion.h3>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Join 50+ forward-thinking businesses that have transformed their operations with our premium solutions.
                </p>
                <Link to="/schedule-meeting">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl transition-all duration-300 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <span className="relative flex items-center gap-3">
                      <FaRocket className="text-xl" />
                      Start Your Transformation
                    </span>
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      <Contact />
    </div>
    </>
  );
};

export default Solutions;
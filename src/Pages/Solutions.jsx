import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Contact from "../Components/Contact";
import {
  Smartphone,
  Monitor,
  Globe,
  Search,
  Palette,
  Share2,
  TrendingUp,
  Package,
  Server,
  Code,
  ShoppingCart,
  ArrowRight,
  ArrowLeft,
  Play,
  Pause,
  CheckCircle2,
  Zap,
  Star,
  Rocket
} from 'lucide-react';

const Solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [activeCategory, setActiveCategory] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const solutionCategories = [
    {
      title: "Digital Products",
      icon: Rocket,
      solutions: [
        {
          title: "App Development",
          icon: Smartphone,
          description: "High-performance mobile applications using React Native, Flutter, and native technologies with continuous performance monitoring.",
          stats: "4.8+ star ratings • 40% higher retention",
          features: ["Cross-platform", "Real-time analytics", "App Store optimization"]
        },
        {
          title: "Web Development",
          icon: Globe,
          description: "Blazing-fast, SEO-optimized websites with advanced caching strategies for 80% faster load times than industry standards.",
          stats: "90+ Core Web Vitals • 2x conversion rates",
          features: ["Progressive Web Apps", "SEO-optimized", "Lightning-fast"]
        }
      ]
    },
    {
      title: "Enterprise Solutions",
      icon: Monitor,
      solutions: [
        {
          title: "Windows Applications",
          icon: Monitor,
          description: "Enterprise-grade desktop solutions with 60% cost reduction in legacy system upgrades and complete data integrity.",
          stats: "60% cost reduction • Seamless integration",
          features: ["Legacy integration", "Enterprise security", "Auto-updates"]
        },
        {
          title: "Software Development",
          icon: Code,
          description: "End-to-end development with 40% faster time-to-market using agile methodology and cloud-native architecture.",
          stats: "40% faster delivery • Superior code quality",
          features: ["Microservices", "CI/CD pipelines", "Cloud-native"]
        }
      ]
    },
    {
      title: "E-Commerce & Marketing",
      icon: ShoppingCart,
      solutions: [
        {
          title: "E-Commerce Solutions",
          icon: ShoppingCart,
          description: "Complete ecosystems with AI-powered recommendations increasing average order value by 35% through personalized upselling.",
          stats: "35% higher AOV • AI recommendations",
          features: ["AI recommendations", "Multi-currency", "Fraud detection"]
        },
        {
          title: "Paid Advertising",
          icon: TrendingUp,
          description: "Machine learning bidding strategies reducing cost-per-acquisition by 50% compared to manual bidding approaches.",
          stats: "50% lower CPA • Advanced targeting",
          features: ["Multi-channel", "AI bidding", "ROI optimization"]
        }
      ]
    },
    {
      title: "Design & Visibility",
      icon: Palette,
      solutions: [
        {
          title: "Graphics Design",
          icon: Palette,
          description: "Data-driven designs increasing user engagement by 45% with beautiful, conversion-focused visual experiences.",
          stats: "45% engagement boost • Data-driven",
          features: ["UI/UX design", "Brand identity", "Interactive prototypes"]
        },
        {
          title: "SEO Services",
          icon: Search,
          description: "AI-powered optimization increasing organic traffic by 150% within 6 months using machine learning algorithms.",
          stats: "150% traffic growth • AI-powered",
          features: ["Technical SEO", "Content strategy", "Competitor analysis"]
        }
      ]
    },
    {
      title: "Growth & Infrastructure",
      icon: Package,
      solutions: [
        {
          title: "Product Development",
          icon: Package,
          description: "Complete product lifecycle management helping clients avoid 70% of common product failure pitfalls.",
          stats: "70% risk reduction • Market validation",
          features: ["Market research", "MVP development", "Scalability planning"]
        },
        {
          title: "Hosting Services",
          icon: Server,
          description: "Enterprise infrastructure with 99.9% uptime and proprietary monitoring resolving 95% of issues proactively.",
          stats: "99.9% uptime • Proactive monitoring",
          features: ["Auto-scaling", "DDoS protection", "24/7 monitoring"]
        }
      ]
    }
  ];

  const allSolutions = solutionCategories.flatMap(cat => 
    cat.solutions.map(sol => ({ ...sol, category: cat.title }))
  );

  // Auto-rotate categories for desktop
  useEffect(() => {
    if (!autoPlay || typeof window === 'undefined' || window.innerWidth < 1024) return;

    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % solutionCategories.length);
    }, 5000);

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
        <title>Solutions | No 1 IT Company in India & Tamil Nadu | Comprehensive IT Solutions</title>
        <meta
          name="description"
          content="Comprehensive IT solutions by Tanglome - No 1 IT Company in India & Tamil Nadu. App Development, Web Development, AI Solutions, Cloud Services, Digital Marketing, WhatsApp Automation, and MVP Development. Premium IT solutions for businesses in India."
        />
        <meta
          name="keywords"
          content="Tanglome IT Solutions, Tanglome India, Tanglome Tamil Nadu, Tanglome Web Development Company, Tanglome Digital Agency India, No 1 IT Company in India, No 1 Web Development Company in India, No 1 IT Company in Tamil Nadu, Best Web Development Company in India, Web Development Company in Tamil Nadu, Mobile App Development Company India, Android App Development India, iOS App Development India, AI Development Company India, Artificial Intelligence Solutions India, Digital Marketing Company India, Digital Marketing Agency Tamil Nadu, WhatsApp Automation Services India, MVP Development Company India, IT Company in Tamil Nadu, Software Company in Tamil Nadu, IT Services Company India, Best IT Company in India, IT Consulting Company India, IT Services India, Software Development Company India, Technology Company India, IT Solutions Company India, IT Consulting Services India, Comprehensive IT Solutions India, Business Solutions India, Digital Transformation India, E-commerce Solutions India, Software Development Solutions India, AI Solutions India, Cloud Services India, Digital Marketing Solutions India, App Development Solutions India, Web Development Solutions India"
        />
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
        
        .solution-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .solution-card:hover {
          transform: translateY(-4px);
        }
      `}</style>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-slate-900">
              Tanglome
            </div>
            <div className="flex items-center gap-6">
              <a href="/" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                Home
              </a>
              <a href="/services" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                Services
              </a>
              <a href="/portfolio" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                Portfolio
              </a>
              <a 
                href="/contact" 
                className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* ===== MOBILE LAYOUT ===== */}
        <div className="lg:hidden">
          {/* Mobile Header */}
          <section className="pt-32 pb-16 px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4 text-slate-700" />
                <span className="text-sm font-medium text-slate-700">
                  Comprehensive Solutions
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Transform Your Business
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                Discover cutting-edge solutions designed to drive growth and deliver measurable results.
              </p>
            </div>
          </section>

          {/* Mobile Cards Grid */}
          <section className="pb-16 px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
              {allSolutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="solution-card bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-slate-900 hover:shadow-xl"
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-slate-100 p-3 rounded-xl flex-shrink-0">
                        <Icon className="w-6 h-6 text-slate-900" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                          {solution.title}
                        </h3>
                        <div className="inline-flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-lg">
                          <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                          <span className="text-slate-700 text-xs font-medium">{solution.stats}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Mobile CTA */}
          <section className="pb-16 px-4 sm:px-6">
            <div className="bg-slate-900 rounded-2xl p-8 text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-slate-300 text-lg mb-6">
                Join businesses that have transformed with our solutions.
              </p>
              <Link to="/contact">
                <button className="w-full bg-white text-slate-900 font-semibold py-4 px-6 rounded-lg hover:bg-slate-100 transition-all">
                  Start Your Project
                </button>
              </Link>
            </div>
          </section>
        </div>

        {/* ===== DESKTOP LAYOUT ===== */}
        <div className="hidden lg:block">
          {/* Hero Section */}
          <section className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4 text-slate-700" />
                <span className="text-sm font-medium text-slate-700">
                  Enterprise-Grade Solutions
                </span>
              </div>

              <h1 className="text-7xl xl:text-8xl font-bold text-slate-900 mb-6 leading-[0.95]">
                Transform Your
                <br />
                <span className="text-slate-400">Business</span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Discover cutting-edge solutions designed to drive growth, enhance efficiency, 
                and deliver measurable results that outperform industry standards.
              </p>
            </div>
          </section>

          {/* Category Navigation */}
          <div className="flex justify-center mb-16 px-6">
            <div className="flex flex-wrap justify-center gap-3 bg-white rounded-2xl p-4 border-2 border-slate-200">
              {solutionCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      activeCategory === index
                        ? "bg-slate-900 text-white"
                        : "bg-slate-50 text-slate-700 border-2 border-slate-200 hover:border-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{category.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Solutions Carousel */}
          <div className="relative max-w-7xl mx-auto px-6 mb-20">
            {/* Navigation Arrows */}
            <button
              onClick={prevCategory}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-slate-700 hover:border-slate-900 hover:text-slate-900 transition-all shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextCategory}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-slate-700 hover:border-slate-900 hover:text-slate-900 transition-all shadow-lg"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Auto-play Toggle */}
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-slate-700 hover:border-slate-900 hover:text-slate-900 transition-all shadow-lg"
            >
              {autoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* Solutions Display */}
            <div className="relative min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                  {solutionCategories[activeCategory].solutions.map((solution, index) => {
                    const Icon = solution.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        className="solution-card bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-slate-900 hover:shadow-xl"
                      >
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className="bg-slate-900 p-4 rounded-xl">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">
                              {solution.title}
                            </h3>
                            <div className="inline-flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-lg">
                              <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                              <span className="text-slate-700 text-sm font-medium">{solution.stats}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-600 leading-relaxed mb-6">
                          {solution.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2">
                          {solution.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-3 mt-10">
              {solutionCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeCategory === index
                      ? "bg-slate-900 scale-125"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <section className="px-6 pb-20">
            <div className="bg-slate-900 rounded-3xl p-16 max-w-5xl mx-auto relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-5xl font-bold text-white mb-6">
                  Ready to Experience Excellence?
                </h3>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join 50+ forward-thinking businesses that have transformed their operations with our premium solutions.
                </p>
                <Link to="/contact">
                  <button className="inline-flex items-center gap-3 bg-white text-slate-900 font-semibold px-10 py-5 rounded-xl hover:bg-slate-100 transition-all">
                    <span className="text-lg">Start Your Transformation</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>

        <Contact />
      </div>
    </>
  );
};

export default Solutions;
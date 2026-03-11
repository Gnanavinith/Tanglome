import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import Contact from "../Components/Contact";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Lightbulb,
  PenTool,
  CheckCircle2,
  Handshake,
  TrendingUp,
  UserCheck,
  Rocket,
  Star,
  Zap,
  Award,
  Users,
  Briefcase,
  Calendar
} from 'lucide-react';

const Software = "https://res.cloudinary.com/dj1mlgoem/image/upload/v1759498510/Software_mabcyx.jpg";

// Animated counter component
const AnimatedCounter = ({ end, duration = 2, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2 font-mono">
        {count}+
      </div>
      <div className="text-slate-600 text-sm font-medium">{label}</div>
    </div>
  );
};

// Why Choose Us Data
const whyChooseUs = [
  {
    title: "Future-Ready Solutions",
    content:
      "We don't just build for today—we engineer solutions that scale with your growth, keeping you ahead in the digital race.",
    icon: Lightbulb,
  },
  {
    title: "Beyond the Ordinary",
    content:
      "Creativity fuels our strategies. We craft unique digital experiences that leave a lasting impact on your customers.",
    icon: PenTool,
  },
  {
    title: "Built for Performance",
    content:
      "Speed, security, and efficiency—our solutions are optimized to deliver peak performance without compromise.",
    icon: CheckCircle2,
  },
  {
    title: "True Partnership, Not Just a Service",
    content:
      "Your success is our mission. We collaborate closely, ensuring every solution aligns with your goals and vision.",
    icon: Handshake,
  },
  {
    title: "Results That Matter",
    content:
      "We measure success by tangible results—higher conversions, increased efficiency, and unstoppable growth.",
    icon: TrendingUp,
  },
  {
    title: "Digital Transformation, Simplified",
    content:
      "We cut through the complexity and provide seamless, easy-to-adopt digital solutions tailored for your business.",
    icon: UserCheck,
  },
];

// Technologies Data - Organized by category
const techCategories = [
  {
    title: "Frontend Development",
    technologies: ["React", "React Native", "Redux", "Bootstrap", "Tailwind CSS", "Flutter"]
  },
  {
    title: "Backend Development",
    technologies: ["Node.js", "Express.js", "PHP", "MongoDB", "MySQL", "Sequelize"]
  },
  {
    title: "Design & Creative",
    technologies: ["Adobe XD", "Figma", "Canva", "Photoshop"]
  },
  {
    title: "Marketing & Ads",
    technologies: ["Google Ads", "Meta Ads"]
  },
  {
    title: "Cloud & Hosting",
    technologies: ["AWS", "Firebase", "Vercel", "Netlify", "Digital Ocean"]
  },
  {
    title: "Platforms",
    technologies: ["Apple", "Windows"]
  }
];

// About Component
const About = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (performance.navigation.type === 1) {
      navigate("/about");
    }
  }, [navigate]);

  const stats = [
    { end: 50, label: "Projects Completed", icon: Briefcase },
    { end: 25, label: "Happy Clients", icon: Users },
    { end: 15, label: "Team Members", icon: Award },
    { end: 3, label: "Years Experience", icon: Calendar }
  ];

  return (
    <>
      <Helmet>
        <title>About Tanglome | No 1 IT Company in India & Tamil Nadu | Leading IT Consulting Services</title>
        <meta
          name="description"
          content="About Tanglome - No 1 IT Company in India & Tamil Nadu. Leading IT consulting services, web development, mobile app development, AI solutions, and digital marketing. Learn about our team, technologies, and commitment to excellence."
        />
        <meta
          name="keywords"
          content="Tanglome IT Solutions, Tanglome India, Tanglome Tamil Nadu, Tanglome Web Development Company, Tanglome Digital Agency India, No 1 IT Company in India, No 1 Web Development Company in India, No 1 IT Company in Tamil Nadu, Best Web Development Company in India, Web Development Company in Tamil Nadu, Mobile App Development Company India, Android App Development India, iOS App Development India, AI Development Company India, Artificial Intelligence Solutions India, Digital Marketing Company India, Digital Marketing Agency Tamil Nadu, WhatsApp Automation Services India, MVP Development Company India, IT Company in Tamil Nadu, Software Company in Tamil Nadu, IT Services Company India, Best IT Company in India, IT Consulting Company India, IT Services India, Software Development Company India, Technology Company India, IT Solutions Company India, IT Consulting Services India, Coimbatore IT Company, IT Company Coimbatore, Software Company Tamil Nadu"
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
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
                  <Star className="w-4 h-4 text-slate-700" />
                  <span className="text-sm font-medium text-slate-700">
                    Est. 2021 • Coimbatore, India
                  </span>
                </div>

                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 leading-[0.95]">
                  Shaping Tomorrow's
                  <br />
                  <span className="text-slate-400">Digital Landscape</span>
                </h1>

                <p className="text-xl text-slate-600 mb-4 leading-relaxed">
                  Where Innovation Meets <span className="font-semibold text-slate-900">Intelligent Solutions</span>
                </p>

                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  At Tanglome, we blend innovation with expertise to craft impactful digital
                  solutions. From startups to industry leaders, we drive growth and transformation
                  through cutting-edge technology and strategic thinking.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <button className="group inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-slate-800 transition-all">
                      Get Started Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  <Link to="/portfolio">
                    <button className="inline-flex items-center gap-2 border-2 border-slate-900 text-slate-900 px-8 py-4 rounded-lg font-medium hover:bg-slate-900 hover:text-white transition-all">
                      View Our Work
                    </button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-xl">
                  <img
                    src={Software}
                    alt="Tech Illustration"
                    loading="lazy"
                    className="w-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-slate-300">
                Delivering excellence across the globe
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-white/10 p-3 rounded-xl inline-flex mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <AnimatedCounter end={stat.end} label={stat.label} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-slate-600">
                Your Path to Innovation and Success
              </p>
            </div>

            <div className="space-y-4">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden hover:border-slate-900 hover:shadow-xl transition-all"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex justify-between items-center px-6 py-5 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-slate-100 p-3 rounded-xl">
                          <Icon className="w-5 h-5 text-slate-900" />
                        </div>
                        <span className="font-bold text-slate-900 text-lg">
                          {item.title}
                        </span>
                      </div>
                      {openIndex === index ? (
                        <ChevronUp className="w-6 h-6 text-slate-900" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-slate-900" />
                      )}
                    </button>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-5 pt-2 text-slate-600 leading-relaxed border-t-2 border-slate-100"
                      >
                        {item.content}
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">
                Our Technology Stack
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We use modern frameworks and cloud solutions for high-performance applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-6 hover:border-slate-900 transition-all"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    {category.title}
                  </h3>
                  <div className="space-y-2">
                    {category.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 text-slate-700"
                      >
                        <div className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
                        <span className="text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's build something extraordinary together. Our team is ready to bring your vision 
              to life with cutting-edge technology and creative solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="group inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-10 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all">
                  Start Your Project
                  <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </Link>
              <Link to="/portfolio">
                <button className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all">
                  View Case Studies
                </button>
              </Link>
            </div>
          </div>
        </section>

        <Contact />
      </div>
    </>
  );
};

export default About;
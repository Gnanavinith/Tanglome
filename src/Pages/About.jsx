import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardArrowRight,
} from "react-icons/md";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaBootstrap,
  FaApple,
  FaWindows,
  FaChartLine,
  FaAws,
  FaLightbulb,
  FaUserTie,
  FaPencilRuler,
  FaCheckCircle,
  FaHandshake,
  FaSmile,
  FaRocket,
  FaGlobeAmericas,
  FaCode,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiSequelize,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiRedux,
  SiFlutter,
  SiAdobexd,
  SiFigma,
  SiGoogleads,
  SiMeta,
  SiCanva,
  SiAdobephotoshop,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiDigitalocean,
} from "react-icons/si";

import { Link, useNavigate } from "react-router-dom";
import Contact from "../Components/Contact";


const Software="https://res.cloudinary.com/dj1mlgoem/image/upload/v1759498510/Software_mabcyx.jpg"
// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

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
    <div className="text-center p-4">
      <motion.div
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {count}+
      </motion.div>
      <div className="text-gray-300 mt-2 text-lg">{label}</div>
    </div>
  );
};

// FAQ Data
const faqItems = [
  {
    title: "Future-Ready Solutions",
    content:
      "We don't just build for today—we engineer solutions that scale with your growth, keeping you ahead in the digital race.",
    icon: <FaLightbulb className="text-yellow-400 text-xl" />,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "Beyond the Ordinary",
    content:
      "Creativity fuels our strategies. We craft unique digital experiences that leave a lasting impact on your customers.",
    icon: <FaPencilRuler className="text-pink-400 text-xl" />,
    gradient: "from-pink-500 to-purple-500",
  },
  {
    title: "Built for Performance",
    content:
      "Speed, security, and efficiency—our solutions are optimized to deliver peak performance without compromise.",
    icon: <FaCheckCircle className="text-green-400 text-xl" />,
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "True Partnership, Not Just a Service",
    content:
      "Your success is our mission. We collaborate closely, ensuring every solution aligns with your goals and vision.",
    icon: <FaHandshake className="text-purple-400 text-xl" />,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "Results That Matter",
    content:
      "We measure success by tangible results—higher conversions, increased efficiency, and unstoppable growth.",
    icon: <FaChartLine className="text-blue-400 text-xl" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Digital Transformation, Simplified",
    content:
      "We cut through the complexity and provide seamless, easy-to-adopt digital solutions tailored for your business.",
    icon: <FaUserTie className="text-gray-400 text-xl" />,
    gradient: "from-gray-500 to-blue-500",
  },
];

// Technologies Data
const technologies = [
  { name: "React", icon: <FaReact className="text-blue-400 text-4xl" /> },
  { name: "ReactNative", icon: <FaReact className="text-blue-400 text-4xl" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500 text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300 text-4xl" />,
  },
  { name: "MongoDB", icon: <FaDatabase className="text-green-400 text-4xl" /> },
  {
    name: "Sequelize",
    icon: <SiSequelize className="text-blue-500 text-4xl" />,
  },
  { name: "MySQL", icon: <SiMysql className="text-blue-400 text-4xl" /> },
  { name: "PHP", icon: <SiPhp className="text-indigo-500 text-4xl" /> },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-purple-600 text-4xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400 text-4xl" />,
  },
  { name: "Flutter", icon: <SiFlutter className="text-blue-400 text-4xl" /> },
  { name: "Adobe XD", icon: <SiAdobexd className="text-pink-500 text-4xl" /> },
  { name: "Figma", icon: <SiFigma className="text-purple-400 text-4xl" /> },
  {
    name: "Google Ads",
    icon: <SiGoogleads className="text-yellow-500 text-4xl" />,
  },
  { name: "Meta Ads", icon: <SiMeta className="text-blue-600 text-4xl" /> },
  { name: "Canva", icon: <SiCanva className="text-blue-500 text-4xl" /> },
  {
    name: "Adobe Photoshop",
    icon: <SiAdobephotoshop className="text-blue-600 text-4xl" />,
  },
];

// Hosting Tools Data
const hostingTools = [
  { name: "AWS", icon: <FaAws className="text-yellow-500 text-4xl" /> },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-400 text-4xl" />,
  },
  { name: "Vercel", icon: <SiVercel className="text-white text-4xl" /> },
  { name: "Netlify", icon: <SiNetlify className="text-blue-400 text-4xl" /> },
  {
    name: "Digital Ocean",
    icon: <SiDigitalocean className="text-blue-500 text-4xl" />,
  },
  { name: "Apple", icon: <FaApple className="text-gray-300 text-4xl" /> },
  { name: "Windows", icon: <FaWindows className="text-blue-500 text-4xl" /> },
];

// **About Component**
const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const navigate = useNavigate();
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);

    // Redirect to home page on refresh
    if (performance.navigation.type === 1) {
      navigate("/about");
    }
  }, [navigate]);

  return (
    <>
      <Helmet>
        <title>About Tanglome | IT Consulting Company in Coimbatore, India</title>
        <meta
          name="description"
          content="Tanglome is a leading IT consulting company in Coimbatore, India. We provide expert IT consulting services, IT strategy consulting, IT management consulting, and global IT consulting solutions. Learn about our team, technologies, and commitment to excellence."
        />
        <meta
          name="keywords"
          content="IT consulting, IT consulting companies, IT consulting services, IT consulting firm, IT consulting companies in India, IT strategy consulting, IT management consulting, global IT consulting, big 4 IT consulting firms, top IT consulting firms, Deloitte IT consulting, PwC IT consulting, EY IT consulting, Infosys IT consulting, Accenture IT consulting, healthcare IT consulting, IT HR consulting, IT consulting internships, IT consulting entry level jobs, IT consulting website, IT consulting business, IT consulting near me, Tanglome, Coimbatore, Tamilnadu, India"
        />
        <meta name="author" content="Tanglome" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore" />
        <meta property="og:title" content="About Tanglome | IT Consulting Company in Coimbatore" />
        <meta property="og:description" content="Leading IT consulting company in Coimbatore, India. Expert IT consulting services, IT strategy, and management consulting solutions." />
        <meta property="og:url" content="https://tanglome.com/about" />
        <meta property="og:type" content="website" />
      </Helmet>
     
      {/* Main container with Solutions page style background */}
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
        
        {/* Hero Section */}
        <section className="w-full min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-16 flex flex-col-reverse lg:flex-row items-center justify-between text-white relative">
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-5 sm:mt-8 md:mt-12 lg:mt-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text leading-tight">
              Shaping Tomorrow's Digital Landscape
            </h1>

            <motion.span 
              className="text-lg sm:text-xl md:text-2xl text-gray-300 block mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Where Innovation Meets <span className="text-yellow-400 font-semibold">Intelligent Solutions</span>
            </motion.span>

            <motion.div
              className="max-w-3xl mx-auto lg:mx-0 mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <p>
                At <span className="text-purple-400 font-semibold">Tanglome</span>, we blend innovation with expertise to craft impactful digital
                solutions. From startups to industry leaders, we drive growth and transformation
                through cutting-edge technology and strategic thinking.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link to="/schedule-meeting" className="flex justify-center lg:justify-start">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Now <MdKeyboardArrowRight className="text-2xl" />
                </motion.button>
              </Link>
              <motion.button
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 text-lg font-bold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0 z-10"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-lg opacity-30"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <img
                src={Software}
                alt="Tech Illustration"
                loading="lazy"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl relative z-10"
              />
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="w-full px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white">Our Impact in Numbers</h2>
              <p className="text-gray-400 text-xl mt-4">Delivering excellence across the globe</p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <AnimatedCounter end={50} label="Projects Completed" />
              <AnimatedCounter end={25} label="Happy Clients" />
              <AnimatedCounter end={15} label="Team Members" />
              <AnimatedCounter end={3} label="Years Experience" />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full px-6 py-16 flex flex-col items-center text-center">
          <motion.div 
            className="max-w-3xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-semibold text-yellow-400">Why Choose Us?</h2>
            <p className="text-gray-300 text-2xl mt-3">Your Path to Innovation and Success!</p>
          </motion.div>

          <div className="max-w-4xl w-full mt-6">
            {faqItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="mb-6 rounded-2xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-center bg-gradient-to-r ${item.gradient} px-6 py-5 text-left transition-all duration-300 hover:shadow-lg`}
                >
                  <div className="flex items-center gap-5">
                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                      {item.icon}
                    </div>
                    <span className="font-bold text-white text-xl">{item.title}</span>
                  </div>
                  {openIndex === index ? (
                    <MdKeyboardArrowUp className="text-2xl text-white transition-transform duration-500" />
                  ) : (
                    <MdKeyboardArrowDown className="text-2xl text-white transition-transform duration-500" />
                  )}
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gray-800/80 backdrop-blur-sm px-6 py-5 text-gray-200"
                  >
                    {item.content}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="w-full px-6 py-16 flex flex-col items-center text-center">
          <motion.div 
            className="max-w-6xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-semibold text-yellow-400">Technologies We Use</h2>
            <p className="text-gray-300 text-2xl mt-5">
              We use modern frameworks and cloud solutions for high-performance applications.
            </p>

            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-6 bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-gray-700/80"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <p className="text-gray-300 mt-3 font-medium group-hover:text-white">{tech.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Hosting Tools Section */}
        <section className="w-full px-6 py-16 flex flex-col items-center text-center">
          <motion.div 
            className="max-w-6xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-semibold text-yellow-400">Hosting & Deployment Tools</h2>
            <p className="text-gray-300 text-2xl mt-5">
              Reliable hosting and deployment solutions for seamless scalability and performance.
            </p>

            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {hostingTools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-6 bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-gray-700/80"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <p className="text-gray-300 mt-3 font-medium group-hover:text-white">{tool.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-6 py-20 bg-gradient-to-r from-purple-900/80 to-pink-800/80 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <motion.div 
            className="max-w-4xl mx-auto text-center relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              Let's build something extraordinary together. Our team is ready to bring your vision to life with cutting-edge technology and creative solutions.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/schedule-meeting">
                <motion.button
                  className="px-10 py-4 bg-white text-purple-600 text-lg font-bold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Project <FaRocket className="text-lg" />
                </motion.button>
              </Link>
              <motion.button
                className="px-10 py-4 border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Case Studies
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <Contact />
        </div>
      </div>
    </>
  );
};

export default About;
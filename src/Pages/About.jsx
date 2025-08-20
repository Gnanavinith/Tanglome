import React, { useState,useEffect } from "react";
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
  FaWindows,FaChartLine,
  FaAws,
  FaLightbulb,
  FaUserTie,
  FaPencilRuler,
  FaCheckCircle,
  FaHandshake,
  FaSmile,
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
import Software from "../assets/Software.jpg"

// FAQ Data
const faqItems = [
  {
    title: "Future-Ready Solutions",
    content:
      "We don’t just build for today—we engineer solutions that scale with your growth, keeping you ahead in the digital race.",
    icon: <FaLightbulb className="text-yellow-400 text-xl" />,
  },
  {
    title: "Beyond the Ordinary",
    content:
      "Creativity fuels our strategies. We craft unique digital experiences that leave a lasting impact on your customers.",
    icon: <FaPencilRuler className="text-pink-400 text-xl" />,
  },
  {
    title: "Built for Performance",
    content:
      "Speed, security, and efficiency—our solutions are optimized to deliver peak performance without compromise.",
    icon: <FaCheckCircle className="text-green-400 text-xl" />,
  },
  {
    title: "True Partnership, Not Just a Service",
    content:
      "Your success is our mission. We collaborate closely, ensuring every solution aligns with your goals and vision.",
    icon: <FaHandshake className="text-purple-400 text-xl" />,
  },
  {
    title: "Results That Matter",
    content:
      "We measure success by tangible results—higher conversions, increased efficiency, and unstoppable growth.",
    icon: <FaChartLine className="text-blue-400 text-xl" />,
  },
  {
    title: "Digital Transformation, Simplified",
    content:
      "We cut through the complexity and provide seamless, easy-to-adopt digital solutions tailored for your business.",
    icon: <FaUserTie className="text-gray-400 text-xl" />,
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
  {/* SEO Metadata */}
  <Helmet>
    <title>About Tanglome - Empowering Businesses with Technology</title>
    <meta
      name="description"
      content="Discover Tanglome's mission, vision, and journey in delivering cutting-edge software solutions to empower businesses worldwide."
    />
    <meta
      name="keywords"
      content="About Tanglome, Company Info, Software Development, Business Empowerment, IT Solutions"
    />
    <meta name="author" content="Tanglome" />

    {/* Open Graph */}
    <meta property="og:title" content="About Tanglome" />
    <meta property="og:description" content="Learn more about Tanglome's mission and services." />
    <meta property="og:url" content="https://tanglome.com/about" />
    <meta property="og:image" content="https://tanglome.com/og-image.png" />

    {/* Twitter */}
    <meta name="twitter:title" content="About Tanglome" />
    <meta name="twitter:description" content="Discover how Tanglome empowers businesses with technology." />
    <meta name="twitter:image" content="https://tanglome.com/twitter-image.png" />
  </Helmet>

  <div className="w-full bg-gray-900 text-white">
    {/* Hero Section */}
    <section className="w-full min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 py-16 flex flex-col-reverse lg:flex-row items-center justify-between bg-gray-900 text-white">
      <motion.div
        className="w-full lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-5 sm:mt-8 md:mt-12 lg:mt-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text leading-tight">
          Shaping Tomorrow's Digital Landscape
        </h1>

        <span className="text-lg sm:text-xl md:text-2xl text-gray-300 block mt-5">
          Where Innovation Meets Intelligent Solutions
        </span>

        <motion.div
          className="max-w-3xl mx-auto lg:mx-0 mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <p>
            At Tanglome, we blend innovation with expertise to craft impactful digital
            solutions. From startups to industry leaders, we drive growth and transformation
            through technology.
          </p>
        </motion.div>

        <Link to="/schedule-meeting">
          <motion.button
            className="mt-10 px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-full hover:bg-blue-500 transition duration-300 flex items-center justify-center mx-auto lg:mx-0 gap-2"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Get Started Now <MdKeyboardArrowRight className="text-2xl" />
          </motion.button>
        </Link>
      </motion.div>

      <motion.div
        className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img
          src={Software}
          alt="Tech Illustration"
          loading="lazy"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-lg mt-20"
        />
      </motion.div>
    </section>

    {/* FAQ Section */}
    <section className="w-full px-6 py-16 flex flex-col items-center text-center">
      <motion.div className="max-w-3xl p-6">
        <h2 className="text-4xl font-semibold text-yellow-400">Why Choose Us?</h2>
        <p className="text-gray-300 text-2xl mt-3">Your Path to Innovation and Success!</p>
      </motion.div>

      <div className="max-w-3xl w-full mt-6">
        {faqItems.map((item, index) => (
          <div key={index} className="mb-4 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center bg-gray-800 px-4 py-3 text-left transition duration-300 hover:bg-gray-700"
            >
              <div className="flex items-center gap-5">
                {item.icon}
                <span className="font-semibold text-white">{item.title}</span>
              </div>
              {openIndex === index ? (
                <MdKeyboardArrowUp className="text-xl text-white transition duration-500" />
              ) : (
                <MdKeyboardArrowDown className="text-xl text-white transition duration-500" />
              )}
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.5 }}
                className="bg-gray-200 px-4 py-3 text-black"
              >
                {item.content}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>

    {/* Technologies Section */}
    <section className="w-full px-6 py-16 flex flex-col items-center text-center">
      <motion.div className="max-w-4xl">
        <h2 className="text-4xl font-semibold text-yellow-400">Technologies We Use</h2>
        <p className="text-gray-300 text-2xl mt-5">
          We use modern frameworks and cloud solutions for high-performance applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:border-yellow-400 transition-all"
            >
              {tech.icon}
              <p className="text-gray-300 mt-2 text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>

    {/* Hosting Tools Section */}
    <section className="w-full px-6 py-16 flex flex-col items-center text-center">
      <motion.div className="max-w-4xl">
        <h2 className="text-4xl font-semibold text-yellow-400">Hosting & Deployment Tools</h2>
        <p className="text-gray-300 text-2xl mt-5">
          Reliable hosting and deployment solutions for seamless scalability and performance.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
          {hostingTools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:border-yellow-400 transition-all"
            >
              {tool.icon}
              <p className="text-gray-300 mt-2 text-sm">{tool.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>

    {/* Contact Section */}
    <Contact />
  </div>
</>

  );
};

export default About;

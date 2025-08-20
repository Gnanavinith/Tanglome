import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaShoppingCart,
  FaSearch,
  FaDatabase,
  FaPaintBrush,
  FaBullhorn,
  FaChartLine,
  FaServer,
} from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Contact from "../Components/Contact";
import { RiComputerFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";

const solutionsData = [
  {
    title: "App Development",
    icon: <FaMobileAlt className="text-green-400 text-4xl" />,
    description: "Custom mobile apps for iOS and Android.",
  },
  {
    title: "Web Development",
    icon: <FaLaptopCode className="text-blue-400 text-4xl" />,
    description: "Modern, responsive, and scalable websites.",
  },
  {
    title: "Windows Application Development",
    icon: <RiComputerFill className="text-blue-500 text-4xl" />,
    description:
      "Custom Windows applications tailored for business and enterprise needs.",
  },
  {
    title: "E-Commerce Solutions",
    icon: <FaShoppingCart className="text-emerald-400 text-4xl" />,
    description:
      "End-to-end e-commerce solutions with secure payment integration.",
  },
  {
    title: "Responsive Web",
    icon: <TiTick className="text-cyan-400 text-4xl" />,
    description:
      "Mobile-first, fully responsive web pages for seamless user experience.",
  },
  {
    title: "SEO",
    icon: <FaSearch className="text-yellow-400 text-4xl" />,
    description: "Boost your online presence with expert SEO strategies.",
  },
  {
    title: "Software Development",
    icon: <FaDatabase className="text-orange-400 text-4xl" />,
    description: "Tailored software solutions for your business needs.",
  },
  {
    title: "Graphics Designing",
    icon: <FaPaintBrush className="text-purple-400 text-4xl" />,
    description: "Creative designs for branding, UI/UX, and marketing.",
  },
  {
    title: "Social Media Marketing",
    icon: <FaBullhorn className="text-red-400 text-4xl" />,
    description: "Strategic marketing campaigns to grow your brand.",
  },
  {
    title: "Paid Ad Campaigns",
    icon: <FaShoppingCart className="text-teal-400 text-4xl" />,
    description: "Targeted advertising to maximize conversions.",
  },
  {
    title: "New Product Development",
    icon: <FaChartLine className="text-pink-400 text-4xl" />,
    description: "From concept to market, we bring ideas to life.",
  },
  {
    title: "Hosting Services",
    icon: <FaServer className="text-gray-400 text-4xl" />,
    description: "Secure and scalable hosting for websites and apps.",
  },
];

const Solutions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const navigate = useNavigate();
  useEffect(() => {
    // Scroll to the top when the page loads
    window.scrollTo(0, 0);

    // Redirect to home page on refresh
    if (performance.navigation.type === 1) {
      navigate("/solutions");
    }
  }, [navigate]);

  return (
   <>
  {/* SEO Metadata */}
  <Helmet>
    <title>Tanglome Solutions - Scalable Technology Solutions for Businesses</title>
    <meta 
      name="description" 
      content="Explore Tanglome's innovative technology solutions for digital transformation, business growth, and scalable software development." 
    />
    <meta 
      name="keywords" 
      content="Tanglome Solutions, Digital Transformation, Software Development, Cloud Solutions, Business Growth, IT Services" 
    />
    <meta name="author" content="Tanglome" />

    {/* Open Graph */}
    <meta property="og:title" content="Tanglome Solutions" />
    <meta property="og:description" content="Explore our innovative solutions that empower businesses through cutting-edge technology." />
    <meta property="og:url" content="https://tanglome.com/solutions" />
    <meta property="og:image" content="https://tanglome.com/og-image.png" />

    {/* Twitter */}
    <meta name="twitter:title" content="Tanglome Solutions" />
    <meta name="twitter:description" content="Discover Tanglome's wide range of technology solutions for business growth." />
    <meta name="twitter:image" content="https://tanglome.com/twitter-image.png" />
  </Helmet>

  <div>
    <section className="w-full min-h-screen bg-gray-900 text-gray-300 px-6 py-16">
      <div className="text-center mt-15">
        <motion.h1
          className="text-4xl font-semibold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Cutting-Edge Solutions
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-2xl mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          We deliver innovative and scalable technology solutions to drive
          business growth and digital transformation.
        </motion.p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 mt-12 w-full max-w-6xl mx-auto px-4">
        {solutionsData.map((solution, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800 bg-opacity-80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_0px_20px_rgba(255,215,0,0.4)] hover:bg-opacity-90"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
          >
            <motion.div
              className="flex justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-900 shadow-lg border border-gray-700">
                {solution.icon}
              </div>
            </motion.div>

            <div className="flex flex-col items-center mt-4">
              <h3 className="text-xl font-semibold text-gray-100 text-center">
                {solution.title}
              </h3>
              <button
                className="text-gray-300 text-lg focus:outline-none hover:text-white mt-2 transition-transform transform hover:scale-110"
                onClick={() => toggleDescription(index)}
              >
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>

            <motion.p
              className={`text-gray-300 mt-3 text-sm text-center transition-all duration-300 overflow-hidden ${
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: openIndex === index ? 1 : 0,
                height: openIndex === index ? "auto" : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {solution.description}
            </motion.p>
          </motion.div>
        ))}
      </div>

      <Link to="/schedule-meeting" className="flex justify-center mt-20">
        <motion.button
          className="px-8 py-3 text-lg font-bold text-gray-900 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg relative overflow-hidden transition-all duration-300 ease-in-out 
            hover:scale-110 hover:shadow-[0px_0px_20px_rgba(255,215,0,0.8)]"
          whileHover={{
            scale: 1.15,
            boxShadow: "0px 0px 25px rgba(255,215,0,0.9)",
          }}
          animate={{
            y: [0, -5, 0],
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <span className="relative z-10">Get Started Now</span>
        </motion.button>
      </Link>
    </section>

    <Contact />
  </div>
</>

  );
};

export default Solutions;

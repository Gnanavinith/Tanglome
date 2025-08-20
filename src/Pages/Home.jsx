import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import WhoWeAre from "../Components/WhoWeAre";
import Mantra from "../Components/Mantra";
import ServicesIntro from "../Components/ServicesIntro";
import ConnectUs from "../Components/ConnectUs";
import Faq from "../Components/Faq";
import Process from "../Components/Process";
import Email from "../Components/Email";


import Banner1 from "../assets/Tanglome1.jpeg";
import Banner2 from "../assets/Tanglome2.jpeg";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const texts = [
    "Build Scalable Software Solutions",
    "Empower Businesses with Technology",
    "Innovate with Cutting-Edge Development",
  ];

  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex < texts[index].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (charIndex === texts[index].length && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }
  }, [charIndex, index, isDeleting]);

  return (
    <>
      <Helmet>
        <title>Tanglome - Transform Ideas into Reality</title>
        <meta
          name="description"
          content="Tanglome helps businesses grow with scalable software solutions, empowering ideas with cutting-edge development."
        />
        <meta
          name="keywords"
          content="Tanglome, Software Development, Business Growth, IT Solutions, Startups"
        />
        <meta name="author" content="Tanglome" />
      </Helmet>

      {/* Hero Header Section */}
      <header className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
        >
          We{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text">
            #Tanglome
          </span>{" "}
          <span className="ml-2 text-white">{displayedText}</span>
          <span className="animate-blink">|</span>
        </motion.h1>

        <p className="mt-10 text-base sm:text-lg md:text-xl font-semibold text-white tracking-wide leading-relaxed">
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text">
            Untangling
          </span>{" "}
          Business Challenges with Smart Solutions!
        </p>

        <nav className="flex gap-5 mt-5">
          <Link to="/schedule-meeting">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-full 
              hover:bg-blue-500 transition duration-300 flex items-center gap-1 
              text-sm sm:text-base md:text-lg"
              aria-label="Get Started with Tanglome"
            >
              Get Started <MdKeyboardArrowRight className="text-2xl" />
            </motion.button>
          </Link>

          <Link to="/about">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-full 
              hover:bg-blue-500 transition duration-300 flex items-center gap-1 
              text-sm sm:text-base md:text-lg"
              aria-label="Learn more about Tanglome"
            >
              About Us <MdKeyboardArrowRight className="text-2xl" />
            </motion.button>
          </Link>
        </nav>
      </header>

     {/* Dedicated Developers Section */}
<section className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-16 px-6 sm:px-10 md:px-20">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
    {/* Left: Text Content */}
    <div className="w-full lg:w-1/2 text-left">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-200 leading-snug">
        Hire a <span className="text-blue-500">Dedicated</span>
        <br />
        Developers Team
      </h2>
      <p className="mt-6 text-base sm:text-lg text-gray-200 leading-relaxed">
        Our professional developers create high-quality applications tailored to your business needs.
        We empower small, medium, and enterprise-level companies to scale and thrive in the digital age.
      </p>
      <p className="mt-4 text-base sm:text-lg font-medium text-gray-200">
        A Trusted Partner to Fuel Your Business Growth.
      </p>

      <Link to="/schedule-meeting">
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-500 transition duration-300">
          Book a Free Consultancy
        </button>
      </Link>
    </div>

    {/* Right: Overlapping Images - hidden on small screens */}
    <div className="w-full lg:w-1/2 justify-center hidden sm:flex">
      <div className="relative w-fit">
        <img
          src={Banner2}
          alt="Dashboard Preview"
          className="w-80 sm:w-96 md:w-[440px] rounded-xl shadow-xl border border-gray-200 relative z-10"
        />
        <img
          src={Banner1}
          alt="Marketplace Preview"
          className="w-64 sm:w-72 md:w-80 rounded-xl shadow-xl border border-gray-200 absolute -bottom-28 -left-28 z-20"
        />
      </div>
    </div>
  </div>
</section>


      {/* Main Sections */}
      <main>
        <section id="who-we-are">
          <WhoWeAre />
        </section>
       
        <section id="mantra">
          <Mantra />
        </section>
        <section id="services-intro">
          <ServicesIntro />
        </section>
        <section id="process">
          <Process />
        </section>
          
        <section id="faq">
          <Faq />
        </section>
        <section id="connect-us">
          <ConnectUs />
        </section>
        <section id="email">
          <Email />
        </section>
     
      </main>
    </>
  );
};

export default Home;

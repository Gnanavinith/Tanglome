import React from 'react'
import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="relative w-full min-h-[350px] bg-gray-900 text-white flex flex-col items-center justify-center text-center px-6 py-16">
      {/* Full-Screen Animated Background Waves */}
      <div className="absolute inset-0 opacity-20 w-full h-full">
        <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fillOpacity="0.5" className="fill-gray-500" d="M0,160L48,154.7C96,149,192,139,288,154.7C384,171,480,213,576,197.3C672,181,768,107,864,101.3C960,96,1056,160,1152,186.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text relative z-10">
        Connect Us
      </h1>

      {/* Description */}
      <p className="text-gray-300 mt-3 text-lg max-w-xl relative z-10">
        Ready to Elevate Your Digital Experience? Let's Transform Together!
      </p>

      {/* Contact Button */}
      <div className="absolute bottom-[40px]">
        <Link to="/schedule-meeting">
          <motion.button
            className="px-6 py-3 bg-blue-700 text-white font-lg rounded-full hover:bg-blue-500 transition duration-300 flex items-center gap-2"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hire Your Developer Now <MdKeyboardArrowRight className="text-2xl" />
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default Contact;

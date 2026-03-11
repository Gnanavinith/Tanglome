import React from "react";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const chatBubbles = [
  "Need help?", 
  "Let’s build something great together!", 
  "Reach out now!"
];

const ConnectUs = () => {
  return (
   <section className="relative w-full h-auto bg-white px-4 sm:px-6 py-12 sm:py-16 flex flex-col items-center text-center">
  {/* Section Title */}
  <motion.h1
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-2xl sm:text-3xl font-extrabold text-[#020202]"
  >
    Connect With Us
  </motion.h1>

  {/* Subtitle */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
    className="text-base sm:text-lg font-semibold text-[#4922E5] mt-4 leading-relaxed max-w-lg"
  >
    {/* Full text for larger screens */}
    <span className="hidden sm:block">
      Let’s bridge the gap between ideas and execution. Connect with us to 
      transform your digital presence with cutting-edge solutions.
    </span>

    {/* Short text for small screens */}
    <span className="sm:hidden">
      Partner with us to elevate your digital presence with innovative solutions.
    </span>
  </motion.p>

  {/* Subtle Background Elements */}
  <div className="absolute top-0 right-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#A556F8]/10 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute bottom-0 left-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#4922E5]/10 rounded-full blur-3xl pointer-events-none" />

  {/* Animated Chat Bubbles */}
  <div className="relative w-full justify-center mt-8 sm:mt-10 h-32 sm:h-40 flex items-center">
    {chatBubbles.map((text, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: index * 1.5 }}
        className={`absolute bg-gradient-to-r from-[#A556F8] to-[#4922E5] text-white px-3 sm:px-4 py-2 rounded-lg shadow-lg text-sm sm:text-base font-medium 
          ${index === 0 ? "top-0 left-4 sm:left-10" : index === 1 ? "top-1/2 right-4 sm:right-10" : "bottom-0 left-8 sm:left-20"}`}
      >
        {text}
      </motion.div>
    ))}
  </div>

  {/* CTA Button */}
  <Link to="/contact">
    <motion.button
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
      className="mt-6 px-5 sm:px-6 py-3 bg-gradient-to-r from-[#A556F8] to-[#4922E5] text-white text-base sm:text-lg font-bold rounded-full flex items-center gap-2 shadow-lg hover:opacity-90 transition-all duration-300"
    >
      Contact Us <MdKeyboardArrowRight className="text-xl" />
    </motion.button>
  </Link>
</section>

  );
};

export default ConnectUs;

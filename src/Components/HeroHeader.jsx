import React from "react";
import { motion } from "framer-motion";

const HeroHeader = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700  text-white flex items-center pt-32 pb-24 px-6 lg:px-28">
      
      {/* GRID LAYOUT */}
      <div className="grid lg:grid-cols-2 gap-16 w-full max-w-7xl mx-auto">

        {/* LEFT SIDE CONTENT */}
        <div className="space-y-6">

          {/* COMPANY NAME */}
          <h3 className="text-xl tracking-wide text-gray-300 font-[poppins]">
            Tanglome - Untangling Your Business Challenges
          </h3>

          {/* MAIN HEADING */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Build Smarter Websites & Apps  
            <br />
            <span className="text-blue-400">
              Powered by Strategy, Creativity & Automation
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-lg max-w-md">
            High impact digital solutions crafted for growth-focused businesses.  
            Websites, apps, ad campaigns, AI agents & automation everything you need to scale faster.
          </p>

        </div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-[32px] border border-white/20 bg-transparent backdrop-blur-xl shadow-xl"
        >
          <h2 className="text-xl font-bold mb-6 text-center">
            Transform Your Ideas Into Digital Reality
          </h2>

          {/* Inputs Row */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
            />
          </div>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-white/10 border border-white/20 text-white w-full mt-4 placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          />

          {/* Select Inputs */}
          <div className="grid grid-cols-2 gap-4 mt-4">

            {/* Service Dropdown */}
            <div className="relative">
              <select className="p-3 rounded-lg bg-white/10 border border-white/20 text-white w-full appearance-none focus:ring-2 focus:ring-blue-400 focus:outline-none transition">
                <option className="text-black">Service you need</option>
                <option className="text-black">Website Development</option>
                <option className="text-black">App Development</option>
                <option className="text-black">Digital Marketing</option>
                <option className="text-black">Ad Campaigns (Google & Meta)</option>
                <option className="text-black">AI Agents & Automation</option>
                <option className="text-black">SEO / SMM Growth</option>
              </select>

              {/* Custom Dropdown Icon */}
              <div className="absolute right-4 top-4 text-gray-300 pointer-events-none">
                ▼
              </div>
            </div>

            {/* Budget Dropdown */}
            <div className="relative">
              <select className="p-3 rounded-lg bg-white/10 border border-white/20 text-white w-full appearance-none focus:ring-2 focus:ring-blue-400 focus:outline-none transition">
                <option className="text-black">Choose Your Budget</option>
                <option className="text-black">Below ₹10,000</option>
                <option className="text-black">₹10,000 – ₹25,000</option>
                <option className="text-black">₹25,000 – ₹50,000</option>
                <option className="text-black">₹50,000+</option>
              </select>

              {/* Custom Dropdown Icon */}
              <div className="absolute right-4 top-4 text-gray-300 pointer-events-none">
                ▼
              </div>
            </div>

          </div>

          {/* Message Box */}
          <textarea
            rows="4"
            placeholder="Tell us about your project..."
            className="w-full mt-4 p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
          ></textarea>

          {/* Submit Button */}
          <button className="mt-6 w-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold py-3 rounded-lg hover:opacity-90 transition">
            LET’S BUILD TOGETHER →
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default HeroHeader;

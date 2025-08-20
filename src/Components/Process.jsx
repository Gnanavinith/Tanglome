import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaPencilRuler, FaRocket, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: <FaSearch className="text-gray-300 text-base sm:text-lg" />,
    time: "(0 TO 1 WEEK)",
    title: "User Research & Problem Definition",
    description:
      "Our product and design team collaborates with founders to refine the problem statement and understand user needs. We assist with interviews, journey mapping, and surveys to identify key pain points and opportunities.",
  },
  {
    icon: <FaPencilRuler className="text-gray-300 text-base sm:text-lg" />,
    time: "(1 TO 2 WEEKS)",
    title: "Rapid Prototyping & Testing",
    description:
      "This phase focuses on idea generation, wireframing, testing, and rapid iteration to validate user-centered solutions before development.",
  },
  {
    icon: <FaRocket className="text-gray-300 text-base sm:text-lg" />,
    time: "(2 TO 4 WEEKS)",
    title: "Building the MVP",
    description:
      "We define the MVP scope, prioritize features, and build a functional version using best practices, No-Code tools, and modern APIs.",
  },
  {
    icon: <FaCogs className="text-gray-300 text-base sm:text-lg" />,
    time: "(6 TO 18 MONTHS)",
    title: "Scaling & Optimization",
    description:
      "With product-market fit achieved, we optimize for scalability, performance, and future features, ensuring a reliable and cost-effective product.",
  },
];

const Process = () => {
  return (
    <div className="w-full h-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 px-6 py-16">
     {/* Title */}
<motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 mt-10 drop-shadow-lg"
>
  Tanglome’s Proven Process
</motion.h1>

{/* Subtitle */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="max-w-4xl mx-auto text-center 
  bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
  text-transparent bg-clip-text mt-6 
  text-base sm:text-lg md:text-xl font-semibold"
>
  <p>
    Tanglome collaborates with founders to take products from idea to launch and scale — fast.
  </p>
</motion.div>


      {/* Desktop Steps */}
      <div className="max-w-5xl mx-auto mt-12 relative hidden md:block">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gray-400 w-[2px] h-full hidden md:block"></div>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex flex-col md:flex-row items-center gap-10"
          >
            {/* Left: Icon + Time */}
            <div className="relative md:w-1/3 w-full text-center md:text-left">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center shadow-lg"
              >
                {step.icon}
              </motion.div>

              <p className="text-gray-300 font-bold mt-10 hidden md:block text-base sm:text-lg">
                {step.time}
              </p>
            </div>

            {/* Right: Content */}
            <div className="md:w-2/3 w-full bg-gray-800 p-6 rounded-xl shadow-lg mt-10">
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                {step.title}
              </h2>

              {/* Time (mobile only) */}
              <p className="text-gray-300 font-bold mt-2 mb-4 text-base sm:text-lg md:hidden">
                {step.time}
              </p>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile View */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="w-full px-6 py-16 block md:hidden relative"
>
  <div className="relative space-y-8">
    {steps.map((step, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        whileHover={{ scale: 1.0 }}
        className="group flex flex-col items-start 
          bg-gray-800 border border-gray-400
          rounded-2xl p-6 shadow-xl"
      >
        {/* Icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-14 h-14 bg-blue-700 rounded-full 
            flex items-center justify-center shadow-md mb-4"
        >
          {step.icon}
        </motion.div>

        {/* Title */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent text-left">
          {step.title}
        </h2>

        {/* Time */}
        <p className="text-gray-200 font-semibold mt-1 text-base sm:text-lg text-left">
          {step.time}
        </p>

        {/* Description */}
        <p className="text-gray-300 mt-3 text-base sm:text-lg text-left">
          {step.description}
        </p>
      </motion.div>
    ))}
  </div>
</motion.div>
 <motion.div
      className="w-full mt-15 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-12 px-6 sm:px-10 text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            Need Something More Specific?
          </h2>
          <p className="text-base sm:text-lg text-gray-200">
            Sometimes your project may require a developer with a particular blend of skills.
            Contact us today to learn more about how we can help you succeed.
          </p>
        </div>

        {/* Button Section */}
        <div>
          <Link to="/schedule-meeting">
            <button className="mt-6 md:mt-0 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-lg transition duration-300">
              Schedule a Call
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
    </div>
  );
};

export default Process;

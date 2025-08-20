import React from "react";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { Sparkles, Rocket, TreePine } from "lucide-react";
import { Helmet } from "react-helmet";

const Mantra = () => {
  const cards = [
    {
      title: "Innovation",
      icon: <Sparkles className="w-6 h-6" />,
      img: (
        <iframe
          src="https://lottie.host/embed/e7e66a24-61dd-4f65-8e4c-d371b6ef55ad/oW0Vel94cT.lottie"
          title="Innovation Animation"
          className="w-full h-full border-0"
          allowFullScreen
        />
      ),
    },
    {
      title: "Excellence",
      icon: <Rocket className="w-6 h-6" />,
      img: (
        <iframe
          src="https://lottie.host/embed/a305de71-ebb3-4d3a-b3d1-a7dee076f785/PqkEPueUoC.lottie"
          title="Excellence Animation"
          className="w-full h-full border-0"
          allowFullScreen
        />
      ),
    },
    {
      title: "Growth",
      icon: <TreePine className="w-6 h-6" />,
      img: (
        <iframe
          src="https://lottie.host/embed/cf727572-6f80-4e9c-bcde-42c505d95dad/lYnqQ4d9eU.lottie"
          title="Growth Animation"
          className="w-full h-full border-0"
          allowFullScreen
        />
      ),
    },
  ];

  return (
    <section className="h-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 flex flex-col items-center justify-center px-6 py-16">
      {/* Prevent Google from indexing this page */}
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-100"
      >
        Pillars of Tanglome
      </motion.h2>

      {/* Card Layout */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
        className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-10 w-full"
      >
        {cards.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-gray-800 rounded-2xl shadow-lg w-[90%] sm:w-80 h-80 overflow-hidden group"
          >
            {/* Animation */}
            <div className="absolute inset-0">
              <div className="w-full h-full">{item.img}</div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/90 z-10" />

            {/* Title */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 text-center text-white text-xl sm:text-2xl font-bold group-hover:bottom-1/2 group-hover:translate-y-1/2 transition-all duration-500">
              {item.title}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <Link to="/schedule-meeting">
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-12 px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition duration-300 flex items-center gap-2"
        >
          Get Started Now <MdKeyboardArrowRight className="text-2xl" />
        </motion.button>
      </Link>
    </section>
  );
};

export default Mantra;


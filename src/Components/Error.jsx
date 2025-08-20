import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-6">
      
      {/* Animated 404 Text */}
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold text-yellow-400"
      >
        404
      </motion.h1>

      {/* Error Message */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-xl mt-4"
      >
        Oops, looks like the page is lost.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-gray-400 mt-2"
      >
        This is not a fault, just an accident that was not intentional.
      </motion.p>

      {/* Back to Home Button */}
      <Link to="/">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-6 px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition-all"
        >
          Go Back Home
        </motion.button>
      </Link>

    </div>
  );
};

export default NotFound;

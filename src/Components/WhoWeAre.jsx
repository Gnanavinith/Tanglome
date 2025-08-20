import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <>
      <Helmet>
        <title>Tanglome – Data Visualization & Business Insights</title>
        <meta
          name="description"
          content="Discover how Tanglome helps businesses make smarter decisions through data visualization and actionable insights. Book your Web & App eCommerce project and get 3 months free access."
        />
      </Helmet>

      <section className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-16 px-4 sm:px-6 md:px-20 text-white">
  <div className="max-w-4xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-2xl sm:text-3xl md:text-4xl font-bold text-left sm:text-center mb-6 text-yellow-400"
    >
      Data Visualization & Business Insights
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="text-base sm:text-lg leading-relaxed text-left text-gray-200"
    >
      Every business generates data from what customers are buying to how they interact with your website and campaigns. But just having data isn’t enough you need to see the full picture.
      <br /><br />
      Our <span className="text-white font-semibold">data visualization tools</span> turn that raw data into simple, easy-to-understand charts and dashboards. So you can spot trends, catch problems early, and make smarter decisions without guessing.
      <br /><br />
      With our <span className="text-white font-semibold">business insight solutions</span>, you’ll be able to:
      <ul className="list-disc ml-6 mt-4 text-gray-300">
        <li>See how your revenue and traffic are changing in real time</li>
        <li>Know which products and marketing efforts are performing best</li>
        <li>Understand where customers drop off in their journey</li>
        
      </ul>
      <br />
      <span className="text-yellow-300 font-semibold">Special Bonus:</span> When you choose Tanglome for your{" "}
      <span className="font-semibold text-white">web or app development</span>, you’ll also get
      <br />
      <span className="inline-block mt-2 bg-blue-600 text-white px-3 py-1 rounded font-bold">
        3 Months Free Access
      </span>{" "}
      to our powerful analytics dashboard — helping you launch with clarity, focus, and the right tools to grow.
    </motion.p>

    <Link to="/schedule-meeting">
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        className="mt-10 px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition duration-300 flex items-center gap-2"
      >
        Claim Free Access <MdKeyboardArrowRight className="text-xl" />
      </motion.button>
    </Link>
  </div>
</section>


    </>
  );
};

export default WhoWeAre;


import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  MdTrendingUp,
  MdAnalytics,
  MdPieChart,
  MdShowChart
} from "react-icons/md";

const stats = [
  {
    icon: MdTrendingUp,
    label: "Products Shot",
    value: "2.4K"
  },
  {
    icon: MdAnalytics,
    label: "E-commerce",
    value: "89%"
  },
  {
    icon: MdPieChart,
    label: "Social Reach",
    value: "+240%"
  },
  {
    icon: MdShowChart,
    label: "Engagement",
    value: "6.8%"
  }
];

const AdShoot = () => {
  return (
    <>
      <Helmet>
        <title>Tanglome – Professional Product Photography & Social Media Management</title>
        <meta
          name="description"
          content="Professional product photography, e-commerce shoots, and social media management services. Book your product shoot and get 3 months free access to our premium tools."
        />
      </Helmet>

      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-24 px-6 relative overflow-hidden">

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold tracking-tight text-black">
            Product Photography & Social Media.
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Professional product shoots and social media management for e-commerce.
          </p>
        </div>

        {/* Product & Social Media Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

          {stats.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-purple-100 p-8 shadow-lg"
            >
              <s.icon className="text-4xl text-purple-600 mb-4" />
              <div className="text-3xl font-bold text-gray-900">{s.value}</div>
              <div className="text-gray-600 mt-1">{s.label}</div>
            </motion.div>
          ))}

        </div>

        {/* Premium Service Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 border border-purple-100 shadow-lg"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <MdTrendingUp className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Product Photography</h3>
            <p className="text-gray-600">Professional studio and on-location product shoots with perfect lighting and composition.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 border border-blue-100 shadow-lg"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
              <MdAnalytics className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">E-commerce Shoots</h3>
            <p className="text-gray-600">Complete catalog photography optimized for online sales platforms.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 border border-pink-100 shadow-lg"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl flex items-center justify-center mb-6">
              <MdShowChart className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Social Media Management</h3>
            <p className="text-gray-600">Complete social media strategy and content creation for all platforms.</p>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-600 to-indigo-700 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Brand?</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">Book your professional product shoot or social media management package today and get 3 months free access to our premium tools.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919585458794" target="_blank" rel="noopener noreferrer" className="block">
              <button className="w-full bg-white text-purple-700 font-bold py-4 px-8 rounded-2xl shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                WhatsApp Us
              </button>
            </a>
            <Link to="/schedule-meeting" className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 inline-block">
              Get Started
            </Link>
          </div>
        </motion.div>

      </div>

    </section>

    </>
  );
};

export default AdShoot;

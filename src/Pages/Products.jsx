import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

import { IoCall } from "react-icons/io5";
import Ecommerce from "../assets/Ecommerce.jpg";
import Billing from "../assets/Billing.jpg";
import BlockChain from "../assets/Blockchain.jpg";
import WebApplications from "../assets/Web.png";
import Analytics from "../assets/Analysis.png";
import Cloud from "../assets/Cloud.jpg";
import Contact from "../Components/Contact";
import windows from "../assets/windowsApp.jpg";

const softwareProducts = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "A powerful online store solution with secure payment integration.",
    image: Ecommerce,
  },
  {
    id: 2,
    name: "Billing & Invoicing Software",
    description: "Efficient and automated billing for businesses of all sizes.",
    image: Billing,
  },
  {
    id: 3,
    name: "Blockchain Solutions",
    description: "Secure and decentralized applications with blockchain technology.",
    image: BlockChain,
  },
  {
    id: 4,
    name: "Custom Web Applications",
    description: "Bespoke web solutions tailored to your business needs.",
    image: WebApplications,
  },
  {
    id: 5,
    name: "AI & Data Analytics",
    description: "Smart AI-powered insights to drive business growth.",
    image: Analytics,
  },
  {
    id: 6,
    name: "Cloud-Based Solutions",
    description: "Scalable and secure cloud infrastructure for your business.",
    image: Cloud,
  },
];

const Products = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (performance.navigation.type === 1) {
      navigate("/products");
    }
  }, [navigate]);

  return (
    <>
  {/* SEO Helmet */}
  <Helmet>
    <title>Tanglome Products - Powerful Software Solutions</title>
    <meta
      name="description"
      content="Discover Tanglome's range of software products including e-commerce platforms, billing systems, blockchain, AI, cloud and custom web applications."
    />
    <meta
      name="keywords"
      content="Software Products, E-Commerce Platform, Billing Software, Blockchain Solutions, Web Applications, AI, Cloud Solutions, Tanglome"
    />
    <meta name="author" content="Tanglome" />

    {/* Open Graph */}
    <meta property="og:title" content="Tanglome Software Products" />
    <meta property="og:description" content="Explore Tanglome's full suite of digital products designed to empower businesses." />
    <meta property="og:url" content="https://tanglome.com/products" />
    <meta property="og:image" content="https://tanglome.com/products-image.png" />

    {/* Twitter */}
    <meta name="twitter:title" content="Tanglome Software Products" />
    <meta name="twitter:description" content="Explore Tanglome's product lineup including e-commerce, cloud, blockchain, AI and more." />
    <meta name="twitter:image" content="https://tanglome.com/products-twitter.png" />
  </Helmet>

  <div>
    <motion.section
      className="w-full min-h-screen bg-gray-900 text-white px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <motion.div className="text-center" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text mt-15">
          Our Software Products
        </h1>

        <motion.p
          className="max-w-3xl mx-auto text-2xl mt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Empowering businesses with cutting-edge digital solutions.
        </motion.p>
      </motion.div>

      {/* Featured Products */}
      <motion.div className="max-w-5xl mx-auto mt-14" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="flex justify-center mt-10">
          <motion.button
            className="px-8 py-3 text-lg font-bold text-gray-900 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg relative overflow-hidden transition-all duration-300 ease-in-out 
              hover:scale-110 hover:shadow-[0px_0px_20px_rgba(255,215,0,0.8)]"
            whileHover={{ scale: 1.15, boxShadow: "0px 0px 25px rgba(255,215,0,0.9)" }}
            animate={{ y: [0, -5, 0], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
          >
            <span className="relative z-10">Our Featured Products</span>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="bg-gray-800 rounded-xl shadow-lg text-center p-8 border border-gray-200 transition duration-300 hover:shadow-2xl">
            <h2 className="text-white text-2xl font-semibold">Web Application</h2>
            <p className="text-gray-400 mt-2">Bespoke web solutions tailored to your business needs.</p>
            <img src={WebApplications} alt="Featured Web Application" className="w-full h-56 object-cover rounded-lg mt-4 shadow-lg" />
            <a
              href="https://thetee.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition duration-300"
            >
              View Our Previous Project
            </a>
          </div>

          <div className="bg-gray-800 rounded-xl shadow-lg text-center p-8 border border-gray-200 transition duration-300 hover:shadow-2xl">
            <h2 className="text-white text-2xl font-semibold">Windows Application</h2>
            <p className="text-gray-400 mt-2">Powerful desktop applications designed for performance and efficiency.</p>
            <img src={windows} alt="Featured Windows Application" className="w-full h-56 object-cover rounded-lg mt-4 shadow-lg" />
            <a
              href="https://www.boxbilling.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition duration-300"
            >
              View Our Previous Project
            </a>
          </div>
        </div>
      </motion.div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-12 max-w-5xl mx-auto">
        {softwareProducts.map((product, index) => (
          <motion.div
            key={product.id}
            className="relative bg-gray-800 rounded-xl shadow-lg text-center overflow-hidden transition-transform duration-300 hover:scale-105 group border border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.img src={product.image} alt={product.name} className="w-full h-40 rounded-t-xl object-cover shadow-lg group-hover:opacity-70 transition-opacity duration-300" />
              <motion.div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
            </div>

            <div className="p-6 relative">
              <h3 className="text-xl font-semibold text-gray-300">{product.name}</h3>
              <p className="text-gray-300 mt-2 text-sm">{product.description}</p>
              <motion.button
                className="mt-5 px-4 py-2 bg-blue-700 text-white font-sm rounded-full shadow-md hover:bg-blue-600 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
    <Contact />
  </div>
</>

  );
};

export default Products;


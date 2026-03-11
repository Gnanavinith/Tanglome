import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowRight, Star, Zap, Shield, TrendingUp } from "lucide-react";

const products = [
  {
    title: "Mobile Billing Shop",
    description: "Billing & stock management tailored for mobile stores.",
    image: "https://res.cloudinary.com/dj1mlgoem/image/upload/v1759498506/MobileBilling2_fzaasa.jpg",
    link: "/products/mobile-billing",
    features: ["Real-time Inventory", "Barcode Scanning", "Multi-payment", "Offline Support"],
    gradient: "from-blue-500 to-purple-600",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "CRM for Software Consulting",
    description: "End-to-end CRM for software consulting firms.",
    image: "https://res.cloudinary.com/dj1mlgoem/image/upload/v1759498522/DataVis_xrmj6i.webp",
    link: "/products/crm-consulting",
    features: ["Client Management", "Project Tracking", "HR Integration", "Analytics"],
    gradient: "from-green-500 to-cyan-600",
    icon: <Shield className="w-6 h-6" />
  },
];

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Products | Tanglome - No 1 IT Company in India & Tamil Nadu | Software Solutions</title>
        <meta
          name="description"
          content="Products by Tanglome - No 1 IT Company in India & Tamil Nadu. Innovative software solutions including Mobile Billing Shop and CRM for Software Consulting firms. Custom software products for businesses in India and worldwide."
        />
        <meta
          name="keywords"
          content="Tanglome products, Tanglome software products, mobile billing software, CRM software, software consulting CRM, billing management system, stock management software, mobile store billing, CRM for IT consulting, project tracking software, client management system, software products Coimbatore, business software solutions India, custom software products, software development company products, IT company products India, enterprise software solutions, business automation software, inventory management software, retail POS software, software as a service India, SaaS products India, custom CRM development, mobile billing solutions, stock management system, billing software India, retail management software, Point of Sale system, inventory tracking software, business management software, enterprise resource planning, business process automation, software solutions for SME, digital transformation products, cloud based software India, mobile retail solutions, e-commerce billing software, ERP solutions India, business intelligence tools, data analytics software, workflow management tools, employee management system, customer management software, order management system"
        />
        <meta name="author" content="Tanglome" />
        <meta property="og:title" content="Products | Software Solutions by Tanglome" />
        <meta property="og:description" content="Innovative software products: Mobile Billing Shop and CRM for Software Consulting firms." />
        <meta property="og:url" content="https://tanglome.com/products" />
        <meta property="og:type" content="website" />
      </Helmet>
    <div className="min-h-screen bg-gray-900 px-6 py-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         
          
          <h1 className="text-6xl mt-10 md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 text-transparent bg-clip-text">
            Our Products
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transform your business with our cutting-edge software solutions designed for modern enterprises
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 shadow-2xl group-hover:border-purple-500/50 transition-all duration-500"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${product.gradient} backdrop-blur-sm`}>
                      {product.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, featureIdx) => (
                        <span
                          key={featureIdx}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={product.link}
                  className="group/btn inline-flex items-center justify-between w-full p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <span className="text-white font-semibold">View details</span>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400 text-sm">Explore</span>
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-hover/btn:scale-110 transition-transform duration-300">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-400 mb-6">Need a custom solution?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30"
          >
            <span>Get Custom Quote</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Products;
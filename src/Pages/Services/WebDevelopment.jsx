import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Code, Globe, ShoppingBag, Smartphone, Users, BarChart3, Shield, Zap } from "lucide-react";

const WebDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const webDevServices = [
    {
      title: "Static Websites",
      icon: Globe,
      description: "Clean, fast-loading websites perfect for small businesses and portfolios",
      features: [
        "Responsive design",
        "SEO optimized",
        "Fast loading times",
        "Cross-browser compatibility",
        "Mobile-first approach"
      ]
    },
    {
      title: "Dynamic Websites",
      icon: Zap,
      description: "Interactive websites with databases and admin panels",
      features: [
        "Custom CMS",
        "User authentication",
        "Database integration",
        "API development",
        "Real-time updates"
      ]
    },
    {
      title: "E-commerce Websites",
      icon: ShoppingBag,
      description: "Complete online stores with shopping cart and payment integration",
      features: [
        "Shopping cart system",
        "Payment gateways",
        "Inventory management",
        "Order tracking",
        "Customer accounts"
      ]
    }
  ];

  const benefits = [
    {
      title: "Fast Loading",
      description: "Optimized websites that load in under 3 seconds",
      icon: Zap
    },
    {
      title: "SEO Friendly",
      description: "Built with search engine optimization in mind",
      icon: BarChart3
    },
    {
      title: "Secure",
      description: "Enterprise-grade security measures implemented",
      icon: Shield
    },
    {
      title: "Support",
      description: "24/7 support and maintenance services",
      icon: Users
    }
  ];

  return (
    <>
      <Helmet>
        <title>Best Web Development Company in India | Professional Website Development Services Tamil Nadu</title>
        <meta name="description" content="Best Web Development Company in India. Professional website development services in Tamil Nadu. Custom static, dynamic, and e-commerce websites. Affordable web development solutions for startups and enterprises." />
        <meta name="keywords" content="Best Web Development Company in India, Web Development Company in Tamil Nadu, Website Development Services India, Static Website Development India, Dynamic Website Development India, Ecommerce Website Development India, Ecommerce Website Development Tamil Nadu, Shopify Website Developer India, Custom Website Development India, Professional Website Designers India, Website Design Company Tamil Nadu, Affordable Website Development India, SEO Friendly Website Development, Corporate Website Development India, Startup Website Development India, Website Development Services Tamil Nadu, Web Development Services India, Custom Web Development India, Professional Web Development Services, Web Development Company India, Web Design Company India, Website Design Services India, Responsive Website Development, Mobile Friendly Website Development, Web Application Development India, Full Stack Web Development, Frontend Development India, Backend Development India, Website Maintenance Services India" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tanglome.com/services/web-development" />
      </Helmet>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;600;700&family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        * {
          font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Crimson Pro', Georgia, serif;
        }
        
        .font-mono {
          font-family: 'JetBrains Mono', 'Courier New', monospace;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Professional <span className="text-blue-600">Web Development</span> Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your business with our expert web development services. We create stunning, functional websites that drive results and engage your audience.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {webDevServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
                >
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 mb-4">
                      <Icon className="text-blue-600 text-xl" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              Why Choose Our <span className="text-blue-600">Web Development</span> Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-blue-600 w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Build Your Website?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Let's create a stunning website that drives results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/schedule-meeting" 
                  className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors"
                >
                  Get Free Consultation
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a
                  href="https://wa.me/919585458794"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-colors"
                >
                  WhatsApp Us
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDevelopment;
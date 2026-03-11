import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Brain,
  Cloud,
  TrendingUp,
  MessageCircle,
  Rocket,
  ArrowRight
} from "lucide-react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "Professional static, dynamic, and e-commerce websites tailored to your business needs",
      icon: Code,
      route: "/services/web-development",
      features: ["Static Websites", "Dynamic Websites", "Ecommerce Solutions"]
    },
    {
      title: "App Development",
      description: "Native and hybrid mobile applications for iOS and Android platforms",
      icon: Smartphone,
      route: "/services/app-development",
      features: ["Android Apps", "iOS Apps", "Hybrid Apps", "Admin Panels"]
    },
    {
      title: "AI Solutions",
      description: "Artificial intelligence and automation solutions to streamline your business",
      icon: Brain,
      route: "/services/ai-solutions",
      features: ["AI Chatbots", "Business Automation", "Custom AI Models"]
    },
    {
      title: "Cloud Services",
      description: "Cloud infrastructure, deployment, and management solutions",
      icon: Cloud,
      route: "/services/cloud-services",
      features: ["AWS Deployment", "Server Setup", "Database Hosting", "CI/CD Pipelines"]
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence",
      icon: TrendingUp,
      route: "/services/digital-marketing",
      features: ["Google Ads", "Social Media Ads", "SEO", "Content Marketing"]
    },
    {
      title: "WhatsApp Automation",
      description: "Automated WhatsApp messaging and customer service solutions",
      icon: MessageCircle,
      route: "/services/whatsapp-automation",
      features: ["Bulk Messaging", "Auto Replies", "Order Notifications", "CRM Integration"]
    },
    {
      title: "MVP Development",
      description: "Rapid prototyping and minimum viable product development",
      icon: Rocket,
      route: "/services/mvp-development",
      features: ["Startup MVP", "Rapid Prototyping", "UI/UX Design", "Backend APIs"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tanglome - No 1 IT Company in India | Web Development, App Development, AI Solutions, Digital Marketing Services in Tamil Nadu</title>
        <meta name="description" content="Tanglome - No 1 IT Company in India & Tamil Nadu. Professional web development, app development, AI solutions, cloud services, digital marketing, WhatsApp automation, and MVP development. Best IT services company in India with affordable solutions." />
        <meta name="keywords" content="Tanglome IT Solutions, Tanglome India, Tanglome Tamil Nadu, Tanglome Web Development Company, Tanglome Digital Agency India, No 1 IT Company in India, No 1 Web Development Company in India, No 1 IT Company in Tamil Nadu, Best Web Development Company in India, Web Development Company in Tamil Nadu, Mobile App Development Company India, Android App Development India, iOS App Development India, Hybrid App Development India, App Development Company Tamil Nadu, Custom Mobile App Development India, AI Development Company India, Artificial Intelligence Solutions India, AI Chatbot Development India, Business Automation AI India, Machine Learning Development India, AI Software Company Tamil Nadu, Cloud Services Company India, AWS Deployment Services India, Cloud Hosting Services India, DevOps Services India, Digital Marketing Company India, Digital Marketing Agency Tamil Nadu, SEO Company India, SEO Services Tamil Nadu, Google Ads Agency India, Facebook Ads Agency India, WhatsApp Automation Services India, WhatsApp Marketing Company India, Bulk WhatsApp Messaging India, MVP Development Company India, Startup MVP Development India, IT Company in Tamil Nadu, Software Company in Tamil Nadu, IT Services Company India, Best IT Company in India, Website Development Services India, Ecommerce Website Development India, Custom Website Development India, Professional Website Designers India, SEO Friendly Website Development, Corporate Website Development India" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Tanglome" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Tanglome - No 1 IT Company in India | Web Development, App Development, AI Solutions, Digital Marketing Services in Tamil Nadu" />
        <meta property="og:description" content="Tanglome - No 1 IT Company in India & Tamil Nadu. Professional web development, app development, AI solutions, cloud services, digital marketing, WhatsApp automation, and MVP development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tanglome.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tanglome - No 1 IT Company in India | Web Development, App Development, AI Solutions, Digital Marketing Services in Tamil Nadu" />
        <meta name="twitter:description" content="Tanglome - No 1 IT Company in India & Tamil Nadu. Professional web development, app development, AI solutions, cloud services, digital marketing, WhatsApp automation, and MVP development." />
        <link rel="canonical" href="https://tanglome.com/services" />
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
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">
                Comprehensive IT Solutions
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-[0.95]">
              Our <span className="text-blue-600">Services</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-4 leading-relaxed max-w-3xl mx-auto">
              Transform your business with our comprehensive range of <span className="font-semibold text-gray-900">IT services</span>
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              At Tanglome, we blend innovation with expertise to craft impactful digital solutions. From startups to industry leaders, we drive growth and transformation through cutting-edge technology and strategic thinking.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
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
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
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

          {/* CTA Section */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Let's discuss how our IT services can help you achieve your goals and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/schedule-meeting" 
                  className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/919585458794"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-700 transition-colors"
                >
                  WhatsApp Us
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Brain, Bot, Cpu, Zap, Users, BarChart3, Shield, Settings } from "lucide-react";

const AISolutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aiServices = [
    {
      title: "AI Chatbots",
      icon: Bot,
      description: "Intelligent chatbots for customer service and engagement",
      features: [
        "Natural language processing",
        "24/7 availability",
        "Multi-language support",
        "Integration with platforms",
        "Learning capabilities"
      ]
    },
    {
      title: "Business Automation",
      icon: Zap,
      description: "Automate repetitive tasks and streamline operations",
      features: [
        "Workflow automation",
        "Process optimization",
        "Data processing",
        "Report generation",
        "Task scheduling"
      ]
    },
    {
      title: "Recommendation Systems",
      icon: BarChart3,
      description: "Personalized recommendations for better user experience",
      features: [
        "User behavior analysis",
        "Personalized content",
        "Product suggestions",
        "Predictive analytics",
        "Real-time updates"
      ]
    },
    {
      title: "Custom AI Models",
      icon: Cpu,
      description: "Tailored AI solutions for specific business needs",
      features: [
        "Custom algorithms",
        "Machine learning",
        "Deep learning",
        "Computer vision",
        "Predictive modeling"
      ]
    }
  ];

  const benefits = [
    {
      title: "Efficiency",
      description: "Automate tasks to save time and resources",
      icon: Zap
    },
    {
      title: "Intelligence",
      description: "Data-driven insights for better decisions",
      icon: Brain
    },
    {
      title: "Scalability",
      description: "AI solutions that grow with your business",
      icon: Settings
    },
    {
      title: "ROI",
      description: "Increase revenue with AI-powered solutions",
      icon: BarChart3
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Development Company India | Artificial Intelligence Solutions Tamil Nadu</title>
        <meta name="description" content="AI Development Company India. Professional artificial intelligence solutions in Tamil Nadu. AI chatbots, business automation, custom AI models, and machine learning services for startups and enterprises." />
        <meta name="keywords" content="AI Development Company India, Artificial Intelligence Solutions India, AI Chatbot Development India, Business Automation AI India, Machine Learning Development India, AI Software Company Tamil Nadu, Custom AI Model Development India, AI Integration Services India, AI Powered Business Solutions India, Smart Automation Solutions India, Natural Language Processing India, Computer Vision Solutions India, Predictive Analytics India, Machine Learning Services India, Deep Learning Development India, AI Consulting Services India, AI Implementation India, Neural Networks Development India, AI Development Services Tamil Nadu, Business Intelligence Solutions India, AI for Startups India, Enterprise AI Solutions India, Cognitive Computing Solutions India, AI Strategy Consulting India" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tanglome.com/services/ai-solutions" />
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
              Intelligent <span className="text-blue-600">AI Solutions</span> & Automation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your business with our cutting-edge AI solutions. We create intelligent systems that automate processes, enhance customer experiences, and drive growth.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {aiServices.map((service, index) => {
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
              Why Choose Our <span className="text-blue-600">AI Solutions</span>?
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
              <h2 className="text-3xl font-bold mb-4">Ready to Transform with AI?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Let's create intelligent AI solutions that revolutionize your business.
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

export default AISolutions;
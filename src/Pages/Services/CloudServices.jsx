import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Cloud, Server, Database, Shield, Zap, BarChart3, Lock, Settings } from "lucide-react";

const CloudServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cloudServices = [
    {
      title: "AWS Deployment",
      icon: Cloud,
      description: "Scalable cloud infrastructure on Amazon Web Services",
      features: [
        "EC2 instances",
        "S3 storage",
        "Load balancing",
        "Auto-scaling",
        "Global availability"
      ]
    },
    {
      title: "Server Setup",
      icon: Server,
      description: "Secure and reliable server configuration and management",
      features: [
        "Linux/Windows servers",
        "Security hardening",
        "Monitoring setup",
        "Backup solutions",
        "Performance tuning"
      ]
    },
    {
      title: "Database Hosting",
      icon: Database,
      description: "Managed database solutions for optimal performance",
      features: [
        "MySQL/PostgreSQL",
        "MongoDB/Redis",
        "Backup & recovery",
        "Performance optimization",
        "Security management"
      ]
    },
    {
      title: "CI/CD Pipelines",
      icon: Zap,
      description: "Continuous integration and deployment automation",
      features: [
        "GitLab/GitHub Actions",
        "Docker containers",
        "Automated testing",
        "Rollback capabilities",
        "Monitoring integration"
      ]
    }
  ];

  const benefits = [
    {
      title: "Reliability",
      description: "99.9% uptime with redundant systems",
      icon: Shield
    },
    {
      title: "Scalability",
      description: "Scale resources as your business grows",
      icon: BarChart3
    },
    {
      title: "Security",
      description: "Enterprise-grade security measures",
      icon: Lock
    },
    {
      title: "Support",
      description: "24/7 monitoring and support",
      icon: Settings
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services Company India | AWS Deployment Services Tamil Nadu</title>
        <meta name="description" content="Cloud Services Company India. Professional AWS deployment services, server setup, and cloud infrastructure in Tamil Nadu. Secure and scalable cloud solutions for businesses." />
        <meta name="keywords" content="Cloud Services Company India, AWS Deployment Services India, Cloud Hosting Services India, DevOps Services India, Server Setup Company India, Cloud Migration Services India, Cloud Security Solutions India, Database Hosting India, CI CD Pipeline Setup India, Cloud Infrastructure Management India, Cloud Computing Services India, Amazon Web Services India, Cloud Solution Provider India, Managed Cloud Services India, Cloud Storage Solutions India, Cloud Backup Services India, Virtual Private Cloud India, Cloud Monitoring Services India, Cloud Automation India, Kubernetes Services India, Docker Containerization India, Microservices Architecture India, Cloud Database Management India, Hybrid Cloud Solutions India, Multi Cloud Strategy India, Cloud Cost Optimization India, Disaster Recovery Services India, Cloud Consulting India" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tanglome.com/services/cloud-services" />
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
              Professional <span className="text-blue-600">Cloud Services</span> & Infrastructure
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Scale your business with our comprehensive cloud services. We provide reliable, secure, and scalable infrastructure solutions to power your applications.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {cloudServices.map((service, index) => {
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
              Why Choose Our <span className="text-blue-600">Cloud Services</span>?
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
              <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Infrastructure?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Let's build a robust cloud infrastructure that powers your business growth.
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

export default CloudServices;
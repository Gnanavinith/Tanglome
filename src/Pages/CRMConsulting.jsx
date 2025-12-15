import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Star, Users, BarChart3, Shield, Zap, Rocket, Target, TrendingUp } from "lucide-react";

const CRMConsulting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client & Lead Management",
      description: "Comprehensive client profiles and lead tracking"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Project Tracking & Collaboration",
      description: "Real-time project updates and team collaboration"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Employee & HR Management",
      description: "Complete HR suite with payroll and performance"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Finance & Invoicing",
      description: "Automated billing and financial reporting"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Data-driven insights for better decisions"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Integrated Support",
      description: "Ticketing system with SLA monitoring"
    }
  ];

  const benefits = [
    "Streamlines client and project management in one platform",
    "Improves collaboration between teams (HR, Sales, PMs, Developers)",
    "Enhances decision-making with data-driven analytics",
    "Reduces manual workload with automation in HR & Finance",
    "Provides transparency for clients with real-time project updates",
    "Boosts revenue tracking and lead conversion efficiency"
  ];

  return (
    <div className="min-h-screen bg-gray-900 px-6 py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 relative z-10">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 text-transparent bg-clip-text">
            CRM for Software Consulting
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            All-in-one platform to manage clients, projects, teams, and finances with enterprise-grade security and AI-powered insights
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Powerful <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700 p-8">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              How It <span className="bg-gradient-to-r from-green-400 to-teal-400 text-transparent bg-clip-text">Helps</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Advanced Features */}
        <motion.div
          className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm rounded-3xl border border-purple-500/30 p-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Capabilities</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-purple-400" />
                AI-Powered Features
              </h3>
              <ul className="space-y-4">
                {[
                  "AI-Powered Lead Scoring & Client Sentiment Analysis",
                  "Predictive Deadline Alerts for Projects",
                  "AI-Driven Career Path & Performance Insights",
                  "Smart Resource Allocation Recommendations"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-blue-400" />
                Future Innovations
              </h3>
              <ul className="space-y-4">
                {[
                  "Blockchain Smart Contracts for Client Agreements",
                  "Voice Assistant for CRM Actions (hands-free ops)",
                  "Mobile App with Offline Mode for remote teams",
                  "Advanced Predictive Analytics Engine"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl border border-gray-700 p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Consulting Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of consulting firms that have streamlined their operations with our powerful CRM platform
            </p>
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CRMConsulting;
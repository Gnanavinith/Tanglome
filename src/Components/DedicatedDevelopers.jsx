import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MdWeb,
  MdCloud,
  MdSmartToy,
  MdAutoAwesome,
  MdPeopleAlt,
  MdSearch,
  MdDataUsage,
  MdRocketLaunch,
  MdTrendingUp,
  MdSecurity,
  MdGroups,
  MdTimeline
} from "react-icons/md";

const DedicatedDevelopers = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for demo purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const developers = [
    {
      icon: MdWeb,
      title: "Web Applications",
      description: "Fast, secure web apps built for real business workflows",
    },
    {
      icon: MdCloud,
      title: "SaaS Solutions",
      description: "Scalable SaaS platforms designed for growth and users",
    },
    {
      icon: MdPeopleAlt,
      title: "CRM Systems",
      description: "Centralize customers, leads, and sales processes",
    },
    {
      icon: MdSmartToy,
      title: "AI Agents",
      description: "Intelligent agents that handle customer queries and tasks",
    },
    {
      icon: MdAutoAwesome,
      title: "AI Automations",
      description: "Smart workflows that reduce manual work and errors",
    },
    {
      icon: MdDataUsage,
      title: "Data Analytics",
      description: "Actionable insights from your business data",
    }
  ];

  const capabilities = [
    { 
      title: "Any Technology Stack", 
      description: "React, Node.js, Python, PHP, or your preferred tech",
      icon: MdWeb 
    },
    { 
      title: "Any Industry", 
      description: "Retail, healthcare, fintech, SaaS, manufacturing, or services",
      icon: MdPeopleAlt 
    },
    { 
      title: "Any Project Size", 
      description: "From MVP to enterprise-scale platforms",
      icon: MdCloud 
    },
    { 
      title: "Any Complexity", 
      description: "Simple apps to complex AI-driven solutions",
      icon: MdSmartToy 
    }
  ];

  // Skeleton component for mobile-friendly loading
  const SkeletonCard = () => (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
    </div>
  );

  const SkeletonCapability = () => (
    <div className="p-4 bg-black/5 rounded-xl border border-[#A556F8]/30">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 bg-gray-200 rounded"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    </div>
  );

  const SkeletonService = () => (
    <div className="p-6 bg-black/5 rounded-2xl border border-[#A556F8]/30">
      <div className="h-12 w-12 bg-gray-200 rounded-xl mb-4"></div>
      <div className="h-5 bg-gray-200 rounded w-4/5 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
    </div>
  );

  if (isLoading) {
    return (
      <section className="w-full bg-white py-20 px-6 sm:px-10 md:px-20 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SKELETON */}
            <div className="space-y-8">
              <div className="h-8 bg-gray-200 rounded w-1/3"></div>
              <div>
                <div className="h-16 bg-gray-200 rounded w-4/5 mb-4"></div>
                <div className="h-16 bg-gray-200 rounded w-3/5"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5 mb-6"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <SkeletonCapability key={i} />
                ))}
              </div>
              
              <div className="h-12 bg-gray-200 rounded w-64"></div>
            </div>
            
            {/* RIGHT SKELETON */}
            <div className="hidden lg:grid grid-cols-2 gap-6">
              {[...Array(6)].map((_, i) => (
                <SkeletonService key={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full bg-white py-20 px-6 sm:px-10 md:px-20 relative">

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>

      {/* Background Blobs - constrained to prevent horizontal overflow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#A556F8]/20 rounded-full blur-3xl max-w-[100vw] max-h-[100vh]" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#4922E5]/20 rounded-full blur-3xl max-w-[100vw] max-h-[100vh]" />

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div className="space-y-8" variants={itemVariants}>

            {/* Badge */}
            

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#020202] leading-tight">
              Build <span className="text-[#A556F8]">Reliable</span>
              <br />
              <span className="text-[#4922E5]">Digital Products</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-[#4922E5]/80">
              We design and develop{" "}
              <span className="text-[#020202] font-semibold">
                practical, scalable software
              </span>{" "}
              that helps businesses automate operations, increase efficiency,
              and grow with confidence.
            </p>

            {/* Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="p-4 bg-black/5 rounded-xl border border-[#A556F8]/30 hover:bg-[#A556F8]/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <capability.icon className="text-[#A556F8] text-2xl" />
                    <div>
                      <h3 className="font-bold text-[#020202] text-lg">
                        {capability.title}
                      </h3>
                      <p className="text-[#4922E5]/70 text-sm mt-1">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="https://wa.me/919585458794" target="_blank" rel="noopener noreferrer" className="block">
                <button className="px-6 py-4 bg-white text-[#4922E5] font-bold rounded-2xl shadow-lg border-2 border-[#4922E5] hover:bg-[#4922E5] hover:text-white transition-colors">
                  <span className="flex items-center gap-2">
                    <MdRocketLaunch className="text-xl" />
                    WhatsApp Us
                  </span>
                </button>
              </a>
              <Link to="/schedule-meeting" className="block">
                <button className="px-6 py-4 bg-gradient-to-r from-[#A556F8] to-[#4922E5] text-white font-bold rounded-2xl shadow-lg hover:opacity-90 transition-opacity">
                  <span className="flex items-center gap-2">
                    <MdRocketLaunch className="text-xl" />
                    See What We've Built →
                  </span>
                </button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT CARDS - Mobile & Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {developers.map((dev, index) => (
              <motion.div
                key={index}
                className="p-6 bg-black/5 rounded-2xl border border-[#A556F8]/30 hover:shadow-lg transition"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-[#A556F8] to-[#4922E5] text-white inline-flex mb-4">
                  <dev.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-[#020202] mb-2">
                  {dev.title}
                </h3>
                <p className="text-[#4922E5]/80 text-sm">
                  {dev.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#A556F8]/20 to-[#4922E5]/20 rounded-3xl border p-8 text-center">
          <h3 className="text-2xl font-bold text-[#020202] mb-4">
            Let’s Build Something That Works
          </h3>
          <p className="text-[#4922E5]/80 mb-6">
            Tell us your idea or problem — we'll suggest the right technical solution,
            timeline, and approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/919585458794" target="_blank" rel="noopener noreferrer" className="block">
              <button className="px-6 py-3 bg-white text-[#4922E5] font-bold rounded-full border-2 border-[#4922E5] hover:bg-[#4922E5] hover:text-white transition-colors">
                WhatsApp Us
              </button>
            </a>
            <Link to="/schedule-meeting" className="block">
              <button className="px-6 py-3 bg-gradient-to-r from-[#A556F8] to-[#4922E5] text-white font-bold rounded-full hover:opacity-90 transition-opacity">
                Start Your Project
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DedicatedDevelopers;

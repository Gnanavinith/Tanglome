import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebookF, FaInstagram, FaBullseye, FaRocket } from "react-icons/fa";
import { MdAdsClick, MdTrendingUp, MdPaid } from "react-icons/md";
import { Link } from "react-router-dom";

const AdCampaigns = () => {
  const [activePlatform, setActivePlatform] = useState("google");

  const platforms = [
    {
      id: "google",
      name: "Google Ads",
      icon: <FaGoogle className="text-2xl" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      stats: ["2.8M+ Searches/sec", "95% Reach", "Strong ROI"]
    },
    {
      id: "meta",
      name: "Meta Ads",
      icon: <FaFacebookF className="text-2xl" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      stats: ["2.9B+ Users", "Precise Targeting", "High ROI"]
    },
    {
      id: "instagram",
      name: "Instagram Ads",
      icon: <FaInstagram className="text-2xl" />,
      color: "from-pink-500 to-orange-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
      stats: ["1B+ Users", "High Engagement", "Strong Conversions"]
    }
  ];

  const services = [
    {
      icon: <FaBullseye />,
      title: "Targeted Campaigns",
      description: "Reach your ideal audience"
    },
    {
      icon: <MdTrendingUp />,
      title: "Growth Strategy",
      description: "Smart scaling approach"
    },
    {
      icon: <MdPaid />,
      title: "ROI Focused",
      description: "Maximize every rupee"
    }
  ];

  const campaignTypes = [
    {
      title: "Search Campaigns",
      platform: "Google",
      description: "Appear at the top of search results",
      metrics: ["PPC Model", "High Intent"]
    },
    {
      title: "Display Ads",
      platform: "Google",
      description: "Visual banners across websites & apps",
      metrics: ["Brand Reach", "Remarketing"]
    },
    {
      title: "Social Ads",
      platform: "Meta/Instagram",
      description: "Engage users on social platforms",
      metrics: ["Story Ads", "Video Ads"]
    }
  ];

  return (
    <section className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 py-16 px-6 md:px-20 text-white relative overflow-hidden">

      {/* Background lights */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[linear-gradient(90deg,rgba(66,133,244,0.15)_1px,transparent_1px),linear-gradient(rgba(66,133,244,0.15)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-400/30">
              <MdAdsClick className="text-blue-300 text-xl" />
              <span className="text-blue-300 font-semibold">Tanglome Ad Campaigns</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Scale Your Business with  
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Google & Meta Ads
              </span>
            </h2>

            {/* Manage Platforms */}
            <div className="flex flex-wrap gap-4">
              {platforms.map((p) => (
                <motion.button
                  key={p.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActivePlatform(p.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-xl border transition-all ${
                    activePlatform === p.id
                      ? `bg-gradient-to-r ${p.color} text-white`
                      : `${p.bgColor} ${p.borderColor} text-gray-300 hover:text-white`
                  }`}
                >
                  {p.icon}
                  <span className="font-semibold">{p.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Platform Stats */}
            <motion.div
              key={activePlatform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-2xl border ${
                platforms.find((p) => p.id === activePlatform)?.borderColor
              } ${platforms.find((p) => p.id === activePlatform)?.bgColor}`}
            >
              <div className="grid sm:grid-cols-3 gap-4">
                {platforms
                  .find((p) => p.id === activePlatform)
                  ?.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <h4 className="text-xl font-bold">{stat}</h4>
                    </div>
                  ))}
              </div>
            </motion.div>

            {/* Services */}
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-400/30 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{service.title}</h4>
                      <p className="text-sm text-gray-400">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE — Dashboard (Simplified) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/40 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl"
          >
            {/* Dashboard Title */}
            <div className="flex items-center justify-between mb-8">
              <span className="font-bold text-white">Campaign Overview</span>
              <span className="text-blue-400 font-semibold">Active</span>
            </div>

            {/* Campaign Types */}
            <h3 className="text-xl font-bold mb-4">Campaign Types</h3>
            <div className="grid grid-cols-2 gap-4">
              {campaignTypes.map((c, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl border ${
                    c.platform === "Google"
                      ? "bg-blue-500/10 border-blue-300/20"
                      : "bg-purple-500/10 border-purple-300/20"
                  }`}
                >
                  <h4 className="font-semibold text-white mb-1">{c.title}</h4>
                  <p className="text-sm text-gray-400 mb-2">{c.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.metrics.map((m, idx) => (
                      <span key={idx} className="text-xs bg-white/10 px-2 py-1 rounded">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link to="/schedule-meeting" className="block mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl"
              >
                <FaRocket className="inline-block mr-2" />
                Launch Your Ad Campaign
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdCampaigns;

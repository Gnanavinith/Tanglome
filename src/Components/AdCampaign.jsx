import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MdAdsClick, 
  MdTrendingUp, 
  MdPaid, 
  MdCheckCircle, 
  MdArrowForward, 
  MdSpeed, 
  MdGroups, 
  MdInsights,
  MdRocket,
  MdSearch,
  MdImage,
  MdPhoneAndroid,
  MdBusiness,
  MdBarChart
} from "react-icons/md";
import { Link } from "react-router-dom";

const AdCampaigns = () => {
  const [activePlatform, setActivePlatform] = useState("google");
  const [activeTab, setActiveTab] = useState("overview");

  const platforms = [
    {
      id: "google",
      name: "Google Ads",
      icon: MdSearch,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-600",
      features: ["Search Ads", "Display Network", "YouTube Ads", "Shopping Ads"],
      description: "Reach customers when they search for your products"
    },
    {
      id: "meta",
      name: "Meta Ads",
      icon: MdPhoneAndroid,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      features: ["Facebook Ads", "Instagram Ads", "Audience Network", "Messenger"],
      description: "Connect with billions on Facebook and Instagram"
    },
    {
      id: "linkedin",
      name: "LinkedIn Ads",
      icon: MdBusiness,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-600",
      features: ["Sponsored Content", "Text Ads", "InMail", "Lead Forms"],
      description: "Reach professionals and decision-makers"
    }
  ];

  const services = [
    {
      icon: MdGroups,
      title: "Targeted Campaigns",
      description: "Reach your ideal audience with precision",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MdTrendingUp,
      title: "Growth Strategy",
      description: "Smart scaling for maximum impact",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MdPaid,
      title: "ROI Focused",
      description: "Maximize returns on every rupee",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MdSpeed,
      title: "Quick Results",
      description: "See measurable results fast",
      color: "from-orange-500 to-red-500"
    }
  ];

  const campaignTypes = [
    {
      title: "Search Campaigns",
      platform: "Google",
      icon: MdSearch,
      description: "Appear when customers search",
      color: "blue"
    },
    {
      title: "Display Ads",
      platform: "Google",
      icon: MdImage,
      description: "Visual banners across the web",
      color: "blue"
    },
    {
      title: "Social Ads",
      platform: "Meta",
      icon: MdPhoneAndroid,
      description: "Engage on social platforms",
      color: "purple"
    },
    {
      title: "Lead Generation",
      platform: "LinkedIn",
      icon: MdBusiness,
      description: "B2B lead campaigns",
      color: "cyan"
    }
  ];

  const currentPlatform = platforms.find(p => p.id === activePlatform);

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-10 text-gray-900 relative">

      {/* Subtle Background Elements - constrained to prevent horizontal overflow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none max-w-[100vw] max-h-[100vh]" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none max-w-[100vw] max-h-[100vh]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-4 py-2 rounded-full border-2 border-blue-500/20 shadow-sm"
            >
              <MdAdsClick className="text-blue-600 text-lg sm:text-xl" />
              <span className="text-blue-700 font-bold font-['Space Grotesk'] text-sm sm:text-base">
                Tanglome Ad Campaigns
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-3"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#020202] leading-[1.1]">
                Scale Your Business{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    with Ads
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                    <path d="M0,4 Q25,0 50,4 T100,4" stroke="#2563eb" strokeWidth="3" fill="none" opacity="0.3"/>
                  </svg>
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Drive targeted traffic and maximize ROI with expertly managed campaigns across Google, Meta, and LinkedIn
              </p>
            </motion.div>

            {/* Platform Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3"
            >
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Choose Platform</h3>
              <div className="flex flex-wrap gap-3">
                {platforms.map((platform) => (
                  <motion.button
                    key={platform.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActivePlatform(platform.id)}
                    className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 font-semibold text-sm sm:text-base ${
                      activePlatform === platform.id
                        ? `bg-gradient-to-r ${platform.color} text-white border-transparent shadow-lg`
                        : `bg-white ${platform.borderColor} ${platform.textColor} hover:shadow-md`
                    }`}
                  >
                    <platform.icon className="text-xl sm:text-2xl" />
                    <span className="hidden sm:inline">{platform.name}</span>
                    <span className="sm:hidden">{platform.name.split(' ')[0]}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Platform Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlatform}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`p-5 sm:p-6 rounded-2xl border-2 ${currentPlatform?.borderColor} ${currentPlatform?.bgColor} shadow-md`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${currentPlatform?.color} flex items-center justify-center shadow-lg`}>
                    {currentPlatform && <currentPlatform.icon className="text-white text-3xl" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#020202] text-lg sm:text-xl">{currentPlatform?.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-0.5">{currentPlatform?.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {currentPlatform?.features.map((feature, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 text-xs sm:text-sm bg-white px-3 py-2 rounded-lg border-2 border-gray-200 font-medium text-gray-700 hover:border-blue-300 transition-colors">
                      <MdCheckCircle className="text-green-500 text-sm" />
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
            >
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group p-4 sm:p-5 bg-white border-2 border-gray-100 hover:border-blue-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md`}>
                      <service.icon className="text-white text-xl sm:text-2xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-[#020202] text-base sm:text-lg mb-1 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="space-y-4 pt-2"
            >
              <Link to="/schedule-meeting" className="block">
                <button className="group relative w-full sm:w-auto overflow-hidden px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-3">
                    <MdRocket className="text-xl sm:text-2xl group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-base sm:text-lg">Launch Your Campaign</span>
                    <MdArrowForward className="text-xl sm:text-2xl group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </Link>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                  <MdCheckCircle className="text-green-500 text-base" />
                  <span>Free strategy session</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                  <MdCheckCircle className="text-green-500 text-base" />
                  <span>Results in 30 days</span>
                </div>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-3 border-white shadow-md flex items-center justify-center text-white text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-[#020202]">200+</span> successful campaigns
                </p>
              </div>
            </motion.div>

          </div>

          {/* RIGHT - Dashboard */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              {/* Main Dashboard Card */}
              <div className="bg-white border-2 border-gray-100 rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl">
                
                {/* Dashboard Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                      <MdInsights className="text-white text-2xl" />
                    </div>
                    <span className="font-extrabold text-[#020202] text-lg sm:text-xl">Campaign Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                    <span className="text-green-700 text-xs sm:text-sm font-bold">Active</span>
                  </div>
                </div>

                {/* Mobile Tab Navigation */}
                <div className="lg:hidden flex gap-2 overflow-x-auto pb-4 mb-4 scrollbar-hide border-b border-gray-100">
                  {['overview', 'campaigns'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-shrink-0 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                        activeTab === tab
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Performance Metrics */}
                <div className={`grid grid-cols-3 gap-3 sm:gap-4 mb-6 ${activeTab === 'overview' ? 'block' : 'hidden lg:grid'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 sm:p-5 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-blue-100 text-center group cursor-pointer"
                  >
                    <MdBarChart className="text-blue-600 text-2xl sm:text-3xl mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl sm:text-3xl font-extrabold text-blue-600">350%</div>
                    <div className="text-xs text-gray-600 mt-1 font-medium">ROI Growth</div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 sm:p-5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-100 text-center group cursor-pointer"
                  >
                    <MdTrendingUp className="text-green-600 text-2xl sm:text-3xl mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl sm:text-3xl font-extrabold text-green-600">5.2K</div>
                    <div className="text-xs text-gray-600 mt-1 font-medium">Leads</div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-4 sm:p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border-2 border-purple-100 text-center group cursor-pointer"
                  >
                    <MdAdsClick className="text-purple-600 text-2xl sm:text-3xl mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl sm:text-3xl font-extrabold text-purple-600">2.8%</div>
                    <div className="text-xs text-gray-600 mt-1 font-medium">Click Rate</div>
                  </motion.div>
                </div>

                {/* Campaign Types */}
                <div className={`${activeTab === 'campaigns' ? 'block' : 'hidden lg:block'}`}>
                  <h3 className="text-lg sm:text-xl font-bold text-[#020202] mb-4">Campaign Types</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {campaignTypes.map((campaign, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 cursor-pointer group ${
                          campaign.color === 'blue' 
                            ? 'bg-blue-50 border-blue-200 hover:border-blue-300 hover:shadow-lg'
                            : campaign.color === 'purple'
                            ? 'bg-purple-50 border-purple-200 hover:border-purple-300 hover:shadow-lg'
                            : 'bg-cyan-50 border-cyan-200 hover:border-cyan-300 hover:shadow-lg'
                        }`}
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md ${
                            campaign.color === 'blue' 
                              ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
                              : campaign.color === 'purple'
                              ? 'bg-gradient-to-br from-purple-500 to-pink-500'
                              : 'bg-gradient-to-br from-cyan-500 to-blue-500'
                          }`}>
                            <campaign.icon className="text-white text-2xl group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-[#020202] text-sm sm:text-base mb-1 group-hover:text-blue-600 transition-colors">
                              {campaign.title}
                            </h4>
                            <p className="text-xs text-gray-600 mb-1">{campaign.description}</p>
                            <div className="text-xs text-gray-500 font-medium">
                              <span className="text-blue-600 font-bold">{campaign.platform}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Special Offer Banner */}
                <div className="mt-6 p-4 sm:p-5 bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                      🎯
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center gap-1 bg-red-100 text-red-600 text-xs font-bold px-2.5 py-1 rounded-full border border-red-200">
                          <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
                          LIMITED OFFER
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Get <span className="font-bold text-[#020202]">₹10,000 free ad credit</span> with your first campaign
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Elements - Desktop Only */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="hidden lg:block absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl rotate-12 shadow-xl"
              ></motion.div>

              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
                className="hidden lg:block absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl -rotate-12 shadow-xl"
              ></motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdCampaigns; 
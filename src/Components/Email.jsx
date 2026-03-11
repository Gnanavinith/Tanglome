import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaRocket, 
  FaPaperPlane, 
  FaClock, 
  FaHeadset, 
  FaStar,
  FaArrowRight,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaComment,
  FaGlobe
} from "react-icons/fa";

const Email = () => {
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [errors, setErrors] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  // Common country codes for quick selection
  const commonCountryCodes = [
    { code: "+1", country: "US" },
    { code: "+44", country: "UK" },
    { code: "+91", country: "IN" },
    { code: "+61", country: "AU" },
    { code: "+49", country: "DE" },
    { code: "+33", country: "FR" },
    { code: "+81", country: "JP" },
    { code: "+86", country: "CN" },
    { code: "+971", country: "AE" },
    { code: "+65", country: "SG" },
  ];

  const validateForm = () => {
    let newErrors = {};
    if (!name.trim() || name.length < 3) newErrors.name = "Name must be at least 3 characters.";
    
    // Updated phone validation
    const fullPhoneNumber = countryCode + phoneNumber;
    if (!phoneNumber || phoneNumber.length < 7) newErrors.phone = "Enter a valid phone number (at least 7 digits).";
    
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email address.";
    if (!message.trim() || message.length < 10) newErrors.message = "Message must be at least 10 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    const serviceId = "service_fredf0g";
    const templateId = "template_bsxc4d9";
    const publicKey = "GtNsxnCfPpksIv9yY";

    const templateParams = { 
      from_name: name, 
      from_email: email, 
      from_number: countryCode + phoneNumber, // Full phone number with country code
      message: message 
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log("Email Sent Successfully:", response);
      setSuccess("🎉 Amazing! Your message has been launched! We'll orbit back to you within 24 hours!");
      
      setName("");
      setCountryCode("+91");
      setPhoneNumber("");
      setEmail("");
      setMessage("");
      setErrors({});
      
      setTimeout(() => {
        setSuccess("");
      }, 5000);
    })
    .catch((error) => {
      console.error("Error Sending Email:", error);
      setSuccess("🚀 Launch failed! Let's try that again. Please check your connection and retry.");
      
      setTimeout(() => {
        setSuccess("");
      }, 5000);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  return (
    <div className="relative bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-bl from-[#A556F8]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-[#4922E5]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>

      <div className="relative z-0 flex flex-col lg:flex-row items-center justify-between w-full h-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Left Side - Engaging Content */}
        <motion.div 
          className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 px-4 lg:px-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#020202] mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Ready to Start?
            <br />
            <span className="text-[#A556F8]">Let's Build Together!</span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Your vision deserves exceptional execution. 
            <span className="text-[#4922E5] font-semibold">
              {" "}Let's transform your ideas into digital reality!
            </span>
          </motion.p>

          {/* Benefits Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {[
              { 
                icon: <FaRocket className="text-2xl text-[#A556F8]" />, 
                title: "Fast Launch", 
                desc: "Quick project kickoff" 
              },
              { 
                icon: <FaHeadset className="text-2xl text-[#4922E5]" />, 
                title: "24/7 Support", 
                desc: "Always here to help" 
              },
              { 
                icon: <FaStar className="text-2xl text-yellow-500" />, 
                title: "Premium Quality", 
                desc: "Exceptional results" 
              },
              { 
                icon: <FaClock className="text-2xl text-green-500" />, 
                title: "On Time", 
                desc: "Deadline commitment" 
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-4 bg-white border-2 border-gray-100 rounded-xl hover:border-[#A556F8]/30 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="flex-shrink-0 mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[#020202] font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Enhanced Form with Mobile Optimized Phone Input */}
        <motion.div
          className="w-full lg:w-1/2 max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.form 
            onSubmit={handleSubmit}
            className="bg-white border-2 border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h3 
              className="text-2xl sm:text-3xl font-bold text-[#020202] text-center mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Start Your Journey
            </motion.h3>
            <motion.p 
              className="text-gray-600 text-center mb-6 sm:mb-8 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Let's discuss your project and create something amazing 🚀
            </motion.p>

            <div className="space-y-4 sm:space-y-6">
              {/* Name Field with Icon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full pl-12 pr-4 py-3 sm:py-4 bg-gray-50 border rounded-xl text-[#020202] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A556F8] transition-all duration-300 text-sm sm:text-base ${
                      errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-[#A556F8]"
                    }`}
                  />
                </div>
                {errors.name && (
                  <motion.p 
                    className="text-red-500 text-sm mt-2 flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    ⚠️ {errors.name}
                  </motion.p>
                )}
              </motion.div>

              {/* Enhanced Phone Input - Mobile Optimized */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
              >
                <div className="relative">
                  <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg z-10" />
                  <div className="flex items-stretch">
                    {/* Country Code Dropdown - Mobile Optimized */}
                    <div className="relative group flex-shrink-0">
                      <div className="flex items-center space-x-2 bg-gray-50 border border-r-0 border-gray-200 rounded-l-xl px-3 py-3 sm:py-4 min-w-[85px] h-full cursor-pointer hover:bg-gray-100 transition-all duration-300">
                        <FaGlobe className="text-gray-400 text-sm flex-shrink-0" />
                        <span className="text-[#020202] text-sm truncate">{countryCode}</span>
                        <motion.span
                          animate={{ rotate: 0 }}
                          className="text-gray-400 text-xs flex-shrink-0"
                        >
                          ▼
                        </motion.span>
                      </div>
                      
                      {/* Dropdown Menu - Mobile Friendly */}
                      <div className="absolute top-full left-0 mt-1 w-40 bg-white border border-gray-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 max-h-60 overflow-y-auto">
                        {commonCountryCodes.map((country, index) => (
                          <div
                            key={index}
                            onClick={() => setCountryCode(country.code)}
                            className="flex items-center justify-between px-3 py-3 hover:bg-gray-50 cursor-pointer transition-all duration-200 first:rounded-t-xl last:rounded-b-xl border-b border-gray-100 last:border-b-0"
                          >
                            <span className="text-[#020202] text-sm">{country.code}</span>
                            <span className="text-gray-500 text-xs">{country.country}</span>
                          </div>
                        ))}
                        {/* Custom input option */}
                        <div className="border-t border-gray-100 p-3">
                          <input
                            type="text"
                            placeholder="+code"
                            value={countryCode}
                            onChange={(e) => {
                              let value = e.target.value;
                              // Ensure it starts with +
                              if (!value.startsWith('+')) {
                                value = '+' + value.replace(/[^0-9]/g, '');
                              } else {
                                value = '+' + value.slice(1).replace(/[^0-9]/g, '');
                              }
                              // Limit to 4 digits after +
                              if (value.length <= 5) {
                                setCountryCode(value);
                              }
                            }}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-[#020202] text-sm focus:outline-none focus:ring-1 focus:ring-[#A556F8]"
                            maxLength={5}
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Phone Number Input - Mobile Optimized */}
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={phoneNumber}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        if (value.length <= 15) setPhoneNumber(value);
                      }}
                      className={`flex-1 min-w-0 pl-4 pr-4 py-3 sm:py-4 bg-gray-50 border border-l-0 rounded-r-xl text-[#020202] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A556F8] transition-all duration-300 text-sm sm:text-base ${
                        errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-[#A556F8]"
                      }`}
                      maxLength={15}
                      inputMode="numeric"
                      pattern="[0-9]*"
                    />
                  </div>
                </div>
                {errors.phone && (
                  <motion.p 
                    className="text-red-500 text-sm mt-2 flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    ⚠️ {errors.phone}
                  </motion.p>
                )}
              </motion.div>

              {/* Email Field with Icon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full pl-12 pr-4 py-3 sm:py-4 bg-gray-50 border rounded-xl text-[#020202] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A556F8] transition-all duration-300 text-sm sm:text-base ${
                      errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-[#A556F8]"
                    }`}
                  />
                </div>
                {errors.email && (
                  <motion.p 
                    className="text-red-500 text-sm mt-2 flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    ⚠️ {errors.email}
                  </motion.p>
                )}
              </motion.div>

              {/* Message Field with Icon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 }}
              >
                <div className="relative">
                  <FaComment className="absolute left-4 top-4 text-gray-400 text-lg" />
                  <textarea
                    rows="4"
                    placeholder="Tell us about your project... What are you looking to build?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full pl-12 pr-4 py-3 sm:py-4 bg-gray-50 border rounded-xl text-[#020202] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A556F8] transition-all duration-300 resize-none text-sm sm:text-base ${
                      errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-200 focus:border-[#A556F8]"
                    }`}
                  />
                </div>
                {errors.message && (
                  <motion.p 
                    className="text-red-500 text-sm mt-2 flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    ⚠️ {errors.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Enhanced Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-full bg-gradient-to-r from-[#A556F8] to-[#4922E5] hover:from-[#A556F8]/90 hover:to-[#4922E5]/90 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-2xl relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <motion.div
                  className="flex items-center justify-center space-x-2 sm:space-x-3"
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <FaPaperPlane className="text-sm sm:text-base" />
                      </motion.div>
                      <span className="text-sm sm:text-base">Sending Your Message...</span>
                    </>
                  ) : (
                    <>
                      <FaRocket className="text-sm sm:text-base" />
                      <span className="text-sm sm:text-base">Launch Project</span>
                      <FaArrowRight className="text-sm sm:text-base" />
                    </>
                  )}
                </motion.div>
                
                {/* Enhanced Button Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform"
                  initial={{ x: "-100%" }}
                  animate={{ x: isHovered ? "200%" : "-100%" }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </motion.button>
            </div>

            {/* Enhanced Success Message */}
            <AnimatePresence>
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  className={`mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl text-center font-semibold border text-sm sm:text-base ${
                    success.includes("failed") 
                      ? "bg-red-50 border-red-200 text-red-700" 
                      : "bg-green-50 border-green-200 text-green-700"
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                    <motion.div
                      animate={success.includes("failed") ? { x: [0, -5, 5, -5, 0] } : { scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      {success.includes("failed") ? "⚠️" : "🎉"}
                    </motion.div>
                    <span>{success}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Email;
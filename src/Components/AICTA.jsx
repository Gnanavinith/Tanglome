import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaRobot, FaComments, FaPaperPlane } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const AICTA = () => {
  const [userInput, setUserInput] = useState("");
  const [isChatActive, setIsChatActive] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  // AI agent responses based on user input
  const aiResponses = {
    default: "Hello! I'm Tanglome's AI assistant. How can I help you today?",
    services: "We offer web development, mobile apps, AI solutions, and digital marketing services. What specific service interests you?",
    pricing: "Our pricing varies based on project scope. Would you like me to connect you with our CEO for a personalized quote?",
    timeline: "Project timelines typically range from 2-12 weeks depending on complexity. What type of project are you planning?",
    contact: "I can connect you directly with our team via WhatsApp or schedule a meeting with our CEO. What would you prefer?",
    thanks: "You're welcome! Is there anything else I can help you with today?"
  };

  // Initialize chat
  useEffect(() => {
    if (isChatActive && chatMessages.length === 0) {
      setTimeout(() => {
        setChatMessages([{
          id: 1,
          text: aiResponses.default,
          sender: "ai",
          timestamp: new Date()
        }]);
      }, 1000);
    }
  }, [isChatActive, chatMessages.length]);

  // Handle user input submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Add user message
    const userMessage = {
      id: chatMessages.length + 1,
      text: userInput,
      sender: "user",
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setUserInput("");
    setIsTyping(true);

    // Simulate AI response after delay
    setTimeout(() => {
      let responseText = aiResponses.default;
      
      // Simple keyword matching for AI responses
      const input = userInput.toLowerCase();
      if (input.includes("service") || input.includes("develop") || input.includes("build")) {
        responseText = aiResponses.services;
      } else if (input.includes("price") || input.includes("cost") || input.includes("budget")) {
        responseText = aiResponses.pricing;
      } else if (input.includes("time") || input.includes("when") || input.includes("duration")) {
        responseText = aiResponses.timeline;
      } else if (input.includes("contact") || input.includes("talk") || input.includes("connect")) {
        responseText = aiResponses.contact;
      } else if (input.includes("thank") || input.includes("thanks")) {
        responseText = aiResponses.thanks;
      }

      const aiMessage = {
        id: chatMessages.length + 2,
        text: responseText,
        sender: "ai",
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  // WhatsApp integration
  const handleWhatsAppClick = () => {
    const phoneNumber = "9585458794";
    const message = "Hello! I'm interested in your services. Can we discuss my project?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Schedule meeting with CEO
  const handleScheduleMeeting = () => {
    window.location.href = "/schedule-meeting";
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-white to-gray-50 px-4 sm:px-6 py-16 sm:py-20">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-60 h-60 bg-[#A556F8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#4922E5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaRobot className="text-[#A556F8] text-2xl" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#020202]">
              AI-Powered Assistance
            </h2>
          </div>
          <p className="text-lg text-[#4922E5] max-w-2xl mx-auto">
            Get instant answers and connect with our team through our intelligent assistant
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* AI Chat Interface */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h3 className="font-bold text-[#020202]">Tanglome AI Assistant</h3>
            </div>

            {!isChatActive ? (
              <div className="text-center py-8">
                <FaComments className="text-[#A556F8] text-4xl mx-auto mb-4" />
                <p className="text-gray-600 mb-6">Chat with our AI assistant to get instant help</p>
                <button
                  onClick={() => setIsChatActive(true)}
                  className="bg-gradient-to-r from-[#A556F8] to-[#4922E5] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-all"
                >
                  Start Chat
                </button>
              </div>
            ) : (
              <div className="flex flex-col h-80">
                {/* Chat messages */}
                <div className="flex-1 overflow-y-auto mb-4 space-y-3 pr-2">
                  {chatMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                          message.sender === 'user'
                            ? 'bg-[#A556F8] text-white rounded-br-none'
                            : 'bg-gray-100 text-gray-800 rounded-bl-none'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl rounded-bl-none">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input form */}
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#A556F8]"
                  />
                  <button
                    type="submit"
                    className="bg-[#A556F8] text-white p-2 rounded-full hover:bg-[#4922E5] transition-colors"
                  >
                    <FaPaperPlane className="text-sm" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>

          {/* Contact Options */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* WhatsApp Option */}
            <div 
              onClick={handleWhatsAppClick}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaWhatsapp className="text-white text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-[#020202] mb-1">WhatsApp Support</h3>
                  <p className="text-gray-600 text-sm">Chat directly with our team on WhatsApp</p>
                  <p className="text-green-600 font-semibold mt-1">+91 9585458794</p>
                </div>
                <MdKeyboardArrowRight className="text-gray-400 text-2xl group-hover:text-[#A556F8] transition-colors" />
              </div>
            </div>

            {/* Schedule Meeting */}
            <div 
              onClick={handleScheduleMeeting}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-[#A556F8] to-[#4922E5] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaRobot className="text-white text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-[#020202] mb-1">Meet Our CEO</h3>
                  <p className="text-gray-600 text-sm">Schedule a personalized meeting with Gnanavinith.G</p>
                  <p className="text-[#4922E5] font-semibold mt-1">Book 30-minute session</p>
                </div>
                <MdKeyboardArrowRight className="text-gray-400 text-2xl group-hover:text-[#A556F8] transition-colors" />
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="bg-gradient-to-r from-[#A556F8]/10 to-[#4922E5]/10 rounded-2xl p-6 border border-[#A556F8]/20">
              <h4 className="font-bold text-[#020202] mb-3">Need Immediate Help?</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📧 Email: hello@tanglome.com</p>
                <p>🌐 Website: tanglome.com</p>
                <p>🕒 Available 24/7</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AICTA;
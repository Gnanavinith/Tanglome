import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import {
  FiUser,
  FiPhone,
  FiMail,
  FiMessageSquare,
  FiCheckCircle,
  FiClock,
  FiAward,
  FiZap,
  FiHelpCircle,
  FiGlobe,
  FiStar,
  FiSend
} from "react-icons/fi";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Ready to Start?</h2>
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Let's Build Together!</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your vision deserves exceptional execution. Let's transform your ideas into digital reality!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiZap className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Fast Launch</h4>
            <p className="text-gray-600">Quick project kickoff</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiHelpCircle className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h4>
            <p className="text-gray-600">Always here to help</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiStar className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h4>
            <p className="text-gray-600">Exceptional results</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiClock className="w-8 h-8 text-orange-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">On Time</h4>
            <p className="text-gray-600">Deadline commitment</p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Start Your Journey</h3>
          <p className="text-xl text-gray-600 mb-8">Let's discuss your project and create something amazing</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your full name</label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  id="name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">+91</span>
                  </div>
                  <div className="relative">
                    <FiPhone className="absolute left-12 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      id="phone"
                      className="w-full pl-16 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">your.email@example.com</label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Tell us about your project... What are you looking to build?</label>
              <div className="relative">
                <FiMessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <textarea
                  id="message"
                  rows={5}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Tell us about your project... What are you looking to build?"
                ></textarea>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FiSend className="w-5 h-5" />
              Launch Project
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

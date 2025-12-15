import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Users, 
  Zap,
  ArrowRight,
  Send,
  Globe
} from "lucide-react";
import Email from "../Components/Email";
import Contact from "../Components/Contact";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Contacts = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (performance.navigation.type === 1) {
      navigate("/contact");
    }
  }, [navigate]);

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us Anytime",
      description: "Available 24/7 for urgent inquiries",
      contact: "+91 9585458794",
      link: "tel:+919585458794",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      icon: Mail,
      title: "Drop Us a Mail",
      description: "We'll respond within 24 hours",
      contact: "hellotanglome@gmail.com",
      link: "mailto:hellotanglome@gmail.com",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.2
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      description: "Come say hello at our headquarters",
      contact: "Coimbatore, Tamil Nadu",
      link: "#location",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.3
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant support during business hours",
      contact: "Start Conversation",
      link: "#contact-form",
      gradient: "from-orange-500 to-red-500",
      delay: 0.4
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Emergency Support Only" }
  ];

  return (
    <>
     

      <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="px-6 py-20">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
               
                <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 text-transparent bg-clip-text">
                  Get In Touch
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Ready to transform your ideas into reality? Let's start a conversation about your next project. 
                  We're here to help you succeed.
                </p>
              </motion.div>

              {/* Contact Methods Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  const isLink = method.link && !method.link.startsWith('#');
                  
                  const Content = (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: method.delay }}
                      className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-500/10"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      {/* Background Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                      
                      <div className="relative z-10 text-center">
                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{method.description}</p>
                        
                        <div className={`text-lg font-semibold bg-gradient-to-r ${method.gradient} text-transparent bg-clip-text`}>
                          {method.contact}
                        </div>
                        
                        <motion.div
                          className="mt-4 inline-flex items-center gap-2 text-sm text-gray-400 group-hover:text-cyan-400 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          {isLink ? "Click to connect" : "Get directions"}
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </motion.div>
                  );

                  return isLink ? (
                    <a key={method.title} href={method.link} className="block">
                      {Content}
                    </a>
                  ) : (
                    <div key={method.title} onClick={() => document.getElementById(method.link.slice(1))?.scrollIntoView({ behavior: 'smooth' })}>
                      {Content}
                    </div>
                  );
                })}
              </div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700 p-8 mb-20"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Business Hours</h3>
                      <p className="text-gray-400">We're here when you need us</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 max-w-md">
                    <div className="space-y-3">
                      {businessHours.map((schedule, index) => (
                        <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-gray-700/50 last:border-b-0">
                          <span className="text-gray-300 font-medium">{schedule.day}</span>
                          <span className="text-cyan-400 font-semibold">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <Email />

          {/* Location Map Section */}
          <section id="location" className="px-6 py-16">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">
                  Find Us Here
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Visit our office in the heart of Coimbatore's tech community
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700 p-8 shadow-2xl"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Map */}
                  <div className="flex-1">
                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                      <iframe
                        title="Our Location - Ganapathy, Coimbatore"
                        className="w-full h-96 lg:h-full min-h-[400px]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2557969040963!2d76.97317611428824!3d11.04560409213625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85869d2ddad99%3A0x4c2387c362112525!2sGanapathy%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>

                  {/* Location Details */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Our Office</h3>
                        <p className="text-gray-300">Ganapathy, Coimbatore</p>
                        <p className="text-gray-400 text-sm">Tamil Nadu, India</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Service Areas</h3>
                        <p className="text-gray-300">Worldwide Remote Services</p>
                        <p className="text-gray-400 text-sm">Available globally with local support in India</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Team Availability</h3>
                        <p className="text-gray-300">Flexible Meeting Options</p>
                        <p className="text-gray-400 text-sm">In-person, video calls, or hybrid meetings</p>
                      </div>
                    </div>

                    <motion.button
                      className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 border border-gray-600"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.open('https://maps.google.com/?q=Ganapathy,Coimbatore,TamilNadu', '_blank')}
                    >
                      <MapPin className="w-5 h-5" />
                      Get Directions
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>

        <Contact />
      </div>
    </>
  );
};

export default Contacts;
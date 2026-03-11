import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Users,
  ArrowRight,
  Globe,
  Calendar,
  Headphones
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
      delay: 0.1
    },
    {
      icon: Mail,
      title: "Drop Us a Mail",
      description: "We'll respond within 24 hours",
      contact: "hellotanglome@gmail.com",
      link: "mailto:hellotanglome@gmail.com",
      delay: 0.2
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      description: "Come say hello at our headquarters",
      contact: "Coimbatore, Tamil Nadu",
      link: "#location",
      delay: 0.3
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant support during business hours",
      contact: "Start Conversation",
      link: "#contact-form",
      delay: 0.4
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Emergency Support Only" }
  ];

  const features = [
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Book meetings at your convenience"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Personal account manager for all projects"
    },
    {
      icon: Globe,
      title: "Global Availability",
      description: "Remote services available worldwide"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Tanglome | No 1 IT Company in India & Tamil Nadu | Get in Touch</title>
        <meta
          name="description"
          content="Contact Tanglome - No 1 IT Company in India & Tamil Nadu. Get in touch for web development, app development, AI solutions, cloud services, and digital marketing. Serving clients in India and worldwide."
        />
        <meta
          name="keywords"
          content="Tanglome contact, Tanglome India, Tanglome Tamil Nadu, Tanglome contact information, IT company contact India, web development company contact, app development company contact, AI solutions contact, digital marketing company contact, contact IT services India, contact software company Tamil Nadu, Tanglome phone number, Tanglome email, Tanglome address, Tanglome office location, contact best IT company India, contact top web development company, contact mobile app development company India, contact AI development company, contact digital marketing agency India, contact cloud services company India, contact WhatsApp automation company India, contact MVP development company India"
        />
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

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-slate-900">
              Tanglome
            </div>
            <div className="flex items-center gap-6">
              <a href="/" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                Home
              </a>
              <a href="/services" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                Services
              </a>
              <a href="/portfolio" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                Portfolio
              </a>
              <a href="/about" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
                <MessageCircle className="w-4 h-4 text-slate-700" />
                <span className="text-sm font-medium text-slate-700">
                  We'd Love to Hear From You
                </span>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-900 mb-6 leading-[0.95]">
                Get In Touch
              </h1>
              
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: method.delay }}
                    className="group bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-slate-900 hover:shadow-xl transition-all cursor-pointer"
                    whileHover={{ scale: 1.02, y: -4 }}
                  >
                    <div className="text-center">
                      <div className="bg-slate-900 p-4 rounded-xl inline-flex mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-2">{method.title}</h3>
                      <p className="text-slate-600 text-sm mb-4">{method.description}</p>

                      <div className="text-base font-semibold text-slate-900 mb-3">
                        {method.contact}
                      </div>

                      <div className="inline-flex items-center gap-2 text-sm text-slate-600 group-hover:text-slate-900 transition-colors">
                        {isLink ? "Click to connect" : "Learn more"}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                );

                return isLink ? (
                  <a key={method.title} href={method.link}>
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-lg"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-900 p-4 rounded-xl">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Business Hours</h3>
                    <p className="text-slate-600">We're here when you need us</p>
                  </div>
                </div>

                <div className="flex-1 max-w-md w-full">
                  <div className="space-y-3">
                    {businessHours.map((schedule) => (
                      <div key={schedule.day} className="flex justify-between items-center py-3 border-b border-slate-200 last:border-b-0">
                        <span className="text-slate-700 font-medium">{schedule.day}</span>
                        <span className="text-slate-900 font-semibold">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="bg-slate-100 p-4 rounded-xl inline-flex mb-4">
                      <Icon className="w-8 h-8 text-slate-900" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Email />
          </div>
        </section>

        {/* Location Map Section */}
        <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">
                Find Us Here
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Visit our office in the heart of Coimbatore's tech community
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border-2 border-slate-200 rounded-2xl p-8 shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Map */}
                <div className="rounded-xl overflow-hidden border-2 border-slate-200">
                  <iframe
                    title="Our Location - Ganapathy, Coimbatore"
                    className="w-full h-full min-h-[400px]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2557969040963!2d76.97317611428824!3d11.04560409213625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85869d2ddad99%3A0x4c2387c362112525!2sGanapathy%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Location Details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-900 p-3 rounded-xl flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Our Office</h3>
                      <p className="text-slate-600 mb-1">Ganapathy, Coimbatore</p>
                      <p className="text-slate-500 text-sm">Tamil Nadu, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-slate-900 p-3 rounded-xl flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Service Areas</h3>
                      <p className="text-slate-600 mb-1">Worldwide Remote Services</p>
                      <p className="text-slate-500 text-sm">Available globally with local support in India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-slate-900 p-3 rounded-xl flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Team Availability</h3>
                      <p className="text-slate-600 mb-1">Flexible Meeting Options</p>
                      <p className="text-slate-500 text-sm">In-person, video calls, or hybrid meetings</p>
                    </div>
                  </div>

                  <button
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-3"
                    onClick={() => window.open('https://maps.google.com/?q=Ganapathy,Coimbatore,TamilNadu', '_blank')}
                  >
                    <MapPin className="w-5 h-5" />
                    Get Directions
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Contact />
      </div>
    </>
  );
};

export default Contacts;
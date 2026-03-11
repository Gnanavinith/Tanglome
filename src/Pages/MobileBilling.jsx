import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  Check, 
  Star, 
  Phone, 
  Package, 
  Receipt, 
  History, 
  BarChart3, 
  Users, 
  Settings, 
  Shield, 
  Database, 
  ChevronLeft, 
  ChevronRight,
  Zap,
  TrendingUp,
  Clock,
  UserCheck,
  CreditCard,
  Smartphone,
  Target
} from "lucide-react";

const product = {
  name: "Mobile Shop Billing & Stock Management System",
  description: "Streamline day-to-day operations in a mobile shop. Eliminates manual paperwork, reduces errors, and provides business insights that directly help increase sales and improve customer satisfaction.",
  features: [
    "Faster Billing & Checkout",
    "Upselling & Cross-Selling",
    "Stock Management",
    "Customer Retention",
    "Financial Reports",
    "Offline-First with Backup",
  ],
  benefits: [
    "Quick barcode/IMEI scanning speeds up billing",
    "Prevents overstocking and understocking with real-time tracking",
    "Profit reports show margins clearly for better pricing decisions",
    "Customer database with purchase history for better retention",
    "Automated backups to prevent data loss",
    "Works offline during internet outages",
    "Reduces human errors in billing and inventory tracking"
  ],
  valuePropositions: {
    shopOwners: "Reduce operational costs, increase profit margins, and gain insights into your business performance.",
    staff: "Simplify daily tasks, reduce manual errors, and improve工作效率 (work efficiency) with intuitive tools.",
    customers: "Experience faster service, accurate billing, and personalized shopping experiences."
  },
  cta: "Start Your Free Trial Today",
  whatsappNumber: "9585458794"
};

// Cloudinary image URLs
const CLOUDINARY_IMAGES = [
  "https://res.cloudinary.com/dj1mlgoem/image/upload/v1708434496/tanglome/mobile-billing/1_mqb5hm.jpg",
  "https://res.cloudinary.com/dj1mlgoem/image/upload/v1708434496/tanglome/mobile-billing/2_gn5qru.jpg",
  "https://res.cloudinary.com/dj1mlgoem/image/upload/v1708434496/tanglome/mobile-billing/3_xoqy2f.jpg",
  "https://res.cloudinary.com/dj1mlgoem/image/upload/v1708434496/tanglome/mobile-billing/4_zjyvpo.jpg",
  "https://res.cloudinary.com/dj1mlgoem/image/upload/v1708434496/tanglome/mobile-billing/5_lhqwkb.jpg",
  "https://res.cloudinary.com/dj1mlgoem/image/upload/v1708434496/tanglome/mobile-billing/6_ehwgxi.jpg",
  "https://res.cloudinary.com/dj1mlgoem/image/upload/v1708434496/tanglome/mobile-billing/7_vwtkqg.jpg",
  "https://res.cloudinary.com/dj1mlgoem/image/upload/v1708434496/tanglome/mobile-billing/8_gzvnyq.jpg",
  "https://res.cloudinary.com/dj1mlgoem/image/upload/v1708434496/tanglome/mobile-billing/9_qrfmja.jpg",
  "https://res.cloudinary.com/dj1mlgoem/image/upload/v1708434496/tanglome/mobile-billing/10_jpqxzo.jpg",
  "https://res.cloudinary.com/dj1mlgoem/image/upload/v1708434496/tanglome/mobile-billing/11_klmnop.jpg",
  "https://res.cloudinary.com/dj1mlgoem/image/upload/v1708434496/tanglome/mobile-billing/12_qrstuv.jpg"
];

const MobileBilling = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = CLOUDINARY_IMAGES;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const featureCards = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Inventory Management",
      features: [
        "Add/Edit/Update/Delete mobiles",
        "Real-time stock tracking",
        "Barcode/IMEI scanning",
        "Low stock alerts",
        "Product categorization"
      ],
      gradient: "from-blue-500 to-cyan-600",
      delay: 0.1
    },
    {
      icon: <Receipt className="w-8 h-8" />,
      title: "Billing System",
      features: [
        "Create invoices instantly",
        "Manage purchases & sales",
        "Multiple payment methods",
        "Tax calculations",
        "Receipt printing"
      ],
      gradient: "from-green-500 to-teal-600",
      delay: 0.2
    },
    {
      icon: <History className="w-8 h-8" />,
      title: "Service & History",
      features: [
        "Service request tracking",
        "Complete service history",
        "Warranty management",
        "Customer service records",
        "Repair status updates"
      ],
      gradient: "from-purple-500 to-pink-600",
      delay: 0.3
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Reports & Analytics",
      features: [
        "Sales reports",
        "Service reports",
        "Profit analysis",
        "Inventory reports",
        "Export to Excel/PDF"
      ],
      gradient: "from-orange-500 to-red-600",
      delay: 0.4
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dealer Management",
      features: [
        "Dealer registration",
        "Transfer management",
        "Commission tracking",
        "Payment history",
        "Performance analytics"
      ],
      gradient: "from-teal-500 to-blue-600",
      delay: 0.5
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Settings & Security",
      features: [
        "User profile management",
        "Role-based permissions",
        "Data backup & restore",
        "Security settings",
        "System preferences"
      ],
      gradient: "from-gray-600 to-gray-800",
      delay: 0.6
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mobile Billing Software India | Shop Management System Tamil Nadu | Tanglome</title>
        <meta name="description" content="Mobile Billing Software India. Professional shop management system in Tamil Nadu. Stock management, billing system, mobile shop software, inventory management, and retail billing solutions for mobile stores. Reduce paperwork, eliminate errors, and increase sales." />
        <meta name="keywords" content="Mobile Billing Software India, Shop Management System India, Stock Management Software India, Billing System India, Mobile Shop Software India, Inventory Management Software India, Retail Billing System India, Mobile Store Management Software, POS System India, Billing App India, Mobile Shop Management System, Retail Management Software India, Point of Sale System India, Inventory Tracking Software India, Retail POS Software India, Mobile Phone Shop Software, Electronic Store Management, Retail Store Management System, Business Management Software India, Inventory Control Software India, Sales Management System India, Purchase Management System India, Dealer Management System India, Wholesale Management Software, Stock Accounting Software, Retail Inventory Software, Mobile Repair Shop Software, Electronics Shop Software, Retail Business Software, Shop Keeper Software India, Billing Software Tamil Nadu, Inventory Management Tamil Nadu, Retail Solutions India, Business Automation Software India, ERP for Retail India, Retail Management System India, Point of Sale System Tamil Nadu, Mobile Accessories Shop Software, Electronics Retail Software, Retail Store Software India, Inventory Management System India" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tanglome.com/mobile-billing" />
      </Helmet>
      <div className="min-h-screen bg-gray-900 px-6 py-16 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-600 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-10 animate-pulse delay-500"></div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 relative z-10">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-red-200 text-transparent bg-clip-text">
              Mobile Shop Billing System
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Streamline your mobile business with intelligent billing, inventory management, and customer relationship tools
            </p>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl group">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`Mobile Billing Software Screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white p-3 rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white p-3 rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-white scale-125"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Powerful <span className="bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text">Features</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: card.delay }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className={`p-3 bg-gradient-to-r ${card.gradient} rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                  <ul className="space-y-2">
                    {card.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-gray-300 text-sm">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700 p-8">
              <h2 className="text-4xl font-bold text-white mb-8 text-center">
                How It <span className="bg-gradient-to-r from-green-400 to-teal-400 text-transparent bg-clip-text">Helps</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-green-500/30 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mt-1">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Value Propositions */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Value for <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Everyone</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="p-6 bg-gradient-to-br from-blue-900/50 to-blue-800/50 backdrop-blur-sm rounded-2xl border border-blue-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <UserCheck className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">For Shop Owners</h3>
                <p className="text-gray-300">{product.valuePropositions.shopOwners}</p>
              </motion.div>

              <motion.div
                className="p-6 bg-gradient-to-br from-green-900/50 to-green-800/50 backdrop-blur-sm rounded-2xl border border-green-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">For Staff</h3>
                <p className="text-gray-300">{product.valuePropositions.staff}</p>
              </motion.div>

              <motion.div
                className="p-6 bg-gradient-to-br from-purple-900/50 to-purple-800/50 backdrop-blur-sm rounded-2xl border border-purple-700 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                <CreditCard className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">For Customers</h3>
                <p className="text-gray-300">{product.valuePropositions.customers}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Security & Backup */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-700 p-8">
              <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
                <Shield className="w-8 h-8 text-blue-400" />
                Advanced Security & Backup
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                    <Database className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">Automated daily backups</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                    <Database className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">Cloud storage integration</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                    <Database className="w-6 h-6 text-green-400" />
                    <span className="text-gray-300">Data encryption</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                    <Shield className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-300">Multi-user access control</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                    <Shield className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-300">Audit trail logging</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                    <Shield className="w-6 h-6 text-blue-400" />
                    <span className="text-gray-300">Secure data recovery</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 backdrop-blur-sm rounded-3xl border border-orange-500/30 p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Mobile Business?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of mobile shops that have streamlined their operations with our powerful billing system
              </p>
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 text-lg flex items-center gap-3 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://wa.me/919585458794?text=Hi, I am interested in the Mobile Shop Billing & Stock Management System. Please provide more details.", "_blank")}
              >
                <Phone className="w-5 h-5" />
                Enquiry to Buy
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MobileBilling;
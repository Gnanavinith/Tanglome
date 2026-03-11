import React, { useState, useEffect } from "react";
import { 
  TrendingUp, 
  Zap, 
  Search, 
  Code, 
  Megaphone,
  Bot,
  MessageSquare,
  MapPin,
  Share2,
  ShoppingCart,
  Store,
  Server,
  Smartphone,
  BookOpen,
  Video,
  ArrowRight,
  CheckCircle2,
  Star,
  Sparkles
} from 'lucide-react';

const WHATSAPP_NUMBER = "9585458794";

const services = [
  {
    title: "Meta Ads & Google Ads",
    desc: "High-converting ad campaigns focused on quality leads, sales, and ROI with advanced targeting and optimization.",
    category: "advertising",
    price: "₹8,000 / month",
    featured: true,
    icon: Megaphone,
    features: ["Campaign Setup", "A/B Testing", "ROI Optimization", "Monthly Reports"]
  },
  {
    title: "LinkedIn Ads",
    desc: "Reach decision-makers and B2B audiences with laser-targeted ads designed for professional networking.",
    category: "advertising",
    price: "₹10,000 / month",
    icon: TrendingUp,
    features: ["B2B Targeting", "Lead Generation", "Analytics Dashboard"]
  },
  {
    title: "WhatsApp Automation & E-commerce",
    desc: "Automate customer chats, order updates, and lead follow-ups on WhatsApp for seamless customer experience.",
    category: "automation",
    price: "₹6,000",
    icon: MessageSquare,
    features: ["Auto Responses", "Order Updates", "CRM Integration"]
  },
  {
    title: "AI Agents",
    desc: "24/7 AI agents to handle customer support, sales queries, and workflows with intelligent automation.",
    category: "automation",
    price: "₹15,000",
    featured: true,
    icon: Bot,
    features: ["24/7 Support", "Multi-language", "Custom Training", "Analytics"]
  },
  {
    title: "SEO",
    desc: "Data-driven SEO strategies to rank higher and drive organic traffic with comprehensive on-page and off-page optimization.",
    category: "marketing",
    price: "₹7,000 / month",
    featured: true,
    icon: Search,
    features: ["Keyword Research", "Technical SEO", "Link Building", "Monthly Reports"]
  },
  {
    title: "Google My Business",
    desc: "Improve local visibility, increase calls, and dominate map rankings for your business location.",
    category: "marketing",
    price: "₹3,000",
    icon: MapPin,
    features: ["Profile Optimization", "Review Management", "Local SEO"]
  },
  {
    title: "Social Media Marketing (SMM)",
    desc: "Build brand trust, engagement, and growth across social platforms with strategic content and community management.",
    category: "marketing",
    price: "₹6,000 / month",
    icon: Share2,
    features: ["Content Creation", "Community Management", "Analytics"]
  },
  {
    title: "WordPress E-commerce",
    desc: "Flexible and scalable WordPress stores built for conversions with WooCommerce integration.",
    category: "development",
    price: "₹18,000",
    icon: ShoppingCart,
    features: ["WooCommerce Setup", "Payment Gateway", "Mobile Responsive"]
  },
  {
    title: "Shopify Store",
    desc: "Fast, secure, and conversion-optimized Shopify stores with professional themes and integrations.",
    category: "development",
    price: "₹20,000",
    icon: Store,
    features: ["Theme Customization", "Apps Integration", "SEO Optimized"]
  },
  {
    title: "Custom Coding E-commerce",
    desc: "Fully custom e-commerce platforms tailored to your unique business needs with advanced features.",
    category: "development",
    price: "₹45,000",
    icon: Code,
    features: ["Custom Features", "Scalable Architecture", "Admin Panel"]
  },
  {
    title: "Organic SEO & Backlinks",
    desc: "High-quality backlinks from authoritative domains for long-term ranking and domain authority growth.",
    category: "marketing",
    price: "₹5,000 / month",
    icon: TrendingUp,
    features: ["Quality Backlinks", "Guest Posts", "Competitor Analysis"]
  },
  {
    title: "Server & Hosting Services",
    desc: "Reliable, secure hosting with complete technical support, SSL certificates, and daily backups.",
    category: "development",
    price: "₹2,500 / year",
    icon: Server,
    features: ["99.9% Uptime", "SSL Certificate", "24/7 Support"]
  },
  {
    title: "New MVP Development",
    desc: "Launch your startup idea quickly with a scalable MVP that validates your concept and attracts investors.",
    category: "development",
    price: "₹35,000",
    featured: true,
    icon: Sparkles,
    features: ["Rapid Development", "Scalable Code", "User Testing"]
  },
  {
    title: "App Development",
    desc: "Custom Android & iOS app development with secure, scalable architecture and modern design.",
    category: "development",
    price: "₹50,000",
    featured: true,
    icon: Smartphone,
    features: ["Cross-platform", "API Integration", "App Store Publishing"]
  },
  {
    title: "Magazine Ads",
    desc: "Premium print & digital magazine ads to boost brand credibility and reach targeted audiences.",
    category: "advertising",
    price: "₹12,000",
    icon: BookOpen,
    features: ["Design & Copywriting", "Placement Strategy", "Performance Tracking"]
  },
  {
    title: "Video Editing",
    desc: "Professional video editing for ads, reels, and brand storytelling that captures attention and drives engagement.",
    category: "design",
    price: "₹2,000 / video",
    icon: Video,
    features: ["Color Grading", "Motion Graphics", "Sound Design"]
  },
];

const categories = [
  { id: "all", label: "All Services" },
  { id: "advertising", label: "Advertising" },
  { id: "automation", label: "Automation" },
  { id: "marketing", label: "Marketing" },
  { id: "development", label: "Development" },
  { id: "design", label: "Design" },
];

const OurServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  const handleWhatsAppClick = (title, price) => {
    const message = `Hi, I'm interested in ${title}. ${price}. Please share more details.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const featuredCount = services.filter(s => s.featured).length;
  const totalServices = services.length;

  return (
    <>
      <Helmet>
        <title>Our Services | Tanglome - Digital Solutions & Consulting</title>
        <meta name="description" content="Explore Tanglome's comprehensive range of digital services including web development, mobile apps, SEO, digital marketing, and custom software solutions." />
        <meta name="keywords" content="web development services, mobile app development, SEO services, digital marketing, custom software development, IT consulting, e-commerce solutions, SaaS development, digital transformation, software consulting" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tanglome.com/services" />
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
        
        .service-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .service-card:hover {
          transform: translateY(-4px);
        }
      `}</style>

      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-slate-700" />
              <span className="text-sm font-medium text-slate-700">
                {featuredCount} Popular Services • {totalServices} Total Services
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Result-driven digital solutions designed to scale your business,
              increase visibility, and maximize revenue with proven strategies.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white shadow-lg"
                    : "bg-white text-slate-700 border-2 border-slate-200 hover:border-slate-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="service-card relative bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-slate-900 hover:shadow-xl flex flex-col"
                >
                  {/* Featured Badge */}
                  {service.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Popular
                      </div>
                    </div>
                  )}

                  {/* Icon */}
                  <div className="bg-slate-100 p-3 rounded-xl inline-flex mb-4 w-fit">
                    <Icon className="w-6 h-6 text-slate-900" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                    {service.desc}
                  </p>

                  {/* Features */}
                  {service.features && (
                    <div className="mb-4 space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-slate-500 font-medium">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  )}

                  {/* Price */}
                  <div className="bg-slate-50 rounded-lg p-3 mb-4">
                    <div className="text-xs text-slate-500 font-medium mb-1">Starting from</div>
                    <div className="text-2xl font-bold text-slate-900 font-mono">
                      {service.price}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleWhatsAppClick(service.title, service.price)}
                    className="group w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2"
                  >
                    Get Started on WhatsApp
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-slate-900 rounded-3xl p-12 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Don't See What You Need?
                </h3>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                  We offer custom solutions tailored to your unique requirements. 
                  Let's discuss your project.
                </p>
                <button
                  onClick={() => {
                    const message = "Hi, I'd like to discuss a custom project with Tanglome.";
                    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
                    window.open(url, "_blank");
                  }}
                  className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-all"
                >
                  Contact Us for Custom Solutions
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "25+", label: "Happy Clients" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2 font-mono">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
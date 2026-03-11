import React, { useState, useEffect, useRef } from "react";
import { Star, ExternalLink } from "lucide-react";

const Testimonial = () => {
  // Extract testimonials from portfolio projects
  const testimonials = [
    {
      id: 1,
      name: "VAuditors",
      role: "Professional Auditing Services",
      company: "VAuditors",
      rating: 5,
      content: "Professional auditing services platform with comprehensive service showcase and client portal. Enterprise-grade solution with advanced security features.",
      stats: "50+ Clients, 99.9% Uptime",
      category: "Web Development",
      url: "https://www.vauditors.com/"
    },
    {
      id: 2,
      name: "AJ Fitness",
      role: "Fitness & Wellness Platform",
      company: "AJ Fitness",
      rating: 5,
      content: "Modern fitness & wellness platform with membership management. Streamlined member onboarding and class scheduling.",
      stats: "200+ Members, 500+ Bookings/Month",
      category: "Web Development",
      url: "https://www.ajfitness.in/"
    },
    {
      id: 3,
      name: "Thangavelu Travels",
      role: "Tour & Travel Booking",
      company: "Thangavelu Travels",
      rating: 5,
      content: "Full-featured tour & travel booking platform with payment integration. 4 tours booked within first week of ad campaign.",
      stats: "25+ Tours, 120+ Bookings, 8.2% Conversion Rate",
      category: "Web Development",
      url: "https://thangavelutravels.com/"
    },
    {
      id: 4,
      name: "Tanglome SEO",
      role: "SEO Optimization",
      company: "Tanglome",
      rating: 5,
      content: "Comprehensive SEO optimization with technical and content strategy. 185% increase in organic traffic within 6 months.",
      stats: "+185% Traffic, 45 Ranked Keywords, DA 32",
      category: "SEO Services",
      url: "https://tanglome.com"
    },
    {
      id: 5,
      name: "Thangavelu Travels Ads",
      role: "Digital Advertising",
      company: "Thangavelu Travels",
      rating: 5,
      content: "Multi-channel campaign optimized for tour bookings. 10 calls resulting in 4 confirmed bookings with 267% ROI.",
      stats: "40% Conversion Rate, 267% ROI, 4 Bookings",
      category: "Digital Advertising",
      url: "https://thangavelutravels.com/"
    },
    {
      id: 6,
      name: "GenBeta SaaS",
      role: "Facility Management SaaS",
      company: "MatapangTech",
      rating: 5,
      content: "Enterprise facility management SaaS with real-time approvals and compliance. Reduces approval time by 75%, ensures regulatory compliance.",
      stats: "50+ Facilities, 1000+ Approvals/Month, 99.99% Uptime",
      category: "SaaS Products",
      url: "https://login.matapangtech.com/"
    }
  ];

  // Duplicate testimonials for infinite scrolling effect
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);

  // Auto-scroll functionality for infinite scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prevOffset => {
        const newOffset = prevOffset - 1;
        // Reset to start when we've scrolled past the middle set
        if (Math.abs(newOffset) >= testimonials.length * 100) {
          setTimeout(() => setCurrentIndex(testimonials.length), 0);
          return 0;
        }
        return newOffset;
      });
    }, 50); // Adjust speed as needed

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Reset position when reaching the middle set
  useEffect(() => {
    if (currentIndex >= testimonials.length * 2) {
      setTimeout(() => {
        setCurrentIndex(testimonials.length);
        setOffset(0);
      }, 0);
    }
  }, [currentIndex, testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 py-2 rounded-full border border-purple-300/30 shadow-sm mb-6">
            <Star className="text-purple-600 text-lg" />
            <span className="text-purple-700 font-semibold text-sm">
              Client Feedback
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            What Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real testimonials from businesses we've helped transform with our digital solutions
          </p>
        </div>

        {/* Infinite Scrolling Testimonials */}
        <div className="relative overflow-hidden py-12">
          <div 
            className="flex gap-8"
            style={{
              transform: `translateX(${offset}px)`
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-80"
              >
                <div className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full group relative overflow-hidden">
                  {/* Category Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                    testimonial.category === 'Web Development' ? 'bg-blue-50 text-blue-700' :
                    testimonial.category === 'SEO Services' ? 'bg-green-50 text-green-700' :
                    testimonial.category === 'SaaS Products' ? 'bg-purple-50 text-purple-700' :
                    'bg-orange-50 text-orange-700'
                  }`}>
                    {testimonial.category}
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-700 leading-relaxed mb-6 text-sm">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Stats */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-xs font-medium text-gray-600 truncate">{testimonial.stats}</p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm truncate">{testimonial.name}</h4>
                      <p className="text-xs text-gray-600 truncate">{testimonial.role}</p>
                    </div>
                    
                    {/* External Link */}
                    <a
                      href={testimonial.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 transition-colors flex-shrink-0"
                      aria-label={`Visit ${testimonial.company} website`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
import React from "react";
import { 
  MdPhoneAndroid, 
  MdLanguage, 
  MdSearch, 
  MdCampaign, 
  MdComputer, 
  MdLightbulb, 
  MdDesignServices, 
  MdCloud,
  MdArrowForward,
  MdCheckCircle
} from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const services = [
  { 
    title: "App Development", 
    icon: MdPhoneAndroid,
    description: "Native & cross-platform mobile apps",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    title: "Web Development", 
    icon: MdLanguage,
    description: "Responsive websites & web apps",
    color: "from-purple-500 to-pink-500"
  },
  { 
    title: "SEO", 
    icon: MdSearch,
    description: "Rank higher on search engines",
    color: "from-green-500 to-emerald-500"
  },
  { 
    title: "Ad Campaign", 
    icon: MdCampaign,
    description: "Google, Meta & LinkedIn ads",
    color: "from-orange-500 to-red-500"
  },
  { 
    title: "Windows Application", 
    icon: MdComputer,
    description: "Desktop software solutions",
    color: "from-indigo-500 to-purple-500"
  },
  { 
    title: "New Product Development", 
    icon: MdLightbulb,
    description: "Turn ideas into reality",
    color: "from-yellow-500 to-orange-500"
  },
  { 
    title: "Graphics Designing", 
    icon: MdDesignServices,
    description: "Brand identity & visual design",
    color: "from-pink-500 to-rose-500"
  },
  { 
    title: "Hosting Services", 
    icon: MdCloud,
    description: "Reliable & secure cloud hosting",
    color: "from-cyan-500 to-blue-500"
  },
];

const ServicesIntro = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-10 text-gray-900 relative">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 px-4 py-2 rounded-full border-2 border-purple-500/20 shadow-sm mb-6">
            <MdCheckCircle className="text-purple-600 text-lg sm:text-xl" />
            <span className="text-purple-700 font-bold font-['Space Grotesk'] text-sm sm:text-base">
              Complete Digital Solutions
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#020202] leading-[1.1] mb-4">
            Our{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Services
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0,4 Q25,0 50,4 T100,4" stroke="#a855f7" strokeWidth="3" fill="none" opacity="0.3"/>
              </svg>
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Empowering your digital journey with cutting-edge solutions
          </p>
        </div>

        {/* Services Slider */}
        <div className="relative w-full mb-10 sm:mb-12 md:mb-16">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            loop={true}
            autoplay={{ 
              delay: 3000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="!pb-12 sm:!pb-14"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="group h-full bg-white rounded-2xl sm:rounded-3xl border-2 border-gray-100 hover:border-purple-200 shadow-lg hover:shadow-2xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
                  
                  {/* Icon Circle */}
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg mb-5 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <service.icon className="text-white text-3xl sm:text-4xl md:text-5xl" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#020202] mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Decorative Bottom Border */}
                  <div className={`mt-auto h-1 w-12 bg-gradient-to-r ${service.color} rounded-full group-hover:w-full transition-all duration-500`}></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons - Hidden on Mobile */}
          <div className="hidden lg:block">
            <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border-2 border-gray-200 hover:border-purple-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group -translate-x-6">
              <MdArrowForward className="rotate-180 text-gray-600 group-hover:text-purple-600 text-2xl transition-colors" />
            </button>
            <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white border-2 border-gray-200 hover:border-purple-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group translate-x-6">
              <MdArrowForward className="text-gray-600 group-hover:text-purple-600 text-2xl transition-colors" />
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/services" className="inline-block">
            <button className="group relative overflow-hidden px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-3">
                <span className="text-base sm:text-lg">Explore All Services</span>
                <MdArrowForward className="text-xl sm:text-2xl group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </Link>
        </div>

      </div>

      {/* Custom Pagination Styling */}
      <style jsx>{`
        :global(.swiper-pagination-bullet) {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s;
        }
        
        :global(.swiper-pagination-bullet-active) {
          background: linear-gradient(to right, #a855f7, #3b82f6);
          width: 32px;
          border-radius: 5px;
        }
        
        :global(.swiper-button-disabled) {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
};

export default ServicesIntro;
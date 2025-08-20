import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaDesktop, FaGlobe, FaBullhorn, FaMobileAlt, FaSearch, FaBrush, FaServer } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const services = [
    { title: "App Development", icon: <FaMobileAlt size={40} /> }, // Mobile App
    { title: "Web Development", icon: <FaGlobe size={40} /> }, // Web/Globe
    { title: "SEO", icon: <FaSearch size={40} /> }, // Search/SEO
    { title: "Ad Campaign", icon: <FaBullhorn size={40} /> }, // Marketing/Bullhorn
    { title: "Windows Application", icon: <FaDesktop size={40} /> }, // Desktop App
    { title: "New Product Development", icon: <FaCode size={40} /> }, // Coding/Product Dev
    { title: "Graphics Designing", icon: <FaBrush size={40} /> }, // Graphics/Brush
    { title: "Hosting Services", icon: <FaServer size={40} /> }, // Hosting/Server
];

const ServicesIntro = () => {
  return (
    <section className="w-full h-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 flex flex-col items-center justify-center px-6 py-12 text-center">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-6 mt-12 text-gray-300"
      >
        Our Services
      </motion.h2>

      <h3 className="text-2xl font-semibold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text mb-6 ">
        Empowering Your Digital Journey!
      </h3>

      {/* Swiper Slider with Navigation */}
      <div className="relative w-full max-w-6xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 }, // Mobile: Show only 1 item
            1024: { slidesPerView: 3 }, // Desktop: Show 4 items
          }}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".swiper-pagination", bulletClass: "swiper-pagination-bullet" }}
          navigation
          modules={[Pagination, Autoplay, Navigation]}
          className="w-full"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center justify-center mt-10">
              {/* Circular Icon - Centered */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-6 sm:p-8 md:p-10 shadow-lg shadow-gray-900 flex items-center justify-center transition-all rounded-full w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto"
              >
                <div className="text-gray-300">{service.icon}</div>
              </motion.div>

              {/* Title Below */}
              <h3 className="mt-10 text-lg font-semibold text-gray-300">
                {service.title}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
       </div>

      <Link to="/services" className="mt-15 px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition duration-300 flex items-center gap-1">Know More  <MdKeyboardArrowRight className="text-2xl" /> </Link>

    </section>
  );
};

export default ServicesIntro;

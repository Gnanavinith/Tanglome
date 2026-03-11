import React from "react";
import { FaSearch, FaPencilRuler, FaRocket, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: <FaSearch className="text-white text-lg sm:text-xl" />,
    time: "(0 TO 1 WEEK)",
    title: "User Research & Problem Definition",
    description:
      "Our product and design team collaborates with founders to refine the problem statement and understand user needs. We assist with interviews, journey mapping, and surveys to identify key pain points and opportunities.",
  },
  {
    icon: <FaPencilRuler className="text-white text-lg sm:text-xl" />,
    time: "(1 TO 2 WEEKS)",
    title: "Rapid Prototyping & Testing",
    description:
      "This phase focuses on idea generation, wireframing, testing, and rapid iteration to validate user-centered solutions before development.",
  },
  {
    icon: <FaRocket className="text-white text-lg sm:text-xl" />,
    time: "(2 TO 4 WEEKS)",
    title: "Building the MVP",
    description:
      "We define the MVP scope, prioritize features, and build a functional version using best practices, No-Code tools, and modern APIs.",
  },
  {
    icon: <FaCogs className="text-white text-lg sm:text-xl" />,
    time: "(6 TO 18 MONTHS)",
    title: "Scaling & Optimization",
    description:
      "With product-market fit achieved, we optimize for scalability, performance, and future features, ensuring a reliable and cost-effective product.",
  },
];

const Process = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-10 text-gray-900 relative">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-bl from-[#A556F8]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-[#4922E5]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>

      {/* Header Section */}
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#A556F8]/10 to-[#4922E5]/10 px-4 py-2 rounded-full border-2 border-[#A556F8]/20 shadow-sm mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-[#4922E5] font-semibold font-['Space Grotesk'] text-sm sm:text-base">
              Proven Methodology
            </span>
          </div>
      
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#020202] leading-[1.1] mb-4">
            Our{" "}
            <span className="relative inline-block">
              <span className="text-[#A556F8]">
                Process
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0,4 Q25,0 50,4 T100,4" stroke="#A556F8" strokeWidth="3" fill="none" opacity="0.3"/>
              </svg>
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Tanglome collaborates with founders to take products from idea to launch and scale — fast.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile, visible on sm+ */}
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#A556F8] via-[#4922E5] to-[#A556F8] transform -translate-x-1/2"></div>
          
          {/* Mobile Line - Visible only on mobile */}
          <div className="sm:hidden absolute left-[3.5rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#A556F8] via-[#4922E5] to-[#A556F8]"></div>

          {/* Timeline Steps */}
          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-4 sm:gap-8 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                  <div className="sm:max-w-md sm:ml-auto sm:mr-auto">
                    <div className="bg-white rounded-2xl border-2 border-gray-100 hover:border-[#A556F8]/30 shadow-lg hover:shadow-2xl p-6 transition-all duration-500 hover:-translate-y-1">
                      {/* Time Badge */}
                      <div className={`inline-block bg-[#A556F8]/10 px-3 py-1 rounded-full mb-3 ${index % 2 === 0 ? 'sm:float-right sm:ml-2' : 'sm:float-left sm:mr-2'}`}>
                        <span className="text-[#4922E5] font-semibold text-xs sm:text-sm">
                          {step.time}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#020202] mb-3 clear-both">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Decorative Bottom Border */}
                      <div className={`h-1 w-16 bg-gradient-to-r from-[#A556F8] to-[#4922E5] rounded-full mt-4 ${index % 2 === 0 ? 'sm:ml-auto' : ''}`}></div>
                    </div>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative flex-shrink-0">
                  {/* Icon Circle */}
                  <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-[#A556F8] to-[#4922E5] flex items-center justify-center shadow-xl border-4 border-white relative z-10 hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -bottom-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-[#A556F8]/20">
                    <span className="text-[#A556F8] font-bold text-xs sm:text-sm">{index + 1}</span>
                  </div>
                </div>

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden sm:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 sm:mt-20">
          <Link to="/schedule-meeting" className="inline-block">
            <button className="group relative overflow-hidden px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-[#A556F8] to-[#4922E5] text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95">
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center gap-3">
                <span className="text-base sm:text-lg">Start Your Project</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </Link>
          <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-md mx-auto">
            Ready to transform your ideas into reality? Let's discuss your project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
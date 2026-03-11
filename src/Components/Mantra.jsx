import React from "react";
import {
  MdKeyboardArrowRight,
  MdRocket,
  MdLightbulb,
  MdTrendingUp,
  MdStars,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Mantra = () => {
  const cards = [
    {
      title: "Innovation",
      icon: MdLightbulb,
      description: "Cutting-edge solutions that push boundaries",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-100 via-white to-pink-100",
      lottieUrl:
        "https://lottie.host/embed/e7e66a24-61dd-4f65-8e4c-d371b6ef55ad/oW0Vel94cT.lottie",
    },
    {
      title: "Excellence",
      icon: MdStars,
      description: "Uncompromising quality in everything we do",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-100 via-white to-cyan-100",
      lottieUrl:
        "https://lottie.host/embed/a305de71-ebb3-4d3a-b3d1-a7dee076f785/PqkEPueUoC.lottie",
    },
    {
      title: "Growth",
      icon: MdTrendingUp,
      description: "Continuous improvement and expansion",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-100 via-white to-emerald-100",
      lottieUrl:
        "https://lottie.host/embed/cf727572-6f80-4e9c-bcde-42c505d95dad/lYnqQ4d9eU.lottie",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Tanglome – Our Core Values & Pillars</title>
        <meta
          name="description"
          content="Discover the core values that drive Tanglome: Innovation, Excellence, and Growth."
        />
      </Helmet>

      <section className="w-full bg-white py-16 md:py-24 px-6 text-gray-900 relative overflow-hidden">
        {/* Background Blur Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 py-2 rounded-full border border-purple-300/30 shadow-sm mb-6">
              <MdStars className="text-purple-600 text-lg" />
              <span className="text-purple-700 font-semibold text-sm">
                Our Foundation
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Pillars of{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Tanglome
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The core values that drive everything we do and guide us to
              deliver exceptional results.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl border border-gray-100 hover:border-purple-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Animation Section */}
                <div
                  className={`relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br ${item.bgColor}`}
                >
                  <iframe
                    src={item.lottieUrl}
                    title={`${item.title} Animation`}
                    className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                    style={{ transform: "scale(1.2)", opacity: 0.8 }}
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} shadow-lg mb-5 group-hover:scale-110 transition duration-300`}
                  >
                    <item.icon className="text-white text-3xl" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div
                    className={`mt-6 h-1 w-16 bg-gradient-to-r ${item.color} rounded-full group-hover:w-full transition-all duration-500`}
                  ></div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/919585458794" target="_blank" rel="noopener noreferrer" className="block">
                <button className="group relative overflow-hidden px-6 py-5 bg-white text-purple-600 font-bold rounded-2xl shadow-lg border-2 border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-[1.02] active:scale-95">
                  <span className="relative flex items-center gap-3">
                    <MdRocket className="text-2xl group-hover:rotate-12 transition duration-300" />
                    WhatsApp Us
                  </span>
                </button>
              </a>
              <Link to="/schedule-meeting" className="block">
                <button className="group relative overflow-hidden px-8 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95">
                  <span className="relative flex items-center gap-3">
                    <MdRocket className="text-2xl group-hover:rotate-12 transition duration-300" />
                    Get Started Now
                    <MdKeyboardArrowRight className="text-3xl group-hover:translate-x-1 transition duration-300" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mantra;

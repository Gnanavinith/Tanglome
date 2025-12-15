import React, { useState } from "react";

const WHATSAPP_NUMBER = "9585458794";

const services = [
  {
    title: "Meta Ads & Google Ads",
    desc: "High-converting ad campaigns focused on quality leads, sales, and ROI.",
    category: "advertising",
    price: "Starting from ₹8,000 / month",
    featured: true,
  },
  {
    title: "LinkedIn Ads",
    desc: "Reach decision-makers and B2B audiences with laser-targeted ads.",
    category: "advertising",
    price: "Starting from ₹10,000 / month",
  },
  {
    title: "WhatsApp Automation & E-commerce Integration",
    desc: "Automate customer chats, order updates, and lead follow-ups on WhatsApp.",
    category: "automation",
    price: "Starting from ₹6,000",
  },
  {
    title: "AI Agents",
    desc: "24/7 AI agents to handle customer support, sales queries, and workflows.",
    category: "automation",
    price: "Starting from ₹15,000",
    featured: true,
  },
  {
    title: "SEO",
    desc: "Data-driven SEO strategies to rank higher and drive organic traffic.",
    category: "marketing",
    price: "Starting from ₹7,000 / month",
    featured: true,
  },
  {
    title: "Google My Business",
    desc: "Improve local visibility, calls, and map rankings.",
    category: "marketing",
    price: "Starting from ₹3,000",
  },
  {
    title: "Social Media Marketing (SMM)",
    desc: "Build brand trust, engagement, and growth across social platforms.",
    category: "marketing",
    price: "Starting from ₹6,000 / month",
  },
  {
    title: "WordPress E-commerce",
    desc: "Flexible and scalable WordPress stores built for conversions.",
    category: "development",
    price: "Starting from ₹18,000",
  },
  {
    title: "Shopify Store",
    desc: "Fast, secure, and conversion-optimized Shopify stores.",
    category: "development",
    price: "Starting from ₹20,000",
  },
  {
    title: "Custom Coding E-commerce",
    desc: "Fully custom e-commerce platforms tailored to your business needs.",
    category: "development",
    price: "Starting from ₹45,000",
  },
  {
    title: "Organic SEO & Backlinks",
    desc: "High-quality backlinks for long-term ranking and authority.",
    category: "marketing",
    price: "Starting from ₹5,000 / month",
  },
  {
    title: "Server & Hosting Services",
    desc: "Reliable, secure hosting with complete technical support.",
    category: "development",
    price: "Starting from ₹2,500 / year",
  },
  {
    title: "New MVP Development",
    desc: "Launch your startup idea quickly with a scalable MVP.",
    category: "development",
    price: "Starting from ₹35,000",
    featured: true,
  },
  {
    title: "App Development",
    desc: "Custom Android & iOS app development with secure, scalable architecture.",
    category: "development",
    price: "Starting from ₹50,000",
    featured: true,
  },
  {
    title: "Magazine Ads",
    desc: "Premium print & digital magazine ads to boost brand credibility.",
    category: "advertising",
    price: "Starting from ₹12,000",
  },
  {
    title: "Video Editing",
    desc: "Professional video editing for ads, reels, and brand storytelling.",
    category: "design",
    price: "Starting from ₹2,000 / video",
  },
];

const categories = [
  "all",
  "advertising",
  "automation",
  "marketing",
  "development",
  "design",
];

const OurServices = () => {
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

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Result-driven digital solutions designed to scale your business,
            increase visibility, and maximize revenue.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all
                ${
                  activeCategory === cat
                    ? "bg-black text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {service.featured && (
                <span className="absolute top-4 right-4 text-xs bg-black text-white px-3 py-1 rounded-full">
                  Popular
                </span>
              )}

              <span className="text-sm text-gray-400 font-medium">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-3 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed flex-grow">
                {service.desc}
              </p>

              <p className="mt-3 text-sm font-semibold text-gray-800">
                {service.price}
              </p>

              {/* WhatsApp CTA */}
              <button
                onClick={() =>
                  handleWhatsAppClick(service.title, service.price)
                }
                className="mt-5 w-full rounded-xl bg-green-500 text-white py-2.5 text-sm font-medium hover:bg-green-600 transition"
              >
                Click here to continue
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurServices;

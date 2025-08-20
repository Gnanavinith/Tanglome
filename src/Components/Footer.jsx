import React from "react";
import { FaFacebookF,FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 shadow-inner">
      
      {/* Grid Layout for Responsive Design */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-bold text-yellow-400">Tanglome</h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Empowering Ideas, Elevating Businesses. We provide top-notch
            software solutions to transform your vision into reality.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Solutions", path: "/solutions" },
              { name: "Products", path: "/products" },
              { name: "Services", path: "/services" },
              { name: "Blog", path: "/blog" },
              { name: "Contact", path: "/contact" },
              { name: "Schedule Meeting", path: "/schedule-meeting" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-gray-400 hover:text-yellow-400 transition duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      {/* Services Section */}
<div className="flex flex-col items-center md:items-start">
  <h3 className="text-xl font-semibold text-white">Our Services</h3>
  <ul className="mt-4 space-y-2">
    {[
      "App Development",
      "Windows Application",
      "Web Development",
      "SEO Optimization",
      "Graphics Designing",
      "Social Media Marketing",
      "Paid Ad Campaigns",
      "New Product Development",
      "Hosting Services"
    ].map((service) => (
      <li key={service}>
        <Link
          to={`/services`}
          className="text-gray-400 hover:text-yellow-400 transition duration-300"
        >
          {service}
        </Link>
      </li>
    ))}
  </ul>
</div>


        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="flex gap-4 mt-4">
            {[
              {
                icon: <FaLinkedinIn />,
                link: "https://www.linkedin.com/company/tanglome/posts/?feedView=all",
              },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/tanglome/",
              },
              {
                icon: <FaFacebookF />,
                link: "https://www.facebook.com/profile.php?id=61573406556298&mibextid=ZbWKwL",
              },
              {
                icon: <RiTwitterXLine />,
                link: "https://x.com/tanglome",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 text-xl transition duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6 mx-6"></div>

      {/* Bottom Section */}
      <div className="text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Tanglome. All Rights Reserved.
      </div>
      
    </footer>
  );
};

export default Footer;

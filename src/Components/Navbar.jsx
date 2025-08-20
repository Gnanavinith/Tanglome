import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineScheduleSend } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Detect Scroll for Sticky Navbar Effect
  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Tanglome | Empowering Businesses with Technology</title>
        <meta
          name="description"
          content="Tanglome offers innovative digital solutions, scalable software development, and technology-driven growth."
        />
        <meta property="og:title" content="Tanglome | Empowering Businesses with Technology" />
        <meta property="og:description" content="Build scalable and innovative digital solutions with Tanglome." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tanglome.com" />
        <meta property="og:image" content="https://tanglome.com/seo-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tanglome | Empowering Businesses with Technology" />
        <meta name="twitter:description" content="Build scalable and innovative digital solutions with Tanglome." />
      </Helmet>

      {/* Navbar */}
      <header
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          scrolling ? "bg-gradient-to-r from-gray-900 via-gray-900 to-gray-700 shadow-2xl" : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <nav className="w-full flex justify-between items-center px-6 py-6">
          {/* Brand Name (Removed Logo) */}
          <Link to="/" aria-label="Tanglome Home" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text">
              Tanglome
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6 items-center text-white text-xl">
            {["Home", "About", "Solutions", "Products", "Services", "Blog", "Careers", "Contact"].map((item) => (
              <li key={item} className="relative group">
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={item === "Home" ? closeMenu : undefined}
                  className="cursor-pointer transition-all duration-300 group-hover:text-yellow-500"
                  aria-label={item}
                >
                  {item}
                </Link>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
            <li>
              <Link
                to="/schedule-meeting"
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-3 rounded-full shadow-lg 
                hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center"
                aria-label="Schedule a Meeting"
              >
                Schedule A Meeting <MdOutlineScheduleSend className="text-xl ml-2" />
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-3xl text-yellow-600"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`absolute top-0 left-0 w-full min-h-screen bg-gray-900 shadow-lg transition-transform duration-700 ease-in-out ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          } lg:hidden z-50`}
          role="menu"
        >
          <div className="flex justify-end p-5">
            <button onClick={toggleMenu} className="text-3xl text-yellow-600" aria-label="Close menu">
              <FaTimes />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <ul className="flex flex-col items-center space-y-6 p-10 text-gray-300 mt-5">
            {["Home", "About", "Solutions", "Products", "Services", "Blog", "Careers", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={closeMenu}
                  className="hover:text-blue-500 cursor-pointer"
                  role="menuitem"
                  aria-label={item}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/schedule-meeting"
                onClick={closeMenu}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-500 transition flex items-center gap-2"
                aria-label="Schedule a Meeting"
              >
                Schedule A Meeting
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;

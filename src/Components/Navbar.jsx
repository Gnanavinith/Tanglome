import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { MdRocketLaunch, MdOutlineScheduleSend } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { 
      name: "Services", 
      path: "/services",
      dropdown: [
        { name: "Web Development", path: "/services/web-development" },
        { name: "App Development", path: "/services/app-development" },
        { name: "AI Solutions", path: "/services/ai-solutions" },
        { name: "Cloud Services", path: "/services/cloud-services" },
        { name: "Digital Marketing", path: "/services/digital-marketing" },
        { name: "WhatsApp Automation", path: "/services/whatsapp-automation" },
        { name: "MVP Development", path: "/services/mvp-development" }
      ]
    },
    { name: "Solutions", path: "/solutions" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "https://casestudyandblog.netlify.app/", isExternal: true },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  // Desktop Nav Link with Dropdown
  const NavLink = ({ item }) => {
    const isActive = location.pathname === item.path;
    const hasDropdown = item.dropdown && item.dropdown.length > 0;
    const isDropdownActive = dropdownOpen && hasDropdown;

    const base =
      "px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-1";

    const active = "text-black bg-black/10";

    const inactive =
      "text-black hover:text-gray-700 hover:bg-black/5";

    if (item.isExternal) {
      return (
        <a
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} ${inactive}`}
        >
          {item.name}
        </a>
      );
    }

    if (hasDropdown) {
      return (
        <div className="relative">
          <button
            className={`${base} ${isActive || isDropdownActive ? active : inactive}`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            {item.name}
            <FaChevronDown className={`transition-transform duration-200 ${isDropdownActive ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {isDropdownActive && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                {item.dropdown.map((subItem, index) => (
                  <Link
                    key={index}
                    to={subItem.path}
                    className="block px-4 py-3 text-black hover:bg-black/5 transition-colors duration-200"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <Link
        to={item.path}
        className={`${base} ${isActive ? active : inactive}`}
      >
        {item.name}
      </Link>
    );
  };

  // Mobile Nav Link
  const MobileNavLink = ({ item }) => {
    const isActive = location.pathname === item.path;

    const base = "flex items-center gap-4 p-4 rounded-xl transition-all";

    const active =
      "bg-black/10 text-black";

    const inactive =
      "text-black hover:bg-black/5";

    if (item.isExternal) {
      return (
        <a
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} ${inactive}`}
        >
          <div className="w-2 h-2 rounded-full bg-current opacity-50" />
          <span className="font-medium text-lg">{item.name}</span>
        </a>
      );
    }

    return (
      <Link
        to={item.path}
        className={`${base} ${isActive ? active : inactive}`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`w-2 h-2 rounded-full ${
            isActive ? "bg-black" : "bg-gray-400"
          }`}
        />
        <span className="font-medium text-lg">{item.name}</span>
      </Link>
    );
  };

  return (
    <>
      <Helmet />

      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 1)",
          boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.08)" : "none",
          height: scrolled ? "70px" : "80px"
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full z-[9999] backdrop-blur-xl border-b border-gray-100"
      >
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center h-full">

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="text-2xl font-black text-black">
              TANGLOME
            </Link>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/schedule-meeting"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#A556F8] to-[#4922E5] text-white rounded-full hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Started <MdRocketLaunch className="animate-pulse" />
              </Link>
            </motion.div>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>
      </motion.header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[9990] lg:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white z-[9991] shadow-2xl"
          >
            <div className="p-6 pt-24 space-y-2">
              {navItems.map((item) => (
                <MobileNavLink key={item.name} item={item} />
              ))}
            </div>

            <div className="p-6 border-t border-gray-100">
              <Link
                to="/schedule-meeting"
                className="w-full flex justify-center items-center gap-2 py-4 bg-gradient-to-r from-[#A556F8] to-[#4922E5] text-white rounded-xl font-semibold hover:shadow-lg transition-shadow"
                onClick={() => setMenuOpen(false)}
              >
                Schedule Meeting <MdOutlineScheduleSend />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

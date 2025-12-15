import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdRocketLaunch, MdOutlineScheduleSend } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = ["Home", "About", "Solutions", "Products", "Services", "Blog", "Careers", "Contact"];

  // Handle scroll effect with throttling to prevent flickering
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolling(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // Set initial state
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body scroll lock
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => document.body.style.overflow = "auto";
  }, [menuOpen]);

  // Animation variants
  const mobileMenuVariants = {
    closed: { x: "100%" },
    open: { x: 0 }
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  const menuItemVariants = {
    closed: { x: 20, opacity: 0 },
    open: (i) => ({ x: 0, opacity: 1, transition: { delay: i * 0.05 } })
  };

  const handleNavClick = (item) => {
    setActiveItem(item);
    setMenuOpen(false);
  };

  const NavLink = ({ item, isExternal = false, href = "" }) => {
    const isActive = activeItem === item;
    const isBlog = item === "Blog";
    
    const commonClasses = `px-4 py-2 rounded-xl transition-all duration-300 ${
      isActive ? "text-white bg-white/10" : "text-gray-300 hover:text-white hover:bg-white/5"
    }`;

    if (isBlog) {
      return (
        <motion.a
          href="https://casestudyandblog.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className={commonClasses}
          aria-label={item}
        >
          {item}
        </motion.a>
      );
    }

    return (
      <motion.div whileHover={{ scale: 1.05 }}>
        <Link
          to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
          className={commonClasses}
          onClick={() => handleNavClick(item)}
          aria-label={item}
        >
          {item}
        </Link>
      </motion.div>
    );
  };

  const MobileNavItem = ({ item, index }) => {
    const isBlog = item === "Blog";
    
    if (isBlog) {
      return (
        <motion.a
          href="https://casestudyandblog.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          variants={menuItemVariants}
          custom={index}
          className="flex items-center gap-4 p-4 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 group"
        >
          <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform duration-300" />
          <span className="font-medium">{item}</span>
        </motion.a>
      );
    }

    return (
      <motion.div
        variants={menuItemVariants}
        custom={index}
        className="flex items-center gap-4 p-4 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 group"
      >
        <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform duration-300" />
        <Link
          to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
          onClick={() => handleNavClick(item)}
          className="w-full font-medium"
        >
          {item}
        </Link>
      </motion.div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Tanglome | Empowering Businesses with Technology</title>
        <meta name="description" content="Innovative digital solutions and scalable software development." />
      </Helmet>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-[9998] transition-all duration-300 ease-in-out ${
          scrolling 
            ? "bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-white/10" 
            : "bg-transparent border-b border-transparent"
        }`}
        role="navigation"
      >
        <nav className="w-full flex justify-between items-center px-6 py-4 lg:px-8 lg:py-5">
          {/* Logo */}
          <Link to="/" onClick={() => setActiveItem("Home")} className="group">
            <span className="text-2xl lg:text-3xl font-black">
              Tanglome
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item}>
                <NavLink item={item} />
              </li>
            ))}
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/schedule-meeting"
                className="ml-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2"
              >
                <MdRocketLaunch className="text-lg" />
                <span>Get Started</span>
              </Link>
            </motion.li>
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Menu - Moved outside header to avoid stacking context issues */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-80 h-full bg-gray-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-[10000] lg:hidden overflow-y-auto"
            >
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                  Tanglome
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20"
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="p-6">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <div key={item} className="border-b border-white/5 last:border-b-0">
                      <MobileNavItem item={item} index={index} />
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    to="/schedule-meeting"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-4 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                  >
                    <MdOutlineScheduleSend className="text-xl" />
                    <span className="font-semibold">Schedule Meeting</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
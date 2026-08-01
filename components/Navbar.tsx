"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Globe } from "lucide-react";
import AlumilLogo from "./AlumilLogo";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Our Interns", href: "#interns" },
  { name: "Case Study", href: "#casestudy" },
  { name: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Dynamically highlight active tab based on scroll position
      const scrollPosition = window.scrollY + 200;
      const internsSection = document.getElementById("interns");
      const caseStudySection = document.getElementById("casestudy");
      const contactSection = document.getElementById("contact");

      if (contactSection && scrollPosition >= contactSection.offsetTop) {
        setActiveTab("Contact");
      } else if (caseStudySection && scrollPosition >= caseStudySection.offsetTop) {
        setActiveTab("Case Study");
      } else if (internsSection && scrollPosition >= internsSection.offsetTop) {
        setActiveTab("Our Interns");
      } else {
        setActiveTab("Home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    setActiveTab(name);
    if (href === "#home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-navbar py-3 shadow-sm" : "bg-white/70 backdrop-blur-md py-4 border-b border-gray-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LEFT: Official Alumil Corporate Logo Vector */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home", "Home")}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Alumil Homepage"
          >
            <div className="px-3 py-1.5 rounded-xl bg-white border border-gray-200 group-hover:border-alumil-yellow shadow-xs transition-all duration-300 flex items-center justify-center">
              <AlumilLogo className="h-9 sm:h-10 w-auto object-contain" />
            </div>
          </motion.a>

          {/* CENTER: Navigation Links with Yellow Under-glow Indicator */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-1 bg-gray-100/80 border border-gray-200 rounded-full px-3 py-1.5 backdrop-blur-md shadow-inner"
          >
            {navLinks.map((link) => {
              const isActive = activeTab === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.name)}
                  className={`relative px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "text-alumil-charcoal font-bold"
                      : "text-gray-600 hover:text-alumil-charcoal"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activePillLight"
                      className="absolute inset-0 bg-alumil-yellow/25 rounded-full border border-alumil-yellow shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </motion.nav>

          {/* RIGHT CTA: Solid Alumil Yellow Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden sm:flex items-center gap-3"
          >
            <a
              href="https://www.alumil.com/egypt/homeowners"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-sm bg-alumil-yellow text-alumil-charcoal transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_4px_20px_rgba(255,210,0,0.35)] hover:shadow-[0_6px_25px_rgba(255,210,0,0.55)] border border-alumil-yellow/80"
            >
              <Globe className="w-4 h-4 text-alumil-charcoal transition-transform duration-300 group-hover:rotate-45" />
              <span>Alumil Egypt</span>
              <ArrowUpRight className="w-4 h-4 text-alumil-charcoal transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* MOBILE MENU TOGGLE */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white border border-gray-200 text-gray-800 hover:text-alumil-charcoal focus:outline-none shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 px-4 pt-4 pb-6 space-y-3 mt-3 shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href, link.name);
                  setMobileMenuOpen(false);
                }}
                className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all ${
                  activeTab === link.name
                    ? "bg-alumil-yellow/20 text-alumil-charcoal border border-alumil-yellow/50 font-bold"
                    : "text-gray-700 hover:bg-gray-100 hover:text-alumil-charcoal"
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2 border-t border-gray-200">
              <a
                href="https://www.alumil.com/egypt/homeowners"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-alumil-yellow text-alumil-charcoal shadow-md"
              >
                <Globe className="w-4 h-4" />
                <span>Alumil Egypt</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

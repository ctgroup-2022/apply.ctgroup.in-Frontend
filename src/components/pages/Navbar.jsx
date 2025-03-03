import React, { useState, useEffect, lazy, Suspense, useCallback } from "react";
import {
  Menu,
  X,
  Phone,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Facebook,
} from "lucide-react";
import NavLink from "./navigation/Navlink";
import CtLogo from "../../assets/Images/Navbar/logo1.webp";
import Naac from "../../assets/Images/Navbar/naaclogo.webp";
const CourseSection = lazy(() => import("./navigation/CourseSection"));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const [isCourseLoaded, setIsCourseLoaded] = useState(false);

  // 🔹 Preload CourseSection on page load to avoid delay
  useEffect(() => {
    import("./navigation/CourseSection").then(() => setIsCourseLoaded(true));
  }, []);

  const toggleCourseDropdown = useCallback((e) => {
    e.preventDefault();
    setIsCourseDropdownOpen((prev) => !prev);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <nav className="bg-[#224E91] shadow-lg fixed w-full top-0 z-[9999]">
      {/* Top Bar */}
      <div className="bg-[#B91C1C] text-white px-4 py-1 hidden md:flex justify-between items-center">
        <a
          href="tel:1800-137-2227"
          className="flex items-center gap-1 hover:text-gray-200 transition"
          aria-label="Call us at 1800-137-2227"
        >
          <Phone size={14} /> <span>1800-137-2227</span>
        </a>

        <div className="flex items-center gap-4">
          {[Instagram, Twitter, Youtube, Linkedin, Facebook].map(
            (Icon, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-gray-100 transition"
                aria-label={`Follow us on ${Icon.name}`}
              >
                <Icon size={16} />
              </a>
            )
          )}
          <span className="h-4 w-px bg-gray-400"></span>
          {["News", "Events"].map((text, idx) => (
            <a
              key={idx}
              className="hover:text-gray-100 transition"
              href="#"
              aria-label={text}
            >
              {text}
            </a>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto px-4 max-w-7xl flex justify-between items-center h-20 opacity-95">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={CtLogo}
            alt="CT Logo"
            width="150"
            height="80"
            className="w-[150px] h-[80px] object-contain"
          />
          <img
            src={Naac}
            alt="Naac"
            width="150"
            height="80"
            className="w-[150px] h-[80px] object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm lg:text-base">
          <NavLink
            href="#"
            text="Programs"
            onClick={toggleCourseDropdown}
            className="bg-[#EAB308] text-white px-6 py-2 rounded-full text-xl "
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-white hover:text-gray-900 transition"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3">
          <MobileNavLink
            href="#"
            text="Programs"
            onClick={() => {
              setIsOpen(false);
              setIsCourseDropdownOpen((prev) => !prev);
            }}
            className="bg-[#EAB308] text-black px-4 py-2 rounded-full text-lg hover:bg-yellow-500 transition"
          />
        </div>
      )}

      {/* Preloaded Course Dropdown */}
      {isCourseLoaded && isCourseDropdownOpen && (
        <Suspense
          fallback={
            <div className="text-center py-4 text-white">Loading...</div>
          }
        >
          <CourseSection
            isOpen={isCourseDropdownOpen}
            onClose={() => setIsCourseDropdownOpen(false)}
          />
        </Suspense>
      )}
    </nav>
  );
};

// Mobile Navigation Link Component
const MobileNavLink = ({ href, text, onClick, className }) => (
  <a
    href={href}
    onClick={onClick}
    className={`block text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md font-medium transition ${className}`}
  >
    {text}
  </a>
);

export default Navbar;

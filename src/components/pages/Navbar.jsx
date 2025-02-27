import React, { useState, lazy, Suspense } from "react";
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
import CtLogo from "../../assets/Images/Navbar/logo1.png";
import NaacLogo from "../../assets/Images/Navbar/naaclogo.webp";

// Lazy load CourseDropdown
const CourseSection = lazy(() => import("./navigation/CourseSection"));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);

  const toggleCourseDropdown = (e) => {
    e.preventDefault();
    setIsCourseDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#224E91] shadow-lg fixed w-full top-0 z-[9999] ">
      {/* Top bar */}
      <div className="bg-[#B91C1C] text-white px-4 py-1 hidden md:flex justify-between items-center">
        <a
          href="tel:+1234567890"
          className="flex items-center gap-1 hover:text-gray-200"
        >
          <Phone size={14} /> <span>1800-137-2227</span>
        </a>
        <div className="flex items-center gap-4">
          <a className="hover:text-gray-100">
            <Instagram size={16} />
          </a>
          <a className="hover:text-gray-100">
            <Twitter size={16} />
          </a>
          <a className="hover:text-gray-100">
            <Youtube size={16} />
          </a>
          <a className="hover:text-gray-100">
            <Linkedin size={16} />
          </a>
          <a className="hover:text-gray-100">
            <Facebook size={16} />
          </a>
          <span className="h-4 w-px bg-gray-400"></span>
          <a className="hover:text-gray-100">News</a>
          <span className="h-4 w-px bg-gray-400"></span>
          <a className="hover:text-gray-100">Events</a>
        </div>
      </div>

      {/* Main navbar */}
      <div className="mx-auto px-4 max-w-7xl flex justify-between items-center h-20 opacity-95">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center">
            <img
              src={CtLogo}
              alt="CT Logo"
              loading="lazy"
              className="h-10 lg:h-14"
            />
          </a>
          <a href="/" className="flex items-center">
            <img
              src={NaacLogo}
              alt="NAAC Logo"
              loading="lazy"
              className="h-20 lg:h-24" // Increased from h-10/h-14 to h-12/h-16
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm lg:text-base">
          <NavLink
            href="#"
            text="Programs"
            onClick={toggleCourseDropdown}
            className="nav bg-red-500 text-red px-6 py-2 rounded-full text-xl"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md text-white hover:text-gray-900"
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
            className="bg-red-500 text-black px-4 py-2 rounded-full text-lg"
          />
        </div>
      )}

      {/* Lazy-loaded Course Dropdown */}
      <Suspense fallback={<div className="text-center py-4">Loading...</div>}>
        {isCourseDropdownOpen && (
          <CourseSection
            isOpen={isCourseDropdownOpen}
            onClose={() => setIsCourseDropdownOpen(false)}
          />
        )}
      </Suspense>
    </nav>
  );
};

const MobileNavLink = ({ href, text, onClick, className }) => (
  <a
    href={href}
    onClick={onClick}
    className={`block text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md font-medium ${className}`}
  >
    {text}
  </a>
);

export default Navbar;
import React, { useState, useEffect, lazy, Suspense, useCallback } from "react";
import {
  Menu,
  X,
} from "lucide-react";
import NavLink from "./navigation/Navlink";
const CourseSection = lazy(() => import("./navigation/CourseSection"));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const [isCourseLoaded, setIsCourseLoaded] = useState(false);

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
    <nav className="fixed w-full top-0 z-[9999] bg-primary/90 backdrop-blur-lg border border-white/10 shadow-lg max-sm:bg-primary/90">
      <div className="mx-auto px-4 max-w-7xl flex justify-between items-center h-20">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="https://res.cloudinary.com/dhkemgng9/image/upload/v1741243057/logo1_vrfikm.webp"
            alt="CT Logo"
            width="150"
            height="80"
            className="w-[190px] h-[80px] max-[420px]:h-[40px] max-[375px]:h-[30px] object-contain pr-4 max-[420px]:pr-2"
          />
          <img
            src="https://res.cloudinary.com/dhkemgng9/image/upload/v1741409254/frame_fqf37l.png"
            alt="Naac"
            width="150"
            height="80"
            className="w-[150px] h-[80px] max-[420px]:h-[30px] object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm lg:text-base">
          <NavLink
            href="#"
            text="Programs"
            onClick={toggleCourseDropdown}
            className="bg-secondary text-text_color px-6 py-3 rounded-full text-xl"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2  text-text_color transition"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="bg-secondary px-4 py-2 rounded-full text-lg hover:bg-secondary transition"
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
    className={`block text-text_color px-3 py-2 rounded-md font-medium transition ${className}`}
  >
    {text}
  </a>
);

export default Navbar;

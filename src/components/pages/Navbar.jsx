import React, { useState, useEffect, lazy, Suspense, useCallback } from "react";
import { Menu, X, Phone } from "lucide-react";
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
          <div className="flex items-center gap-4">
            <div>
              <img
                src="https://res.cloudinary.com/dhkemgng9/image/upload/v1741243057/logo1_vrfikm.webp"
                alt="CT Logo"
                className="w-[150px] h-auto object-contain"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dhkemgng9/image/upload/v1741841796/naac_qpf9xh.png"
                alt="Naac"
                className="w-[70px] h-auto object-contain"
              />
            </div>
            
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm lg:text-base">
          <NavLink
            href="#"
            text="Programs"
            onClick={toggleCourseDropdown}
            className="bg-secondary text-text_color px-6 py-3 rounded-full text-xl"
          />
          <a href="tel:18001372227" className="flex items-center text-text_color gap-1 hover:text-text_color transition-colors">
            <Phone size={18} />
            <span className="font-medium">Toll Free: 1800-137-2227</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-text_color transition"
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
          <a href="tel:18001372227" className="flex items-center text-text_color gap-1 mt-2 px-3 py-2 hover:text-secondary transition-colors">
            <Phone size={18} />
            <span className="font-medium">Toll Free: 1800-137-2227</span>
          </a>
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

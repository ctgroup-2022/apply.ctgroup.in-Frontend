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

  // Function to scroll smoothly to a section - enhanced for mobile
  const scrollToSection = (id) => {
    // Close mobile menu first to avoid UI issues
    setIsOpen(false);
    
    // Small timeout to allow DOM updates after menu closing
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const navbarHeight = 80; // Adjust based on navbar height
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        console.error(`Element with id "${id}" not found`);
      }
    }, 100); // Small delay to ensure DOM is updated
  };

  return (
    <nav className="fixed w-full top-0 z-[9999] bg-primary/90 backdrop-blur-lg border border-white/10 shadow-lg max-sm:bg-primary/90">
      <div className="mx-auto px-4 max-w-7xl flex items-center h-20">
        {/* Logo */}
        <a href="/" className="flex items-center mr-auto">
          <div className="flex items-center gap-4">
            <div>
              <img
                src="https://res.cloudinary.com/dhkemgng9/image/upload/v1741243057/logo1_vrfikm.webp"
                alt="CT Logo"
                className="w-[160px] h-auto object-contain"
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

        {/* Desktop Menu - Centered */}
        <div className="hidden min-[920px]:flex items-center justify-center gap-8 text-sm lg:text-base mx-auto">
          <button
            onClick={() => scrollToSection("about")}
            className="text-text_color text-md font-bold hover:text-text_color transition"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("virtual-tour")}
            className="text-text_color text-md font-bold hover:text-text_color transition"
          >
            Virtual Tour
          </button>
          <button
            onClick={() => scrollToSection("awards")}
            className="text-text_color text-md font-bold hover:text-text_color transition"
          >
            Awards & Achievements
          </button>
          <button
            onClick={() => scrollToSection("logos")}
            className="text-text_color text-md font-bold hover:text-text_color transition"
          >
            Recruiters 
          </button>
        </div>
        
        {/* Right side items */}
        <div className="hidden min-[920px]:flex items-center ml-auto gap-4">
          <NavLink
            href="#"
            text="Programs"
            onClick={toggleCourseDropdown}
            className="bg-secondary text-text_color px-5 py-2.5 rounded-full text-xl"
          />
         
          <a href="tel:18001372227" className="flex items-center text-text_color gap-1 hover:text-text_color transition-colors">
            <Phone size={18} />
            <span className="font-medium">Toll Free: 1800-137-2227</span>
          </a>
        </div>

        {/* Mobile Menu Button - Changed from md to min-width 920px */}
        <button
          onClick={toggleMenu}
          className="min-[920px]:hidden p-2 text-text_color transition ml-auto"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Changed from md to min-width 920px */}
      {isOpen && (
        <div className="min-[920px]:hidden px-4 pb-4 pt-2 bg-primary/95 backdrop-blur-md">
          <button
            onClick={() => scrollToSection("about")}
            className="w-full text-left block text-text_color px-4 py-2.5 rounded-md font-medium transition hover:bg-primary/90"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("virtual-tour")}
            className="w-full text-left block text-text_color px-4 py-2.5 rounded-md font-medium transition hover:bg-primary/90"
          >
            Virtual Tour
          </button>
          <button
            onClick={() => scrollToSection("awards")}
            className="w-full text-left block text-text_color px-4 py-2.5 rounded-md font-medium transition hover:bg-primary/90"
          >
            Awards & Achievements
          </button>

          <button
            onClick={() => {
              setIsOpen(false);
              setIsCourseDropdownOpen((prev) => !prev);
            }}
            className="w-full text-left block text-text_color px-4 py-2.5 rounded-md font-medium transition bg-secondary mt-2"
          >
            Programs
          </button>
         
          <a href="tel:18001372227" className="flex items-center text-text_color gap-1 mt-2 px-4 py-2.5 hover:text-text_color transition-colors">
            <Phone size={18} />
            <span className="font-medium">Toll Free: 1800-137-2227</span>
          </a>
        </div>
      )}

      {/* Preloaded Course Dropdown */}
      {isCourseLoaded && isCourseDropdownOpen && (
        <Suspense fallback={<div className="text-center py-4 text-white">Loading...</div>}>
          <CourseSection
            isOpen={isCourseDropdownOpen}
            onClose={() => setIsCourseDropdownOpen(false)}
          />
        </Suspense>
      )}
    </nav>
  );
};

export default Navbar;

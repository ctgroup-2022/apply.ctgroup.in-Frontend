import React, { lazy, Suspense } from "react";


const FaFacebookF = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaFacebookF })));
const FaInstagram = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaInstagram })));
const FaTwitter = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaTwitter })));
const FaLinkedinIn = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaLinkedinIn })));
const FaYoutube = lazy(() => import("react-icons/fa").then(module => ({ default: module.FaYoutube })));

import Logo from "../assets/Images/Navbar/ctlogo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#bcbbbb] via-[#027FC3] to-[#2B4184] text-white py-6 px-4 sm:px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        {/* Left Section */}
        <div className="md:w-1/3 flex flex-col items-start">
          <img src={Logo} alt="CT Logo" className="mb-4 w-24 sm:w-32" loading="lazy" />
          <p className="text-xs sm:text-sm leading-relaxed">
            CT Group of Institutions is renowned for its exceptional academic programs, providing top-tier education in both undergraduate and postgraduate fields.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <address className="text-xs sm:text-sm not-italic mb-4">
            Urban Estate Phase 2, Pratappura Road, Near Lambra, Shahpur, Jalandhar, Punjab 144020
          </address>
          <p className="text-xs sm:text-sm mb-2">📞 1800-137-2227, +91-181-5055127</p>
          <p className="text-xs sm:text-sm mb-4">✉️ info@ctgroup.in</p>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="flex space-x-3">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 bg-white text-purple-900 rounded-full hover:bg-purple-700 hover:text-white transition-colors duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </Suspense>
        </div>
      </div>

      <div className="border-t border-white mt-6 pt-4 text-center text-xs sm:text-sm">
        COPYRIGHT©2024 CT Group. All rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

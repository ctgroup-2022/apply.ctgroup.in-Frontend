import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Logo from "../assets/Images/Navbar/logo1.webp";
import NaacLogo from "../assets/Images/Navbar/naaclogo.webp";

const socialLinks = [
  { Icon: FaFacebookF, link: "#", label: "Facebook" },
  { Icon: FaInstagram, link: "#", label: "Instagram" },
  { Icon: FaTwitter, link: "#", label: "Twitter" },
  { Icon: FaLinkedinIn, link: "#", label: "LinkedIn" },
  { Icon: FaYoutube, link: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-text_color py-6 px-4 sm:px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        {/* Left Section */}
        <div className="md:w-1/3 flex flex-col items-start">
          <a href="/" className="flex items-center mb-4">
            <img
              src={Logo}
              alt="CT Logo"
              loading="lazy"
              className="h-10 lg:h-14"
            />
          </a>
          <a href="/" className="flex items-center mb-4">
            <img
              src={NaacLogo}
              alt="NAAC Logo"
              loading="lazy"
              className="h-20 lg:h-24"
            />
          </a>
          <p className="text-xs sm:text-sm leading-relaxed">
            CT Group of Institutions is renowned for its exceptional academic
            programs, providing top-tier education in both undergraduate and
            postgraduate fields.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <address className="text-xs sm:text-sm not-italic mb-4">
            Urban Estate Phase 2, Pratappura Road, Near Lambra, Shahpur,
            Jalandhar, Punjab 144020
          </address>
          <p className="text-xs sm:text-sm mb-2">
            📞 <a href="tel:18001372227" className="underline text-text_color">1800-137-2227</a>, <a href="tel:+911815055127" className="underline text-text_color">+91-181-5055127</a>
          </p>
          <p className="text-xs sm:text-sm mb-4">
            ✉ <a href="mailto:info@ctgroup.in" className="underline text-text_color">info@ctgroup.in</a>
          </p>
          <div className="flex space-x-3">
            {socialLinks.map(({ Icon, link, label }, index) => (
              <a
                key={index}
                href={link}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-100 text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-400 mt-6 pt-4 text-center text-xs sm:text-sm">
        COPYRIGHT ©2024 CT Group. All rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
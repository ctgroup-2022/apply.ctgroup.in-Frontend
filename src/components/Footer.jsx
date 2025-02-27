Footer.jsx;
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../assets/Images/Navbar/ctlogo.png";

const socialLinks = [
  { Icon: FaFacebookF, link: "#", label: "Facebook" },
  { Icon: FaInstagram, link: "#", label: "Instagram" },
  { Icon: FaTwitter, link: "#", label: "Twitter" },
  { Icon: FaLinkedinIn, link: "#", label: "LinkedIn" },
  { Icon: FaYoutube, link: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-6 px-4 sm:px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        {/* Left Section */}
        <div className="md:w-1/3 flex flex-col items-start">
          <img
            src={Logo}
            alt="CT Logo"
            className="mb-4 w-24 sm:w-32"
            loading="lazy"
          />
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
            📞 1800-137-2227, +91-181-5055127
          </p>
          <p className="text-xs sm:text-sm mb-4">✉ info@ctgroup.in</p>
          <div className="flex space-x-3">
            {socialLinks.map(({ Icon, link, label }, index) => (
              <a
                key={index}
                href={link}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white text-purple-900 rounded-full hover:bg-purple-700 hover:text-white transition-colors duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white mt-6 pt-4 text-center text-xs sm:text-sm">
        COPYRIGHT©2024 CT Group. All rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

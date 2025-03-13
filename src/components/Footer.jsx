import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaTwitter, label: "Twitter" },
  { Icon: FaLinkedinIn, label: "LinkedIn" },
  { Icon: FaYoutube, label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-text_color py-6 px-4 sm:px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        {/* Left Section */}
        <div className="md:w-1/3 flex flex-col items-start">
          <div className="flex items-center mb-4 pointer-events-none">
            <img
              src="https://res.cloudinary.com/dhkemgng9/image/upload/v1741243057/logo1_vrfikm.webp"
              alt="CT Logo"
              loading="lazy"
              className="h-10 lg:h-14"
            />
          </div>
          <div className="flex items-center mb-4 pointer-events-none">
            <img
              src="https://res.cloudinary.com/dhkemgng9/image/upload/v1741409254/frame_fqf37l.png"
              alt="NAAC Logo"
              loading="lazy"
              className="h-8 lg:h-8"
            />
          </div>
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
          <p className="text-xs sm:text-sm mb-2 pointer-events-none select-none">
            📞 1800-137-2227, +91-181-5055127
          </p>
          <p className="text-xs sm:text-sm mb-4 pointer-events-none select-none">
            ✉ info@ctgroup.in
          </p>
          <div className="flex space-x-3 pointer-events-none">
            {socialLinks.map(({ Icon, label }, index) => (
              <div
                key={index}
                aria-label={label}
                className="p-2 bg-gray-100 text-primary rounded-full"
              >
                <Icon />
              </div>
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

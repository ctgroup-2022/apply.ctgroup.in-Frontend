import React from 'react';
import { ChevronDown } from 'lucide-react';

const NavLink = ({ href, text, onClick, hasDropdown = true }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-[#fffde7] px-4  py-4 rounded-md text-5xl text-bold md:text-4xl lg:text-base font-bold flex items-center  bg-secondary "
    >
      {text}
      {hasDropdown && <ChevronDown size={16} className="ml-1" />}
    </a>
  );
};

export default NavLink;
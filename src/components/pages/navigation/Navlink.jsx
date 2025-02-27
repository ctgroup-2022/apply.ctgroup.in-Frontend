import React from 'react';
import { ChevronDown } from 'lucide-react';

const NavLink = ({ href, text, onClick, hasDropdown = true }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-black hover:text-yellow-300 px-4  py-4 rounded-md text-5xl text-bold md:text-4xl lg:text-base font-medium flex items-center  bg-red-700 "
    >
      {text}
      {hasDropdown && <ChevronDown size={16} className="ml-1" />}
    </a>
  );
};

export default NavLink;
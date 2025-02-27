"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./Navbar"; // Import your Navbar component
import { ArrowRight } from "lucide-react";
import Logo from "../assets/Images/Navbar/ctlogo.png";
import NaacLogo from "../assets/Images/Navbar/naaclogo.webp";

export default function CustomNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen width on mount and whenever it changes
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this based on your desired breakpoint
    };

    // Initial check
    checkMobileView();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobileView);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  // If it's mobile view, render <Navbar /> instead of CustomNav
  if (isMobile) {
    return <Navbar />;
  }

  return (
    <nav className="w-full bg-white shadow-md text-black">
      <div className="mx-auto flex items-center justify-between px-4 py-1 max-lg:gap-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="CT Logo" className="h-14" />
          <span>
            <img src={NaacLogo} alt="Naac Logo" className="h-[75px] w-18" />
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 font-medium text-md">
          <li className="relative group">
            <Link href="/" className="text-gray-800 transition-colors">
              ABOUT
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="relative group">
            <Link href="/diploma-courses" className="text-gray-800 transition-colors">
              COURSES
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="relative group">
            <Link href="/pg-courses" className="text-gray-800 transition-colors">
              ACADEMICS
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="relative group">
            <Link href="/placements" className="text-gray-800 transition-colors">
              PLACEMENTS
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="relative group">
            <Link href="/contact" className="text-gray-800 transition-colors">
              CONTACT
            </Link>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
          </li>
        </ul>

        {/* Enquire Now Button */}
        <button className="group relative flex h-12 w-[170px] items-center justify-between border-2 dark:border-[#656fe2] border-[#394481] rounded-full bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f7f8ff] to-[#ffffff] font-medium dark:text-neutral-200 text-black">
          <span className="pl-4">Enquire Now</span>
          <div className="relative h-9 w-9 overflow-hidden dark:bg-white bg-black rounded-full mr-1">
            <div className="absolute top-[0.7em] left-[-0.1em] grid place-content-center transition-all w-full h-full duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 dark:fill-black fill-white"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mb-1 -translate-x-4 dark:fill-black fill-white"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </button>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-gray-800 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md mt-2">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link href="/" className="text-gray-800">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/diploma-courses" className="text-gray-800">
                COURSES
              </Link>
            </li>
            <li>
              <Link href="/pg-courses" className="text-gray-800">
                ACADEMICS
              </Link>
            </li>
            <li>
              <Link href="/placements" className="text-gray-800">
                PLACEMENTS
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-800">
                CONTACT
              </Link>
            </li>
            <li>
              <button className="group relative flex h-12 w-[170px] items-center justify-between border-2 dark:border-[#656fe2] border-[#394481] rounded-full bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#f7f8ff] to-[#ffffff] font-medium dark:text-neutral-200 text-black">
                <span className="pl-4">Enquire Now</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// Import all logos
import logo1 from "../../assets/Images/logo 1.png";
import logo2 from "../../assets/Images/logo 2.png";
import logo3 from "../../assets/Images/logo 3.png";
import logo4 from "../../assets/Images/logo 4.png";
import logo5 from "../../assets/Images/logo 5.png";
import logo6 from "../../assets/Images/logo 6.png";
import logo7 from "../../assets/Images/logo 7.png";

const LogoSlider = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  // Duplicate logos for smooth infinite scroll effect
  const duplicatedLogos = [...logos, ...logos];

  // Group logos into 4 columns
  const groupedLogos = [[], [], [], []];
  duplicatedLogos.forEach((logo, index) => {
    groupedLogos[index % 4].push(logo);
  });

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideOptions = (delay) => ({
    type: "loop",
    autoplay: true,
    interval: 2000,
    direction: "ttb",
    height: width < 768 ? "30px" : "400px", // Adjust height based on screen width
    perPage: 1,
    pagination: false,
    arrows: false,
    speed: 1000,
    easing: "linear",
    autoplayStart: delay,
  });

  return (
    <section className="text-black bg-white flex flex-col px-4 pb-8 md:px-24 lg:px-24">
      <div className="pt-12 md:pt-24 mx-4 md:mx-8 lg:mx-20 min-[1000px]:pt-72">
        <div className="relative flex justify-center items-center h-28">
          <h1 className="text-3xl sm:text-5xl font-bold z-10 relative">
            <span className="text-[#284587]">Recruiters </span>at CT Group
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1"
              width="300"
              height="30"
              viewBox="0 0 300 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,25 C75,-25 225,75 300,25"
                stroke="#185da0"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M0,35 C75,-15 225,85 300,35"
                stroke="#185da0"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </h1>
        </div>
        <p className="text-center mt-4 md:mt-6 mb-8">
          We'll help you get hired. Our team will work with you throughout the
          program and after graduation to help you embellish your portfolio,
          practice interviewing, and land a job that enhances your skills and
          accelerates your growth.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 bg-white items-center justify-items-center px-4 md:px-8 lg:px-12">
        {groupedLogos.map((column, colIndex) => (
          <Splide
            key={colIndex}
            options={slideOptions(colIndex % 2 === 0 ? 0 : 2000)}
            aria-label={`Company Logos Column ${colIndex + 1}`}
            className="w-full h-full"
          >
            {column.map((logo, logoIndex) => (
              <SplideSlide key={logoIndex}>
                <div className="img_box flex justify-center items-center">
                  <img
                    src={logo}
                    alt={`Company Logo ${logoIndex + 1}`}
                    className="w-24 h-18 md:w-36 md:h-27 lg:w-48 lg:h-36 xl:w-56 xl:h-42"
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        ))}
      </div>
    </section>
  );
};

export default LogoSlider;

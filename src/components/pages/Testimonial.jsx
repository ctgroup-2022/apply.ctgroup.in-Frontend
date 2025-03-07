import React, { useEffect, useState, useRef } from "react";

import { motion } from "framer-motion";

const Testimonial = () => {
  const images = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dhkemgng9/image/upload/v1741243064/3_w6m0to.png",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dhkemgng9/image/upload/v1741243064/2_wpqthd.png",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dhkemgng9/image/upload/v1741243064/1_s39mfo.png",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dhkemgng9/image/upload/v1741243064/3_w6m0to.png",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dhkemgng9/image/upload/v1741243064/2_wpqthd.png",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dhkemgng9/image/upload/v1741243064/1_s39mfo.png",
    },
  ];

  const [cardsToShow, setCardsToShow] = useState(3);
  const [position, setPosition] = useState(0);
  const sliderRef = useRef(null);

  // Clone the images for seamless infinite scrolling
  const extendedImages = [...images, ...images];

  // Adjust number of visible cards dynamically
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 705) {
        setCardsToShow(1);
      } else if (window.innerWidth <= 1023) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (position >= images.length) {
      setTimeout(() => {
        setPosition(0);
        if (sliderRef.current) {
          sliderRef.current.style.transition = "none";
          sliderRef.current.style.transform = `translateX(0%)`;
        }
      }, 1000);
    } else {
      if (sliderRef.current) {
        sliderRef.current.style.transition = "transform 1s ease-in-out";
        sliderRef.current.style.transform = `translateX(-${
          (position * 100) / cardsToShow
        }%)`;
      }
    }
  }, [position, cardsToShow]);

  return (
    <div className="bg-gradient-to-r from-[#f3f6fc] to-[#e5ecf9]">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 text-black"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-primary">Voice Of Our Students</span>
        </motion.h1>

        <div className="overflow-hidden relative">
          <div
            ref={sliderRef}
            className="flex"
            style={{
              transform: `translateX(-${(position * 100) / cardsToShow}%)`,
            }}
          >
            {extendedImages.map((image, index) => (
              <div
                key={index}
                className={`flex-none w-full ${
                  cardsToShow === 1
                    ? "sm:w-full"
                    : cardsToShow === 2
                    ? "sm:w-1/2"
                    : "sm:w-1/3"
                } px-4`}
              >
                <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-primary transform hover:scale-105 transition-all duration-300">
                  <img
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(images.length)].map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                position % images.length === idx
                  ? "w-6 sm:w-8 bg-primary"
                  : "w-2 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

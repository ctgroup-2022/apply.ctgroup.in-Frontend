import React from "react";
import { motion } from "framer-motion";
import Logo1 from "../../assets/Images/logo 1.png";
import Logo2 from "../../assets/Images/logo 2.png";
import Logo3 from "../../assets/Images/logo 3.png";
import Logo4 from "../../assets/Images/logo 4.png";
import Logo5 from "../../assets/Images/logo 5.png";
import Logo6 from "../../assets/Images/logo 6.png";
import Logo7 from "../../assets/Images/logo 7.png";

const Marquee = ({ images, direction }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex space-x-10"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{ ease: "linear", duration: 10, repeat: Infinity }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Company Logo"
            className="h-24 w-24 sm:h-32 sm:w-32 object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

const Recruiters = () => {
  const logos = [
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7,
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7,
 
  ];

  return (
    <div className="container mx-auto text-center text-3xl sm:text-5xl pt-20 pb-8 max-md:pt-8">
      <span className="text-primary font-bold">Recruiters at CT Group</span>
      <p className="text-center text-base sm:text-lg text-dark_text px-6 sm:px-16 md:px-32 lg:px-48 mt-4 font-bold">
        We'll help you get hired. Our team will work with you throughout the
        program and after graduation to help you embellish your portfolio,
        practice interviewing, and land a job that enhances your skills and
        accelerates your growth.
      </p>
      <Marquee images={[...logos, ...logos]} direction="left" />
      <Marquee images={[...logos, ...logos]} direction="right" />
    </div>
  );
};

export default Recruiters;

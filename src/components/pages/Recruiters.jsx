import React from "react";
import { motion } from "framer-motion";
 

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
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741243044/Logo_1_e4qiz7.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741243044/Logo_2_tj4v9c.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741243046/Logo_3_f72yzr.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741243052/Logo_4_ipeal1.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741243053/Logo_5_yv6xso.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741243053/logo_6_twvkrs.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741243053/Logo_7_vdchcv.png",
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

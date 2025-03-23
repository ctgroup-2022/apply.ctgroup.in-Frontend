import React from "react";
import { motion } from "framer-motion";


const Marquee = ({ images, direction }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap" >
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
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741847202/paytm_sl5ole.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741847202/paytm_sl5ole.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741847201/indigo_lfifwa.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741847201/ibm_oteyig.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741847200/f13_jbmtax.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741847200/f12_fbrslx.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741847200/f11_rqy1ai.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741847199/f10_uhchux.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741847199/f9_fugxyj.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741847199/f8_prkvrm.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741847198/f7_ioqifi.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741847198/f6_spfkf8.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741847198/f5_jwte5q.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741847197/f4_jty1zo.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741847197/f3_whdhje.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741847196/f1_bwnn9b.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741847195/airtel_ncgiqi.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1741847195/coca-cola_pt2wax.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1742628954/hm-logo-1_ohwjcf.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1742628954/hm-logo-1_ohwjcf.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1742628954/HDFC_BANK_LOGO_cbblbq.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1742628941/upgrad-logo_udxyta.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1742628942/Videocon_logo.svg_m01oco.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1742628942/Byjus-Logo_vfjwuy.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1742628942/capgemini_x0tzc5.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1742628942/Axis_Bank-Logo.wine_paiotd.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1742628941/tommy-hilfiger-2-logo-png-transparent_nmyaeh.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1742628941/RADISSON_LOGO_dsqcm8.png",
    "https://res.cloudinary.com/dhkemgng9/image/upload/v1742628941/standard_chartered_logo_atnizf.png",

  ];

  return (
    <div className="container mx-auto text-center text-3xl sm:text-5xl pt-20 pb-16 max-md:pt-8" id="logos">
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

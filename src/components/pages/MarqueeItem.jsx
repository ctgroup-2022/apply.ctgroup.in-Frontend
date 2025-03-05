import React from "react";
import { motion } from "framer-motion";
import "./Recruiters.css";

const MarqueeItem = ({ images, from, to }) => {
  return (
    <div className="flex MyGradient overflow-hidden">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return (
            <img
              className="h-20 w-28 md:h-40 md:w-56 pr-10 md:pr-20"
              src={image}
              key={index}
            />
          );
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return (
            <img
              className="h-20 w-28 md:h-40 md:w-56 pr-10 md:pr-20"
              src={image}
              key={index}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;

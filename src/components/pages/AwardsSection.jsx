import React from "react";
import { motion } from "framer-motion";
import "./AS.css";

// Animation Variants (Optimized to Avoid Re-Creation)
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

// Awards Data
const awardsData = [
  {
    year: "2023",
    achievements: [
      "India Academia Ranking 2023 - This certificate is presented to CTIEMT positioned in Gold Band in India for Academic Excellence.",
   
    ],
    image:
      "https://res.cloudinary.com/dhkemgng9/image/upload/v1742618574/IAR-min_iop1uj.jpg",
    width: 600,
    height: 400,
  },
  {
    year: "2023",
    achievements: [
      "Research Excellence Ranking 2023 – This certificate is presented to CTIEMT positioned in the Gold Band in India for RESEARCH EXCELLENCE.",
      
    ],
    image:
      "https://res.cloudinary.com/dhkemgng9/image/upload/v1742618573/R_World_-_CTIEMT-min_d9tpic.jpg",
    width: 600,
    height: 400,
  },
  {
    year: "2022",
    achievements: [
      "OBE Rankings 2022 Outcome Based Education – Certificate of Excellence in pursuit of excellence towards offering Outcome Based Education, this certificate is presented to CTIEMT ranked in the Gold Band with A Grade (Higher Educational Institution of Excellence).",
      
   
    ],
    image:
      "https://res.cloudinary.com/dhkemgng9/image/upload/v1742618573/OBE_2022_-_CTIEMT-min_y9xcjc.jpg",
    width: 600,
    height: 400,
  },
  
];

const AwardsSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-[#f3f6fc] to-[#e5ecf9]" id="awards">
      {/* Background Design */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#94b7e5] to-[#94b7e5] opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#fca5a5] to-[#ffe943] opacity-20 rounded-full blur-3xl"></div>
      </div>

      {/* Section Title */}
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold z-10 relative text-center mb-8 text-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={textVariants}
        transition={{ duration: 1 }}
      >
        <span className="text-[#284587]">Awards</span> and Achievements
      </motion.h1>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#94b7e5] h-full z-0"></div>

        {awardsData.map(
          ({ year, achievements, image, width, height }, index) => (
            <div
              key={year}
              className={`relative flex flex-col md:flex-row items-center mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Year Circle */}
              <motion.div
                className="relative z-10 flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full shadow-lg font-bold text-white text-lg md:text-xl bg-primary mb-4 md:mb-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={textVariants}
                transition={{ duration: 1, delay: 0.1 }}
              >
                {year}
              </motion.div>

              {/* Image */}
              <motion.div
                className="w-full md:w-1/3 p-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={imageVariants}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <img
                  src={image}
                  alt={`Award in ${year}`}
                  width={width}
                  height={height}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </motion.div>

              {/* Achievement Box */}
              <motion.div
                className="relative w-full md:w-2/3 p-6 rounded-lg shadow-lg bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={textVariants}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <ul className="space-y-2">
                  {achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-gray-800 text-xs md:text-base leading-5 md:leading-relaxed font-medium flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 mt-1 bg-primary rounded-full flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default AwardsSection;
import React from "react";
import { motion } from "framer-motion";
import "./AS.css";
import naac from "../../assets/Images/naac.jpg";
import two from "../../img/2.jpg";
import third from "../../img/3.jpg";

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
    year: "2022",
    achievements: [
      "Received the prestigious Sir Viswesvaraya Award for ‘Best Corporate Entity’ at TechKnow '22",
      "Won Sonatype Partner Award",
    ],
    image: naac,
    width: 600,
    height: 400,
  },
  {
    year: "2021",
    achievements: [
      "RETINA360 wins 'Digital Technology of the Year: Big Data, IT & Analytics' Award at IWEF 2021",
      "HR team wins ‘Best Business Communication’ Award at Corporate Communication Excellence Awards",
    ],
    image: two,
    width: 600,
    height: 400,
  },
  {
    year: "2020",
    achievements: [
      "FuelTrans Bags CII - SCALE Awards",
      "rt360 wins ETBFSI Excellence Awards",
      "retina360 wins Digital Technology of the Year at IWEF",
    ],
    image: third,
    width: 600,
    height: 400,
  },
];

const AwardsSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-blue-50 to-blue-100">
      {/* Background Design */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300 to-purple-400 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-green-300 to-yellow-400 opacity-20 rounded-full blur-3xl"></div>
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
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-300 h-full z-0"></div>

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
                className="relative z-10 flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full shadow-lg font-bold text-white text-lg md:text-xl bg-[#284587] mb-4 md:mb-0"
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
                      className="text-gray-800 text-sm md:text-lg leading-6 font-medium flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-[#284587] rounded-full"></span>
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

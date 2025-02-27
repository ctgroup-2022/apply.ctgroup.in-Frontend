import { useRef } from "react";
import { motion, useAnimation } from "framer-motion"; // Import Framer Motion
import "../../App.css";
import FeaturesPage from "../FeaturesPage";
import audiImage from "../../assets/Images/audi.jpg";
import nccImage from "../../assets/Images/ncc.jpg";
import cultureImage from "../../assets/Images/culture.jpg";
import ctgroup2Image from "../../assets/Images/ctgroup2.jpg";
import AboutSection from "./AboutSection";

export default function Scroll() {
  const container = useRef();

  return (
    <main
      ref={container}
      className="relative min-h-[150vh]  overflow-hidden"
      style={{ backgroundImage: `url(${audiImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <Section1 />
      <Section2 />
    </main>
  );
}

const Section1 = () => {
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  return (
    <motion.section
      className="sticky font-semibold top-0 h-full text-white flex flex-col items-center"
      style={{
        backgroundColor: "black",
        opacity: 0.9,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
     <AboutSection/>
    </motion.section>
  );
};

const Section2 = () => {
  const controls = useAnimation();

  return (
    <motion.section
      className="relative min-h-screen bg-gradient-to-t from-[#bcbbbb] via-[#027FC3] to-[#2B4184] text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      onViewportEnter={() => controls.start("visible")}
      onViewportLeave={() => controls.start("hidden")}
      transition={{ duration: 1 }}
      style={{
        backgroundColor: "black",
        opacity: 0.9,
      }}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1 }}
      >
        <FeaturesPage />
      </motion.div>
    </motion.section>
  );
};
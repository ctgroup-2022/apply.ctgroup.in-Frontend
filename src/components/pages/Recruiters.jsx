import React from "react";
import MarqueeItem from "./MarqueeItem";
import "./Recruiters.css";

const Recruiters = () => {
  const upperMarquee = [
    "/01.svg",
    "/02.svg",
    "/03.svg",
    "/04.svg",
    "/05.svg",
    "/06.svg",
    "/07.svg",
    "/08.svg",
    "/09.svg",
    "/10.svg",
    "/11.svg",
  ];

  const lowerMarquee = [
    "/12.svg",
    "/13.svg",
    "/14.svg",
    "/15.svg",
    "/16.svg",
    "/17.svg",
    "/18.svg",
    "/19.svg",
    "/20.svg",
    "/21.svg",
    "/22.svg",
  ];

  return (
    <div className="container mx-auto px-4 bg-black">
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
        Recruiters at CT Group
      </h1>

      <p className="text-center text-white mt-8 px-4 md:px-40">
        We'll help you get hired. Our team will work with you throughout the
        program and after graduation to help you embellish your portfolio,
        practice interviewing, and land a job that enhances your skills and
        accelerates your growth.
      </p>
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} />
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
    </div>
  );
};

export default Recruiters;

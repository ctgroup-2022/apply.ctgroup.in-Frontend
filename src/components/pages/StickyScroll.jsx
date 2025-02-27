"use client";
import { ReactLenis } from "lenis/react";
import React from "react";
import LogoSlider from "./LogoSlider";
import stu1 from "../../assets/Images/pngstu/Puneet.png";
import stu3 from "../../assets/Images/pngstu/Suneha.png";
import stu4 from "../../assets/Images/pngstu/girl.png";
import stu2 from "../../assets/Images/pngstu/Harbaldeep_singh.png";

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
// Slider component

export default function StickyScroll() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  const items = [
    {
      title: "John Doe",
      description:
        "John Doe secured a 20 LPA package at a top multinational company. His dedication and hard work have truly paid off.",
      url: stu3,
    },
    {
      title: "Jane Smith",
      description:
        "Jane Smith achieved an impressive 9 band score in IELTS, showcasing her exceptional language proficiency.",
      url: stu1,
    },
    {
      title: "Rahul Sharma",
      description:
        "Our student Rahul Sharma has made us proud by playing international cricket, representing our country on a global stage.",
      url: stu4,
    },
    {
      title: "Anita Verma",
      description:
        "Anita Verma has mesmerized audiences with her singing talent, performing at various national and international events.",
      url: stu2,
    },
  ];

  return (
    <ReactLenis root>
      <main className="bg-white">
        <div className="wrapper">
          <section className="text-white h-screen w-full grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <div className="group flex max-md:flex-col justify-center gap-2 w-[100%] mx-auto pb-10 pt-3">
              {items.map((item, i) => (
                <article
                  key={i}
                  className="group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:rounded-lg after:transition-all focus-within:ring focus-within:ring-indigo-300"
                >
                  <a
                    className="absolute inset-0 text-white z-10 p-3 flex flex-col justify-end"
                    href="#0"
                  >
                    <h1 className="text-3xl font-medium md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300">
                      {item?.title}
                    </h1>
                    <span className="text-md font-medium md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-500 group-focus-within/article:delay-500">
                      {item?.description}
                    </span>
                  </a>
                  <img
                    className="object-cover h-72 md:min-h-[90vh] w-screen group-hover/article:object-top transition-all duration-300"
                    src={item?.url}
                    alt={item?.title}
                  />
                </article>
              ))}
            </div>
          </section>

          <section className="bg-white text-black grid place-content-center h-[60vh] sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 top-0 "></div>

            <LogoSlider />
          </section>
        
        </div>
    
      </main>
    </ReactLenis>
  );
}
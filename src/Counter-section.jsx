"use client";

import { useRef, useEffect } from "react";
import { useCounter } from "./hooks/use-counter";

function CounterItem({ end, label }) {
  const ref = useRef(null);
  const { count, startCounting } = useCounter(end);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [startCounting]);

  return (
    <div
      ref={ref}
      className="text-center"
      role="region"
      aria-labelledby={`${label}-counter`}
    >
      <div className="text-5xl font-bold mb-2 text-[#bfa5a7]">
        {count}
        <span className="text-[#bfa5a7]">+</span>
      </div>
      <div className="relative pb-4">
        <span
          id={`${label}-counter`}
          className="text-sm font-medium text-[#bfa5a7]"
        >
          {label}
        </span>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#bfa5a7]" />
      </div>
    </div>
  );
}

export default function CounterSection() {
  return (
    <section className="pb-16" aria-labelledby="international-counters">
      <div className="container mx-auto px-4">
        <h2
          id="international-counters"
          className="text-3xl font-bold text-center mb-12 text-yellow-400"
        >
          We Are International
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <CounterItem end={3110} label="International Students" />
          <CounterItem end={71} label="Visiting Faculties" />
          <CounterItem end={66} label="Partner Universities" />
          <CounterItem end={710} label="Research Projects" />
        </div>
      </div>
    </section>
  );
}

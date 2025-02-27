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
    <div ref={ref} className="text-center">
      <div className="text-5xl font-bold mb-2">
        {count}
        <span className="text-yellow-600">+</span>
      </div>
      <div className="relative pb-4">
        <span className="text-sm font-medium">{label}</span>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-yellow-600" />
      </div>
    </div>
  );
}

export default function CounterSection() {
  return (
    <section className="pb-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">We Are International</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <CounterItem end={3110} label="INTERNATIONAL STUDENTS" />
          <CounterItem end={71} label="VISITING FACULTIES" />
          <CounterItem end={66} label="PARTNER UNIVERSITIES" />
          <CounterItem end={710} label="RESEARCH PROJECTS" />
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import '../../styles/glass.css';

export function Vision() {
  return (
    <div className="glass-card relative overflow-hidden rounded-xl p-6 sm:p-8 transform-gpu hover:scale-105 transition-all duration-300">
      <div className="relative z-10">
        <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 text-blue-800 bg-clip-text ">
          Our Vision
        </h3>
        <p className="text-base sm:text-lg leading-relaxed text-black">
          To enhance the students' employability on both the institutional and
          the industrial levels. We strive to mold professionally competent
          students with the ability to navigate the global arena, endeavoring to
          contribute towards the growth of the nation and society, through their
          professionalism.
        </p>
      </div>
      <div className="absolute -right-10 sm:-right-20 -bottom-10 sm:-bottom-20 opacity-10">
        <svg className="w-32 h-32 sm:w-64 sm:h-64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 4.5v15m7.5-7.5h-15" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
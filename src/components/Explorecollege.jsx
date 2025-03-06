import React, { Suspense } from 'react';

const Explorecollege = () => {
  return (
    <div className="flex flex-col items-center px-4">
      <h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary text-center pt-8"
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 900,
          textShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
        }}
      >
        Take a Virtual Tour
      </h1>
      <div className="w-full  h-64 sm:h-80 md:h-96 lg:h-screen mt-8 rounded-xl shadow-lg overflow-hidden">
        <Suspense fallback={<div className="text-gray-500 text-center">Loading Virtual Tour...</div>}>
          <iframe
            src="https://ctsouthcampus.s3.ap-south-1.amazonaws.com/index.html"
            frameBorder="0"
            className="w-full h-full"
            style={{ border: '3px solid rgba(0, 0, 0, 0.1)' }}
            title="Virtual Tour"
            loading="lazy"
          ></iframe>
        </Suspense>
      </div>
    </div>
  );
};

export default Explorecollege;

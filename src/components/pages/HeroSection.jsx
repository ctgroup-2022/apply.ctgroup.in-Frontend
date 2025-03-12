import React, { Suspense } from "react";
const SignUpForm = React.lazy(() => import("./SignUpForm"));

import BackgroundSlider from "./BackgroundSlider";
import BackgroundSliderMobile from "./BackgroundSliderMobile";
// import './Hero.css'
const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden max-md:pt-80 min-[640px]:mt-20 max-lg:mt-20 max-md:mt-0 bg-white md:pt-[500px] min-[920px]:pt-[550px] max-lg:pt-[200px] min-[1024px]:pt-0">
      {/* Show SignUpForm above hero section on mobile screens */}

      {/* Lazy load background slider */}
      <div className="hidden lg:block">
        <Suspense fallback={<div className="h-screen bg-black text-white flex justify-center items-center">Loading...</div>}>
          <BackgroundSlider />
        </Suspense>
      </div>
      <div className="block lg:hidden">
        <Suspense fallback={<div className="h-screen bg-black text-white flex justify-center items-center">Loading...</div>}>
          <BackgroundSliderMobile />
        </Suspense>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 h-full flex flex-col lg:flex-row items-center justify-between container mx-auto px-4 ">

        {/* Show SignUpForm on the right side of the hero section for screens above 1280px */}
        <div className=" form hidden lg:flex justify-center lg:justify-end mt-20 lg:mt-0 lg:w-auto lg:min-w-[1280px] min-[1280px]:mt-12 min-[1400px]:mt-48 min-[1400px]:ml-12 min-[1500px]:ml-20 min-[1500px]:mt-20">
          <Suspense fallback={<div>Loading Form...</div>}>
            <SignUpForm />
          </Suspense>
        </div>
      </div>
      
      {/* Show SignUpForm below background slider for screens below 1280px */}
      <div className="block lg:hidden mt-8 ">
        <Suspense fallback={<div>Loading Form...</div>}>
          <SignUpForm />
        </Suspense>
      </div>
    </div>
  );
};

export default HeroSection;
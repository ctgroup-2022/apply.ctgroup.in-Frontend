import React from "react";

const SignUpForm = React.lazy(() => import("./SignUpForm"));
function DesktopHeroSection() {
  return (
    <>
      <div className="relative flex justify-center items-center w-full min-h-screen pb-40 gap-72 min-[1700px]:pb-40 ">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-80"
        >
          <source
            src="https://res.cloudinary.com/dhkemgng9/video/upload/v1741243083/video_wdnnfn.mp4"
            type="video/mp4"
          />
        </video>
        <div className="relative z-10 w-[500px] h-[500px] min-[2000px]:w-[800px] min-[2000px]:h-[800px]">
          <img
            src="https://res.cloudinary.com/dhkemgng9/image/upload/v1741243037/Desktop_lxwur1.webp"
            alt=""
          />
        </div>
        <div className="relative z-10  pt-40 ">
          <SignUpForm />
        </div>
      </div>
    </>
  );
}

export default DesktopHeroSection;

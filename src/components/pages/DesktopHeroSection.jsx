import React, { useState, useEffect } from "react";

const SignUpForm = React.lazy(() => import("./SignUpForm"));

function DesktopHeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Video preloading logic
  useEffect(() => {
    const videoElement = document.createElement("video");
    const sourceElement = document.createElement("source");

    sourceElement.src =
      "https://res.cloudinary.com/dhkemgng9/video/upload/v1741243083/video_wdnnfn.mp4";
    sourceElement.type = "video/mp4";

    videoElement.appendChild(sourceElement);

    // Listen for when the video can play through
    videoElement.addEventListener("canplaythrough", () => {
      setVideoLoaded(true);
    });

    // Start loading the video
    videoElement.load();

    // Fallback in case video takes too long
    const timeoutId = setTimeout(() => {
      if (!videoLoaded) setVideoLoaded(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="relative flex justify-center items-center w-full min-h-screen pb-40 gap-72 min-[1700px]:pb-20 ">
        {videoLoaded ? (
          <>
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

            <div className="relative z-10 pt-40">
              <React.Suspense fallback={<div>Loading form...</div>}>
                <SignUpForm />
              </React.Suspense>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center w-full h-full">
            <p>Loading video...</p>
          </div>
        )}
      </div>
    </>
  );
}

export default DesktopHeroSection;

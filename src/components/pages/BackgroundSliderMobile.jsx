import React, { useState, useEffect, useRef } from "react";

const BackgroundSliderMobile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const mediaContent = [
    {
      type: "video",
      url: "https://res.cloudinary.com/dhkemgng9/video/upload/v1741243057/Mobile_ynhlgp.mp4",
      alt: "Mobile background promotional video",
    },
  ];

  // Set up the interval for changing content (if you have multiple items)
  useEffect(() => {
    if (!videoLoaded || mediaContent.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaContent.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [videoLoaded, mediaContent.length]);

  // Preload the video with better error handling
  useEffect(() => {
    const videoElement = document.createElement("video");
    videoElement.setAttribute("preload", "auto");

    const sourceElement = document.createElement("source");
    sourceElement.src = mediaContent[0].url;
    sourceElement.type = "video/mp4";

    videoElement.appendChild(sourceElement);

    const handleCanPlayThrough = () => {
      setVideoLoaded(true);
    };

    const handleError = () => {
      console.warn(
        "Video loading encountered an error, falling back to loaded state"
      );
      setVideoLoaded(true);
    };

    videoElement.addEventListener("canplaythrough", handleCanPlayThrough);
    videoElement.addEventListener("error", handleError);

    videoElement.load();

    // Fallback in case video takes too long
    const timeoutId = setTimeout(() => {
      if (!videoLoaded) setVideoLoaded(true);
    }, 5000);

    return () => {
      videoElement.removeEventListener("canplaythrough", handleCanPlayThrough);
      videoElement.removeEventListener("error", handleError);
      clearTimeout(timeoutId);
    };
  }, []);

  // Handle video playback when visibility changes
  useEffect(() => {
    if (!videoRef.current || !videoLoaded) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {
          // Silent catch for autoplay restrictions
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [videoLoaded]);

  return (
    <div
      className="absolute inset-0 w-full h-full flex items-center justify-center mt-0 max-sm:mt-20"
      aria-hidden="true" // Background content is decorative
    >
      {videoLoaded ? (
        mediaContent.map((media, index) => (
          <div
            key={media.url}
            className={`absolute inset-0 max-sm:inset-3 max-[500px]:inset-4 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {media.type === "video" ? (
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                poster="https://res.cloudinary.com/dhkemgng9/image/upload/v1741243057/thumbnail.jpg"
                className="object-cover w-[150vw] lg:min-h-screen max-[380px]:h-48 max-[410px]:h-52 max-sm:w-full max-sm:h-60 max-md:h-80 max-md:w-full"
                aria-hidden="true"
                loading="eager"
              >
                <source src={media.url} type="video/mp4" />
                <p>Your browser does not support HTML5 video.</p>
              </video>
            ) : (
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${media.url})` }}
                role="img"
                aria-label={media.alt || "Background image"}
              />
            )}
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center w-full h-full bg-gray-100/50">
          <div className="w-12 h-12 border-t-4 border-b-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default BackgroundSliderMobile;

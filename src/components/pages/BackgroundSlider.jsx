import React, { useState, useEffect, useRef } from "react";

const BackgroundSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const mediaContent = [
    {
      type: "video",
      url: "https://res.cloudinary.com/dhkemgng9/video/upload/v1741243057/Mobile_ynhlgp.mp4",
      alt: "Background promotional video",
    },
  ];

  // Preload video and handle loading state
  useEffect(() => {
    const videoElement = document.createElement("video");
    const sourceElement = document.createElement("source");

    videoElement.setAttribute("preload", "auto");
    sourceElement.src = mediaContent[0].url;
    sourceElement.type = "video/mp4";

    videoElement.appendChild(sourceElement);

    videoElement.addEventListener("canplaythrough", () => {
      setVideoLoaded(true);
    });

    videoElement.load();

    // Fallback if video takes too long to load
    const timeoutId = setTimeout(() => {
      if (!videoLoaded) setVideoLoaded(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  // Set up the interval for changing content (if you add more items in the future)
  useEffect(() => {
    if (!videoLoaded || mediaContent.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaContent.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [videoLoaded, mediaContent.length]);

  // Handle video playback issues
  useEffect(() => {
    if (!videoRef.current || !videoLoaded) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {
          // Silent catch for autoplay issues
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [videoLoaded]);

  return (
    <div
      className="absolute w-full h-full flex items-center justify-center mt-0 min-[1024px]:w-[1300px] min-[1300px]:w-full"
      aria-hidden="true" // Background video should be hidden from screen readers
    >
      {videoLoaded ? (
        mediaContent.map((media, index) => (
          <div
            key={media.url}
            className={`w-full h-full transition-opacity duration-500 ${
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
                aria-hidden="true"
                className="object-cover w-full h-full"
                loading="eager"
                poster="https://res.cloudinary.com/dhkemgng9/image/upload/v1741243057/thumbnail.jpg"
              >
                <source src={media.url} type="video/mp4" />
                {/* <p>Your browser does not support HTML5 video.</p> */}
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
        <div className="flex justify-center items-center w-full h-full bg-gray-100">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default BackgroundSlider;

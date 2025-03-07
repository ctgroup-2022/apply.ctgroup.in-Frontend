import React from "react";


const BackgroundSliderMobile = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mediaContent.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const mediaContent = [
    {
      type: "video",
      url: "https://res.cloudinary.com/dhkemgng9/video/upload/v1741243057/Mobile_ynhlgp.mp4",
    },
  ];

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center mt-0 max-sm:mt-20">
      {mediaContent.map((media, index) => (
        <div
          key={media.url}
          className="absolute inset-0 max-sm:inset-3 max-[500px]:inset-4"
        >
          {media.type === "video" ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="https://res.cloudinary.com/dhkemgng9/image/upload/v1741243057/thumbnail.jpg"
              className="object-cover w-[150vw] lg:min-h-screen max-[380px]:h-48 max-[410px]:h-52 max-sm:w-full max-sm:h-60 max-md:h-80 max-md:w-full "
            >
              <source src={media.url} type="video/mp4" />
            </video>
          ) : (
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${media.url})` }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default BackgroundSliderMobile;
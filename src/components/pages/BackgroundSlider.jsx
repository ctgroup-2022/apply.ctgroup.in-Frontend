import React from "react";


const BackgroundSlider = () => {
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
    <div className=" absolute w-full h-full flex items-center justify-center mt-0 min-[1024px]:w-[1300px] min-[1300px]:w-full">
      {mediaContent.map((media, index) => (
        <div
          key={media.url}
          className="w-full h-full"
        >
          {media.type === "video" ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full h-full "
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

export default BackgroundSlider;
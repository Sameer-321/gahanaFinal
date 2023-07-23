import React, { useState, useEffect } from "react";

const HeroHeader = () => {
  const slides = [
    {
      url: require("../assests/images/heroSection/bg1.jpg"),
      title: "beach",
    },
    {
      url: require("../assests/images/heroSection/bg2.jpg"),
      title: "friends",
    },
  ];
  const grid = [
    {
      id: 1,
      name: "Necklace",
      url: require("../assests/images/heroSection/5.jpg"),
      title: "beach",
    },
    {
      id: 2,
      name: "Ear Rings",
      url: require("../assests/images/heroSection/7.jpg"),
      title: "friends",
    },
    {
      id: 3,
      name: "Tilari",
      url: require("../assests/images/heroSection/tilari.jpg"),
      title: "friends",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexGrid, setCurrentIndexGrid] = useState(2);
  //   const prevSlide = () => {
  //     const isFirstSlide = currentIndex === 0;
  //     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //     setCurrentIndex(newIndex);
  //   };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  //   pic changes every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000 / 3); // 10 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="w-full  ">
      {/*images banner  */}
      <div className=" w-full h-[70vh]">
        <div
          className="flex flex-col  text-black text-xl  absolute w-full justify-between
                     gap-3 items-center top-[25%]"
        >
          <div className=" text-3xl sm:text-4xl md:text-5xl">
            Experience Glamour
          </div>
          <button className="border-[2px] border-[#832729] font-semibold text-[#832729] p-1 cursor-pointer">
            Shop Jewellery
          </button>
        </div>
        <img
          src={slides[currentIndex].url}
          alt="banners pic"
          className="h-full w-full"
        />
        {/* overlay for banner */}
        <div className="absolute bg-black/10 top-0 left-0 w-full h-[full] "></div>
      </div>
      {/*overlay grid images mapping  */}
      <div className="grid sm:grid-cols-3 sm:mt-[-10vh] w-full px-9 gap-4 border-1px mt-[-30vh] z-20">
        {grid.map((grid) => (
          <div className="relative">
            <img
              key={grid.id}
              src={grid.url}
              alt="banners pic"
              className="h-full w-full rounded-md"
            />
            <div className="w-full h-full absolute bg-black/20 top-0 left-0">
              <div className="text-[#832729] absolute bottom-2 left-2 text-xl lg:text-2xl">
                {grid.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroHeader;

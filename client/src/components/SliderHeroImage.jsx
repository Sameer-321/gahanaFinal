import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";

import { SolidDotIcon } from "@heroicons/react/solid";
<ArrowUpCircleIcon></ArrowUpCircleIcon>;

const SliderHeroImage = () => {
  const slides = [
    {
      url: require("../assests/images/heroSection/1.jpg"),
      title: "beach",
    },
    {
      url: require("../assests/images/heroSection/2.jpg"),
      title: "friends",
    },
    {
      url: require("../assests/images/heroSection/3.jpg"),
      title: "beach",
    },
    {
      url: require("../assests/images/heroSection/4.jpg"),
      title: "beach",
    },
    {
      url: require("../assests/images/heroSection/5.jpg"),
      title: "friends",
    },
    {
      url: require("../assests/images/heroSection/6.jpg"),
      title: "beach",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  //   pic changes every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000 / 5); // 10 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="w-full">
      <div className=" w-[vw] h-[80vh]  relative group">
        <div
          className="w-[vw] h-full  bg-center
                       bg-cover duration-500"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
        {/* Left Arrow */}
        <div
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 
                       text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer  "
        >
          <ArrowLeftIcon className="w-[30px] h-[30px]" onClick={prevSlide} />
        </div>
        {/* Right Arrow */}
        <div
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 
                       text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer  "
        >
          <ArrowRightIcon className="w-[30px] h-[30px]" onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default SliderHeroImage;

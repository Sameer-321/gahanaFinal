import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";
import { SolidDotIcon } from "@heroicons/react/solid";
<ArrowUpCircleIcon></ArrowUpCircleIcon>;

const ImageSlider = () => {
  const slides = [
    {
      url: "https://media.istockphoto.com/id/1458771092/photo/group-of-friends-having-fun-on-the-beach-during-sunset-having-fun-and-jumping-young-people.webp?b=1&s=170667a&w=0&k=20&c=Oe_f4sZ6uFo1syLjhvESXkE0cnxObegJ4jF8YXyHcmI=",
      title: "beach",
    },
    {
      url: "https://media.istockphoto.com/id/1492642430/photo/portrait-of-senior-friends-at-a-luxury-hotel-outdoors.webp?b=1&s=170667a&w=0&k=20&c=2Uzw2yE6z5ynMZfSFJAnonKUQFCdbdrLDxmdA2Y-rDM=",
      title: "friends",
    },
    {
      url: "https://media.istockphoto.com/id/1345310675/photo/3d-rendering-of-modern-house-in-luxurious-style-by-the-sea-or-ocean.webp?b=1&s=170667a&w=0&k=20&c=ip4m9C8unN1wSyv0gwFFEODIwdBwAultAUnIQV7Sg-A=",
      title: "beach",
    },
    {
      url: "https://media.istockphoto.com/id/1458771092/photo/group-of-friends-having-fun-on-the-beach-during-sunset-having-fun-and-jumping-young-people.webp?b=1&s=170667a&w=0&k=20&c=Oe_f4sZ6uFo1syLjhvESXkE0cnxObegJ4jF8YXyHcmI=",
      title: "beach",
    },
    {
      url: "https://media.istockphoto.com/id/1492642430/photo/portrait-of-senior-friends-at-a-luxury-hotel-outdoors.webp?b=1&s=170667a&w=0&k=20&c=2Uzw2yE6z5ynMZfSFJAnonKUQFCdbdrLDxmdA2Y-rDM=",
      title: "friends",
    },
    {
      url: "https://media.istockphoto.com/id/1345310675/photo/3d-rendering-of-modern-house-in-luxurious-style-by-the-sea-or-ocean.webp?b=1&s=170667a&w=0&k=20&c=ip4m9C8unN1wSyv0gwFFEODIwdBwAultAUnIQV7Sg-A=",
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

  return (
    <div>
      <div className="mx-auto text-center">
        {/* header */}
        <div className=" text-[#832729] font-semibold sm:text-4xl md:text-5xl md:p-4 my-2 md:my-4">
          Our Happy Customers
        </div>
        <div className=" text-black/40 p-3  text-3xl  md:text-4xl ld:text-5xl sm:my-3 md:my-5">
          {" "}
          Please browser through our Happy Customers
        </div>
        {/* border */}
        <div className="border-t-[2px] border-[#832729] w-full" />
      </div>
      <div className="max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group">
        <div
          className="w-full h-full rounded-2xl bg-center
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

        {/* slector */}
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer "
            >
              <ArrowUpCircleIcon className=" h-6 w-6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
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
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div
        className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 
                   text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer  "
      >
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      {/* slector */}
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer "
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

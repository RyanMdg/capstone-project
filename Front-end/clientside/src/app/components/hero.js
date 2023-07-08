import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import "../globals.css";

const Carousel = () => {
  const slides = [
    { image: "/fubu.jpg", buttonLabel: "Shop Now", textOverlay: "Fubu" },
    { image: "/nike.jpg", buttonLabel: "Buy Now", textOverlay: "Nike" },
    {
      image: "/adidas.jpg",
      buttonLabel: "View Collection",
      textOverlay: "Adidas",
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
    <div className="h-screen relative screen2:w-[250%] screen3:w-[200%]  group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        className="w-full h-full bg-center bg-cover duration-500 relative"
      >
        <div className="absolute screen2:bottom-[7.5rem] screen3:bottom-[7.5rem] inset-0 flex mt-[10rem] screen5:mt-[13rem]  ms-[6rem]">
          <div className=" ">
            <h2 className="text-[3rem] leading-[2.8rem] uppercase  font-bold text-white">
              NEVER BEFORE. <br /> FOREVER AFTER.
            </h2>

            <button className="mt-7 px-6 text-[1rem] font-semibold hover:bg-[#ffffff7a] hover:text-black duration-500 hover:translate-y-[-.3rem] uppercase py-2 bg-white screen2:text-[2rem] screen3:text-[2rem] text-black">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl hover:bg-[#0000008b] duration-300 p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl hover:bg-[#0000008b] duration-300 p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl screen2:text-[3rem] cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

"use client";

import Image from "next/image";
import React, { useState } from "react";

function InfiniteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: 1, src: "/home_image_1.png", alt: "Lottery 1" },
    { id: 2, src: "/home_image_2.png", alt: "Lottery 2" },
    { id: 3, src: "/home_image_3.png", alt: "Lottery 3" },
    { id: 4, src: "/home_image_4.png", alt: "Lottery 4" },
    { id: 5, src: "/home_image_5.png", alt: "Lottery 5" },
  ];

  /*   const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }; */

  return (
    <div className="relative group">
      <div className="overflow-hidden">
        <div
          className="flex animate-carousel gap-4"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {/* First set of images */}
          {images.map((image) => (
            <div key={image.id} className="flex-none w-[calc(20%-16px)] h-48">
              <div className="relative w-full h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="responsive"
                  width={100}
                  height={100}
                  className="object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
          {/* Duplicate set for infinite scroll effect */}
          {images.map((image) => (
            <div
              key={`duplicate-${image.id}`}
              className="flex-none w-[calc(20%-16px)] h-48"
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls - Only visible on hover */}
      {/*       <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={prevSlide}
          className="bg-white/30 hover:bg-white/50 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="bg-white/30 hover:bg-white/50 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div> */}
    </div>
  );
}

export default InfiniteCarousel;

"use client";

import Image from "next/image";
import { Separator } from "./ui/separator";
import React, { useEffect, useState } from "react";
import { RxStarFilled } from "react-icons/rx";

interface CarouselItem {
  image: string;
  title: string;
  rank: string;
  quote: string;
}

const items: CarouselItem[] = [
  {
    image: "/assets/img/testimonials/testimonials-1.jpg",
    title: "Matt Brandon",
    rank: "Freelancer",
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas at optio aut quos voluptates odio consectetur, aliquam fuga, laudantium, non nulla! Totam alias deserunt suscipit quae sed? Inventore, soluta minus?",
  },
  {
    image: "/assets/img/testimonials/testimonials-2.jpg",
    title: "Sara Wilson",
    rank: "Entrepreneur",
    quote:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tempora ad delectus a, laborum ipsum tenetur ipsa.",
  },
  {
    image: "/assets/img/testimonials/testimonials-3.jpg",
    title: "Jena Kalis",
    rank: "Store Owner",
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, facilis.",
  },
  {
    image: "/assets/img/testimonials/testimonials-4.jpg",
    title: "John Larson",
    rank: "Designer",
    quote:
      "Lorem ipsum dolor sit amet consectetur  adipisicing elit. Quisquam nesciunt id velit totam nulla cupiditate.",
  },
  {
    image: "/assets/img/testimonials/testimonials-5.jpg",
    title: "Saul Goodman",
    rank: "Ceo & Founder",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nesciunt id velit totam nulla cupiditate.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonial" className="my-20">
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-500">
          TESTIMONIALS
        </h1>
        <Separator className="mt-6 w-20 md:w-28 bg-sky-500 rounded-full" />
        <Separator className="w-20 md:w-28 bg-sky-500 rounded-full" />
        <Separator className="w-40 md:w-60 bg-slate-400" />
        <Separator className="w-20 md:w-28 bg-sky-500 rounded-full" />
        <p className="text-slate-500 text-center px-4 mt-6">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="relative w-full  max-w-6xl md:mx-auto h-72 ">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg mx-6 max-w-6xl md:mx-auto ">
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="rounded-full"
              />
              <div className="p-4 flex flex-col gap-4 md:gap-6  text-center">
                <div className="">
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <p className="text-xs md:text-sm text-gray-500">
                    {item.rank}
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <RxStarFilled className="text-yellow-500 md:w-6 md:h-6 sm:w-4 sm:h-4 w-3 h-3 inline-block" />
                  <RxStarFilled className="text-yellow-500 md:w-6 md:h-6 sm:w-4 sm:h-4 w-3 h-3 inline-block" />
                  <RxStarFilled className="text-yellow-500 md:w-6 md:h-6  sm:w-4 sm:h-4 w-3 h-3 inline-block" />
                  <RxStarFilled className="text-yellow-500 md:w-6 md:h-6 sm:w-4 sm:h-4 w-3 h-3 inline-block" />
                  <RxStarFilled className="text-yellow-500 md:w-6 md:h-6  sm:w-4 sm:h-4 w-3 h-3 inline-block" />
                </div>
                <p className=" text-xs sm:text-sm md:text-base mt-2">
                  {item.quote}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div
        id="indicators-carousel"
        className="relative w-full"
        data-carousel="static"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <Image
              width={100}
              height={100}
              src="/docs/images/carousel/carousel-1.svg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
      </div> */}
    </section>
  );
};

export default Testimonials;

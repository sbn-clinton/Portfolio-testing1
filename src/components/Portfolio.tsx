"use client";

import Image from "next/image";
import { Separator } from "./ui/separator";
import { useState } from "react";

type Card = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type Cards = {
  [key: number]: Card[];
};

const tabs = ["All", "App", "Card", "Web"];

const cards: Cards = {
  0: [
    {
      id: 1,
      title: "Tab 1 Card 1",
      description: "Description 1",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
    },
    {
      id: 2,
      title: "Tab 1 Card 2",
      description: "Description 2",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-2.jpg",
    },
    {
      id: 3,
      title: "Tab 1 Card 3",
      description: "Description 3",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-3.jpg",
    },
    {
      id: 4,
      title: "Tab 1 Card 4",
      description: "Description 4",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-4.jpg",
    },
    {
      id: 5,
      title: "Tab 1 Card 5",
      description: "Description 5",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-5.jpg",
    },
    {
      id: 6,
      title: "Tab 1 Card 6",
      description: "Description 6",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-6.jpg",
    },
    {
      id: 7,
      title: "Tab 1 Card 7",
      description: "Description 7",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-7.jpg",
    },
    {
      id: 8,
      title: "Tab 1 Card 8",
      description: "Description 8",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-8.jpg",
    },
    {
      id: 9,
      title: "Tab 1 Card 9",
      description: "Description 9",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-9.jpg",
    },
  ],
  1: [
    {
      id: 5,
      title: "Tab 2 Card 1",
      description: "Description 1",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-5.jpg",
    },
    {
      id: 6,
      title: "Tab 2 Card 2",
      description: "Description 2",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-6.jpg",
    },
    {
      id: 7,
      title: "Tab 2 Card 3",
      description: "Description 3",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-9.jpg",
    },
    {
      id: 8,
      title: "Tab 2 Card 4",
      description: "Description 4",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-8.jpg",
    },
  ],
  2: [
    {
      id: 9,
      title: "Tab 3 Card 1",
      description: "Description 1",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-1.jpg",
    },
    {
      id: 10,
      title: "Tab 3 Card 2",
      description: "Description 2",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-8.jpg",
    },
    {
      id: 11,
      title: "Tab 3 Card 3",
      description: "Description 3",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-4.jpg",
    },
    {
      id: 12,
      title: "Tab 3 Card 4",
      description: "Description 4",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-9.jpg",
    },
  ],
  3: [
    {
      id: 13,
      title: "Tab 4 Card 1",
      description: "Description 1",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-2.jpg",
    },
    {
      id: 14,
      title: "Tab 4 Card 2",
      description: "Description 2",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-5.jpg",
    },
    {
      id: 15,
      title: "Tab 4 Card 3",
      description: "Description 3",
      image: "/assets/img/masonry-portfolio/masonry-portfolio-7.jpg",
    },
  ],
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section id="portfolio">
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-500">
          PORTFOLIO
        </h1>
        <Separator className="mt-6 w-20 md:w-28 bg-sky-500 rounded-full" />
        <Separator className=" w-20 md:w-28 bg-sky-500 rounded-full" />
        <Separator className="  w-40  md:w-60 bg-slate-400" />
        <Separator className=" w-20 md:w-28 bg-sky-500 rounded-full" />
        <p className=" text-slate-500 text-center px-4 mt-6">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className=" md:mx-auto max-w-6xl mx-4 my-10">
        <div className="flex items-center justify-center space-x-4 my-5">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`py-1 font-semibold text-sm md:text-base hover:bg-blue-500 hover:text-white hover:rounded-full px-4 ${
                activeTab === index ? "text-white bg-blue-500 rounded-full" : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-5  mt-4">
          {cards[activeTab].map((card) => (
            <div key={card.id} className="relative group rounded-lg">
              <Image
                width={400}
                height={500}
                src={card.image}
                alt={card.title}
                className=" object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 h-1/4 opacity-0 group-hover:opacity-100 rounded-b-lg">
                <h3 className="text-lg">{card.title}</h3>
                <p className="text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

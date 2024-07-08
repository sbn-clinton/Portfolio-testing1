"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" mt-5 rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  "/assets/img/clients/client-1.png",
  "/assets/img/clients/client-2.png",
  "/assets/img/clients/client-3.png",
  "/assets/img/clients/client-4.png",
  "/assets/img/clients/client-5.png",
  "/assets/img/clients/client-6.png",
  "/assets/img/clients/client-7.png",
  "/assets/img/clients/client-8.png",
];

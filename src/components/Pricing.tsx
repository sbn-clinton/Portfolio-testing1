"use client";

import React from "react";
import { CheckIcon, CircleDollarSign } from "lucide-react";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface PricingPlan {
  title: string;
  price: string;
  duration: string;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Basic Plan",
    price: "10",
    duration: "month",
    features: [
      "Access to basic features",
      "Email support",
      "100 GB storage",
      "10 projects",
      "Community access",
    ],
  },
  {
    title: "Standard Plan",
    price: "20",
    duration: "month",
    features: [
      "Access to all features",
      "Priority email support",
      "500 GB storage",
      "Unlimited projects",
      "Access to all integrations",
    ],
  },
  {
    title: "Premium Plan",
    price: "30",
    duration: "month",
    features: [
      "All Standard Plan features",
      "Phone support",
      "1 TB storage",
      "Dedicated account manager",
      "Weekly reports",
    ],
  },
];

const PricingCard: React.FC<{ plan: PricingPlan; index: number }> = ({
  plan,
  index,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start gap-3 border-t-8 border-t-sky-500"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <h3 className="text-xl font-semibold text-sky-500">{plan.title}</h3>
      <p className=" text-2xl sm:text-3xl font-bold text-blue-700 mt-2">
        <CircleDollarSign className=" w-3 h-3 sm:w-4 sm:h-4 inline-block" />
        {plan.price}
        <span className="ms-0 text-sm text-gray-900 font-light">
          /{plan.duration}
        </span>
      </p>
      <ul className="mt-2 space-y-3">
        {plan.features.map((feature, idx) => (
          <li
            key={idx}
            className="text-gray-600 text-start text-sm md:text-base"
          >
            <CheckIcon className="inline-block me-3  w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-sky-500" />
            {feature}
          </li>
        ))}
      </ul>
      <button className=" py-1 px-4 md:py-3 md:px-8 font-semibold  border border-sky-500 text-sky-500 hover:text-white hover:bg-sky-500 text-xs sm:text-sm rounded-full">
        Buy Now
      </button>
    </motion.div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className=" my-14 md:my-20">
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-500">
          PRICING
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

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl md:mx-auto mx-6">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;

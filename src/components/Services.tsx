"use client";

import { FC, useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Separator } from "@/components/ui/separator";
import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandTypescript,
} from "@tabler/icons-react";

const Services: FC = () => {
  return (
    <section id="services" className="bg-blue-100 py-6 md:py-10">
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-500">
          SERVICES
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl md:mx-auto mx-6 gap-5 md:gap-4 mt-10">
        {ServicesItems.map((item, index) => (
          <ServiceItem key={item.title} item={item} index={index} />
        ))}
      </div>
      <div className="bg-black bg-opacity-10 bg-[url('/assets/img/cta-bg.jpg')]  bg-cover bg-center">
        <div className="flex flex-col md:flex-row justify-center items-center mx-auto max-w-6xl my-20 py-14 md:py-24 gap-8 md:gap-12">
          <div className="flex flex-col md:justify-start items-center justify-center md:w-4/5 gap-6 sm:gap-6 ">
            <h1 className="font-bold text-2xl md:text-3xl text-white text-center md:text-right">
              Call To Action
            </h1>
            <p className=" text-xs sm:text-sm md:text-base font-semibold text-center md:text-start text-white">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="md:w-1/5">
            <button className="bg-transparent hover:bg-sky-400 text-white rounded-3xl border-white md:py-3 md:px-8 border-2 py-1 px-5  font-semibold text-sm md:text-base">
              Call To Action
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ServiceItemProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ServicesItems: ServiceItemProps[] = [
  {
    icon: (
      <IconBrandHtml5 className=" w-8 h-8 md:w-12 md:h-12 text-orange-500" />
    ),
    title: "HTML",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, architecto.",
  },
  {
    icon: <IconBrandCss3 className=" w-8 h-8 md:w-12 md:h-12 text-blue-900" />,
    title: "CSS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, architecto.",
  },
  {
    icon: (
      <IconBrandJavascript className=" w-8 h-8 md:w-12 md:h-12 text-yellow-500" />
    ),
    title: "JavaScript",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, architecto.",
  },
  {
    icon: (
      <IconBrandTypescript className=" w-8 h-8 md:w-12 md:h-12 text-blue-500" />
    ),
    title: "TypeScript",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, architecto.",
  },
];

interface ServiceItemComponentProps {
  item: ServiceItemProps;
  index: number;
}

const ServiceItem: FC<ServiceItemComponentProps> = ({ item, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.2 },
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className="flex flex-col p-5 md:p-8 bg-white rounded-lg gap-3 transform transition duration-700 ease-in-out hover:scale-105"
    >
      <div className="">{item.icon}</div>
      <h1 className=" text-xl sm:text-2xl md:text-3xl font-semibold">
        {item.title}
      </h1>
      <p className=" text-xs sm:text-sm md:text-base font-light italic">
        {item.description}
      </p>
    </motion.div>
  );
};

export default Services;

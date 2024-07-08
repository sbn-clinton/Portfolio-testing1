"use client";

import { FC, useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { ArrowBigRightIcon, CheckCircleIcon } from "lucide-react";
import { AboutAccordion } from "./AboutAccordion";
import Image from "next/image";
import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandTypescript,
} from "@tabler/icons-react";

const About: FC = () => {
  return (
    <section id="about">
      <div className="max-w-5xl md:mx-auto mx-4">
        <AnimatedSection className="flex flex-col items-center justify-center mt-10">
          <AnimatedElement>
            <h1 className="text-3xl md:text-5xl font-bold text-blue-500">
              ABOUT US
            </h1>
          </AnimatedElement>
          <AnimatedElement>
            <Separator className="mt-6 w-20 md:w-28 bg-sky-500 rounded-full" />
          </AnimatedElement>
          <AnimatedElement>
            <Separator className="w-20 md:w-28 bg-sky-500 rounded-full" />
          </AnimatedElement>
          <AnimatedElement>
            <Separator className="w-40 md:w-60 bg-slate-400" />
          </AnimatedElement>
          <AnimatedElement>
            <Separator className="w-20 md:w-28 bg-sky-500 rounded-full" />
          </AnimatedElement>
          <AnimatedElement>
            <p className="text-slate-500  text-sm sm:text-base  text-center px-4 mt-6">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </AnimatedElement>
        </AnimatedSection>

        <AnimatedSection className="flex flex-col md:flex-row justify-between items-center gap-5 sm:my-10 my-7">
          <AnimatedElement className="flex flex-col gap-7 md:gap-10 md:w-1/2">
            <p className=" text-sm sm:text-base md:text-lg font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="list-none text-xs sm:text-sm md:text-base space-y-2 md:space-y-3">
              <li>
                <CheckCircleIcon className=" w-3 h-3 sm:h-4 sm:w-4 md:h-6 md:w-6 me-2 inline-block text-sky-300" />
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li>
                <CheckCircleIcon className=" w-3 h-3 sm:h-4 sm:w-4 md:h-6 md:w-6 me-2 inline-block text-sky-300" />
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li>
                <CheckCircleIcon className=" w-3 h-3 sm:h-4 sm:w-4 md:h-6 md:w-6 me-2 inline-block text-sky-300" />
                Ullamco laboris nisi ut aliquip ex ea commodo.
              </li>
            </ul>
          </AnimatedElement>
          <AnimatedElement className="flex flex-col gap-5 sm:gap-7 md:gap-10 md:w-1/2">
            <p className=" text-sm sm:text-base">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
            <button className="sm:py-3 sm:px-6 py-2 px-4 text-xs sm:text-sm self-start border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white rounded-lg flex items-center group">
              Read More
              <ArrowBigRightIcon className="  w-3 h-3 sm:h-4 sm:w-4 md:h-6 md:w-6  inline-block ml-2 transition-transform duration-300 transform group-hover:translate-x-1" />
            </button>
          </AnimatedElement>
        </AnimatedSection>
      </div>

      <AnimatedSection className="bg-sky-200 py-14 md:py-20">
        <div className="flex flex-col-reverse md:flex-row sm:gap-10 gap-7 max-w-5xl md:mx-auto mx-4">
          <AnimatedElement className="flex flex-col gap-2 sm:gap-4 md:gap-5 md:w-1/2">
            <h1 className="text-2xl sm:text-4xl font-medium text-blue-500">
              Eum ipsam laborum deleniti{" "}
              <span className="font-bold">
                velit pariatur architecto aut nihil
              </span>
            </h1>
            <p className=" text-sm sm:text-base italic font-normal text-blue-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit.
            </p>
            <AboutAccordion />
          </AnimatedElement>
          <AnimatedElement className="p-5 md:w-1/2">
            <Image
              src="/assets/img/why-us.png"
              alt="hero"
              width={500}
              height={500}
            />
          </AnimatedElement>
        </div>
      </AnimatedSection>

      <AnimatedSection className="flex flex-col md:flex-row gap-10 max-w-5xl md:mx-auto mx-4 py-20">
        <AnimatedElement className="p-2 md:w-1/2 flex items-center justify-center">
          <Image
            src="/assets/img/skills.png"
            alt="skill"
            width={500}
            height={500}
          />
        </AnimatedElement>
        <AnimatedElement className="flex flex-col gap-5 md:w-1/2">
          <h1 className="text-2xl sm:text-4xl md:text-3xl font-bold text-blue-500">
            Voluptatem dignissimos provident quasi corporis voluptas
          </h1>
          <p className=" text-sm sm:text-base italic font-normal text-blue-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <SkillProgress
            title="HTML"
            value={100}
            icon={
              <IconBrandHtml5 className="text-orange-700 inline-block me-1" />
            }
          />
          <SkillProgress
            title="CSS"
            value={80}
            icon={<IconBrandCss3 className="inline-block me-1" />}
          />
          <SkillProgress
            title="JavaScript"
            value={60}
            icon={
              <IconBrandJavascript className="inline-block me-1 text-yellow-600 w-8 h-8" />
            }
          />
          <SkillProgress
            title="TypeScript"
            value={50}
            icon={
              <IconBrandTypescript className="inline-block me-1 text-blue-600 w-8 h-8" />
            }
          />
        </AnimatedElement>
      </AnimatedSection>
    </section>
  );
};

interface SkillProgressProps {
  title: string;
  value: number;
  icon: JSX.Element;
}

const SkillProgress: FC<SkillProgressProps> = ({ title, value, icon }) => (
  <div className="flex flex-col gap-1">
    <div className="flex items-center justify-between">
      <h1 className="text-sm text-blue-500 font-semibold">
        {icon} {title}
      </h1>
      <h1 className="text-sm text-blue-500 font-semibold">{value}%</h1>
    </div>
    <Progress value={value} className="" />
  </div>
);

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedElement: FC<AnimatedElementProps> = ({ children, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: FC<AnimatedSectionProps> = ({ children, className }) => (
  <section className={className}>{children}</section>
);

export default About;

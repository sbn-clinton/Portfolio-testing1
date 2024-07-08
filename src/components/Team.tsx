"use client";

import { FC, useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Separator } from "./ui/separator";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

interface TeamMemberProps {
  name: string;
  rank: string;
  description: string;
  image: string;
}

const teams: TeamMemberProps[] = [
  {
    name: "Walter White",
    rank: "Chief Executive Officer",
    description: "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
    image: "/assets/img/team/team-1.jpg",
  },
  {
    name: "Sarah Jhonson",
    rank: "Product Manager",
    description:
      "Aut maiores voluptates amet et quis praesentium qui senda para",
    image: "/assets/img/team/team-2.jpg",
  },
  {
    name: "William Anderson",
    rank: "CTO",
    description: "Quisquam facilis cum velit laborum corrupti fuga rerum quia",
    image: "/assets/img/team/team-3.jpg",
  },
  {
    name: "Amanda Jepson",
    rank: "Accountant",
    description:
      "Dolorum tempora officiis odit laborum officiis et et accusamus",
    image: "/assets/img/team/team-4.jpg",
  },
];

const Team: FC = () => {
  return (
    <section id="team">
      <div className="flex flex-col items-center justify-center mt-10 ">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-500">TEAM</h1>
        <Separator className="mt-6 w-20 md:w-28 bg-sky-500 rounded-full" />
        <Separator className=" w-20 md:w-28 bg-sky-500 rounded-full" />
        <Separator className="  w-40  md:w-60 bg-slate-400" />
        <Separator className=" w-20 md:w-28 bg-sky-500 rounded-full" />

        <p className=" text-slate-500 text-center px-4 mt-6">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl md:mx-auto mx-5 justify-center items-center gap-6">
          {teams.map((team, index) => (
            <TeamMember key={team.name} team={team} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TeamMemberComponentProps {
  team: TeamMemberProps;
  index: number;
}

const TeamMember: FC<TeamMemberComponentProps> = ({ team, index }) => {
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
      className="flex justify-center items-center rounded-lg gap-4 bg-slate-100 p-4"
    >
      <div>
        <Image
          src={team.image}
          alt={team.name}
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-1 sm:gap-2 md:gap-3">
        <h1 className=" text-lg sm:text-xl md:text-2xl font-bold text-blue-500">
          {team.name}
        </h1>
        <p className=" text-xs sm:text-sm font-light md:text-base md:font-normal text-gray-500">
          {team.rank}
        </p>
        <Separator className=" w-14 md:w-20 bg-slate-400" />
        <p className=" text-xs sm:text-sm font-light md:text-base md:font-normal text-gray-500">
          {team.description}
        </p>
        <div className="flex gap-2 text-slate-500">
          <IconBrandTwitter className=" w-3 h-3 sm:w-4 sm:h-4 md:h-6 md:w-6" />
          <IconBrandFacebook className=" w-3 h-3 sm:w-4 sm:h-4 md:h-6 md:w-6" />
          <IconBrandInstagram className=" w-3 h-3 sm:w-4 sm:h-4 md:h-6 md:w-6" />
          <IconBrandLinkedin className=" w-3 h-3 sm:w-4 sm:h-4 md:h-6 md:w-6" />
        </div>
      </div>
    </motion.div>
  );
};

export default Team;

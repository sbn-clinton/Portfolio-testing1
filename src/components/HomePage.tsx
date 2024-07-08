"use client";
import { PlayCircleIcon, VideoIcon } from "lucide-react";
import MagicButton from "./MagicButton";
import Image from "next/image";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";
import { motion, useScroll } from "framer-motion";

// const clients = [
//   "/assets/img/clients/client-1.png",
//   "/assets/img/clients/client-2.png",
//   "/assets/img/clients/client-3.png",
//   "/assets/img/clients/client-4.png",
//   "/assets/img/clients/client-5.png",
//   "/assets/img/clients/client-6.png",
//   "/assets/img/clients/client-7.png",
//   "/assets/img/clients/client-8.png",
// ];

const HomePage = () => {
  return (
    <section id="#" className="bg-blue-400 ">
      <div className="flex-col max-w-5xl md:mx-auto mx-4 gap-10 md:py-20 py-14">
        <div className="flex md:flex-row flex-col-reverse max-w-5xl md:mx-auto mx-4 pt-20 ">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h1 className=" text-3xl font-bold md:text-5xl text-gray-300">
              Better Solutions For Your Business
            </h1>
            <p className=" text-slate-600 font-semibold">
              We are team of talented designers making websites with Bootstrap
            </p>
            <div className="flex items-center gap-2 md:gap-4">
              <MagicButton title="Get Started" />
              <div className=" flex gap-1 items-center">
                <PlayCircleIcon className=" w-6 h-6 md:w-9 md:h-9" />
                <span className=" text-xs sm:text-sm text-center">
                  {" "}
                  Watch Video
                </span>
              </div>
            </div>
          </motion.div>
          <div className="p-5  animate-bounce-slow">
            <Image
              src="/assets/img/hero-img.png"
              alt="hero"
              width={500}
              height={500}
            />
          </div>
        </div>
        <InfiniteMovingCardsDemo />
        {/* <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5">
          {clients.map((client) => (
            <div className=" p-5" key={client}>
              <Image src={client} alt={client} width={100} height={100} />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default HomePage;

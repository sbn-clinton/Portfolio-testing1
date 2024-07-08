"use client";

import { Separator } from "./ui/separator";
import { motion } from "framer-motion";
import { LocateIcon, MessageCircleIcon, PhoneCall } from "lucide-react";
import Image from "next/image";
import { RxEnvelopeClosed } from "react-icons/rx";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center mt-10"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-blue-500 text-center">
          CONTACT
        </h1>
        <Separator className="mt-6 w-20 md:w-28 bg-sky-500 rounded-full" />
        <Separator className="w-20 md:w-28 bg-sky-500 rounded-full" />
        <Separator className="w-40 md:w-60 bg-slate-400" />
        <Separator className="w-20 md:w-28 bg-sky-500 rounded-full" />
        <p className="text-slate-500 text-center px-4 mt-6">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </motion.div>
      <div className="flex flex-col md:flex-row gap-3 md:gap-6 mx-4 md:mx-auto max-w-6xl my-5">
        <div className="flex flex-col gap-5 border-y-2 border-y-sky-500 py-3 rounded-t-lg rounded-b-lg md:w-1/3">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-row gap-4 group">
              <div className=" px-2 sm:py-1 sm:px-3 bg-sky-100 rounded-full flex justify-center items-center group-hover:bg-sky-400 ">
                <LocateIcon className=" w-4 h-4 sm:w-6 sm:h-6 text-sky-400 group-hover:text-sky-50" />
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h2 className=" text-base sm:text-xl font-bold text-blue-800">
                  Address
                </h2>
                <p className=" text-xs sm:text-sm font-thin md:text-base text-gray-400">
                  A108 Adam Street, New York, NY 535022
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 group">
              <div className=" px-2 sm:py-1 sm:px-3 bg-sky-100 rounded-full flex justify-center items-center group-hover:bg-sky-400 ">
                <PhoneCall className="  w-4 h-4 sm:w-6 sm:h-6 text-sky-400 group-hover:text-sky-50" />
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h2 className=" text-base sm:text-xl font-bold text-blue-800">
                  Call Us
                </h2>
                <p className="  text-xs sm:text-sm font-thin md:text-base text-gray-400">
                  +1 5589 55488 55
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 group">
              <div className=" px-2 sm:py-1 sm:px-3 bg-sky-100 rounded-full flex justify-center items-center group-hover:bg-sky-400 ">
                <RxEnvelopeClosed className="  w-4 h-4 sm:w-6 sm:h-6 text-sky-400 group-hover:text-sky-50" />
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h2 className=" text-base sm:text-xl font-bold text-blue-800">
                  Email Us
                </h2>
                <p className="  text-xs sm:text-sm font-thin md:text-base text-gray-400">
                  info@example.com
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/img/location.jpg"
              alt="location"
              width={500}
              height={500}
              className=" rounded-lg"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col border-y-2 border-y-sky-500 py-3 rounded-t-lg rounded-b-lg md:w-2/3"
        >
          <Card className="w-full h-full border-none">
            <CardContent>
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="grid gap-2 md:w-1/2">
                    <Label
                      htmlFor="first-name"
                      className="   text-xs sm:text-sm md:text-base text-sky-500 font-bold"
                    >
                      Your Name
                    </Label>
                    <Input id="first-name" placeholder="Max" required />
                  </div>
                  <div className="grid gap-2 md:w-1/2">
                    <Label
                      htmlFor="email"
                      className="   text-xs sm:text-sm md:text-base text-sky-500 font-bold"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="subject"
                    className="   text-xs sm:text-sm md:text-base text-sky-500 font-bold"
                  >
                    Subject
                  </Label>
                  <Input id="subject" placeholder="subject" required />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="message"
                    className="   text-xs sm:text-sm md:text-base text-sky-500 font-bold"
                  >
                    Your message
                  </Label>
                  <Textarea
                    placeholder="Type your message here."
                    id="message"
                    className=" h-32 md:h-60"
                  />
                </div>
                <Button
                  type="submit"
                  className=" py-2 px-4 self-center font-semibold  bg-sky-500"
                >
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className=" bg-sky-100"
      >
        <div className="flex flex-col  mx-4 md:mx-auto max-w-6xl my-5 py-5 md:py-10 gap-3 md:gap-6">
          <h3 className=" font-bold text-lg md:text-xl text-blue-800 text-center">
            Join Our Newsletter
          </h3>
          <p className=" font-thin text-xs sm:text-sm md:text-base text-gray-500 text-center">
            Subscribe to our newsletter and receive the latest news about our
            products and services!
          </p>
          <div className="flex w-full max-w-2xl px-6   items-center justify-center self-center">
            <Input type="newsletter" placeholder="" className="" />
            <Button type="submit" className=" rounded-full">
              Subscribe
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;

"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { AccordionDemo } from "./AccordionDemo";

export function SheetDemo() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button onClick={() => setOpen(true)}>
          <RxHamburgerMenu className=" text-blue-400 text-2xl font-medium" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="top"
        className=" h-[90%] m-5 rounded-2xl overflow-x-auto"
      >
        <ul className="flex flex-col gap-7 font-bold text-sm sm:text-base py-5">
          <li className=" hover:text-sky-400 active:text-sky-400">
            <Link href="#" onClick={handleClose}>
              Home
            </Link>
          </li>
          <li className=" hover:text-sky-400 active:text-sky-400">
            <Link href="#about" onClick={handleClose}>
              About
            </Link>
          </li>
          <li className=" hover:text-sky-400 active:text-sky-400">
            <Link href="#services" onClick={handleClose}>
              Services
            </Link>
          </li>
          <li className=" hover:text-sky-400 active:text-sky-400">
            <Link href="#portfolio" onClick={handleClose}>
              Portfolio
            </Link>
          </li>
          <li className=" hover:text-sky-400 active:text-sky-400">
            <Link href="#team" onClick={handleClose}>
              Team
            </Link>
          </li>
          <li className=" hover:text-sky-400 active:text-sky-400">
            <Link href="#pricing" onClick={handleClose}>
              Pricing
            </Link>
          </li>
          <AccordionDemo />
          <li className=" hover:text-sky-400 active:text-sky-400">
            <Link href="#contact" onClick={handleClose}>
              Contact
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

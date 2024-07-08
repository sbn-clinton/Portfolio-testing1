import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { ChevronRight, ChevronsLeftRight, ChevronUp } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col gap-4 md:gap-8">
        <div className=" flex flex-col md:flex-row gap-4 md:gap-5 justify-start md:justify-center md:items-center max-w-6xl md:mx-auto mx-4">
          <div className=" flex flex-col gap-3 md:w-2/6">
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl text-blue-700">
              SBN-DEV
            </h1>
            <div className="flex flex-col text-gray-500 gap-1">
              <p className=" text-xs sm:text-sm font-light">A108 Adam Street</p>
              <p className=" text-xs sm:text-sm font-light ">
                New York, NY 535022
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className=" text-xs sm:text-sm font-bold text-black">
                Phone:{" "}
                <span className=" text-xs sm:text-sm font-light text-gray-500">
                  +1 5589 55488 55
                </span>
              </p>
              <p className=" text-xs sm:text-sm md:text-base font-bold text-black">
                Email:{" "}
                <span className=" text-xs sm:text-sm md:text-base font-light text-gray-500">
                  info@example.com
                </span>
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row gap-3 md:gap-6 md:w-4/6">
            <div className=" flex flex-col gap-3 text-gray-500 md:w-3/12">
              <h3 className="font-bold text-base text-blue-700">
                Useful Links
              </h3>
              <ul className=" list-none flex flex-col gap-2">
                <li className=" text-xs sm:text-sm font-light">
                  <ChevronRight className=" w-3 h-3 sm:h-4 sm:w-4 me-2 inline-block" />
                  Home
                </li>
                <li className=" text-xs sm:text-sm font-light">
                  <ChevronRight className=" w-3 h-3 sm:h-4 sm:w-4 me-2 inline-block" />
                  About us
                </li>
                <li className=" text-xs sm:text-sm font-light">
                  <ChevronRight className=" w-3 h-3 sm:h-4 sm:w-4 me-2 inline-block" />
                  Services
                </li>
                <li className=" text-xs sm:text-sm font-light">
                  <ChevronRight className=" w-3 h-3 sm:h-4 sm:w-4 me-2 inline-block" />
                  Terms of service
                </li>
              </ul>
            </div>

            <div className=" flex flex-col gap-3 text-gray-500 md:w-4/12">
              <h3 className="font-bold text-base text-blue-700">
                Our Services
              </h3>
              <ul className=" list-none flex flex-col gap-2">
                <li className=" text-xs sm:text-sm font-light">
                  <ChevronRight className=" w-3 h-3 sm:h-4 sm:w-4 me-2 inline-block" />
                  Web Design
                </li>
                <li className=" text-xs sm:text-sm font-light">
                  <ChevronRight className=" w-3 h-3 sm:h-4 sm:w-4 me-2 inline-block" />
                  Web Development
                </li>
                <li className=" text-xs sm:text-sm font-light">
                  <ChevronRight className=" w-3 h-3 sm:h-4 sm:w-4 me-2 inline-block" />
                  Product Management
                </li>
                <li className=" text-xs sm:text-sm font-light">
                  <ChevronRight className=" w-3 h-3 sm:h-4 sm:w-4 me-2 inline-block" />
                  Marketing
                </li>
              </ul>
            </div>

            <div className=" flex flex-col gap-2 md:gap-5 text-gray-500 md:w-5/12">
              <h3 className="font-bold text-base text-blue-700">Follow Us</h3>
              <p className="text-xs sm:text-sm  font-light">
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className="flex justify-center items-center gap-2 md:gap-4">
                <div className=" flex items-center justify-center border border-gray-400 p-2 rounded-full">
                  <IconBrandTwitter />
                </div>
                <div className=" flex items-center justify-center border border-gray-400 p-2 rounded-full">
                  <IconBrandFacebook />
                </div>
                <div className=" flex items-center justify-center border border-gray-400 p-2 rounded-full">
                  <IconBrandInstagram />
                </div>
                <div className=" flex items-center justify-center border border-gray-400 p-2 rounded-full">
                  <IconBrandLinkedin />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-1 py-3 text-center md:mx-7">
          <p className=" text-xs sm:text-sm font-light">
            © Copyright <span className=" font-extrabold ">SBN-DEV</span> All
            Rights Reserved
          </p>
          <p className=" text-xs sm:text-sm font-light">
            Designed by{" "}
            <span className="text-sky-400">Somto Bernard Nwali</span>{" "}
          </p>

          <div className="flex self-end items-center justify-center border border-gray-400 p-2 rounded-full bg-sky-400 mt-5">
            <Link href="#">
              <ChevronUp className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

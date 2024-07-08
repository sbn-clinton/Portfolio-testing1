import Link from "next/link";
import { DropdownMenuDemo } from "./DropdownMenuDemo";
import { SheetDemo } from "./SheetDemo";

const Navbar = () => {
  return (
    <div className="  bg-black bg-opacity-75 shadow-inner shadow-slate-700 fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between items-center max-w-5xl md:mx-auto mx-4 py-5 bg-transparent">
        <div className="">
          <span className=" text-2xl font-bold text-blue-400">SBN</span>
        </div>
        <ul className="md:flex gap-8 items-center justify-center list-none font-medium hidden text-white">
          <li className="">
            <Link href="#">Home</Link>
          </li>
          <li className="">
            <Link href="#about">About</Link>
          </li>
          <li className="">
            <Link href="#services">Services</Link>
          </li>
          <li className="">
            <Link href="#portfolio">Portfolio</Link>
          </li>
          <li className="">
            <Link href="#team">Team</Link>
          </li>
          <li className="">
            <Link href="#pricing">Pricing</Link>
          </li>
          <DropdownMenuDemo />
          <li className="">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        <div className=" md:hidden">
          <SheetDemo />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

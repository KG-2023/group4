import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className="relative">
      <div className="container pt-6 fixed top-0 left-0 right-0">
        <div className="flex justify-between items-center">
          {/*Desktop View */}
          <Link href="/">
            <Image
              src="/logo.png"
              height={50}
              width={50}
              alt="logo"
              className="bg-acccent"
            />
          </Link>
          <ul className="md:flex hidden gap-8 items-center font-semibold text-[14px]">
            <li className="cursor-pointer text-md uppercase border-white hover:text-accent">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer  text-md uppercase border-white hover:text-accent">
              <a>
                <Link href="/about">Featured</Link>
              </a>
            </li>
            <li className="cursor-pointer text-md uppercase border-white hover:text-accent">
              <Link href="/services">Services</Link>
            </li>
            <li className="cursor-pointer text-md uppercase border-white hover:text-accent">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="cursor-pointer text-md uppercase border-white hover:text-accent">
              <Link href="/">Testimonials</Link>
            </li>
            <li className="cursor-pointer text-md uppercase border-white hover:text-accent">
              <Link href="/">Contacts</Link>
            </li>

            <button className="cursor-pointer semi-bold bg-accent text-white px-6 rounded-3xl py-2 hover:bg-accent hover:text-black ease-in-out duration-300 ">
              SignUp
            </button>
          </ul>
          {/* Mobile Menu */}
          <AiOutlineMenu className="md:hidden text-accent" size={30} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { links } from "@/app/page";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white-background">
      {isOpen && (
        <div
          className="fixed top-[75px] left-0 right-0 bottom-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="relative flex justify-between container mx-auto py-3 items-center ">
        <div className="cursor-pointer font-bold text-[32px]">
          <Link 
            href={"#about-sec"} 
            onClick={() => setIsOpen(false)}
          >
            HV
            <span className="text-accent text-[30px]">.</span>
          </Link>
        </div>

         <button
            className="lg:hidden p-2 text-accent cursor-pointer z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            <div
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />

            <div
              className={`w-6 h-0.5 bg-current my-1.5 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />

            <div
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>

        <nav 
          className={`absolute z-50 top-full right-0 w-[50%] bg-white-background flex flex-col items-end px-6 gap-y-2 transition-all duration-300 rounded-lg
            ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-3'}
            lg:static lg:translate-y-0 lg:flex-row lg:w-auto lg:bg-transparent lg:opacity-100 lg:visible lg:px-0 lg:gap-x-4 
          `}
        >
          {links.map( (l, index) => (
            <Link 
              href={l.sectionRoute}
              onClick={() => setIsOpen(false)}
              key={index}
              className=" 
                text-[18px] tracking-wide p-2 
                hover:text-accent-hover lg:text-[16px] lg:p-3
                lg:after:content-[''] lg:after:block lg:after:h-[2px] lg:after:bg-accent
                lg:after:bottom-0 lg:after:left-0 lg:after:transition-all lg:after:duration-300 lg:after:w-0 lg:hover:after:w-full"
            >
              {l.name}
            </Link>
          ))}
        </nav>

        <Link 
          href="#contact-sec"
          className=" 
            hidden lg:flex gap-2 items-center w-fit 
            py-2 px-4.5 bg-accent text-white-font border-2 border-accent font-bold 
            hover:bg-white-background hover:text-accent transition-all rounded-md duration-300"
        >
          Vamos conversar 
          <span className="font-bolder">↗</span>
        </Link>
      </div>
    </div>
  );
}
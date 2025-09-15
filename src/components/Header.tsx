"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="pl-8 pr-8 md:pt-10 relative">
      {/* Logo - Only visible on desktop */}
      <div className="hidden md:flex justify-center mb-5">
        <Link href="/">
          <Image
            src="/images/logo_oguh.svg"
            alt="OGUH Logo"
            width={300}
            height={300}
            priority
          />
        </Link>
      </div>

      {/* Burger Menu Button (Mobile) - Now sticky with higher z-index */}
      <div className="md:hidden fixed top-8 right-8 z-[100]">
        <button
          className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-7 h-7 flex items-center justify-center">
            <span
              className={`absolute w-7 h-[3px] bg-black transition-all duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45" : "translate-y-[-8px]"
              }`}
            ></span>
            <span
              className={`absolute w-7 h-[3px] bg-black transition-all duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute w-7 h-[3px] bg-black transition-all duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45" : "translate-y-[8px]"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center gap-8">
        <Link
          href="/"
          className="text-md font-medium hover:underline underline-offset-4"
        >
          Home
        </Link>
        <Link
          href="/contact"
          className="text-md font-medium hover:underline underline-offset-4"
        >
          Contact
        </Link>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-[90] transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        {/* Remove the separate close button since the hamburger already transforms into an X */}
        <div className="p-8">
          {/* Empty space to match the layout without the separate close button */}
        </div>

        {/* Logo in mobile menu */}
        <div className="flex justify-center mb-8">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/images/logo_oguh.svg"
              alt="OGUH Logo"
              width={250}
              height={250}
              priority
            />
          </Link>
        </div>

        <nav className="flex flex-col items-center justify-center h-1/2">
          <Link
            href="/"
            className="text-2xl font-medium py-4 hover:underline underline-offset-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="text-2xl font-medium py-4 hover:underline underline-offset-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

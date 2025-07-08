"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = ["Product", "Features", "Pricing", "Jobs"];

  return (
    <header className="sticky top-0 z-30 bg-white/75 backdrop-blur shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-xl font-bold text-gray-900"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500">
            <span className="h-4 w-4 rounded-full bg-white" />
          </span>
          <span>Ontime.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((l) => (
            <Link
              key={l}
              href="#"
              className="text-gray-700 hover:text-teal-600"
            >
              {l}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="#" className="text-gray-700 hover:text-teal-600">
            Sign&nbsp;In
          </Link>
          <Link
            href="#"
            className="rounded-full bg-teal-500 px-6 py-2 text-white hover:bg-teal-600 transition"
          >
            Get&nbsp;Started
          </Link>
        </div>

        {/* Burger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && <MobileMenu links={links} />}
    </header>
  );
}

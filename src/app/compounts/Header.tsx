"use client";
import React, { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Meet the Team", href: "#" },
    { name: "Surgery", href: "#" },
    { name: "Services", href: "#" },
    { name: "FAQ's", href: "#" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-6 sm:px-12 lg:px-16 py-6 transition-all">
      <div className="max-w-[1680px] mx-auto flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          {/* Spine Logo Icon Container */}
          <div className="w-12 h-12 sm:w-[400px] sm:h-[100px] items-center justify-center p-2 ">
            <img
              src="/logo.png"
              alt="Mohammed Khaleel MD Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Text Brand Name */}
          {/* <div className="flex flex-col text-white select-none">
            <span className="font-Adorage text-[18px] sm:text-[22px] tracking-wide leading-tight uppercase">
              Mohammed Khaleel MD
            </span>
            <span className="font-Matangi-Regular text-[10px] sm:text-[11px] tracking-[0.25em] text-white/90 uppercase -mt-0.5">
              Spine Surgeon
            </span>
          </div> */}
        </a>

        {/* DESKTOP NAVIGATION PILLS (CENTER) */}
        <nav className="hidden lg:flex items-center gap-3">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="bg-white hover:bg-white/90 text-[#3A3A3A] font-Matangi-Bold text-[16px] font-medium px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA BUTTON (RIGHT) */}
        <div className="hidden lg:block">
          <a
            href="#appointment"
            className="border-3 border-white bg-[#8E6C36] text-white font-Matangi-Bold text-[16px] font-bold px-[20px] py-[10px] rounded-full transition-all duration-300 backdrop-blur-sm shadow-md inline-block"
          >
            Book Your Appointments
          </a>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 bg-[#7A6430]/95 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col gap-4 shadow-xl">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="bg-white text-[#3A3A3A] font-Matangi-Regular text-[15px] font-medium px-5 py-2.5 rounded-full text-center"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#appointment"
            className="border-2 border-white bg-[#5C4B23] text-white font-Matangi-Regular text-[15px] font-medium px-5 py-2.5 rounded-full text-center mt-2"
          >
            Book Your Appointments
          </a>
        </div>
      )}
    </header>
  );
}
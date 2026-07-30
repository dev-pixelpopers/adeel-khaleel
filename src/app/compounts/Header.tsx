"use client";
import React, { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Meet the Team", href: "/meet-the-team" },
    { name: "Surgery", href: "/surgery" },
    { name: "Services", href: "/services" },
    { name: "FAQ's", href: "/faq" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 sm:px-12 lg:px-16 py-6 header opacity-0">
      <div className="max-w-[1680px] mx-auto flex items-center justify-between">

        <a href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-12 h-12 sm:w-[400px] sm:h-[100px] items-center justify-center p-2 ">
            <img
              src="/logo.png"
              alt="Mohammed Khaleel MD Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </a>

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

        <div className="hidden lg:block">
          <a
            href="/contact"
            className="border-3 border-white bg-[#8E6C36] text-white font-Matangi-Bold text-[16px] font-bold px-[20px] py-[10px] rounded-full transition-all duration-300 backdrop-blur-sm shadow-md inline-block"
          >
            Book Your Appointments
          </a>
        </div>
      </div>
    </header>
  );
}
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
      <div className="max-w-[1680px] mx-auto flex items-center justify-between rounded-full border border-white/20 bg-[#545454]/80 px-3 pr-6 py-2 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.15)]">

        <a href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-12 h-12 sm:w-[400px] sm:h-[100px] items-center justify-center p-2">
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
              className="text-white font-Matangi-Bold text-[16px] font-medium px-6 py-2.5 rounded-full transition-all duration-300 hover:bg-white/15"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="/contact"
            className="border-3 border-white bg-[#8E6C36]/90 text-white font-Matangi-Bold text-[16px] font-bold px-[20px] py-[10px] rounded-full transition-all duration-300 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_4px_16px_rgba(0,0,0,0.15)] inline-block hover:bg-[#8E6C36]"
          >
            Book Your Appointments
          </a>
        </div>
      </div>
    </header>
  );
}
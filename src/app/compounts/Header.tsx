"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Meet the Team", href: "/meet-the-team" },
    { name: "Surgery", href: "/surgery" },
    { name: "Services", href: "/services" },
    { name: "FAQ's", href: "/faq" },
  ];
    
    const sidebarRef = useRef(null);
    
    useEffect(() => {

        gsap.set(
            ".mobile-nav-links",
            {
                x:"150%"
            }
        )
    
    }, []);
    const openSidebar = () => {
        gsap.to(
            sidebarRef.current, {
            x: "0%",
            duration: 0.5,
            ease: "power2.out",
        });

        gsap.fromTo(
            ".mobile-links",
            {
                opacity: 0,
                x: "150%",
            },
            {
                opacity: 1,
                x: "0%",
                duration: 0.5,
                stagger: 0.15,
                ease: "power2.inOut"
            }
        );

    };

    const closeSidebar = () => {
        gsap.to(
            sidebarRef.current, {
            x: "100%",
            duration: 0.5,
            ease: "power2.inOut",
        });
    };


  return (
    <>
      {/* ////////////////////////////////Mobile SideBar //////////////////////////////////*/}
      <div className="mobile-nav-links lg:hidden fixed h-dvh w-[100vw] bg-[#8E6C36] translate-x-[100%] right-0 z-60 flex flex-col items-center gap-y-3 sm:gap-y-7  px-4 md:px-8" ref={sidebarRef}>
          <div className="mt-[10%] w-full flex items-center justify-between px-3">
            <div className="h-[60px] 3xs:h-[50px] 2xs:h-[55px] xs:h-[60px] md:h-[80px] items-center justify-start">
              <img
                src="/logo.png"
                alt="Mohammed Khaleel MD Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <button className="h-[24px] 2xs:h-[30px] sm:h-[40px] md:h-[50px] flex items-center justify-center" onClick={closeSidebar}>
              <img src="/x.svg" alt="" className="w-full h-full" />
            </button>

          </div>

          <div className="flex flex-col items-start justify-evenly gap-y-0 sm:gap-y-5 w-full h-[70vh]">
            <div className="flex flex-col h-[70%] justify-evenly">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="mobile-links text-white font-Matangi-Bold text-lg sm:text-xl md:text-3xl w-max font-medium px-6 py-2.5 rounded-full hover:bg-white/15"
                >
                  {item.name}
                </a>
              ))}

            </div>
            <div className="flex w-full justify-center booking ">
              <a
                href="/contact"
                className="border-3 border-white bg-[#8E6C36]/90 text-white font-Matangi-Bold  text-base sm:text-xl md:text-2xl font-bold px-[20px] py-[10px] sm:py-[16px] rounded-full backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_4px_16px_rgba(0,0,0,0.15)] inline-block hover:bg-[#8E6C36]"
              >
                Book Your Appointments
              </a>
            </div>
          </div>


      </div>


      {/* ////////////////////////////////Desktop Navbar //////////////////////////////////*/}
    <header className="fixed top-0 left-0 w-full z-50 px-3 lg:px-6 py-6 header opacity-0 ">

      
      <div className="sub-header max-w-[1680px] lg:mx-auto flex items-center justify-between rounded-full border border-white/20 bg-[#545454]/40 px-3 lg:pr-6  backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.15)]">
        <a href="/" className="flex items-center gap-3 shrink-0 Main-Logo">
          <div className="3xs:h-[60px] 2xs:h-[70px] xs:h-[75px] md:h-[100px] lg:h-[70px] 2xl:h-[100px] items-center justify-center xl:p-2 py-2 md:py-3 ">
            <img
              src="/logo.png"
              alt="Mohammed Khaleel MD Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </a>
              
        <button  className="lg:hidden flex 3xs:h-[32px] 3xs:w-[32px] 2xs:h-[38px] 2xs:w-[38px] sm:h-[40px] sm:w-[40px] md:h-[50px] md:w-[50px] px-1 items-center justify-center bg-[#8E6C36] rounded-full "  onClick={openSidebar} >
          <img src="/menu.svg" alt="" className="w-[80%] h-[90%]" />
        </button>

        <nav className="hidden lg:flex items-center xl:gap-3 nav-links-desktop">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-white font-Matangi-Bold text-[16px] lg:text-sm 2xl:text-lg font-medium px-6 py-2.5 rounded-full transition-all duration-300 hover:bg-white/15"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block booking">
          <a
            href="/contact"
            className="border-3 border-white bg-[#8E6C36]/90 text-white font-Matangi-Bold text-base lg:text-sm 2xl:text-lg font-bold px-[20px] py-[10px] rounded-full transition-all duration-300 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_4px_16px_rgba(0,0,0,0.15)] inline-block hover:bg-[#8E6C36]"
          >
            Book Your Appointments
          </a>
        </div>


      </div>
    </header>
    </>
  );
}
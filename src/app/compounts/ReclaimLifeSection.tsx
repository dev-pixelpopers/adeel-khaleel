"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ReclaimLifeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const reclaimRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
    const isMobile = window.innerWidth < 768;

      if (!containerRef.current) return;

      gsap.set(headingRef.current, {
        xPercent: 20,
        opacity: 0,
        filter: "blur(12px)",
      });

      gsap.set(textRef.current, {
        xPercent: -20,
        opacity: 0,
        filter: "blur(12px)",
      });

      gsap.set(buttonRef.current, {
        yPercent: 30,
        opacity: 0,
        filter: "blur(8px)",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: isMobile ? "top+=2000px bottom  " : "top+=4000px bottom",
          onEnter: () => { console.log('entered') },
          toggleActions: "play none none reverse",
          // markers: true
        },
      });

      tl.to(headingRef.current, {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      })
        .to(
          textRef.current,
          {
            xPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "<"
        )
        .to(
          buttonRef.current,
          {
            yPercent: 0,
            filter: "blur(0px)",
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          },
          "<"
        ).to(
          headingRef.current,
          {
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
          },
        )
        .to(
          textRef.current,
          {
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
          },
          "<"
        );
    },
    { scope: containerRef }
  );

  return (
    <>
      <div ref={containerRef} className="relative w-full ">
        <section
          className="relative w-full h-[50vh] sm:h-[80vh] lg:h-[120vh] xl:h-dvh bg-cover bg-center bg-no-repeat flex items-center justify-center py-16 px-5 sm:py-20 sm:px-8 md:px-12 text-center select-none overflow-hidden xl:min-h-dvh  mt-[-7%]"
          style={{ backgroundImage: "url('/reclaimlife-bg.png')" }}
        >
          <div ref={sectionRef} className="relative top-0 mx-auto flex flex-col items-center justify-center z-10 pt-[20px] sm:pt-[100px] md:pt-[130px] lg:pt-[130px] xl:pt-[200px]">
            <h2
              ref={headingRef}
              className="text-white font-Adorage uppercase text-2xl 2xs:text-[28px] xs:text-[32px] sm:text-[46px] md:text-[56px] lg:text-[70px] xl:text-[110px] 2xl:text-[130px] max-w-[360px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1100px] xl:max-w-[1400px] 2xl:max-w-[1600px] font-normal leading-[1.05] drop-shadow-[0_4px_0px_#00000066]"
            >
              RECLAIM YOUR LIFE WITH <br className="hidden sm:block" /> ADVANCED SPINE SURGERY
            </h2>

            <p
              ref={textRef}
              className=" mt-5 sm:mt-6 md:mt-8 text-white/95 font-Matangi-Medium font-normal leading-relaxed text-sm 2xs:text-base sm:text-lg md:text-2xl lg:text-2xl xl:text-[40px] max-w-[350px] sm:max-w-[600px] md:max-w-[850px] lg:max-w-[1100px] xl:max-w-[1300px]"   
              >
              Providing Patients With Compassionate, Specialized <br className="hidden md:block" />
              Treatments for Optimal Recovery & Long-term Health
            </p>

            <div ref={buttonRef} className=" mt-7 sm:mt-9 md:mt-12 lg:mt-18">
              <a href="/contact" rel="noopener noreferrer">
                <button className=" px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 lg:px-15 lg:py-5 rounded-full bg-[#8C6D3B] border-2 border-white/90 text-white font-sans font-medium tracking-wide text-sm sm:text-base md:text-xl lg:text-[25px] shadow-lg cursor-pointer">
                  Book Your Appointment
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
      <div ref={reclaimRef}>

      </div>
    </>
  );
}

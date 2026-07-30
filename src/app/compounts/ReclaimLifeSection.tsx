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
          start: "top+=4000px bottom",
          onEnter: () => { console.log('entered') },
          toggleActions: "play none none reverse",
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
          className="relative w-full h-dvh bg-cover bg-center bg-no-repeat flex items-center justify-center py-20 px-6 md:px-12 text-center select-none overflow-hidden min-h-dvh  mt-[-7%]"
          style={{ backgroundImage: "url('/reclaimlife-bg.png')" }}
        >
          <div ref={sectionRef} className="relative top-0 mx-auto flex flex-col items-center justify-center z-10 pt-[200px]">
            <h2
              ref={headingRef}
              className="text-white font-Adorage uppercase text-[42px] sm:text-[60px] md:text-[80px] lg:text-[130px] font-normal leading-[1.05] drop-shadow-[0_4px_0px_#00000066]"
            >
              RECLAIM YOUR LIFE WITH <br className="hidden sm:block" /> ADVANCED SPINE SURGERY
            </h2>

            <p
              ref={textRef}
              className="mt-6 md:mt-8 text-white/95 font-Matangi-Medium text-lg sm:text-2xl md:text-[40px] font-normal leading-relaxed"
            >
              Providing Patients With Compassionate, Specialized <br className="hidden md:block" />
              Treatments for Optimal Recovery & Long-term Health
            </p>

            <div ref={buttonRef} className="mt-10 md:mt-18">
              <a href="/contact" rel="noopener noreferrer">
                <button className="px-8 py-3.5 md:px-15 md:py-5 rounded-full bg-[#8C6D3B] border-2 border-white/90 text-white font-sans text-base md:text-[25px] font-medium tracking-wide shadow-lg cursor-pointer">
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

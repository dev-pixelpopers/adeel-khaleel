"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AdvancedSpineSection from "./advancedspinesection";
import Header from "./Header";

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const mainBannerImage = useRef<HTMLDivElement>(null);
  const ellipseRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (!bannerRef.current || !headingRef.current) return;

      gsap.set(headingRef.current, {
        rotate: -21,
        scale: 1.5,
        opacity: 0,
      });

      gsap.set(leftTextRef.current, {
        opacity: 0,
        xPercent: 21,
      });

      gsap.set(mainBannerImage.current, {
        clipPath: "inset(100% 0% 0% 0%)",
      });

      const headerEl = document.querySelector(".header");
      if (headerEl) {
        gsap.set(headerEl, { yPercent: -100, opacity: 0 });
      }

      const spineHeading = bannerRef.current.querySelector(".advanced-spine-heading");
      const spineParagraph = bannerRef.current.querySelector(".advanced-spine-paragraph");

      if (spineHeading) {
        gsap.set(spineHeading, { xPercent: 20, opacity: 0 });
      }
      if (spineParagraph) {
        gsap.set(spineParagraph, { xPercent: -20, opacity: 0 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });
      tl.to(ellipseRef.current, {
        scale: 1,
        duration: 1,
        ease: "power3.out",
      }).to(
        headingRef.current,
        {
          opacity: 1,
          rotate: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        "<"
      )
        .to(
          leftTextRef.current,
          {
            opacity: 1,
            xPercent: 0,
            duration: 1,
            ease: "power3.out",
          },
          ">"
        )
        .to(
          mainBannerImage.current,
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "power3.out",
          },
          "<"
        )
        .to(
          rightTextRef.current,
          {
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          }
        )
        .to(
          headerEl,
          {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            ease: "power2.out",
          }
        )
        // Hold phase so user can read the completed hero banner before it slides up
        .to({}, { duration: 1.5 })
        // 6. Slide Banner section UP out of view to reveal AdvancedSpineSection
        .to(
          sectionRef.current,
          {
            yPercent: -100,
            duration: 2,
            ease: "power2.inOut",
          }
        )
        // Hide Header simultaneously as Banner section slides UP out of view
        .to(
          headerEl,
          {
            yPercent: -100,
            opacity: 0,
            duration: 1.5,
            ease: "power2.in",
          },
          "<"
        );

      if (spineHeading && spineParagraph) {
        tl.to(
          spineHeading,
          {
            xPercent: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=1.2"
        ).to(
          spineParagraph,
          {
            xPercent: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "<"
        );
      }
    },
    { scope: bannerRef }
  );

  return (
    <div ref={bannerRef} className="relative w-full h-[350vh]">
      {/* <Header /> */}
      <div className="sticky top-0 z-10 w-full h-dvh overflow-hidden grid grid-cols-1 grid-rows-1">
        {/* AdvancedSpineSection sits stationary BEHIND Banner (z-0) */}
        <div className="col-start-1 row-start-1 w-full h-full z-0 flex items-center justify-center bg-white">
          <AdvancedSpineSection />
        </div>

        {/* Banner Hero Section sits ON TOP (z-10) and slides UP to reveal AdvancedSpineSection */}
        <section
          ref={sectionRef}
          className="col-start-1 row-start-1 relative z-10 w-full h-full bg-cover bg-center bg-no-repeat overflow-hidden flex items-end justify-center pl-[120px] pr-[120px]"
          style={{ backgroundImage: "url('/banner-bg.jpg')" }}
        >
          <div className="absolute top-0 left-0 flex justify-center w-full">
            <img ref={ellipseRef} src="/banner-ellipse.png" className="object-contain scale-50" />
          </div>
          <div className="relative w-full min-h-[720px] flex items-center justify-center">
            <div className="absolute inset-0 flex flex-col justify-center z-0 pt-[120px]">
              <h1
                ref={headingRef}
                className="text-white text-[300px] font-Adorage font-normal leading-[180px] text-center lg:text-left drop-shadow-[0_4px_0px_#00000066]"
              >
                MUHAMMAD
              </h1>

              <div
                ref={leftTextRef}
                className="flex flex-col text-white text-[157px] font-Matangi-Light leading-[0.95] mt-4 pl-1 drop-shadow-[0_4px_0px_#00000066]"
              >
                <span>ADEEL</span>
                <span>KHALEEL</span>
              </div>
            </div>

            <div
              ref={mainBannerImage}
              className="relative z-10 flex justify-center items-end h-full pt-16"
              style={{
                clipPath: "inset(100% 0% 0% 0%)",
              }}
            >
              <img
                src="/adeel-image.png"
                alt="Dr. Muhammad Adeel Khaleel"
                className="h-[780px] object-contain object-bottom mix-blend-screen"
              />
            </div>

            <div
              ref={rightTextRef}
              className="absolute right-[50px] bottom-50 z-20 max-w-xs md:max-w-sm lg:max-w-md text-white space-y-4 pr-2 opacity-0"
            >
              <h2 className="text-[29px] font-Matangi-Bold tracking-wider uppercase">
                SPINE SURGERY SPECIALIST <br /> IN DALLAS
              </h2>

              <p className="text-[16px] font-Matangi-Regular text-white/90 leading-relaxed tracking-wide">
                For over a decade, Mohammed Khaleel, MD has been a respected spine surgeon in the Dallas and Fort Worth areas, specializing in minimally invasive procedures and complex deformity corrections.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


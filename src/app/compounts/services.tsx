"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ReclaimLifeSection from "./ReclaimLifeSection";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: "01",
    title: "EXPERTISE IN SPINE \n AND MUSCULOSKELETAL \n TREATMENTS",
    description: "10 years of comprehensive spine and musculoskeletal care.",
    image: "/service-1.png",
  },
  {
    id: "02",
    title: "MINIMALLY \n INVASIVE \n SURGERY",
    description: "Advanced techniques for faster recovery and minimal scarring.",
    image: "/service-2.png",
  },
  {
    id: "03",
    title: "COMPLEX \n DEFORMITY \n CORRECTIONS",
    description: "Tailored surgical solutions for severe spinal conditions.",
    image: "/service-3.png",
  },
  {
    id: "04",
    title: "NON-OPERATIVE \n SPINE CARE",
    description: "Targeted physical therapy and interventional pain management.",
    image: "/service-4.png",
  },
];

export default function Services() {
  const outerContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const numbersWrapperRef = useRef<HTMLDivElement>(null);
  const titlesWrapperRef = useRef<HTMLDivElement>(null);
  const descriptionsWrapperRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const reclaimWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (
        !outerContainerRef.current ||
        !numbersWrapperRef.current ||
        !titlesWrapperRef.current ||
        !descriptionsWrapperRef.current
      )
        return;

      // Set initial peek position for ReclaimLifeSection (top header peeking up from bottom)
      if (reclaimWrapperRef.current) {
        gsap.set(reclaimWrapperRef.current, {
          y: "calc(100vh - 140px)",
        });
      }

      // Initial hidden states for ReclaimLifeSection elements (so they start invisible/blurred)
      const reclaimHeading = outerContainerRef.current.querySelector(".reclaim-heading");
      const reclaimText = outerContainerRef.current.querySelector(".reclaim-text");
      const reclaimButton = outerContainerRef.current.querySelector(".reclaim-button");

      if (reclaimHeading) {
        gsap.set(reclaimHeading, { xPercent: 20, opacity: 0, filter: "blur(12px)" });
      }
      if (reclaimText) {
        gsap.set(reclaimText, { xPercent: -20, opacity: 0, filter: "blur(12px)" });
      }
      // if (reclaimButton) {
      //   gsap.set(reclaimButton, { xPercent: -20, opacity: 0, filter: "blur(8px)" });
      // }

      // Initial hidden states for ReclaimLifeSection elements (so they start invisible/blurred)
      // const reclaimHeading = outerContainerRef.current.querySelector(".reclaim-heading");
      // const reclaimText = outerContainerRef.current.querySelector(".reclaim-text");
      // const reclaimButton = outerContainerRef.current.querySelector(".reclaim-button");

      // if (reclaimHeading) {
      //   gsap.set(reclaimHeading, { xPercent: 20, opacity: 0, filter: "blur(12px)" });
      // }
      // if (reclaimText) {
      //   gsap.set(reclaimText, { xPercent: -20, opacity: 0, filter: "blur(12px)" });
      // }
      // if (reclaimButton) {
      //   gsap.set(reclaimButton, { xPercent: -20, opacity: 0, filter: "blur(8px)" });
      // }

      // Initial states for images: image 0 clipped from left-to-right, rest positioned offscreen right
      imagesRef.current.forEach((img, i) => {
        if (!img) return;
        if (i === 0) {
          gsap.set(img, {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 100%)",
            xPercent: 0,
            rotate: 7,
            zIndex: 10,
          });
        } else {
          gsap.set(img, {
            opacity: 0,
            xPercent: 100,
            rotate: 7,
            zIndex: 10 + i,
          });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outerContainerRef.current,
          start: "top top",
          end: `bottom bottom`,
          scrub: 1.2,
        },
      });

      // 0. First image reveals from left to right via clipPath
      if (imagesRef.current[0]) {
        tl.to(
          imagesRef.current[0],
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.5,
            ease: "power2.out",
          },
          0
        );
      }

      // Animate through each service step (card 01 -> 02 -> 03 -> 04)
      for (let i = 1; i < servicesData.length; i++) {
        // Slide numbers horizontally
        tl.to(
          numbersWrapperRef.current,
          {
            xPercent: -100 * i,
            duration: 0.8,
            ease: "power2.inOut",
          }
        )
          // Slide titles vertically
          .to(
            titlesWrapperRef.current,
            {
              yPercent: -100 * i,
              duration: 0.8,
              ease: "power2.inOut",
            },
            "<"
          )
          // Slide descriptions vertically
          .to(
            descriptionsWrapperRef.current,
            {
              yPercent: -100 * i,
              duration: 0.8,
              ease: "power2.inOut",
            },
            "<"
          );

        // Previous image goes behind with opacity 0
        if (imagesRef.current[i - 1]) {
          tl.to(
            imagesRef.current[i - 1],
            {
              opacity: 0,
              scale: 0.4,
              duration: 0.8,
              ease: "power2.inOut",
            },
            "<"
          );
        }

        // Next image transitions in from right to left
        if (imagesRef.current[i]) {
          tl.fromTo(
            imagesRef.current[i],
            {
              xPercent: 100,
              opacity: 0,
            },
            {
              xPercent: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.inOut",
            },
            "<"
          );
        }

        // Hold each service card in view so the user can read the content comfortably
        tl.to({}, { duration: 0.8 });
      }

      // 1. After all service cards finish, slide ReclaimLifeSection overlay up to cover the viewport
      // if (reclaimWrapperRef.current) {
      //   tl.to(
      //     reclaimWrapperRef.current,
      //     {
      //       y: "0vh",
      //       duration: 1.2,
      //       ease: "power2.inOut",
      //     }
      //   );
      // }

      // 2. Animate ReclaimLifeSection heading, text, and button into view as the section is revealed
      // if (reclaimHeading && reclaimText && reclaimButton) {
      //   tl.to(
      //     reclaimHeading,
      //     {
      //       delay: 5,
      //       xPercent: 0,
      //       opacity: 1,
      //       duration: 1.0,
      //       ease: "power3.out",
      //     },
      //     "-=0.4"
      //   )
      //     .to(
      //       reclaimText,
      //       {
      //         xPercent: 0,
      //         opacity: 1,
      //         duration: 1.0,
      //         ease: "power3.out",
      //       },
      //       "<"
      //     ).to(
      //       reclaimHeading,
      //       {
      //         filter: "blur(0px)",
      //         delay: 1,
      //         duration: 1.0,
      //         ease: "power3.out",
      //       },
      //     )
      //   // .to(
      //   //   reclaimButton,
      //   //   {
      //   //     xPercent: 0,
      //   //     opacity: 1,
      //   //     filter: "blur(0px)",
      //   //     duration: 1.0,
      //   //     ease: "power3.out",
      //   //   },
      //   //   "<"
      //   // );
      // }

      // // 2. Animate ReclaimLifeSection heading, text, and button into view as the section is revealed
      // if (reclaimHeading && reclaimText && reclaimButton) {
      //   tl.to(
      //     reclaimHeading,
      //     {
      //       xPercent: 0,
      //       opacity: 1,
      //       duration: 1.0,
      //       ease: "power3.out",
      //     },
      //     "-=0.4"
      //   )
      //     .to(
      //       reclaimText,
      //       {
      //         xPercent: 0,
      //         opacity: 1,
      //         duration: 1.0,
      //         ease: "power3.out",
      //       },
      //       "<"
      //     )
      //   // .to(
      //   //   reclaimButton,
      //   //   {
      //   //     xPercent: 0,
      //   //     opacity: 1,
      //   //     filter: "blur(0px)",
      //   //     duration: 1.0,
      //   //     ease: "power3.out",
      //   //   },
      //   //   "<"
      //   // );
      // }
    },
    { scope: outerContainerRef }
  );

  return (
    <div ref={outerContainerRef} className="relative w-full h-[600vh]">
      <div className="sticky top-0 z-10 w-full min-h-dvh overflow-hidden">
        <section
          ref={sectionRef}
          className="relative w-full h-full bg-white pt-10 flex items-end flex-col"
        >
          <div
            className="relative w-full mx-auto flex flex-row gap-24 pl-[140px] pt-[20px]"
          >
            <div className="absolute bottom-0 h-[80%] left-0 w-full" style={{
              background:
                "linear-gradient(-90deg,rgba(84, 84, 84, 0.2) 0%, rgba(219, 236, 239, 0) 77.88%)",
            }}>
            </div>
            <div className="relative w-full flex flex-col lg:flex-row items-center justify-between mb-[100px]">
              <div className="w-1/2 flex flex-col justify-center pr-0 lg:pr-8 z-10">
                {/* Numbers horizontal track */}
                <div className="overflow-hidden w-[250px]">
                  <div ref={numbersWrapperRef} className="flex flex-row w-full h-full">
                    {servicesData.map((item, index) => (
                      <div key={index} className="w-full h-full shrink-0">
                        <span
                          className="text-[200px] font-Adorage text-[#54545420] leading-none shrink-0 w-full pr-[100px]"
                        >
                          {item.id}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Titles vertical track */}
                <div className="overflow-hidden h-[210px] w-full">
                  <div ref={titlesWrapperRef} className="flex flex-col w-full h-full">
                    {servicesData.map((item, index) => (
                      <div key={index} className="h-full shrink-0 flex items-center">
                        <h3 className="text-[60px] font-Adorage uppercase text-[#545454] leading-tight" style={{
                          whiteSpace: "pre-line"
                        }}>
                          {item.title}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Descriptions vertical track */}
                <div className="overflow-hidden h-[120px] w-full">
                  <div ref={descriptionsWrapperRef} className="flex flex-col w-full h-full">
                    {servicesData.map((item, index) => (
                      <div key={index} className="h-full shrink-0 flex items-center">
                        <p className="text-[35px] text-[#545454] font-Matangi-Regular leading-relaxed pt-2" >
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side Images stack */}
              <div className="w-1/2 grid grid-cols-1 grid-rows-1 relative z-10 items-center justify-items-center -mb-[7%]">
                {servicesData.map((item, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      if (el) imagesRef.current[index] = el;
                    }}
                    className="col-start-1 row-start-1 relative w-full h-full flex items-center justify-center"
                  >
                    <div className="relative rotate-3 -mb-[12%] flex">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-[700px] h-[800px]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>
        <div className="relative w-full">
          <ReclaimLifeSection />
        </div>
      </div>

    </div>
  );
}



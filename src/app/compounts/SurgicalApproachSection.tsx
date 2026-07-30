"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const approachData = [
  {
    id: 1,
    title: "MINIMALLY INVASIVE SURGERY",
    description:
      "Smaller incisions and specialized instruments allow for faster recovery, less pain, and minimal scarring for eligible spine conditions.",
    image: "/service-2.png",
  },
  {
    id: 2,
    title: "COMPLEX DEFORMITY CORRECTION",
    description:
      "Advanced surgical planning to correct severe curvature and structural deformities of the spine with precision.",
    image: "/service-3.png",
  },
  {
    id: 3,
    title: "SPINAL FUSION",
    description:
      "Stabilizing damaged vertebrae to relieve pain and restore function in cases of instability or degeneration.",
    image: "/service-1.png",
  },
  {
    id: 4,
    title: "REVISION SPINE SURGERY",
    description:
      "Specialized care for patients requiring correction or improvement of a previous spine surgery.",
    image: "/service-4.png",
  },
];

export default function SurgicalApproachSection() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(headingRef.current, { opacity: 0, yPercent: 20 });

      gsap.to(headingRef.current, {
        opacity: 1,
        yPercent: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-20 px-6 md:px-12 select-none overflow-x-hidden"
    >
      <div
        ref={headingRef}
        className="w-full text-center mb-16 flex flex-col items-center justify-center"
      >
        <h2 className="text-[#545454] font-Adorage uppercase text-[32px] sm:text-[48px] md:text-[58px] font-normal leading-[1.05] tracking-tight">
          Our Surgical Approach
        </h2>
        <p className="w-[90%] md:w-[65%] mt-6 text-[#555555] font-Matangi-Regular text-base sm:text-lg leading-relaxed">
          Every procedure is tailored to the patient, drawing on the most
          advanced surgical techniques available for spine and musculoskeletal
          care.
        </p>
      </div>

      <div className="mx-auto flex flex-col lg:flex-row gap-6 h-auto lg:h-[560px] rounded-[8px] w-full justify-center max-w-[1400px]">
        {approachData.map((card) => {
          const isOpen = activeId === card.id;

          return (
            <div
              key={card.id}
              onClick={() => setActiveId(isOpen ? null : card.id)}
              className={`relative cursor-pointer overflow-hidden transition-all duration-900 ease-in-out flex flex-col justify-end rounded-xl min-h-[220px] lg:min-h-0 ${
                isOpen ? "lg:w-[600px] w-full" : "lg:w-[200px] w-full hover:opacity-95"
              }`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

              <div className="relative z-10 text-left transition-all duration-900 ease-in-out p-6">
                <h4
                  className={`font-Adorage uppercase text-white transition-all duration-900 ease-in origin-left leading-[1.05] ${
                    isOpen ? "text-2xl md:text-[32px]" : "text-xl md:text-[26px]"
                  }`}
                >
                  {card.title}
                </h4>
                <div
                  className={`relative overflow-hidden w-full ${
                    isOpen
                      ? "max-h-[200px] mt-3 duration-900 delay-300 opacity-100"
                      : "max-h-0 duration-300 opacity-0"
                  }`}
                >
                  <p className="text-white/90 font-Matangi-Regular text-sm md:text-base leading-relaxed max-w-md">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

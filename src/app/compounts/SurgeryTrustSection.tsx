"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "10+", label: "Years of Spine Surgery Experience" },
  { value: "Fellowship", label: "Trained in Minimally Invasive Spine Surgery" },
  { value: "AAOS / NASS", label: "Board Certified & Society Member" },
];

const affiliations = [
  { src: "/footer-logo (5).png", alt: "American Academy of Orthopaedic Surgeons" },
  { src: "/footer-logo (2).png", alt: "NASS" },
  { src: "/footer-logo (3).png", alt: "North American Spine Society" },
  { src: "/footer-logo (4).png", alt: "AAOS" },
];

export default function SurgeryTrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gridRef.current?.querySelectorAll(".stat-card");
      if (cards && cards.length) {
        gsap.set(cards, { opacity: 0, yPercent: 15 });
        gsap.to(cards, {
          opacity: 1,
          yPercent: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 82%" },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-20 px-6 md:px-12 select-none"
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-[#545454] font-Adorage uppercase text-[32px] sm:text-[48px] md:text-[58px] font-normal leading-tight tracking-tight">
          Why Patients Trust Dr. Khaleel
        </h2>

        <div
          ref={gridRef}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-card rounded-2xl border border-[#EBE3C8] p-8"
              style={{
                background:
                  "linear-gradient(180deg, #f6efd9 0%, rgba(255,255,255,1) 101.88%)",
              }}
            >
              <p className="text-[#8E6C36] font-Adorage text-[30px] sm:text-[34px] leading-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-[#555555] font-Matangi-Regular text-sm sm:text-base leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {affiliations.map((logo) => (
            <div key={logo.alt} className="h-10 flex items-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>

        <a
          href="/meet-the-team"
          className="inline-block mt-10 border-2 border-[#8E6C36] text-[#8E6C36] font-Matangi-Bold text-base px-8 py-3 rounded-full transition-colors duration-300 hover:bg-[#8E6C36] hover:text-white"
        >
          Meet The Team
        </a>
      </div>
    </section>
  );
}

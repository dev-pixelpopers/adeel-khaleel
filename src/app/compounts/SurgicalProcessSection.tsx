"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    id: "01",
    title: "Consultation",
    description:
      "A thorough evaluation of your condition, imaging, and medical history to determine the right path forward.",
  },
  {
    id: "02",
    title: "Pre-Operation",
    description:
      "Preoperative testing and medical clearance scheduled 1-2 weeks ahead to ensure you're ready for surgery.",
  },
  {
    id: "03",
    title: "Surgery Day",
    description:
      "Your procedure is performed at an accredited partner facility by Dr. Khaleel and his surgical team.",
  },
  {
    id: "04",
    title: "Post-Operation",
    description:
      "Guided recovery with a personalized rehabilitation plan to support a full, lasting return to daily life.",
  },
];

export default function SurgicalProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gridRef.current?.querySelectorAll(".process-card");
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
      className="w-full py-20 px-6 md:px-12 select-none"
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f9f5e9 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[#545454] font-Adorage uppercase text-[32px] sm:text-[48px] md:text-[58px] font-normal text-center leading-tight tracking-tight mb-14">
          What To Expect
        </h2>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {processSteps.map((step) => (
            <div
              key={step.id}
              className="process-card relative bg-white rounded-2xl border border-[#EBE3C8] p-6 shadow-sm"
            >
              <span className="text-[#8E6C36]/20 font-Adorage text-[64px] leading-none">
                {step.id}
              </span>
              <h3 className="text-[#333] font-Matangi-Bold text-xl mt-2">
                {step.title}
              </h3>
              <p className="mt-3 text-[#555555] font-Matangi-Regular text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

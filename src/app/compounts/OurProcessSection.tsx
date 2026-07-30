"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    id: "01",
    title: "Initial Consultation",
    description:
      "We start by listening. A thorough review of your symptoms, imaging, and medical history helps us understand your condition and goals.",
  },
  {
    id: "02",
    title: "Diagnostic Evaluation",
    description:
      "Advanced imaging and diagnostic testing pinpoint the exact source of your pain, so treatment is targeted, not guesswork.",
  },
  {
    id: "03",
    title: "Personalized Treatment Plan",
    description:
      "Whether surgical or non-operative, your plan is built around your specific condition, lifestyle, and recovery goals.",
  },
  {
    id: "04",
    title: "Pre-Operative Preparation",
    description:
      "If surgery is recommended, preoperative testing and medical clearance ensure you're fully prepared before your procedure.",
  },
  {
    id: "05",
    title: "Surgery or Treatment",
    description:
      "Your procedure is performed at an accredited partner facility by Dr. Khaleel and a dedicated surgical team.",
  },
  {
    id: "06",
    title: "Recovery & Rehabilitation",
    description:
      "A guided recovery plan, including physical therapy where needed, supports a full and lasting return to daily life.",
  },
  {
    id: "07",
    title: "Long-Term Follow-Up",
    description:
      "We stay involved well after treatment, with ongoing check-ins to monitor your progress and long-term spine health.",
  },
];

export default function OurProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const steps = listRef.current?.querySelectorAll(".process-step");
      if (steps && steps.length) {
        gsap.set(steps, { opacity: 0, yPercent: 15 });
        gsap.to(steps, {
          opacity: 1,
          yPercent: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: listRef.current, start: "top 80%" },
        });
      }

      const line = listRef.current?.querySelector(".process-line");
      if (line) {
        gsap.set(line, { scaleY: 0, transformOrigin: "top" });
        gsap.to(line, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 1,
          },
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
      <div className="max-w-[900px] mx-auto">
        <div ref={listRef} className="relative">
          <div className="process-line hidden sm:block absolute left-[27px] top-2 bottom-2 w-[2px] bg-[#EBE3C8]" />

          {processSteps.map((step) => (
            <div
              key={step.id}
              className="process-step relative flex gap-6 sm:gap-8 mb-12 last:mb-0"
            >
              <div className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-[#8E6C36] flex items-center justify-center shadow-md">
                <span className="text-white font-Adorage text-lg">
                  {step.id}
                </span>
              </div>

              <div className="pt-1">
                <h3 className="text-[#545454] font-Adorage uppercase text-[22px] sm:text-[26px] leading-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-[#555555] font-Matangi-Regular text-base leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

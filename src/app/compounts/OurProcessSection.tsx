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

interface Step {
  id: string;
  title: string;
  description: string;
}

function ProcessStepRow({ step, index }: { step: Step; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const isLeft = index % 2 === 0;

  useGSAP(
    () => {
      // Entrance transition: text slides in from its side and fades in
      gsap.set(textRef.current, {
        opacity: 0,
        xPercent: isLeft ? -12 : 12,
      });

      gsap.to(textRef.current, {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rowRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      // Step number becomes prominent while its row is centered in view
      gsap.set(circleRef.current, { scale: 1 });
      gsap.to(circleRef.current, {
        scale: 1.3,
        backgroundColor: "#AD974E",
        boxShadow: "0 0 0 10px rgba(142,108,54,0.18)",
        duration: 0.45,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rowRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      });
    },
    { scope: rowRef }
  );

  return (
    <div
      ref={rowRef}
      className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-10 mb-14 last:mb-0"
    >
      {/* Left column */}
      <div className={`order-2 md:order-1 ${isLeft ? "md:text-right" : ""}`}>
        {isLeft && (
          <div ref={textRef}>
            <h3 className="text-[#545454] font-Adorage uppercase text-[22px] sm:text-[26px] leading-tight">
              {step.title}
            </h3>
            <p className="mt-3 text-[#555555] font-Matangi-Regular text-base leading-relaxed md:ml-auto md:max-w-md">
              {step.description}
            </p>
          </div>
        )}
      </div>

      {/* Center step marker */}
      <div className="order-1 md:order-2 flex justify-center">
        <div
          ref={circleRef}
          className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-[#8E6C36] flex items-center justify-center shadow-md"
        >
          <span className="text-white font-Adorage text-lg">{step.id}</span>
        </div>
      </div>

      {/* Right column */}
      <div className="order-3 md:order-3">
        {!isLeft && (
          <div ref={textRef}>
            <h3 className="text-[#545454] font-Adorage uppercase text-[22px] sm:text-[26px] leading-tight">
              {step.title}
            </h3>
            <p className="mt-3 text-[#555555] font-Matangi-Regular text-base leading-relaxed md:max-w-md">
              {step.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function OurProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
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
      <div className="max-w-[1000px] mx-auto">
        <div ref={listRef} className="relative">
          <div className="process-line absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-[2px] bg-[#EBE3C8]" />

          {processSteps.map((step, index) => (
            <ProcessStepRow key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

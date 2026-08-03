"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const conditions = [
  {
    title: "Neck & Back Pain",
    description:
      "Alleviate chronic or acute neck and back pain with personalized treatment plans designed to address the root causes.",
    image: "/NECK.png",
  },
  {
    title: "Scoliosis",
    description:
      "Receive expert care for scoliosis with customized treatments that aim to manage and improve spinal curvature.",
    image: "/SCOLIOSIS.png",
  },
  {
    title: "Sports Injury",
    description:
      "Recover from sports-related injuries with targeted therapies and rehabilitation programs designed to restore function.",
    image: "/SPORTS.png",
  },
  {
    title: "Spine Trauma",
    description:
      "Benefit from specialized care for spine trauma, including injury assessment, pain management, and rehabilitation.",
    image: "/SPINE.png",
  },
  {
    title: "Herniated Disc",
    description:
      "Find relief from the pain and discomfort of a herniated disc through advanced diagnostic and treatment options.",
    image: "/service-1.png",
  },
];

export default function ServicesConditionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.set(headingRef.current, { opacity: 0, yPercent: 20 });
      gsap.to(headingRef.current, {
        opacity: 1,
        yPercent: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });

      gsap.set(cardsRef.current, { opacity: 0, y: 40 });
      gsap.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-20 md:py-28 px-6 md:px-12 select-none"
    >
      <div ref={headingRef} className="max-w-[820px] mx-auto text-center">
        <span className="text-[#8E6C36] font-Matangi-Bold uppercase tracking-[0.3em] text-sm">
          Conditions We Treat
        </span>
        <h2 className="mt-4 text-[#545454] font-Adorage uppercase text-[34px] sm:text-[46px] md:text-[54px] leading-[1.05] tracking-tight">
          Our Range Of Services
        </h2>
        <p className="mt-5 text-[#555555] font-Matangi-Regular text-lg sm:text-xl leading-relaxed">
          At Mohammed Khaleel, MD, we specialize in comprehensive care for a
          range of conditions affecting the neck and spine. Explore our
          services below.
        </p>
      </div>

      <div className="mt-16 max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {conditions.map((item, index) => (
          <div
            key={item.title}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className={`group relative rounded-2xl overflow-hidden border border-[#EBE3C8] flex flex-col items-start transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_-15px_rgba(142,108,54,0.35)] ${
              index === conditions.length - 1 &&
              conditions.length % 3 === 2
                ? "sm:col-span-2 lg:col-span-1"
                : ""
            }`}
            style={{ background: "#FFFFFF" }}
          >
            <div className="relative w-full h-[220px] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
            </div>

            <div className="p-8">
              <h3 className="text-[#545454] font-Adorage uppercase text-[24px] sm:text-[26px] leading-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-[#555] font-Matangi-Regular text-lg leading-relaxed">
                {item.description}
              </p>

              <div className="mt-6 w-10 h-[3px] bg-[#8E6C36] rounded-full transition-all duration-500 group-hover:w-16" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

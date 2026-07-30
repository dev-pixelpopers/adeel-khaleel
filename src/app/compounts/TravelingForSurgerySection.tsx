"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const travelInfo = [
  {
    title: "Dallas/Fort Worth International (DFW)",
    description:
      "The closest major airport, roughly 30 minutes from our Frisco office, with the widest range of domestic and international flights.",
  },
  {
    title: "Dallas Love Field (DAL)",
    description:
      "A convenient alternative for domestic travelers, located about 35 minutes from our office.",
  },
];

const planningTips = [
  "Plan to arrive at least one day before any scheduled testing or surgery.",
  "Arrange local transportation in advance, such as a rental car or rideshare.",
  "Ask our team for guidance on nearby extended-stay accommodations.",
  "Confirm your expected length of stay based on your recovery plan.",
  "Bring copies of your imaging, medical records, and a list of current medications.",
];

export default function TravelingForSurgerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const airportsRef = useRef<HTMLDivElement>(null);
  const tipsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = airportsRef.current?.querySelectorAll(".airport-card");
      if (cards && cards.length) {
        gsap.set(cards, { opacity: 0, yPercent: 15 });
        gsap.to(cards, {
          opacity: 1,
          yPercent: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: airportsRef.current, start: "top 82%" },
        });
      }

      const tips = tipsRef.current?.querySelectorAll(".tip-item");
      if (tips && tips.length) {
        gsap.set(tips, { opacity: 0, xPercent: -8 });
        gsap.to(tips, {
          opacity: 1,
          xPercent: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: tipsRef.current, start: "top 82%" },
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
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-[#8E6C36] font-Adorage uppercase text-[32px] sm:text-[44px] md:text-[50px] mb-4 text-center">
          Getting Here
        </h2>
        <p className="text-[#555555] font-Matangi-Regular text-base leading-relaxed text-center max-w-2xl mx-auto mb-12">
          We welcome patients from across the region and beyond. Here is what
          to know when planning your trip to our Frisco office.
        </p>

        <div
          ref={airportsRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16"
        >
          {travelInfo.map((airport) => (
            <div
              key={airport.title}
              className="airport-card rounded-2xl border border-[#EBE3C8] p-7"
              style={{
                background:
                  "linear-gradient(180deg, #f6efd9 0%, rgba(255,255,255,1) 101.88%)",
              }}
            >
              <h3 className="text-[#333] font-Matangi-Bold text-lg">
                {airport.title}
              </h3>
              <p className="mt-3 text-[#555555] font-Matangi-Regular text-[15px] leading-relaxed">
                {airport.description}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-[#8E6C36] font-Adorage uppercase text-[32px] sm:text-[44px] md:text-[50px] mb-8 text-center">
          Planning Your Visit
        </h2>

        <div ref={tipsRef} className="max-w-2xl mx-auto space-y-4">
          {planningTips.map((tip) => (
            <div
              key={tip}
              className="tip-item flex items-start gap-4 rounded-xl border-b border-[#EBE3C8] pb-4"
            >
              <svg
                className="w-5 h-5 mt-0.5 shrink-0 text-[#8E6C36]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[#555555] font-Matangi-Regular text-base leading-relaxed">
                {tip}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

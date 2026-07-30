"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const groups = [
  {
    title: "Preoperative Testing",
    items: [
      "Testing is typically scheduled 1-2 weeks before your surgery date.",
      "Bloodwork, EKG, or imaging may be required based on your health history.",
      "Medical clearance from your PCP or cardiologist may be needed.",
    ],
  },
  {
    title: "Medication Guidelines",
    items: [
      "You will receive a detailed list of medications to continue or stop.",
      "Blood thinners are often paused several days before surgery.",
      "Confirm all current medications and supplements with our team.",
    ],
  },
  {
    title: "One Week Before Surgery",
    items: [
      "Arrange transportation to and from the surgical facility.",
      "Prepare your home for a comfortable recovery afterward.",
      "Complete any remaining preoperative appointments.",
    ],
  },
  {
    title: "Day Of Surgery",
    items: [
      "Follow fasting instructions provided by our team.",
      "Shower with antibacterial soap as directed.",
      "Leave jewelry, makeup, and valuables at home.",
      "Arrive at the facility at your confirmed check-in time.",
    ],
  },
];

function CheckIcon() {
  return (
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
  );
}

export default function PreOperationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gridRef.current?.querySelectorAll(".pre-op-card");
      if (cards && cards.length) {
        gsap.set(cards, { opacity: 0, yPercent: 15 });
        gsap.to(cards, {
          opacity: 1,
          yPercent: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
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
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group) => (
            <div
              key={group.title}
              className="pre-op-card rounded-2xl border border-[#EBE3C8] p-7"
              style={{
                background:
                  "linear-gradient(180deg, #f6efd9 0%, rgba(255,255,255,1) 101.88%)",
              }}
            >
              <h3 className="text-[#8E6C36] font-Matangi-Bold uppercase tracking-wide text-lg mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-[#555555] font-Matangi-Regular text-[15px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

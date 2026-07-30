"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const groups = [
  {
    title: "Immediately After Surgery",
    items: [
      "You will be monitored in recovery before being cleared to go home or to your room.",
      "Some grogginess, soreness, and swelling near the incision is expected.",
      "Arrange for a responsible adult to drive you home and stay with you the first night.",
    ],
  },
  {
    title: "Wound Care",
    items: [
      "Keep the incision clean and dry as instructed by our team.",
      "Watch for increased redness, warmth, or drainage at the site.",
      "Attend your scheduled follow-up for suture or staple removal.",
    ],
  },
  {
    title: "Activity & Movement",
    items: [
      "Gradually increase activity as guided, avoiding heavy lifting or twisting.",
      "Short, frequent walks help circulation and support early recovery.",
      "Begin physical therapy only when cleared by Dr. Khaleel.",
    ],
  },
  {
    title: "When To Call Us",
    items: [
      "Fever, chills, or a rapidly worsening incision.",
      "Sudden or severe pain not controlled by prescribed medication.",
      "New numbness, weakness, or loss of bladder or bowel control.",
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

export default function PostOperationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gridRef.current?.querySelectorAll(".post-op-card");
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
              className="post-op-card rounded-2xl border border-[#EBE3C8] p-7"
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

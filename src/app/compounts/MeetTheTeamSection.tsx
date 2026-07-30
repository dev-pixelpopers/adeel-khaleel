"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import InnerPageBanner from "./InnerPageBanner";

gsap.registerPlugin(ScrollTrigger);

const credentials = [
  "Board Certified Orthopedic Spine Surgeon",
  "Fellowship-Trained in Minimally Invasive Spine Surgery",
  "Member, AAOS & North American Spine Society",
  "10+ Years Serving the Dallas/Fort Worth Area",
];

const teamMembers = [
  {
    name: "Sarah Whitfield, PA-C",
    role: "Physician Assistant",
    bio: "Supports surgical planning and post-operative recovery for every spine patient.",
    image: "/adeel-image.png",
  },
  {
    name: "Karen Ilford, NP",
    role: "Nurse Practitioner",
    bio: "Oversees pre-operative evaluations and ongoing non-surgical spine care.",
    image: "/adeel-image.png",
  },
  {
    name: "Maria Dosett",
    role: "Patient Care Coordinator",
    bio: "Guides patients through scheduling, insurance, and day-of-surgery logistics.",
    image: "/adeel-image.png",
  },
];

const affiliations = [
  { src: "/footer-logo (5).png", alt: "American Academy of Orthopaedic Surgeons" },
  { src: "/footer-logo (2).png", alt: "NASS" },
  { src: "/footer-logo (3).png", alt: "North American Spine Society" },
  { src: "/footer-logo (4).png", alt: "AAOS" },
];

export default function MeetTheTeamSection() {
  const pageRef = useRef<HTMLDivElement>(null);
  const spotlightImageRef = useRef<HTMLDivElement>(null);
  const spotlightTextRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(spotlightImageRef.current, { opacity: 0, xPercent: -8 });
      gsap.set(spotlightTextRef.current, { opacity: 0, xPercent: 8 });

      gsap.to(spotlightImageRef.current, {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: spotlightImageRef.current, start: "top 80%" },
      });
      gsap.to(spotlightTextRef.current, {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: spotlightTextRef.current, start: "top 80%" },
      });

      const cards = gridRef.current?.querySelectorAll(".team-card");
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
    { scope: pageRef }
  );

  return (
    <div ref={pageRef} className="w-full bg-white select-none">
      <InnerPageBanner
        eyebrow="Our Team"
        title="Meet The Team"
        description="A dedicated team of specialists working alongside Dr. Khaleel to deliver compassionate, expert spine and orthopedic care from consultation through recovery."
      />

      {/* Doctor spotlight */}
      <section className="w-full px-6 md:px-12 py-20">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div
            ref={spotlightImageRef}
            className="w-full lg:w-2/5 flex justify-center"
          >
            <div
              className="relative w-full max-w-[340px] aspect-[3/4] rounded-[16px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, #e9d9a6 0%, rgba(255,255,255,1) 101.88%)",
              }}
            >
              <img
                src="/adeel-image.png"
                alt="Dr. Muhammad Adeel Khaleel"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[95%] object-contain object-bottom"
              />
            </div>
          </div>

          <div ref={spotlightTextRef} className="w-full lg:w-3/5">
            <h2 className="text-[#545454] font-Adorage uppercase text-[30px] sm:text-[38px] leading-tight">
              Dr. Muhammad Adeel Khaleel
            </h2>
            <p className="mt-1 text-[#8E6C36] font-Matangi-Bold uppercase tracking-wide text-sm sm:text-base">
              Spine Surgery Specialist
            </p>

            <p className="mt-5 text-[#555555] font-Matangi-Regular text-base leading-relaxed">
              For over a decade, Dr. Khaleel has been a respected spine surgeon
              in the Dallas and Fort Worth areas, specializing in minimally
              invasive procedures and complex deformity corrections.
            </p>

            <ul className="mt-6 space-y-3">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-3">
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
                  <span className="text-[#555555] font-Matangi-Regular text-[15px] sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
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
          </div>
        </div>
      </section>

      {/* Supporting team grid */}
      <section className="w-full px-6 md:px-12 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <h3 className="text-[#545454] font-Adorage uppercase text-[26px] sm:text-[32px] text-center mb-10">
            Supporting Care Team
          </h3>

          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="team-card rounded-2xl border border-[#EBE3C8] overflow-hidden flex flex-col items-center text-center shadow-sm"
                style={{
                  background:
                    "linear-gradient(180deg, #f6efd9 0%, rgba(255,255,255,1) 101.88%)",
                }}
              >
                <div className="w-full h-72 sm:h-80 bg-white border-b border-[#DCD3B2] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-[#333] font-Matangi-Bold text-lg">
                    {member.name}
                  </h4>
                  <p className="text-[#8E6C36] font-Matangi-Bold text-sm uppercase tracking-wide mt-1">
                    {member.role}
                  </p>
                  <p className="mt-3 text-[#555555] font-Matangi-Regular text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

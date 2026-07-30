"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactCTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set([headingRef.current, textRef.current, buttonRef.current], {
        opacity: 0,
        yPercent: 15,
      });

      gsap.to([headingRef.current, textRef.current, buttonRef.current], {
        opacity: 1,
        yPercent: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 px-6 md:px-12 text-center flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat select-none overflow-hidden"
      style={{ backgroundImage: "url('/reclaimlife-bg.png')" }}
    >
      <h2
        ref={headingRef}
        className="text-white font-Adorage uppercase text-[32px] sm:text-[48px] md:text-[62px] font-normal leading-tight tracking-tight drop-shadow-[0_4px_0px_#00000066]"
      >
        Ready To Take The Next Step?
      </h2>

      <p
        ref={textRef}
        className="mt-5 max-w-xl text-white/90 font-Matangi-Medium text-base sm:text-lg leading-relaxed"
      >
        Reach out to schedule a consultation with Dr. Khaleel and start your
        path toward lasting relief.
      </p>

      <div ref={buttonRef} className="mt-8">
        <a href="/contact">
          <button className="px-8 py-3.5 rounded-full bg-[#8C6D3B] border-2 border-white/90 text-white font-Matangi-Bold text-base sm:text-lg tracking-wide shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105">
            Book Your Appointment
          </button>
        </a>
      </div>
    </section>
  );
}

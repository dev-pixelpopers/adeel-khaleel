"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface InnerPageBannerProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function InnerPageBanner({
  eyebrow,
  title,
  description,
}: InnerPageBannerProps) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const headerEl = document.querySelector(".header");
      if (headerEl) {
        gsap.set(headerEl, { yPercent: 0, opacity: 1 });
      }

      gsap.set(headingRef.current, { opacity: 0, yPercent: 20 });
      gsap.set(textRef.current, { opacity: 0, yPercent: 20 });

      gsap
        .timeline({ delay: 0.2 })
        .to(headingRef.current, {
          opacity: 1,
          yPercent: 0,
          duration: 0.9,
          ease: "power3.out",
        })
        .to(
          textRef.current,
          { opacity: 1, yPercent: 0, duration: 0.9, ease: "power3.out" },
          "-=0.6"
        );
    },
    { scope: bannerRef }
  );

  return (
    <section
      ref={bannerRef}
      className="relative w-full pt-44 pb-24 px-6 md:px-12 text-center flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden select-none"
      style={{ backgroundImage: "url('/banner-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/20" />

      <span className="relative text-[#E9D9A6] font-Matangi-Bold uppercase tracking-[0.3em] text-sm sm:text-base mb-3">
        {eyebrow}
      </span>
      <h1
        ref={headingRef}
        className="relative text-white font-Adorage uppercase text-[42px] sm:text-[60px] md:text-[86px] leading-[1] tracking-tight drop-shadow-[0_4px_0px_#00000066]"
      >
        {title}
      </h1>
      {description && (
        <p
          ref={textRef}
          className="relative mt-6 max-w-2xl text-white/90 font-Matangi-Regular text-base sm:text-lg leading-relaxed"
        >
          {description}
        </p>
      )}
    </section>
  );
}

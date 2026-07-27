"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const whiteFillRef = useRef<HTMLDivElement>(null);
  const yellowFillRef = useRef<HTMLDivElement>(null);
  const loadingTextRef = useRef<HTMLDivElement>(null);
  const [dotCount, setDotCount] = useState(1);

  // 1. Blinking dots logic (. -> .. -> ...)
  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 450);

    return () => clearInterval(dotInterval);
  }, []);

  // 2. GSAP Animations: 3 cycles where White fills bottom-to-top, then Yellow (#8E6C36) fills bottom-to-top
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });

      // Pulse opacity for the loading text indicator
      gsap.to(loadingTextRef.current, {
        opacity: 0.3,
        duration: 1.0,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 3 Repeat Cycles: White fills bottom-to-top, Yellow fills bottom-to-top (0 downward movement)
      for (let i = 0; i < 3; i++) {
        // Step 1: Set both layers clipped at bottom and visible
        tl.set(whiteFillRef.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          opacity: 1,
        });
        tl.set(yellowFillRef.current, {
          clipPath: "inset(100% 0% 0% 0%)",
          opacity: 1,
        });

        // Step 2: White logo fills UP from bottom to top
        tl.to(whiteFillRef.current, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.75,
          ease: "power2.out",
        });

        // Step 3: Yellow logo fills UP from bottom to top over white
        tl.to(yellowFillRef.current, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.75,
          ease: "power2.out",
        });

        // Step 4: Quick fade-out reset before next cycle (only for cycles 1 & 2)
        if (i < 2) {
          tl.to(
            [whiteFillRef.current, yellowFillRef.current],
            {
              opacity: 0,
              duration: 0.25,
              ease: "power1.inOut",
            },
            "+=0.15"
          );
        }
      }

      // Final scale pulse on completion
      tl.to(logoWrapperRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: "power1.out",
      }).to(logoWrapperRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power1.inOut",
      });

      // Fade out preloader overlay to seamlessly reveal VideoBanner
      tl.to(
        preloaderRef.current,
        {
          opacity: 0,
          pointerEvents: "none",
          duration: 1.0,
          ease: "power3.inOut",
        },
        "+=0.3"
      );
    }, preloaderRef);

    return () => ctx.revert();
  }, [onComplete]);

  const dots = ".".repeat(dotCount);

  const maskStyle: React.CSSProperties = {
    WebkitMaskImage: "url('/logo-stripped.png')",
    maskImage: "url('/logo-stripped.png')",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
  };

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center select-none overflow-hidden"
      style={{ backgroundColor: "#545454" }}
    >
      {/* Background subtle radial glow */}
      <div className="absolute inset-0 bg-radial from-[#8E6C36]/30 via-transparent to-black/60 pointer-events-none" />

      {/* Center Logo Container */}
      <div
        ref={logoWrapperRef}
        className="relative w-[300px] sm:w-[500px] md:w-[620px] h-[130px] sm:h-[300px] flex items-center justify-center z-10"
      >
        {/* Base Logo Outline (Faint White) */}
        <div
          className="absolute inset-0 w-full h-full opacity-15"
          style={{
            ...maskStyle,
            backgroundColor: "#ffffff",
          }}
        />

        {/* 1. White Fill Layer (Fills bottom-to-top) */}
        <div
          ref={whiteFillRef}
          className="absolute inset-0 w-full h-full"
          style={{
            ...maskStyle,
            backgroundColor: "#ffffff",
          }}
        />

        {/* 2. Yellow Fill Layer (Fills bottom-to-top over white) */}
        <div
          ref={yellowFillRef}
          className="absolute inset-0 w-full h-full"
          style={{
            ...maskStyle,
            backgroundColor: "#C0A870",
          }}
        />
      </div>

      {/* Bottom Left Loading Indicator */}
      <div
        ref={loadingTextRef}
        className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 z-10 flex items-center gap-1 font-Adorage uppercase text-white text-2xl sm:text-3xl md:text-4xl tracking-widest drop-shadow-md"
      >
        <span>LOADING</span>
        <span className="w-12 text-left font-mono">{dots}</span>
      </div>
    </div>
  );
}

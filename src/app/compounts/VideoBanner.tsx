"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function VideoBanner() {
    const containerRef = useRef<HTMLElement>(null);
    const videoWrapperRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const spanTextRef = useRef<HTMLSpanElement>(null);
    const arrowRef = useRef<SVGSVGElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

            // 1. Video wrapper & Overlay expand both horizontally and vertically from center (0% -> 100%)
            tl.fromTo(
                videoWrapperRef.current,
                {
                    clipPath: "inset(50% 50% 50% 50%)",
                    opacity: 0,
                },
                {
                    clipPath: "inset(0% 0% 0% 0%)",
                    opacity: 1,
                    duration: 2.5,
                }
            );

            // Inner video subtle zoom effect during reveal (slower cinematic feel)
            const videoEl = videoWrapperRef.current?.querySelector("video");
            if (videoEl) {
                tl.fromTo(
                    videoEl,
                    { scale: 1.35 },
                    { scale: 1, duration: 2.8, ease: "power2.out" },
                    0
                );
            }

            // Overlay smooth opacity fade-in synchronized with video reveal
            if (overlayRef.current) {
                tl.fromTo(
                    overlayRef.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 2.5, ease: "power2.out" },
                    0
                );
            }

            // 2. First: Dedicated GSAP ClipPath reveal for the scroll text span
            if (spanTextRef.current) {
                tl.fromTo(
                    spanTextRef.current,
                    {
                        clipPath: "inset(0% 100% 0% 0%)",
                        opacity: 0,
                    },
                    {
                        clipPath: "inset(0% 0% 0% 0%)",
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out",
                    },
                    "-=0.8"
                );
            }

            // 3. Second: Arrow upwards transition from bottom
            if (arrowRef.current) {
                tl.fromTo(
                    arrowRef.current,
                    {
                        y: 40,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.3"
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const scrollToNext = () => {
        if (containerRef.current) {
            const nextSection = containerRef.current.nextElementSibling;
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
            } else {
                window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <section
            ref={containerRef}
            onClick={scrollToNext}
            className="relative w-full h-dvh overflow-hidden cursor-pointer select-none group bg-black"
        >
            {/* GSAP Animated Video Container - Expands from center with gradient overlay */}
            <div ref={videoWrapperRef} className="w-full h-full relative overflow-hidden flex items-center justify-center">
                <video
                    src="/videos/banner-video.mp4"
                    className="w-full h-full object-cover origin-center"
                    muted
                    autoPlay
                    playsInline
                    onEnded={scrollToNext}
                />
                {/* Gradient overlay inside video wrapper so it expands & animates seamlessly with the video */}
                <div
                    ref={overlayRef}
                    className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none z-10"
                />
            </div>

            {/* Centered Scroll Prompt Text & Downward Arrow with GSAP Animations */}
            <div
                ref={textRef}
                className="absolute bottom-8 md:bottom-12 w-full z-20 flex flex-col items-center gap-3 text-white transition-transform duration-300 group-hover:scale-105 font-Adorage"
            >
                <span
                    ref={spanTextRef}
                    className="inline-block text-[30px] tracking-[0.2em] uppercase text-white/90 drop-shadow-md text-center px-4"
                >
                    Click to Scroll Below
                </span>
                <svg
                    ref={arrowRef}
                    className="w-6 h-6 md:w-7 md:h-7 text-white animate-bounce drop-shadow-md"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                </svg>
            </div>
        </section>
    );
}






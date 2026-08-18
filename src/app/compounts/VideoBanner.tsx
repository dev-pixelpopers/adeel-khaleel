"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function VideoBanner() {
    const containerRef = useRef<HTMLElement>(null);
    const videoWrapperRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const spanTextRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<SVGSVGElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    const [assetsLoaded, setAssetsLoaded] = useState(false);

    // Wait for all images, videos and fonts
    useEffect(() => {
        const loadAssets = async () => {
            try {
                // Images
                const images = Array.from(document.images);

                await Promise.all(
                    images.map(
                        (img) =>
                            new Promise<void>((resolve, reject) => {
                                if (img.complete && img.naturalWidth > 0) {
                                    resolve();
                                    return;
                                }

                                img.onload = () => resolve();
                                img.onerror = () => reject();
                            })
                    )
                );

                // Videos
                const videos = Array.from(
                    document.querySelectorAll("video")
                );

                await Promise.all(
                    videos.map(
                        (video) =>
                            new Promise<void>((resolve, reject) => {
                                if (video.readyState >= 3) {
                                    resolve();
                                    return;
                                }

                                video.oncanplaythrough = () => resolve();
                                video.onerror = () => reject();

                                video.load();
                            })
                    )
                );

                // Fonts
                if (document.fonts) {
                    await document.fonts.ready;
                }

                // Everything loaded
                setAssetsLoaded(true);
            } catch (error) {
                console.error("Asset loading failed:", error);
            }
        };

        loadAssets();
    }, []);

    // gsap animation
    useGSAP(
        () => {
            const tl = gsap.timeline({
                defaults: { ease: "power3.inOut" },
            });


            // 1. Video wrapper & Overlay expand both horizontally and vertically from center
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

            // Inner video subtle zoom effect
            const videoEl = videoWrapperRef.current?.querySelector("video");

            if (videoEl) {
                tl.fromTo(
                    videoEl,
                    { scale: 1.35 },
                    {
                        scale: 1,
                        duration: 2.8,
                        ease: "power2.out",
                    },
                    0
                );
            }

            // Overlay smooth opacity fade-in
            if (overlayRef.current) {
                tl.fromTo(
                    overlayRef.current,
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 2.5,
                        ease: "power2.out",
                    },
                    0
                );
            }

            // Text reveal
            // if (textRef.current) {
            //     tl.fromTo(
            //         textRef.current,
            //         {
            //             clipPath: "inset(0% 100% 0% 0%)",
            //             opacity: 0,
            //         },
            //         {
            //             clipPath: "inset(0% 0% 0% 0%)",
            //             opacity: 1,
            //             duration: 1.2,
            //             ease: "power3.out",
            //         },

            //     );
            // }

            // Arrow animation
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


        }, {
        scope: containerRef,
    });

    useGSAP(() => {
        if (!assetsLoaded || !textRef.current) return;

        gsap.delayedCall(2, () => {
            gsap.fromTo(
                spanTextRef.current,
                {
                    clipPath: "inset(0% 100% 0% 0%)",
                },
                {
                    clipPath: "inset(0% 0% 0% 0%)",
                    opacity: 1,
                    duration: 2,
                    ease: "power3.out",
                }
            );
        });
    },
        {
            scope: containerRef,
            dependencies: [assetsLoaded],
            revertOnUpdate: true,
        }
    );


    const scrollToNext = () => {
        // Don't allow skip before all assets are loaded
        if (!assetsLoaded) return;

        if (containerRef.current) {
            const nextSection = containerRef.current.nextElementSibling;

            if (nextSection) {
                nextSection.scrollIntoView({
                    behavior: "smooth",
                });
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
            className={`relative w-full h-dvh overflow-hidden select-none group bg-black ${assetsLoaded ? "cursor-pointer" : "cursor-default"
                }`}
        >
            {/* GSAP Animated Video Container */}
            <div
                ref={videoWrapperRef}
                className="w-full h-full relative overflow-hidden flex items-center justify-center"
                style={{
                    clipPath: "inset(50% 50% 50% 50%)",
                    opacity: 0,
                }}
            >
                <video
                    src="/videos/banner-video.mp4"
                    className="w-full h-full object-cover origin-center"
                    muted
                    autoPlay
                    playsInline
                    preload="auto"
                    onEnded={scrollToNext}
                />

                {/* Gradient overlay */}
                <div
                    ref={overlayRef}
                    className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none z-10"
                />
            </div>

            {/* Bottom Prompt */}
            <div
                ref={textRef}
                className="absolute bottom-8 md:bottom-12 w-full z-20 flex flex-col items-center gap-3 text-white transition-transform duration-300 group-hover:scale-105 font-Adorage"
            >
                <span
                    className="inline-block text-[30px] tracking-[0.2em] uppercase text-white/90 drop-shadow-md text-center px-4 opacity-0"
                    ref={spanTextRef}
                >
                    Click To Scroll Below
                </span>
                <svg
                    ref={arrowRef}
                    className="w-6 h-6 md:w-7 md:h-7 text-white animate-bounce drop-shadow-md opacity-0"
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
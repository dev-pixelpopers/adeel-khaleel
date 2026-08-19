"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function AdvancedSpineSection() {

    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {

        gsap.set(headingRef.current, {
            x: 100,
            opacity: 0
        }
        );
        gsap.set(textRef.current, {
            x: -100,
            opacity: 0
        }
        );

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "bottom 65%",
                end: "bottom 40%",
                toggleActions: "play none none reverse",
            }
        });

        tl.to(headingRef.current, {
            x: 0,
            opacity: 1,
            duration: 1,
        }).to(textRef.current, {
            x: 0,
            opacity: 1,
            duration: 1,
        }, "<")

    });



    return (
        <section ref={sectionRef} className="relative top-0 z-10 w-full bg-white text-center advanced-spine-section">
            <div className="mx-auto flex flex-col items-center justify-center overflow-x-hidden py-28 px-8 md:px-12 lg:px-20">
                <div ref={headingRef} className="flex flex-col items-center justify-center text-[#545454] font-Adorage uppercase tracking-tight advanced-spine-heading"
                    style={{
                        opacity: 0
                    }}
                >
                    <h2 className="text-[250px] font-normal leading-[0.85]">
                        ADVANCED
                    </h2>
                    <h3 className="text-[120px] font-normal leading-[90px]">
                        SPINE SOLUTIONS
                    </h3>
                </div>
                <p ref={textRef} className="w-[89%] mt-8 md:mt-10 text-[35px] text-[#555555] font-Matangi-Bold text-base font-normal leading-[65px] advanced-spine-paragraph"
                    style={{
                        opacity: 0
                    }}
                >
                    Dr. Khaleel is dedicated to providing top-tier care for those facing challenges with their spine and musculoskeletal system. Whether you require operative or nonoperative treatment, you can count on our expertise to guide you toward recovery.
                </p>
            </div>
        </section>
    );
}

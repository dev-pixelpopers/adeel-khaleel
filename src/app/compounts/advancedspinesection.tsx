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
        <section ref={sectionRef} className="relative top-0 z-10 w-full bg-white text-center advanced-spine-section ">
            <div className="mx-auto flex flex-col items-center justify-center overflow-x-hidden py-10 lg:py-28 sm:px-8 md:px-10 lg:px-20">
                <div ref={headingRef} className="flex flex-col items-center justify-center text-[#545454] font-Adorage uppercase tracking-tight advanced-spine-heading"
                    style={{
                        opacity: 0
                    }}
                >
                    <h2 className="text-[70px] sm:text-[90px] md:text-[120px] lg:text-[140px] xl:text-[200px] 2xl:text-[250px] font-normal leading-[0.85] lg:text-6xl">
                        ADVANCED
                    </h2>
                    <h3 className="text-[40px] sm:text-[56px] md:text-[66px] lg:text-[80px] xl:text-[110px] 2xl:text-[120px] font-normal lg:leading-[90px]">
                        SPINE SOLUTIONS
                    </h3>
                </div>
                <p ref={textRef} className="  max-w-[350px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[850px] xl:max-w-[89%] mt-8 md:mt-10 text-xl sm:text-[28px] md:text-[30px] xl:text-[35px] text-[#555555] font-Matangi-Bold font-normal leading-[34px] md:leading-[44px] xl:leading-[65px] advanced-spine-paragraph"
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

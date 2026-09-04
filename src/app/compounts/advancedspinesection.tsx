"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function AdvancedSpineSection() {

    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        const isMobile = window.innerWidth < 768;
        gsap.set(sectionRef.current,{overflowY: "hidden"})
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
                start: isMobile ? "bottom 30%" : "+=300",
                end: isMobile ? "bottom bottom" : "bottom 40%",
                toggleActions: "play none none reverse",
                // markers: true
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
        
        tl.to(sectionRef.current,{overflowY: "auto"})

    });

    return (
        <section  className="sticky top-0 z-0 h-screen w-full flex items-center justify-center overflow-hidden">
            <div ref={sectionRef} className="relative top-0 z-10 w-full text-center advanced-spine-section">
                <div className="mx-auto flex flex-col items-center justify-center overflow-x-hidden pt-10 lg:pt-28 sm:px-8 md:px-10 lg:px-20">
                    <div ref={headingRef} className="flex flex-col items-center justify-center text-[#545454] font-Adorage uppercase tracking-tight advanced-spine-heading"
                        style={{
                            opacity: 0
                        }}
                    >
                        <h2 className="text-[55px] 3xs:text-[60px] xs:text-[70px] min-[500px]:text-[80px] sm:text-[90px] md:text-[120px] min-[900px]:text-[130px] lg:text-[140px] xl:text-[200px] 2xl:text-[210px] 3xl:text-[250px] font-normal leading-[0.85] lg:text-6xl">
                            ADVANCED
                        </h2>
                        <h3 className="text-[30px] 3xs:text-[35px] xs:text-[40px] min-[500px]:text-[50px] sm:text-[56px] md:text-[66px] min-[900px]:text-[74px] lg:text-[80px] xl:text-[110px] 3xl:text-[120px] font-normal lg:leading-[90px]">
                            SPINE SOLUTIONS
                        </h3>
                    </div>
                    <p ref={textRef} className=" max-w-[280px] 3xs:max-w-[350px] xs:max-w-[350px] min-[500px]:max-w-[480px] sm:max-w-[600px] md:max-w-[700px] min-[900px]:max-w-[800px] lg:max-w-[850px] xl:max-w-[89%] mt-8 md:mt-10 text-base 2xs:text-lg xs:text-xl sm:text-[28px] md:text-[30px] xl:text-[35px] 2xl:text-[30px] 3xl:text-[35px] text-[#555555] font-Matangi-Bold font-normal leading-[34px] md:leading-[44px] xl:leading-[65px] 2xl:leading-[50px] 3xl:leading-[65px] advanced-spine-paragraph"
                        style={{
                            opacity: 0
                        }}
                    >
                        Dr. Khaleel is dedicated to providing top-tier care for those facing challenges with their spine and musculoskeletal system. Whether you require operative or nonoperative treatment, you can count on our expertise to guide you toward recovery.
                    </p>
                </div>
            </div>
        </section>
    );
}

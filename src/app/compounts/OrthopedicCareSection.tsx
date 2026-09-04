"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const conditionsData = [
    {
        id: 1,
        title: "NECK & BACK PAIN",
        description:
            "Alleviate chronic or acute neck and back pain with our personalized treatment plans designed to address the root causes.",
        image: "/NECK.png",
    },
    {
        id: 2,
        title: "SCOLIOSIS",
        description:
            "Comprehensive evaluation and advanced corrective treatments for scoliosis in pediatric and adult patients.",
        image: "/SCOLIOSIS.png",
    },
    {
        id: 3,
        title: "SPORTS INJURY",
        description:
            "Specialized spine care for athletes to ensure safe, effective, and speedy return to athletic performance.",
        image: "/SPORTS.png",
    },
    {
        id: 4,
        title: "SPINE TRAUMA",
        description:
            "Immediate and long-term surgical solutions for traumatic spinal injuries and complex spine fractures.",
        image: "/SPINE.png",
    },
];

export default function OrthopedicCareSection() {
    const [activeId, setActiveId] = useState<number | null>(null);

    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useGSAP(
        () => {
            gsap.set(headingRef.current, {
                xPercent: 20,
                opacity: 0,
            });

            gsap.set(textRef.current, {
                xPercent: -20,
                opacity: 0,
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 65%",
                    end: "+=350",
                    scrub: 1,
                },
            });

            tl.to(headingRef.current, {
                xPercent: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
            }).to(
                textRef.current,
                {
                    xPercent: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                },
                "<"
            );
        },
        { scope: sectionRef }
    );

    return (
        <section ref={sectionRef} className="w-full bg-white py-20 min-[900px]:py-30 px-6 md:px-12 select-none overflow-x-hidden">

            <div className="w-full text-center mb-30 sm:mb-55 flex flex-col items-center justify-center">
                <div ref={headingRef} className="flex flex-col items-center justify-center text-[#545454] font-Adorage uppercase tracking-tight">
                    <h2 className="text-2xl 2xs:text-[28px] xs:text-[32px] min-[500px]:text-[42px] sm:text-[45px] md:text-[60px] min-[900px]:text-[77px] lg:text-[82px] font-normal leading-[0.95]">
                        ORTHOPEDIC CARE FOR
                    </h2>
                    <h3 className="text-2xl 2xs:text-[28px] xs:text-[32px] min-[500px]:text-[42px] sm:text-[45px] md:text-[60px] min-[900px]:text-[77px] lg:text-[82px] font-normal xs:leading-[1] mt-2">
                        NECK AND SPINE CONDITIONS
                    </h3>
                </div>

                <p ref={textRef} className="max-w-[280px] 2xs:max-w-[320px] xs:max-w-[350px] min-[500px]:max-w-[480px] sm:max-w-[500px] md:max-w-[600px] min-[900px]:max-w-[770px] lg:max-w-[800px] xl:max-w-[1000px] mt-8 md:mt-7 text-sm 2xs:text-base xs:text-lg sm:text-[20px] md:text-[25px] text-[#555555] font-Matangi-Bold font-normal leading-relaxed md:leading-[45px]">
                    At Mohammed Khaleel, MD, we specialize in comprehensive care for a range of conditions affecting the neck and spine. Our expert team is dedicated to providing effective orthopedic treatments tailored to your needs. Explore our services below.
                </p>
            </div>


            <div className="mx-auto flex flex-col lg:flex-row gap-8 h-full rounded-[8px] lg:h-[720px] w-full justify-center min-[500px]:px-10 sm:px-0">
                {conditionsData.map((card) => {
                    const isOpen = activeId === card.id;

                    return (
                        <div
                            key={card.id}
                            onClick={() => setActiveId(isOpen ? null : card.id)}
                            className={`relative cursor-pointer overflow-hidden h-full transition-all duration-500 lg:duration-900 ease-in-out flex flex-col justify-end rounded-lg lg:rounded-none  ${isOpen
                                ? "h-[35vh] 3xs:h-[42vh] 2xs:h-[50vh] md:h-[70vh] lg:h-full lg:w-[680px] w-full "
                                : "h-[7vh] 3xs:h-[12vh] 2xs:h-[18vh] md:h-[30vh] lg:h-full lg:w-[260px] w-full lg:hover:opacity-95"
                                }`}
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="absolute inset-0 w-full h-full bg-amber-50 object-cover lg:object-left  rounded-lg lg:rounded-none"
                            />
                            <div className="absolute inset-0 lg:bg-gradient-to-r from-white/95 via-white/0 to-transparent pointer-events-none" />
                            <div
                                className={`relative z-10 text-left transition-all duration-400  ${isOpen ? " translate-y-[0%] pt-[20px] lg:pt-0" : "translate-y-[75%] 2xs:translate-y-[70%] md:translate-y-[60%] lg:translate-y-[0%] pt-[4px] lg:pt-0"} lg:transition-all lg:duration-900 ease-in-out lg:pt-[30px] max-h-[200px] md:pl-[32px] lg:px-[10px]`}
                            >
                                <div className={`absolute z-0 top-0 left-0 w-full h-full bg-white/50 backdrop-blur-md duration-900 ${isOpen ? "lg:delay-600 lg:translate-y-[0%]" : "lg:translate-y-[100%]"}`}>

                                </div>
                                <h4
                                    className={`relative font-Adorage uppercase text-[#8E6C36] whitespace-nowrap lg:transition-transform lg:duration-900 lg:ease-in origin-left pb-2 lg:pb-0 ml-[10px] xs:ml-[20px] sm:ml-[32px] ${isOpen
                                        ? "text-xl 2xs:text-2xl xs:text-[28px] md:text-[57px] leading-tight lg:rotate-0"
                                        : "text-xl 2xs:text-2xl xs:text-[28px] md:text-[57px] lg:-rotate-90"
                                        }`}
                                >
                                    {card.title}
                                </h4>
                                <div className={`relative overflow-hidden w-full pl-[10px] xs:pl-[20px] sm:pl-[32px] mb-[10px] lg:mb-[30px] ${isOpen ? "lg:duration-900 lg:delay-900 lg:opacity-100" : "lg:duration-300 lg:opacity-0"}`} >
                                    <p className="text-gray-600 font-Matangi-Regular text-sm xs:text-base md:text-[19px] leading-relaxed max-w-2xl">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </section>
    );
}
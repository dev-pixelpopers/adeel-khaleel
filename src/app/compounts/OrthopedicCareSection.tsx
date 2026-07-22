"use client";
import React, { useState } from "react";

// Conditions Data
const conditionsData = [
    {
        id: 1,
        title: "NECK & BACK PAIN",
        description:
            "Alleviate chronic or acute neck and back pain with our personalized treatment plans designed to address the root causes.",
        image: "/NECK.png", // Image path place karein
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
    // By default, last card (Spine Trauma) open rakha hai as per design reference
    const [activeId, setActiveId] = useState<number>(4);

    return (
        <section className="w-full bg-white pb-30 pt-30 px-6 md:px-12 select-none">

            {/* TOP TEXT SECTION */}
            <div className="w-full text-center mb-55 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center text-[#545454] font-Adorage uppercase tracking-tight">
                    <h2 className="text-[36px] sm:text-[55px] md:text-[60px] lg:text-[82px] font-normal leading-[0.95]">
                        ORTHOPEDIC CARE FOR
                    </h2>
                    <h3 className="text-[36px] sm:text-[55px] md:text-[60px] lg:text-[82px] font-normal leading-[1] mt-2">
                        NECK AND SPINE CONDITIONS
                    </h3>
                </div>

                <p className="w-[85%] md:w-[73%] mt-8 md:mt-7 text-[18px] sm:text-[20px] md:text-[25px] text-[#555555] font-Matangi-Bold font-normal leading-relaxed md:leading-[45px]">
                    At Mohammed Khaleel, MD, we specialize in comprehensive care for a range of conditions affecting the neck and spine. Our expert team is dedicated to providing effective orthopedic treatments tailored to your needs. Explore our services below.
                </p>
            </div>

            {/* EXPANDING ACCORDION CARDS SECTION */}
            <div className="mx-auto flex flex-col lg:flex-row gap-8 h-[550px] rounded-[8px] lg:h-[720px] w-full justify-center">
                {conditionsData.map((card) => {
                    const isOpen = activeId === card.id;

                    return (
                        <div
                            key={card.id}
                            onClick={() => setActiveId(card.id)}
                            className={`relative cursor-pointer overflow-hidden transition-all duration-700 ease-in-out flex flex-col justify-end ${isOpen
                                    ? "lg:w-[680px] w-full" /* OPEN CARD CUSTOM WIDTH */
                                    : "lg:w-[260px] w-full hover:opacity-95" /* CLOSED CARD CUSTOM WIDTH */
                                }`}
                        >
                            {/* BACKGROUND IMAGE */}
                            <img
                                src={card.image}
                                alt={card.title}
                                className="absolute inset-0 w-full h-full object-cover object-left"
                            />

                            {/* GRADIENT OVERLAY (SOFT WHITE FADE AT BOTTOM/SIDE) */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/0 to-transparent pointer-events-none" />

                            {/* CLOSED STATE: VERTICAL TEXT */}
                            {!isOpen && (
                                <div className="absolute inset-y-0 left-[-70px] flex items-center justify-center pointer-events-none z-10 w-full">
                                    <h4 className="text-[28px] md:text-[57px] font-Adorage uppercase text-[#8E6C36] whitespace-nowrap -rotate-90 transform origin-center">
                                        {card.title}
                                    </h4>
                                </div>
                            )}

                            {/* OPEN STATE: BOTTOM CONTENT PANEL */}
                            {isOpen && (
                                <div className="relative z-10 p-6 md:p-5 text-left bg-white/50 backdrop-blur-md pt-16 transition-opacity duration-500 ease-in-out">
                                    <h4 className="text-3xl md:text-[57px] font-Adorage uppercase text-[#8E6C36] tracking-wide leading-tight mb-3">
                                        {card.title}
                                    </h4>
                                    <p className="text-gray-600 font-Matangi-Regular text-base md:text-[19px] leading-relaxed max-w-2xl">
                                        {card.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

        </section>
    );
}
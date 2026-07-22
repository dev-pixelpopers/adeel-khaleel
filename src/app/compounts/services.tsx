"use client";
import React from "react";

// 6 Cards ka Data Array
const servicesData = [
  {
    id: "01",
    title: "EXPERTISE IN SPINE AND MUSCULOSKELETAL TREATMENTS",
    description: "10 years of comprehensive spine and musculoskeletal care.",
    image: "/service-1.jpg",
  },
//   {
//     id: "02",
//     title: "MINIMALLY INVASIVE SURGERY",
//     description: "Advanced techniques for faster recovery and minimal scarring.",
//     image: "/service-2.png",
//   },
//   {
//     id: "03",
//     title: "COMPLEX DEFORMITY CORRECTIONS",
//     description: "Tailored surgical solutions for severe spinal conditions.",
//     image: "/service-3.png",
//   },
//   {
//     id: "04",
//     title: "NON-OPERATIVE SPINE CARE",
//     description: "Targeted physical therapy and interventional pain management.",
//     image: "/service-4.png",
//   },
//   {
//     id: "05",
//     title: "PATIENT-CENTERED CONSULTATION",
//     description: "Detailed evaluations ensuring personalized treatment plans.",
//     image: "/service-5.png",
//   },
//   {
//     id: "06",
//     title: "STATE-OF-THE-ART RECOVERY",
//     description: "Post-surgery care designed for long-term health and mobility.",
//     image: "/service-6.png",
//   },
];

export default function Services() {
  return (
    <section className="w-full bg-white pb-0 pt-30 select-none">
      <div className="flex flex-col gap-24 mx-auto">
        {servicesData.map((item, index) => (
          <div
            key={index}
            className="relative w-full min-h-[480px] bg-[#F9F8F6] rounded-xl flex flex-col lg:flex-row items-center justify-between pl-[140px] py-[0px] pr-[140px]"
          >
            {/* LEFT TEXT CONTENT */}
            <div className="w-full lg:w-1/2 pb-[100px] mt-[-81px] flex flex-col justify-center pr-0 lg:pr-8 z-10 space-y-4">
              {/* Big Card Number */}
              <span className="text-[200px] font-Adorage text-[#54545420] leading-none">
                {item.id}
              </span>

              {/* Title */}
              <h3 className="text-[60px] font-Adorage uppercase text-[#545454] leading-tight">
                {item.title}
              </h3>

              {/* Subtitle / Description */}
              <p className="text-[35px] text-[#545454] font-Matangi-Regular leading-relaxed pt-2">
                {item.description}
              </p>
            </div>

            {/* RIGHT TILTED IMAGE CONTAINER */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-8 lg:mt-0 relative z-10">
              <div className="absolute w-full max-w-[702px] h-[780px] transform rotate-7">
                <img
                  src={item.image}
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>

    </div>
        ))}
      </div>
    </section>
  );
}
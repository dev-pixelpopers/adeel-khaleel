"use client";
import React from "react";

export default function ReclaimLifeSection() {
  return (
    <section
      className="relative w-full min-h-[600px] md:min-h-[700px] bg-cover bg-center bg-no-repeat flex items-center justify-center py-20 px-6 md:px-12 text-center select-none overflow-hidden"
      style={{ backgroundImage: "url('/reclaimlife-bg.png')" }} // Aapki downloaded background image yahan aye gi
    >
      <div className="mx-auto flex flex-col items-center justify-center pt-[150px] z-10">

        <h2 className="text-white font-Adorage uppercase text-[42px] sm:text-[60px] md:text-[80px] lg:text-[130px] font-normal leading-[1.05] drop-shadow-[0_4px_0px_#00000066]">
          RECLAIM YOUR LIFE WITH <br className="hidden sm:block" /> ADVANCED SPINE SURGERY
        </h2>

        <p className="mt-6 md:mt-8 text-white/95 font-Matangi-Medium text-lg sm:text-2xl md:text-[40px] font-normal leading-relaxed">
          Providing Patients With Compassionate, Specialized <br className="hidden md:block" />
          Treatments for Optimal Recovery & Long-term Health
        </p>

        <div className="mt-10 md:mt-18">
          <a
            href="#appointment"
            target=""
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3.5 md:px-15 md:py-5 rounded-full bg-[#8C6D3B] border-2 border-white/90 text-white font-sans text-base md:text-[25px] font-medium tracking-wide shadow-lg cursor-pointer">
              Book Your Appointment
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}
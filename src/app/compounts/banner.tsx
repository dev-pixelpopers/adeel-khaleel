"use client";
import React, { useState } from "react";

export default function Banner() {
    return (
   <section 
      className="relative w-full min-h-[100vh] bg-cover bg-center bg-no-repeat overflow-hidden flex items-end justify-center pl-[120px] pr-[120px]"
      style={{ backgroundImage: "url('/banner-bg.png')" }} // Aapki background image yahan lagani hy
    >
      
      <div className="relative w-full min-h-[720px] flex items-center justify-center">
        
        <div className="absolute inset-0 flex flex-col justify-center z-0 pt-[120px]">
          <h1 className="text-white text-[300px] font-Adorage font-normal leading-[180px] text-center lg:text-left drop-shadow-[0_4px_0px_#00000066]">
            MUHAMMAD
          </h1>
          

          <div className="flex flex-col text-white text-[157px] font-Matangi-Light leading-[0.95] mt-4 pl-1 drop-shadow-[0_4px_0px_#00000066]">
            <span>ADEEL</span>
            <span>KHALEEL</span>
          </div>
        </div>

        <div className="relative z-10 flex justify-center items-end h-full pt-16">
          <img
            src="/adeel-image.png" // Aapki doctor wali image yahan aye gi
            alt="Dr. Muhammad Adeel Khaleel"
            className="h-[780px] object-contain object-bottom mix-blend-screen drop-shadow-[0_20px_35px_rgba(0,0,0,0.4)]"
          />
        </div>

        <div className="absolute right-[50px] bottom-50 z-20 max-w-xs md:max-w-sm lg:max-w-md text-white space-y-4 pr-2">
          <h2 className="text-[29px] font-Matangi-Bold tracking-wider uppercase">
            SPINE SURGERY SPECIALIST <br /> IN DALLAS
          </h2>
          
          <p className="text-[16px] font-Matangi-Regular text-white/90 leading-relaxed tracking-wide">
            For over a decade, Mohammed Khaleel, MD has been a respected spine surgeon in the Dallas and Fort Worth areas, specializing in minimally invasive procedures and complex deformity corrections.
          </p>
        </div>

      </div>

    </section>
        
    );
}
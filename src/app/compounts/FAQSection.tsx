"use client";
import React, { useState } from "react";

// FAQ Data
const faqData = [
  {
    question: "When is the Date of Surgery?",
    answer:
      "Your surgery date will be scheduled during your pre-operative consultation based on facility availability and medical necessity.",
  },
  {
    question: "What Time is My Surgery?",
    answer:
      "Exact surgery timing is confirmed 24 to 48 hours prior to the procedure date by the hospital or surgical center.",
  },
  {
    question: "Where Will I Have Surgery?",
    answer:
      "Surgeries are performed at our accredited partner hospital facilities and surgical centers in the Dallas/Fort Worth area.",
  },
  {
    question: "When is the Preoperative Testing Appointment?",
    answer:
      "Preoperative testing is typically scheduled 1 to 2 weeks before your surgery date to ensure all health clearances are in order.",
  },
  {
    question: "Will I Need to See My PCP or Cardiologist?",
    answer:
      "Depending on your medical history, medical clearance from your Primary Care Physician or Cardiologist may be required before proceeding.",
  },
  {
    question: "What Medications Can I Take?",
    answer:
      "You will receive a detailed instruction sheet listing which medications to continue and which (such as blood thinners) to stop prior to surgery.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Border Gradient Style Definition
  const gradientBorderStyle = {
    borderImage: "linear-gradient(90deg, #8F7A3500 10%, #FFE9A1 50%, #8F7A3500 100%) 1",
  };

  return (
    <section
      className="relative w-full min-h-[700px] bg-cover bg-center bg-no-repeat py-18 px-10 md:px-16 lg:px-35 select-none flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/reclaimlife-bg.png')" }} // Background image path
    >
      <div className="w-full mx-auto flex flex-col items-center">
        
        {/* SECTION TITLE */}
        <h2 className="text-white font-Adorage uppercase text-[36px] sm:text-[50px] md:text-[82px] font-normal tracking-wide text-center leading-tight mb-12 drop-shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
          HAVE QUESTIONS, WE HAVE ANSWERS
        </h2>

        {/* ACCORDION CONTAINER */}
        <div className="w-full space-y-5">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="w-full transition-colors duration-200 border-b"
                style={gradientBorderStyle}
              >
                {/* QUESTION BUTTON */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-white font-Matangi-Medium text-xl sm:text-2xl md:text-[36px] font-normal tracking-wide pr-4">
                    {faq.question}
                  </span>

                  {/* INLINE SVG CHEVRON ICON */}
                        <svg
                            className={`w-10 h-10 text-white transition-transform duration-300 ease-in-out shrink-0 ${isOpen ? "rotate-180" : "rotate-0"
                                }`}
                            width="12" height="12" viewBox="0 0 36 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.39258 1.43604L17.8926 17.436L34.3926 1.43604" stroke="white" stroke-width="4" />
                        </svg>

                </button>

                {/* ANSWER CONTENT */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-6"
                      : "grid-rows-[0fr] opacity-0 pb-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-white/90 font-Matangi-Regular text-base sm:text-lg md:text-[28px] font-light leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
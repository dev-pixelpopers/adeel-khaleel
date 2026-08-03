"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const infoItems = [
  {
    label: "Phone",
    value: "(469) 935 7775",
    href: "tel:+14699357775",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M3 5.5C3 4.7 3.7 4 4.5 4H7l2 4.5-1.8 1.4a11 11 0 0 0 5 5l1.4-1.9L18 15v2.5c0 .8-.7 1.5-1.5 1.5C10.5 19 5 13.5 5 7.5"
      />
    ),
  },
  {
    label: "Address",
    value: "11000 Frisco Street, Suite 200, Frisco, Texas 75033",
    href: "https://maps.app.goo.gl/TEEWTt6GZkBRXZWv5",
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"
        />
        <circle cx="12" cy="9.5" r="2.3" strokeWidth={1.6} />
      </>
    ),
  },
  {
    label: "Office Hours",
    value: "Monday - Friday: 8:00 AM - 5:00 PM",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" strokeWidth={1.6} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 7.5V12l3 2" />
      </>
    ),
  },
];

export default function ContactCTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(infoRef.current, { opacity: 0, xPercent: -8 });
      gsap.set(mapRef.current, { opacity: 0, xPercent: 8 });

      gsap.to(infoRef.current, {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
      gsap.to(mapRef.current, {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 md:py-28 px-6 md:px-12 select-none"
      style={{
        background: "linear-gradient(180deg, #FAF6EB 0%, #FFFFFF 100%)",
      }}
    >
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
        {/* CTA + contact info */}
        <div
          ref={infoRef}
          className="w-full lg:w-2/5 flex flex-col justify-center"
        >
          <span className="text-[#8E6C36] font-Matangi-Bold uppercase tracking-[0.3em] text-sm">
            Get In Touch
          </span>
          <h2 className="mt-4 text-[#545454] font-Adorage uppercase text-[32px] sm:text-[42px] md:text-[48px] leading-[1.05] tracking-tight">
            Ready To Take The Next Step?
          </h2>
          <p className="mt-5 text-[#555555] font-Matangi-Regular text-lg sm:text-xl leading-relaxed">
            Reach out to schedule a consultation with Dr. Khaleel and start
            your path toward lasting relief.
          </p>

          <div className="mt-8">
            <a href="/contact">
              <button className="px-8 py-3.5 rounded-full bg-[#8E6C36] text-white font-Matangi-Bold text-base sm:text-lg tracking-wide shadow-md cursor-pointer transition-transform duration-300 hover:scale-105">
                Book Your Appointment
              </button>
            </a>
          </div>

          <div className="mt-10 space-y-6 border-t border-[#EBE3C8] pt-8">
            {infoItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-full bg-[#8E6C36]/10 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8E6C36"
                    className="w-5 h-5"
                  >
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <p className="text-[#8E6C36] font-Matangi-Bold uppercase tracking-wide text-xs">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-1 block text-[#333] font-Matangi-Regular text-lg hover:text-[#8E6C36] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-[#333] font-Matangi-Regular text-lg">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div
          ref={mapRef}
          className="w-full lg:w-3/5 min-h-[360px] lg:min-h-0 rounded-2xl overflow-hidden border border-[#EBE3C8] shadow-[0_20px_45px_-15px_rgba(142,108,54,0.25)]"
        >
          <iframe
            title="Mohammed Khaleel, MD location"
            src="https://www.google.com/maps?q=Mohammed+Khaleel+MD+11000+Frisco+Street+Suite+200+Frisco+Texas+75033&output=embed"
            className="w-full h-full min-h-[360px] lg:min-h-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

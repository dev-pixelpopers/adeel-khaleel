"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(infoRef.current, { opacity: 0, xPercent: -8 });
      gsap.set(formRef.current, { opacity: 0, xPercent: 8 });

      gsap.to(infoRef.current, {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });
      gsap.to(formRef.current, {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
      });
    },
    { scope: sectionRef }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-20 px-6 md:px-12 select-none"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Contact info */}
        <div ref={infoRef} className="w-full lg:w-2/5">
          <h2 className="text-[#545454] font-Adorage uppercase text-[30px] sm:text-[38px] leading-tight">
            Get In Touch
          </h2>
          <p className="mt-4 text-[#555555] font-Matangi-Regular text-base leading-relaxed">
            Have a question or ready to schedule a consultation? Reach out and
            our team will get back to you promptly.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-[#8E6C36] font-Matangi-Bold uppercase tracking-wide text-sm">
                Phone
              </p>
              <p className="mt-1 text-[#333] font-Matangi-Regular text-lg">
                (469) 935 7775
              </p>
            </div>
            <div>
              <p className="text-[#8E6C36] font-Matangi-Bold uppercase tracking-wide text-sm">
                Address
              </p>
              <p className="mt-1 text-[#333] font-Matangi-Regular text-lg">
                11000 Frisco Street, Suite 200
                <br />
                Frisco, Texas 75033
              </p>
            </div>
            <div>
              <p className="text-[#8E6C36] font-Matangi-Bold uppercase tracking-wide text-sm">
                Office Hours
              </p>
              <p className="mt-1 text-[#333] font-Matangi-Regular text-lg">
                Monday - Friday: 8:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Appointment form */}
        <div
          ref={formRef}
          className="w-full lg:w-3/5 rounded-2xl border border-[#EBE3C8] p-6 sm:p-10"
          style={{
            background:
              "linear-gradient(180deg, #f6efd9 0%, rgba(255,255,255,1) 101.88%)",
          }}
        >
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-10">
              <h3 className="text-[#545454] font-Adorage uppercase text-2xl sm:text-3xl">
                Thank You
              </h3>
              <p className="mt-3 text-[#555555] font-Matangi-Regular text-base max-w-sm">
                Your request has been received. Our team will contact you
                shortly to confirm your appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#333] font-Matangi-Bold text-sm mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white border border-[#DCD3B2] rounded-lg px-4 py-2.5 text-[#333] font-Matangi-Regular outline-none focus:border-[#8E6C36]"
                  />
                </div>
                <div>
                  <label className="block text-[#333] font-Matangi-Bold text-sm mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-white border border-[#DCD3B2] rounded-lg px-4 py-2.5 text-[#333] font-Matangi-Regular outline-none focus:border-[#8E6C36]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#333] font-Matangi-Bold text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-white border border-[#DCD3B2] rounded-lg px-4 py-2.5 text-[#333] font-Matangi-Regular outline-none focus:border-[#8E6C36]"
                />
              </div>

              <div>
                <label className="block text-[#333] font-Matangi-Bold text-sm mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-white border border-[#DCD3B2] rounded-lg px-4 py-2.5 text-[#333] font-Matangi-Regular outline-none focus:border-[#8E6C36] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3 rounded-full bg-[#8E6C36] text-white font-Matangi-Bold text-base tracking-wide shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                Book Your Appointment
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

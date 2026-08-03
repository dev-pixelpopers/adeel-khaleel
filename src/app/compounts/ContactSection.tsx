"use client";
import React, { useRef, useState } from "react";
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
    label: "Business Hours",
    value: "Monday - Friday: 8:00 AM - 5:00 PM",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" strokeWidth={1.6} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 7.5V12l3 2" />
      </>
    ),
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/spinedrkhaleel/",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth={1.6} />
        <circle cx="12" cy="12" r="4" strokeWidth={1.6} />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "TikTok",
    href: "http://spinedrkhaleel/",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.6}
        d="M14 3v10.2a3.3 3.3 0 1 1-3-3.28M14 3a5.2 5.2 0 0 0 5 4.6V11a8.4 8.4 0 0 1-5-1.7"
      />
    ),
  },
];

const inputClass =
  "w-full bg-white border border-[#DCD3B2] rounded-lg px-4 py-2.5 text-[#333] font-Matangi-Regular text-base outline-none focus:border-[#8E6C36]";
const labelClass = "block text-[#333] font-Matangi-Bold text-sm mb-2";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(infoRef.current, { opacity: 0, xPercent: -8 });
      gsap.set(formRef.current, { opacity: 0, xPercent: 8 });
      gsap.set(mapRef.current, { opacity: 0, y: 30 });

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
      gsap.to(mapRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: mapRef.current, start: "top 85%" },
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
          <p className="mt-4 text-[#555555] font-Matangi-Regular text-lg leading-relaxed">
            Have a question or ready to schedule a consultation? Reach out and
            our team will get back to you promptly.
          </p>

          <div className="mt-8 space-y-6">
            {infoItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-11 h-11 shrink-0 rounded-full bg-[#8E6C36]/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#8E6C36" className="w-5 h-5">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <p className="text-[#8E6C36] font-Matangi-Bold uppercase tracking-wide text-sm">
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

          <div className="mt-10 border-t border-[#EBE3C8] pt-8">
            <p className="text-[#8E6C36] font-Matangi-Bold uppercase tracking-wide text-sm mb-4">
              Follow Us
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-11 h-11 rounded-full bg-[#8E6C36]/10 flex items-center justify-center text-[#8E6C36] transition-colors duration-300 hover:bg-[#8E6C36] hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                    {item.icon}
                  </svg>
                </a>
              ))}
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
              <p className="mt-3 text-[#555555] font-Matangi-Regular text-lg max-w-sm">
                Your request has been received. Our team will contact you
                shortly to confirm your appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input type="text" required className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input type="text" required className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Home Phone Number</label>
                  <input type="tel" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Mobile Number</label>
                  <input type="tel" required className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Business</label>
                  <input type="text" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email Address</label>
                  <input type="email" required className={inputClass} />
                </div>
              </div>

              <div>
                <label className={labelClass}>Preferred Contact Method</label>
                <select required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="email">Email</option>
                  <option value="call">Call</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Reason for Contact</label>
                <textarea
                  rows={4}
                  required
                  className={`${inputClass} resize-none`}
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

      {/* Map */}
      <div
        ref={mapRef}
        className="max-w-[1200px] mx-auto mt-12 w-full min-h-[360px] rounded-2xl overflow-hidden border border-[#EBE3C8] shadow-[0_20px_45px_-15px_rgba(142,108,54,0.25)]"
      >
        <iframe
          title="Mohammed Khaleel, MD location"
          src="https://www.google.com/maps?q=Mohammed+Khaleel+MD+11000+Frisco+Street+Suite+200+Frisco+Texas+75033&output=embed"
          className="w-full h-full min-h-[360px]"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

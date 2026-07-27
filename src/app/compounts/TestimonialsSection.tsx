"use client";
import React, { useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan, mi id tristique finibus, risus dui pretium ante, sed finibus tellus elit eu metus. Vestibulum quis magna at turpis suscipit sodales. Praesent quis neque urna.",
    rating: 5,
    name: "Harold J. Souza",
    role: "Spine Patient",
    avatar: "/review-1.png",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan, mi id tristique finibus, risus dui pretium ante, sed finibus tellus elit eu metus. Vestibulum quis magna at turpis suscipit sodales. Praesent quis neque urna.",
    rating: 5,
    name: "Joel B. Sizemore",
    role: "Neck Pain Patient",
    avatar: "/review-1.png",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan, mi id tristique finibus, risus dui pretium ante, sed finibus tellus elit eu metus. Vestibulum quis magna at turpis suscipit sodales. Praesent quis neque urna.",
    rating: 5,
    name: "Linda M. Wachter",
    role: "Neck Pain Patient",
    avatar: "/review-1.png",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan, mi id tristique finibus, risus dui pretium ante, sed finibus tellus elit eu metus. Vestibulum quis magna at turpis suscipit sodales. Praesent quis neque urna.",
    rating: 5,
    name: "David K. Miller",
    role: "Scoliosis Patient",
    avatar: "/review-1.png",
  },
  {
    id: 5,
    text: "Dr. Khaleel transformed my quality of life completely. The spinal surgery was a success and I was back on my feet much faster than I ever anticipated.",
    rating: 5,
    name: "Sarah L. Jenkins",
    role: "Spine Surgery Patient",
    avatar: "/review-1.png",
  },
  {
    id: 6,
    text: "The care and attention I received throughout my treatment were exceptional. Highly recommend Dr. Khaleel for any complex spine conditions.",
    rating: 5,
    name: "Robert M. Vance",
    role: "Back Pain Patient",
    avatar: "/review-1.png",
  },
  {
    id: 7,
    text: "Outstanding orthopedic specialist! The procedure relieved my chronic neck pain and allowed me to return to active daily living painless.",
    rating: 5,
    name: "Emily R. Carter",
    role: "Orthopedic Patient",
    avatar: "/review-1.png",
  },
  {
    id: 8,
    text: "As an athlete, finding the right spine specialist was crucial. Dr. Khaleel got me back to sports safely and effectively.",
    rating: 5,
    name: "Michael T. Bennett",
    role: "Sports Injury Patient",
    avatar: "/review-1.png",
  },
  {
    id: 9,
    text: "Compassionate, skilled, and professional. My deformity correction surgery exceeded all my expectations.",
    rating: 5,
    name: "Jessica P. Adams",
    role: "Deformity Patient",
    avatar: "/review-1.png",
  },
  {
    id: 10,
    text: "Prompt trauma care saved my mobility. I cannot thank Dr. Khaleel and the team enough for their incredible dedication.",
    rating: 5,
    name: "William E. Taylor",
    role: "Spine Trauma Patient",
    avatar: "/review-1.png",
  },
];

export default function TestimonialsSection() {
  const outerContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsTrackRef = useRef<HTMLDivElement>(null);

  // Compute dynamic positions: keep first 4 fixed, space subsequent cards by >double card height (800px)
  const cardStyles = useMemo(() => {
    const initialPositions: React.CSSProperties[] = [
      { top: "52px", left: "40.5%" },
      { top: "370px", right: "5%" },
      { top: "490px", left: "1%" },
      { top: "750px", left: "35%" },
    ];

    const xVariations: React.CSSProperties[] = [
      { right: "8%" },
      { left: "4%" },
      { left: "45%" },
      { left: "18%" },
      { right: "5%" },
      { left: "10%" },
    ];

    return testimonials.map((_, i) => {
      if (i < 4) return initialPositions[i];

      // Double testimonial size vertical spacing: 800px gap per subsequent card
      const topValue = 1550 + (i - 4) * 800;
      return {
        top: `${topValue}px`,
        ...xVariations[(i - 4) % xVariations.length],
      };
    });
  }, []);

  useGSAP(
    () => {
      if (!outerContainerRef.current || !cardsTrackRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outerContainerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      // Scrub cards stream smoothly UP across the large vertical distance
      tl.to(cardsTrackRef.current, {
        y: "-5000px",
        ease: "none",
      });
    },
    { scope: outerContainerRef }
  );

  return (
    <div ref={outerContainerRef} className="relative w-full h-[650vh]">
      <section
        ref={sectionRef}
        className="sticky top-0 w-full h-dvh bg-white py-20 overflow-hidden select-none"
      >
        <div className="max-w-[1600px] mx-auto h-full relative flex flex-col justify-center items-center">
          {/* Background Heading */}
          <div className="w-full text-center flex flex-col items-center justify-center text-[#4A4A4A] font-Adorage uppercase z-0 pointer-events-none">
            <h2 className="text-[120px] sm:text-[180px] md:text-[230px] lg:text-[270px] leading-[300px] font-normal">
              WHAT THEY ARE SAYING
            </h2>
          </div>

          {/* Dynamically Positioned Testimonial Cards Stream */}
          <div ref={cardsTrackRef} className="hidden lg:block absolute inset-0 z-10">
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className="absolute w-[320px] xl:w-[350px] h-[350px] p-6 rounded-2xl shadow-sm border border-[#EBE3C8]"
                style={{
                  ...cardStyles[index],
                  background:
                    "linear-gradient(180deg, #e9d9a6 0%, rgba(255, 255, 255) 101.88%)",
                }}
              >
                <p className="text-[#404040] font-Matangi-Regular text-[12px] leading-relaxed mb-[120px]">
                  {item.text}
                </p>

                <div className="flex gap-1 mb-3 text-[#0F282F]">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    className="w-10 h-10 rounded-full object-cover border border-[#DCD3B2]"
                  />
                  <div>
                    <h4 className="text-[#000] font-Matangi-Bold text-[12px] leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[#000] font-Matangi-Regular text-[10px]">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}





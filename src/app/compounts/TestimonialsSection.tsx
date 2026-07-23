"use client";
import React from "react";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan, mi id tristique finibus, risus dui pretium ante, sed finibus tellus elit eu metus. Vestibulum quis magna at turpis suscipit sodales. Praesent quis neque urna. Nulla laoreet purus nulla, a imperdiet tortor rutrum ac. Nullam vulputate nibh",
    rating: 5,
    name: "Harold J. Souza",
    role: "Spine Patient",
    avatar: "/review-1.png", 
    positionClass: "top-[52px] left-[40.5%]",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan, mi id tristique finibus, risus dui pretium ante, sed finibus tellus elit eu metus. Vestibulum quis magna at turpis suscipit sodales. Praesent quis neque urna. Nulla laoreet purus nulla, a imperdiet tortor rutrum ac. Nullam vulputate nibh",
    rating: 5,
    name: "Joel B. Sizemore",
    role: "Neck Pain Patient",
    avatar: "/review-1.png",
    positionClass: "top-[370px] right-[5%]",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan, mi id tristique finibus, risus dui pretium ante, sed finibus tellus elit eu metus. Vestibulum quis magna at turpis suscipit sodales. Praesent quis neque urna. Nulla laoreet purus nulla, a imperdiet tortor rutrum ac. Nullam vulputate nibh",
    rating: 5,
    name: "Linda M. Wachter",
    role: "Neck Pain Patient",
    avatar: "/review-1.png",
    positionClass: "top-[490px] left-[1%]",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan, mi id tristique finibus, risus dui pretium ante, sed finibus tellus elit eu metus. Vestibulum quis magna at turpis suscipit sodales. Praesent quis neque urna. Nulla laoreet purus nulla, a imperdiet tortor rutrum ac. Nullam vulputate nibh",
    rating: 5,
    name: "David K. Miller",
    role: "Scoliosis Patient",
    avatar: "/review-1.png",
    positionClass: "top-[750px] left-[35%]",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-20 pb-[250px] overflow-hidden relative select-none">
      <div className="max-w-[1600px] mx-auto min-h-[100vh] relative flex flex-col justify-center items-center">
        

        <div className="w-full text-center flex flex-col items-center justify-center text-[#4A4A4A] font-Adorage uppercase z-0 pointer-events-none">
          <h2 className="text-[120px] sm:text-[180px] md:text-[230px] lg:text-[270px] leading-[300px] font-normal">
            WHAT THEY  ARE SAYING
          </h2>
        </div>

        <div className="hidden lg:block absolute inset-0 z-10 ">
          {testimonials.map((item) => (
        <div
  key={item.id}
  className={`absolute w-[320px] xl:w-[350px] h-[350px] p-6 rounded-2xl shadow-sm border border-[#EBE3C8] transition-transform ${item.positionClass}`}
  style={{
    background: "linear-gradient(180deg, #e9d9a6 0%, rgba(255, 255, 255) 101.88%)"
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
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>

  
              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
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

        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6 z-10 mt-10 w-full px-4">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#F7F2DF] p-6 rounded-2xl shadow-sm border border-[#EBE3C8]"
            >
              <p className="text-[#555555] font-Matangi-Regular text-[14px] leading-relaxed mb-6">
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
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#DCD3B2]"
                />
                <div>
                  <h4 className="text-[#1A1A1A] font-Adorage font-bold text-[15px] leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[#777777] font-Matangi-Regular text-[12px]">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
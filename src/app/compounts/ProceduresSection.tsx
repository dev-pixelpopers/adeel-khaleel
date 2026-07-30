"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const surgicalProcedures = [
  {
    title: "Spinal Fusion",
    description:
      "Permanently joins two or more vertebrae to eliminate painful motion and stabilize the spine, often recommended for instability, severe degeneration, or deformity.",
    image: "/service-1.png",
  },
  {
    title: "Laminectomy & Decompression",
    description:
      "Removes bone or tissue pressing on the spinal cord or nerves to relieve pain, numbness, and weakness caused by spinal stenosis.",
    image: "/SPINE.png",
  },
  {
    title: "Microdiscectomy",
    description:
      "A minimally invasive procedure to remove herniated disc material compressing a spinal nerve, easing leg or arm pain with a short recovery.",
    image: "/service-2.png",
  },
  {
    title: "Artificial Disc Replacement",
    description:
      "Replaces a damaged disc with an artificial one to relieve pain while preserving natural spinal motion, an alternative to fusion for select patients.",
    image: "/service-3.png",
  },
  {
    title: "Scoliosis Correction",
    description:
      "Surgical straightening and stabilization of the spine for pediatric and adult spinal deformities, restoring alignment and balance.",
    image: "/SCOLIOSIS.png",
  },
  {
    title: "Revision Spine Surgery",
    description:
      "Corrects or improves the outcome of a previous spine surgery that did not fully resolve symptoms, tailored to each patient's history.",
    image: "/service-4.png",
  },
];

const nonSurgicalProcedures = [
  {
    title: "Epidural Steroid Injections",
    description:
      "Delivers anti-inflammatory medication directly to irritated spinal nerves to reduce pain and inflammation without surgery.",
    image: "/NECK.png",
  },
  {
    title: "Kyphoplasty & Vertebroplasty",
    description:
      "Minimally invasive treatments that stabilize painful vertebral compression fractures and restore vertebral height.",
    image: "/SPINE.png",
  },
  {
    title: "Physical Therapy & Rehabilitation",
    description:
      "Targeted therapy programs to restore strength, mobility, and function after an injury, procedure, or ongoing spine condition.",
    image: "/SPORTS.png",
  },
  {
    title: "Pain Management Consultation",
    description:
      "Comprehensive evaluation of non-operative options for chronic neck and back pain, guiding you toward the most effective treatment path.",
    image: "/service-1.png",
  },
];

interface Procedure {
  title: string;
  description: string;
  image: string;
}

function ProcedureRow({ item, index }: { item: Procedure; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const reversed = index % 2 === 1;

  useGSAP(
    () => {
      gsap.set(imageRef.current, { opacity: 0, xPercent: reversed ? 8 : -8 });
      gsap.set(textRef.current, { opacity: 0, xPercent: reversed ? -8 : 8 });

      gsap.to([imageRef.current, textRef.current], {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: rowRef.current, start: "top 80%" },
      });
    },
    { scope: rowRef }
  );

  return (
    <div
      ref={rowRef}
      className={`flex flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-8 lg:gap-14 mb-14 last:mb-0`}
    >
      <div ref={imageRef} className="w-full lg:w-2/5 flex justify-center">
        <div
          className="relative w-full max-w-[380px] aspect-[4/3] rounded-2xl overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #e9d9a6 0%, rgba(255,255,255,1) 101.88%)",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      <div ref={textRef} className="w-full lg:w-3/5">
        <h4 className="text-[#545454] font-Adorage uppercase text-[24px] sm:text-[28px] leading-snug">
          {item.title}
        </h4>
        <p className="mt-4 text-[#555555] font-Matangi-Regular text-base leading-relaxed max-w-xl">
          {item.description}
        </p>
      </div>
    </div>
  );
}

function ProcedureGroup({
  title,
  items,
}: {
  title: string;
  items: Procedure[];
}) {
  return (
    <div className="mb-20 last:mb-0">
      <h3 className="text-[#8E6C36] font-Adorage uppercase text-[32px] sm:text-[44px] md:text-[50px] mb-12 text-center">
        {title}
      </h3>
      {items.map((item, index) => (
        <ProcedureRow key={item.title} item={item} index={index} />
      ))}
    </div>
  );
}

export default function ProceduresSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 select-none">
      <div className="max-w-[1100px] mx-auto">
        <ProcedureGroup title="Surgical Procedures" items={surgicalProcedures} />
        <ProcedureGroup
          title="Non-Surgical & Minimally Invasive Treatments"
          items={nonSurgicalProcedures}
        />
      </div>
    </section>
  );
}

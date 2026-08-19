"use client"

import Image from "next/image";
import Preloader from "./compounts/Preloader";
import Banner from "./compounts/banner";
import AdvancedSpineSection from "./compounts/advancedspinesection";
import ServicesAndReclaimSection from "./compounts/ServicesAndReclaimSection";
import FAQSection from "./compounts/FAQSection";
import OrthopedicCareSection from "./compounts/OrthopedicCareSection";
import TestimonialsSection from "./compounts/TestimonialsSection";
import Footer from "./compounts/Footer";
import Header from "./compounts/Header";
import VideoBanner from "./compounts/VideoBanner";
import Services from "./compounts/services";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const bannerStartRef = useRef<HTMLDivElement>(null);
  const [videoPassed, setVideoPassed] = useState(false);

  useEffect(() => {
    if (!videoPassed || !bannerStartRef.current) return;

    const bannerTop = bannerStartRef.current.offsetTop;

    const preventGoingBack = () => {
      if (window.scrollY < bannerTop) {
        window.scrollTo({
          top: bannerTop,
          behavior: "instant",
        });
      }
    };

    window.addEventListener("scroll", preventGoingBack, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", preventGoingBack);
    };
  }, [videoPassed]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <Preloader /> */}
      <Header />
      {!videoPassed && (
        <VideoBanner
          onPassed={() => {
            setVideoPassed(true);
          }}
        />
      )}

      <div className="relative">

        <div ref={bannerStartRef} className="relative">
          <Banner />
        </div>
        {/* <AdvancedSpineSection /> */}
      </div>
      <Services />
      {/* <ServicesAndReclaimSection /> */}
      <OrthopedicCareSection />
      <FAQSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}

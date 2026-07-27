import Image from "next/image";
import Preloader from "./compounts/Preloader";
import Banner from "./compounts/banner";
import AdvancedSpineSection from "./compounts/advancedspinesection";
import Services from "./compounts/services";
import ReclaimLifeSection from "./compounts/ReclaimLifeSection";
import FAQSection from "./compounts/FAQSection";
import OrthopedicCareSection from "./compounts/OrthopedicCareSection";
import TestimonialsSection from "./compounts/TestimonialsSection";
import Footer from "./compounts/Footer";
import Header from "./compounts/Header";
import VideoBanner from "./compounts/VideoBanner";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <VideoBanner />
      <div className="relative">
        <Banner />
        {/* <AdvancedSpineSection /> */}
      </div>
      <Services />
      {/* <ReclaimLifeSection /> */}
      <OrthopedicCareSection />
      <FAQSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}

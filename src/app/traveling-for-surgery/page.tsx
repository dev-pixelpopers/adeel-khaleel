import Header from "../compounts/Header";
import Footer from "../compounts/Footer";
import InnerPageBanner from "../compounts/InnerPageBanner";
import TravelingForSurgerySection from "../compounts/TravelingForSurgerySection";
import ContactCTASection from "../compounts/ContactCTASection";

export default function TravelingForSurgeryPage() {
  return (
    <>
      <Header />
      <InnerPageBanner
        eyebrow="Coming From Out Of Town"
        title="Traveling For Surgery"
        description="What to know when planning your trip to Frisco, Texas for a consultation or procedure."
      />
      <TravelingForSurgerySection />
      <ContactCTASection />
      <Footer />
    </>
  );
}

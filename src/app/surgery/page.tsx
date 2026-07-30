import Header from "../compounts/Header";
import Footer from "../compounts/Footer";
import InnerPageBanner from "../compounts/InnerPageBanner";
import AdvancedSpineSection from "../compounts/advancedspinesection";
import SurgicalApproachSection from "../compounts/SurgicalApproachSection";
import SurgicalProcessSection from "../compounts/SurgicalProcessSection";
import SurgeryTrustSection from "../compounts/SurgeryTrustSection";
import ContactCTASection from "../compounts/ContactCTASection";

export default function SurgeryPage() {
  return (
    <>
      <Header />
      <InnerPageBanner
        eyebrow="Surgical Care"
        title="Surgery"
        description="Precision surgical care for complex spine conditions, delivered with a focus on minimally invasive technique and long-term recovery."
      />
      <AdvancedSpineSection />
      <SurgicalApproachSection />
      <SurgicalProcessSection />
      <SurgeryTrustSection />
      <ContactCTASection />
      <Footer />
    </>
  );
}

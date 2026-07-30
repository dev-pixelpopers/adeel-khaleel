import Header from "../compounts/Header";
import Footer from "../compounts/Footer";
import InnerPageBanner from "../compounts/InnerPageBanner";
import PreOperationSection from "../compounts/PreOperationSection";
import ContactCTASection from "../compounts/ContactCTASection";

export default function PreOperationPage() {
  return (
    <>
      <Header />
      <InnerPageBanner
        eyebrow="Getting Ready"
        title="Pre Operation"
        description="Everything you need to know and prepare in the days leading up to your surgery."
      />
      <PreOperationSection />
      <ContactCTASection />
      <Footer />
    </>
  );
}

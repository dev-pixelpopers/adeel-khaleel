import Header from "../compounts/Header";
import Footer from "../compounts/Footer";
import InnerPageBanner from "../compounts/InnerPageBanner";
import OurProcessSection from "../compounts/OurProcessSection";
import ContactCTASection from "../compounts/ContactCTASection";

export default function OurProcessPage() {
  return (
    <>
      <Header />
      <InnerPageBanner
        eyebrow="From Start To Recovery"
        title="Our Process"
        description="A clear, step-by-step look at what to expect from your first consultation through long-term recovery."
      />
      <OurProcessSection />
      <ContactCTASection />
      <Footer />
    </>
  );
}

import Header from "../compounts/Header";
import Footer from "../compounts/Footer";
import InnerPageBanner from "../compounts/InnerPageBanner";
import FAQSection from "../compounts/FAQSection";
import ContactCTASection from "../compounts/ContactCTASection";

export default function FAQPage() {
  return (
    <>
      <Header />
      <InnerPageBanner
        eyebrow="Support"
        title="FAQ's"
        description="Answers to the questions patients most often ask ahead of their spine surgery and recovery journey."
      />
      <FAQSection variant="light" />
      <ContactCTASection />
      <Footer />
    </>
  );
}

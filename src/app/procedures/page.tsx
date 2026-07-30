import Header from "../compounts/Header";
import Footer from "../compounts/Footer";
import InnerPageBanner from "../compounts/InnerPageBanner";
import ProceduresSection from "../compounts/ProceduresSection";
import ContactCTASection from "../compounts/ContactCTASection";

export default function ProceduresPage() {
  return (
    <>
      <Header />
      <InnerPageBanner
        eyebrow="How We Treat"
        title="Procedures"
        description="A closer look at the surgical and non-surgical procedures Dr. Khaleel offers to treat spine and musculoskeletal conditions."
      />
      <ProceduresSection />
      <ContactCTASection />
      <Footer />
    </>
  );
}

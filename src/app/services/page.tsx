import Header from "../compounts/Header";
import Footer from "../compounts/Footer";
import InnerPageBanner from "../compounts/InnerPageBanner";
import ServicesConditionsSection from "../compounts/ServicesConditionsSection";
import ContactCTASection from "../compounts/ContactCTASection";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <InnerPageBanner
        eyebrow="What We Offer"
        title="Our Services"
        description="From minimally invasive procedures to complex deformity corrections, explore the full range of spine and orthopedic care we provide."
      />
      <ServicesConditionsSection />
      <ContactCTASection />
      <Footer />
    </>
  );
}

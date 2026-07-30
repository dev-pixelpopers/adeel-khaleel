import Header from "../compounts/Header";
import Footer from "../compounts/Footer";
import InnerPageBanner from "../compounts/InnerPageBanner";
import ContactSection from "../compounts/ContactSection";

export default function ContactPage() {
  return (
    <>
      <Header />
      <InnerPageBanner
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Schedule a consultation or reach out with any questions about your spine and orthopedic care."
      />
      <ContactSection />
      <Footer />
    </>
  );
}

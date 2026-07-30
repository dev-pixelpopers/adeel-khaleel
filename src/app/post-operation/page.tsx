import Header from "../compounts/Header";
import Footer from "../compounts/Footer";
import InnerPageBanner from "../compounts/InnerPageBanner";
import PostOperationSection from "../compounts/PostOperationSection";
import ContactCTASection from "../compounts/ContactCTASection";

export default function PostOperationPage() {
  return (
    <>
      <Header />
      <InnerPageBanner
        eyebrow="On The Road To Recovery"
        title="Post Operation"
        description="Guidance for a safe, comfortable recovery in the days and weeks following your surgery."
      />
      <PostOperationSection />
      <ContactCTASection />
      <Footer />
    </>
  );
}

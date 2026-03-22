import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import HeroSection from "@/components/home/HeroSection";
import CredibilitySection from "@/components/home/CredibilitySection";
import ServicesSection from "@/components/home/ServicesSection";
import MethodologySection from "@/components/home/MethodologySection";
import TrainingSection from "@/components/home/TrainingSection";
import EnvironmentSection from "@/components/home/EnvironmentSection";
import DifferentialsSection from "@/components/home/DifferentialsSection";
import SocialProofSection from "@/components/home/SocialProofSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTASection from "@/components/home/FinalCTASection";

export default function Index() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CredibilitySection />
        <ServicesSection />
        <MethodologySection />
        <TrainingSection />
        <EnvironmentSection />
        <DifferentialsSection />
        <SocialProofSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

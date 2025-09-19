import HeroSection from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";
import LifestyleSection from "@/components/LifestyleSection";
import TrustSection from "@/components/TrustSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <StepsSection />
      <LifestyleSection />
      <TrustSection />
      <FinalCTA />
    </div>
  );
};

export default Index;

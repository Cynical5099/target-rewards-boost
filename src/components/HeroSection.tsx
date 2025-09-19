import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const handleCTAClick = () => {
    window.open("https://uplevelrewarded.com/aff_c?offer_id=250&aff_id=21664&source=tt", "_blank");
  };

  return (
    <section className="bg-gradient-subtle px-4 py-12 text-center">
      <div className="mx-auto max-w-md">
        <h1 className="mb-4 text-4xl font-bold leading-tight text-foreground md:text-5xl">
          Earn Up to{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            $750
          </span>{" "}
          in Target Rewards
        </h1>
        
        <p className="mb-8 text-lg text-muted-foreground">
          Quick steps → bigger rewards.
        </p>
        
        <Button 
          variant="hero" 
          size="xl" 
          onClick={handleCTAClick}
          className="w-full max-w-xs"
        >
          👉 Continue <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
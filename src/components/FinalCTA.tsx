import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const handleCTAClick = () => {
    window.open("https://uplevelrewarded.com/aff_c?offer_id=250&aff_id=21664&source=tt", "_blank");
  };

  return (
    <section className="bg-gradient-hero px-4 py-16">
      <div className="mx-auto max-w-md text-center">
        <h2 className="mb-4 text-2xl font-bold text-primary-foreground">
          Ready to Start Earning?
        </h2>
        
        <p className="mb-8 text-primary-foreground/90">
          Join thousands who are already stacking their Target rewards!
        </p>
        
        <Button 
          variant="cta" 
          size="xl"
          onClick={handleCTAClick}
          className="w-full max-w-xs bg-white text-primary hover:bg-white/90"
        >
          👉 Start Now <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        
        <p className="mt-4 text-sm text-primary-foreground/80">
          Start now → stack your rewards!
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
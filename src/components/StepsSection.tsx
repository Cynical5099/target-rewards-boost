import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Target, Gift } from "lucide-react";

const StepsSection = () => {
  const handleStepClick = () => {
    window.open("https://uplevelrewarded.com/aff_c?offer_id=250&aff_id=21664&source=tt", "_blank");
  };

  const steps = [
    {
      number: "1",
      icon: <UserPlus className="h-8 w-8 text-primary" />,
      title: "Enter Your Details",
      subtitle: "Start in seconds — just a few basics.",
    },
    {
      number: "2",
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Complete Quick Steps",
      subtitle: "Simple tasks = stacked rewards.",
      note: "The more steps you complete, the higher your reward.",
      clickable: true,
    },
    {
      number: "3",
      icon: <Gift className="h-8 w-8 text-primary" />,
      title: "Access Your Rewards",
      subtitle: "Shop Target with rewards in your pocket.",
      linkText: "Claim your rewards →",
      clickable: true,
    },
  ];

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-md">
        <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
          🛒 3 Simple Steps
        </h2>
        
        <div className="space-y-4">
          {steps.map((step) => (
            <Card 
              key={step.number} 
              className={`shadow-card transition-smooth ${
                step.clickable ? "cursor-pointer hover:shadow-lg hover:scale-[1.02]" : ""
              }`}
              onClick={step.clickable ? handleStepClick : undefined}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-primary font-bold">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center space-x-3">
                      {step.icon}
                      <h3 className="font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.subtitle}</p>
                    {step.note && (
                      <p className="mt-2 text-xs text-muted-foreground italic">
                        {step.note}
                      </p>
                    )}
                    {step.linkText && (
                      <p className="mt-2 text-sm text-primary font-medium">
                        {step.linkText}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
import { Shield, Smartphone, Zap } from "lucide-react";

const TrustSection = () => {
  const handleLinkClick = () => {
    window.open("https://uplevelrewarded.com/aff_c?offer_id=250&aff_id=21664&source=tt", "_blank");
  };

  const trustItems = [
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      text: "Secure & Private",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      text: "Mobile-Friendly Process",
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      text: "Fast Rewards",
    },
  ];

  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-md">
        <h2 className="mb-6 text-center text-xl font-bold text-foreground">
          🔒 Why Choose Us?
        </h2>
        
        <div className="space-y-4">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent">
                {item.icon}
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-primary">✅</span>
                <span className="font-medium text-foreground">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 rounded-lg bg-muted p-4">
          <p className="text-center text-sm text-muted-foreground">
            This offer is independent and not endorsed by Target.
          </p>
          <p className="mt-2 text-center text-sm">
            <button
              onClick={handleLinkClick}
              className="text-primary underline-offset-2 hover:underline"
            >
              Complete steps → unlock bigger rewards
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
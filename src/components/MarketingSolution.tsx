import { Button } from "@/components/ui/button";

const MarketingSolution = () => {
  return (
    <section className="py-20 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Exceed your Marketing Goals with our All-in-one Marketing Solution
            </h2>
            <Button 
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-semibold"
            >
              Get Started
            </Button>
          </div>
          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                What Our Client Says.
              </h3>
              <p className="leading-relaxed">
                "Working with this agency has transformed our digital presence. 
                Their strategic approach and attention to detail have exceeded 
                our expectations. We've seen a 300% increase in qualified leads 
                and our brand visibility has never been stronger."
              </p>
              <p className="mt-4 font-semibold text-foreground">
                — Sarah Johnson, CEO of TechVision
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSolution;

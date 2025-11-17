import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";

const MarketingSolution = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="solutions" className="py-20 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Marketing Goals with our All-in-one Marketing Solution
            </h2>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-semibold group"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="space-y-6">
            <div className="relative bg-foreground text-background p-8 rounded-sm">
              <Quote className="absolute top-6 right-6 h-16 w-16 opacity-20" />
              <h3 className="text-xl font-bold mb-4">
                What Our Client Says
              </h3>
              <p className="leading-relaxed mb-6 opacity-90">
                "Working together with a Geener Team, we are very thankful for our
                close relationships and we are very fortunate to be able to share."
              </p>
              <div className="border-t border-background/20 pt-4">
                <p className="font-semibold">Julian Jenkins</p>
                <p className="text-sm opacity-80">CEO Brewery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSolution;

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-office.jpg";

const Hero = () => {
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
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 bg-foreground text-background">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Full Service Digital Marketing Agency.
            </h1>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 font-semibold px-8 py-6 text-lg group"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Modern office workspace"
              className="w-full h-auto rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

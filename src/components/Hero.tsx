import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-office.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 bg-background">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Full Service Digital Marketing Agency.
            </h1>
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 py-6 text-lg"
            >
              Get Started
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

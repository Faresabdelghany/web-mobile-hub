import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
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
    <div id="home" className="bg-black text-white px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 md:mb-8">
              Full Service<br />
              Digital Marketing<br />
              Agency.
            </h1>

            <Button
              onClick={scrollToContact}
              className="bg-white text-black hover:bg-gray-100 px-6 py-3 font-medium group text-sm sm:text-base"
            >
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative">
            <div className="h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team working together"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

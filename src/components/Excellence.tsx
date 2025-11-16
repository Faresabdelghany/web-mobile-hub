import { Button } from "@/components/ui/button";
import excellenceImage from "@/assets/excellence-workspace.jpg";

const Excellence = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={excellenceImage} 
              alt="Professional workspace" 
              className="w-full h-auto rounded-sm"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Excellence in Customer Experience and Innovation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button 
              variant="outline" 
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excellence;

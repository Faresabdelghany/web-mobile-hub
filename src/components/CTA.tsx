import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to get Started?
        </h2>
        <Button 
          size="lg"
          className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 py-6 text-lg"
        >
          Contact Us Now
        </Button>
      </div>
    </section>
  );
};

export default CTA;

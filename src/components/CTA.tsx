import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const CTA = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to get Started?
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            You know what to do next! Just contact us and we will respond
            to your business from our team.
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-semibold"
              onClick={() => {
                const form = document.getElementById("contact-form");
                form?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Request a Quote
            </Button>
          </div>
        </div>
        <div id="contact-form">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default CTA;

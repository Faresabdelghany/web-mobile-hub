import ContactForm from "@/components/ContactForm";

const CTA = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to get Started?
          </h2>
          <p className="text-lg text-muted-foreground">
            Fill out the form below and we'll get back to you soon.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default CTA;

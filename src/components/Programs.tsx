import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const programs = [
  {
    id: "strategy",
    title: "Strategy",
    description: "Comprehensive digital marketing strategies tailored to your business goals. We analyze your market, competitors, and target audience to create data-driven plans that deliver results."
  },
  {
    id: "design",
    title: "UX Designer",
    description: "User-centered design that creates engaging experiences. Our design team crafts intuitive interfaces and compelling visuals that resonate with your audience and drive conversions."
  },
  {
    id: "content",
    title: "Content",
    description: "High-quality content that tells your brand story and engages your audience. From blog posts to video content, we create compelling narratives that drive engagement and build loyalty."
  },
];

const Programs = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Explore Our Programs
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {programs.map((program) => (
            <AccordionItem 
              key={program.id} 
              value={program.id}
              className="border border-border rounded-sm px-6"
            >
              <AccordionTrigger className="text-xl font-semibold hover:no-underline">
                {program.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {program.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Programs;

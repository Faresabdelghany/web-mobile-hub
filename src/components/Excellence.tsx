import excellenceImage from "@/assets/excellence-workspace.jpg";

const Excellence = () => {
  return (
    <section id="company" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
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
            <p className="text-muted-foreground text-base leading-relaxed">
              We are a fully transparent, data-driven and adaptive team who are very thankful
              for our close relationships and we are very fortunate to be able to share.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Excellence;

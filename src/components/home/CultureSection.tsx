import React from "react";
import { Button } from "@/components/ui/button";

const sections = [
  {
    title: "Excellence in Customer Experience and Team Culture",
    description: "At Geener Agency we're passionate about customer experience and team culture. When you choose to join Geener Agency you're joining a team that genuinely loves what they do. Whether SEO, PPC, Web, Social, or Strategy, the people that power Redesign.co genuinely love the work they contribute.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    imagePosition: "right"
  },
  {
    title: "Self motivated individuals go a long ways at Geener.",
    description: "If you're self motivated to achieve excellence in all that you do, we want to hear from you! We believe that self motivated team members also excite our partners when engaging Geener Agency for various marketing strategies. With tons of time off, industry leading medical, vision, and dental benefits, and competitive wages.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    imagePosition: "left"
  }
];

export default function CultureSection() {
  return (
    <div id="company" className="bg-white px-6 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto space-y-20">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              section.imagePosition === "left" ? "lg:grid-flow-dense" : ""
            }`}
          >
            <div className={section.imagePosition === "left" ? "lg:col-start-2" : ""}>
              <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {section.description}
              </p>
              <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-md font-medium">
                Learn More
              </Button>
            </div>

            <div className={section.imagePosition === "left" ? "lg:col-start-1 lg:row-start-1" : ""}>
              <div className="rounded-xl overflow-hidden h-96">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

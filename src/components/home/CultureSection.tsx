import React from "react";

const sections = [
  {
    title: "Excellence in Customer Experience and Team Culture",
    description: "CLIMORA was built on a simple belief: marketing is not a service,it is a force that shapes industries, societies, and the future. From this belief, we positioned ourselves at the center of the Middle East’s most influential sectors: E-commerce, Education, and the Digital Economy.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    imagePosition: "right"
  },
  {
    title: "Self motivated individuals go a long ways at Geener.",
    description: "We partner with ambitious brands that seek more than visibility; they seek purpose, meaning, and connection. Through deep strategic thinking and innovation-driven insight, CLIMORA helps organizations transform digital opportunities into lasting, human-centered impact. Every project we take on is a step toward reshaping how consumers interact with the world around them and how brands define their role in people’s lives.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    imagePosition: "left"
  }
];

export default function CultureSection() {
  return (
    <div id="company" className="bg-white px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto space-y-20 sm:space-y-24 md:space-y-32">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`grid lg:grid-cols-2 gap-12 md:gap-20 items-center ${section.imagePosition === "left" ? "lg:grid-flow-dense" : ""
              }`}
          >
            <div className={section.imagePosition === "left" ? "lg:col-start-2" : ""}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6 md:mb-8">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg sm:text-xl">
                {section.description}
              </p>
            </div>

            <div className={section.imagePosition === "left" ? "lg:col-start-1 lg:row-start-1" : ""}>
              <div className="rounded-xl overflow-hidden h-64 sm:h-80 md:h-96">
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

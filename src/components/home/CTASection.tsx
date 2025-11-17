import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <div
      className="relative px-6 lg:px-20 py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        <h3 className="text-4xl lg:text-5xl font-bold text-black mb-4">
          Ready to get Started?
        </h3>
        <p className="text-gray-600 mb-8 text-base max-w-2xl mx-auto">
          You know what to do - contact us now to discover how we can help your business grow!
        </p>

        <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-md font-medium group">
          Request a Quote
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}

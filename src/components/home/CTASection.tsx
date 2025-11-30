import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CTASection() {
  return (
    <div
      id="contact"
      className="relative px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 md:py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-3">
            Ready to get Started?
          </h3>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
            You know what to do - contact us now to discover how we can help your business grow!
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
          <form className="space-y-4 sm:space-y-5">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <Input
                type="text"
                placeholder="Name"
                className="bg-white border-gray-300 text-black placeholder:text-gray-500 h-12 sm:h-14 rounded-lg text-sm sm:text-base"
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-white border-gray-300 text-black placeholder:text-gray-500 h-12 sm:h-14 rounded-lg text-sm sm:text-base"
              />
            </div>

            <Input
              type="text"
              placeholder="Interested in..."
              className="bg-white border-gray-300 text-black placeholder:text-gray-500 h-12 sm:h-14 rounded-lg text-sm sm:text-base"
            />

            <Textarea
              placeholder="Tell us about your project..."
              rows={4}
              className="bg-white border-gray-300 text-black placeholder:text-gray-500 rounded-lg resize-none text-sm sm:text-base"
            />

            <div className="flex justify-center">
              <Button
                type="submit"
                className="bg-black text-white hover:bg-gray-800 px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-medium text-sm sm:text-base w-full sm:w-auto"
              >
                Request a Quote
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

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
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto px-4">
            We're always ready to connect, collaborate, and help your brand move forward.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-gray-200">
          <form className="space-y-4 sm:space-y-5">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
              <Input
                type="text"
                placeholder="Name"
                className="bg-gray-50 border-gray-300 text-black placeholder:text-gray-500 h-12 sm:h-14 rounded-xl text-sm sm:text-base focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-gray-50 border-gray-300 text-black placeholder:text-gray-500 h-12 sm:h-14 rounded-xl text-sm sm:text-base focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <Input
              type="text"
              placeholder="Interested in..."
              className="bg-gray-50 border-gray-300 text-black placeholder:text-gray-500 h-12 sm:h-14 rounded-xl text-sm sm:text-base focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
            />

            <Textarea
              placeholder="Tell us about your project..."
              rows={4}
              className="bg-gray-50 border-gray-300 text-black placeholder:text-gray-500 rounded-xl resize-none text-sm sm:text-base focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
            />

            <div className="flex justify-end pt-2">
              <Button
                type="submit"
                className="bg-black text-white hover:bg-gray-800 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full font-medium text-sm sm:text-base transition-all"
              >
                Submit Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

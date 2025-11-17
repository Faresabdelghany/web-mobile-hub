import React from "react";

export default function ExcellenceSection() {
  return (
    <div className="bg-white p-8 lg:p-12 mx-8 lg:mx-12 mb-12 rounded-2xl">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl font-bold text-black mb-4">
            Excellence in Digital Marketing
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We deliver innovative solutions that drive results and help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="relative h-64 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80"
            alt="Modern office workspace"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

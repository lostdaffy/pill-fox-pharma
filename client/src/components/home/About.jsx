import React from "react";

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20 bg-[#399a8b27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#112e51]">
            About <span className="italic" style={{ color: "#399a8c" }}>Pillfox</span>
          </h2>
          <p className="mt-4 text-lg text-[#112e51]">
            Driven by innovation, quality, and trust — redefining healthcare accessibility and outcomes.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Image */}
          <div className="lg:col-span-5 relative">
            <img
              src="/images/214961.jpg"
              alt="About Pillfox Pharma"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-lg px-5 py-4 border border-gray-100">
              <p className="text-sm text-gray-600">World-class manufacturing</p>
              <p className="text-lg font-semibold" style={{ color: "#399a8c" }}>
                Ethical. Reliable. Affordable.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg text-[#112e51] leading-relaxed">
              Pillfox Pharma is driven by <strong>innovation, quality, and trust</strong>.
            </p>
            <p className="text-lg text-[#112e51] leading-relaxed">
              Pillfox Pharma stands at the forefront of healthcare, delivering reliable and affordable
              therapeutics across the nation.
            </p>
            <p className="text-lg text-[#112e51] leading-relaxed">
              Committed to better health, Pillfox Pharma brings <strong>science</strong> and <strong>care</strong> together
              with world-class manufacturing and ethical practices.
            </p>
            <p className="text-lg text-[#112e51] leading-relaxed">
              One of India's fastest-emerging pharmaceutical companies, Pillfox Pharma is redefining healthcare
              accessibility and quality.
            </p>
            <p className="text-lg text-[#112e51] leading-relaxed">
              With a vision to lead, Pillfox Pharma is expanding rapidly across therapeutic segments with precision and purpose.
            </p>

        
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default AboutUs;

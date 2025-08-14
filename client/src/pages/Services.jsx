import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      {/* Hero/Intro for Services */}
      <section id="services-hero" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/3454543.jpg"
            alt="Pillfox Pharma Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-white/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-gray-900 uppercase text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Our <span className="text-[#399a8c]">Services</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-800 leading-relaxed">
              End-to-end pharmaceutical solutions—R&amp;D se le kar compliant manufacturing, 
              quality assurance aur reliable distribution tak—Pillfox Pharma ke saath.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                to="/contact"
                className="bg-[#399a8c] hover:bg-[#399a8bee] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <i className="ri-chat-1-line"></i>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Integrated <span style={{ color: "#399a8c" }}>Pharma Solutions</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Vertically integrated capabilities aligned with quality, affordability, and ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* R&D and Formulation */}
            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(57,154,140,0.12)" }}
              >
                <i className="ri-flask-line text-2xl" style={{ color: "#399a8c" }}></i>
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">R&amp;D and Formulation</h3>
              <p className="text-gray-700">
                IIT (PhD) scholars ke saath advanced research, novel formulations aur tech transfer.
              </p>
            </div>

            {/* Contract Manufacturing (CDMO) */}
            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(57,154,140,0.12)" }}
              >
                <i className="ri-building-4-line text-2xl" style={{ color: "#399a8c" }}></i>
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">Contract Manufacturing (CDMO)</h3>
              <p className="text-gray-700">
                GMP-compliant facilities, scalable batches, robust process validation aur cost efficiency.
              </p>
            </div>

            {/* Quality and Compliance */}
            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(57,154,140,0.12)" }}
              >
                <i className="ri-shield-check-line text-2xl" style={{ color: "#399a8c" }}></i>
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">Quality &amp; Compliance</h3>
              <p className="text-gray-700">
                End-to-end QA/QC, documentation, audits, validation, and regulatory support.
              </p>
            </div>

            {/* Packaging and Serialization */}
            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(57,154,140,0.12)" }}
              >
                <i className="ri-qr-scan-2-line text-2xl" style={{ color: "#399a8c" }}></i>
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">Packaging &amp; Serialization</h3>
              <p className="text-gray-700">
                Tamper-evident packs, QR/2D barcodes, and anti-counterfeit serialization workflows.
              </p>
            </div>

            {/* Supply Chain and Distribution */}
            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(57,154,140,0.12)" }}
              >
                <i className="ri-route-line text-2xl" style={{ color: "#399a8c" }}></i>
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">Supply Chain &amp; Distribution</h3>
              <p className="text-gray-700">
                Cold-chain handling, nationwide distribution, service level monitoring and traceability.
              </p>
            </div>

            {/* Regulatory Affairs */}
            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(57,154,140,0.12)" }}
              >
                <i className="ri-article-line text-2xl" style={{ color: "#399a8c" }}></i>
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">Regulatory Affairs</h3>
              <p className="text-gray-700">
                Dossier prep, submissions, variations, labeling compliance, and lifecycle management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ backgroundColor: "rgba(57,154,140,0.05)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Why <span style={{ color: "#399a8c" }}>Pillfox Pharma</span>?
              </h2>
              <p className="mt-4 text-gray-700">
                Trusted, Affordable, Conscience—yeh humare kaam ki pehchaan hai. State-of-the-art
                processes ke through consistent quality deliver karte hain.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#399a8c" }}>
                    <i className="ri-award-line text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">GMP-Grade Reliability</h4>
                    <p className="text-gray-600">Robust SOPs, validation, batch consistency.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#399a8c" }}>
                    <i className="ri-scales-3-line text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ethical Practices</h4>
                    <p className="text-gray-600">Patient-first approach with transparent operations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#399a8c" }}>
                    <i className="ri-collage-line text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">End-to-End Integration</h4>
                    <p className="text-gray-600">R&amp;D to delivery tak single-window accountability.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  to="/about"
                  className="inline-flex items-center px-7 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  style={{ backgroundColor: "#399a8c" }}
                >
                  <i className="ri-arrow-right-line mr-2"></i>
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/214961.jpg"
                alt="Trusted Pharma Services"
                className="rounded-2xl shadow-2xl w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Engagement <span style={{ color: "#399a8c" }}>Process</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Transparent, milestone-based delivery with strong governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "ri-lightbulb-flash-line", title: "Discovery", desc: "Requirement analysis, feasibility & scope" },
              { icon: "ri-draft-line", title: "Development", desc: "Formulation, scale-up, validation" },
              { icon: "ri-shield-star-line", title: "Quality", desc: "QA/QC, documentation, audits" },
              { icon: "ri-truck-line", title: "Delivery", desc: "Packaging, serialization & distribution" },
            ].map((step, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-2xl text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(57,154,140,0.12)" }}
                >
                  <i className={`${step.icon} text-2xl`} style={{ color: "#399a8c" }}></i>
                </div>
                <h4 className="font-bold text-gray-900">{step.title}</h4>
                <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Trust Indicators */}
      <section className="py-16" style={{ backgroundColor: "rgba(57,154,140,0.05)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "50+", label: "SKUs Managed" },
              { value: "10+", label: "Therapy Areas" },
              { value: "25+", label: "R&D Projects" },
              { value: "100%", label: "GMP Compliance" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-3xl font-extrabold text-gray-900">{item.value}</div>
                <div className="mt-2 text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            FAQs
          </h2>
          <div className="mt-10 space-y-6">
            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <h4 className="font-semibold text-gray-900">Kya aap small batches handle karte hain?</h4>
              <p className="text-gray-700 mt-2">
                Haan, pilot to commercial scale tak hum scalable batch sizes support karte hain.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <h4 className="font-semibold text-gray-900">Regulatory documentation kaise manage hoti hai?</h4>
              <p className="text-gray-700 mt-2">
                Complete dossier prep, COAs, validation reports, labeling compliance aur audits hum handle karte hain.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm">
              <h4 className="font-semibold text-gray-900">Serialization/QR verification available hai?</h4>
              <p className="text-gray-700 mt-2">
                Yes, anti-counterfeit serialization aur QR-based verification process integrated hai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "rgba(57,154,140,0.05)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-2xl shadow-lg bg-white">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "#399a8c" }}>
                <i className="ri-rocket-line text-white text-2xl"></i>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-gray-900 text-lg">Ready to Collaborate?</h4>
                <p className="text-gray-600">Let’s build high-quality, affordable therapies together.</p>
              </div>
            </div>

            <Link
              to="/contact"
              className="px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{ backgroundColor: "#399a8c" }}
            >
              <i className="ri-arrow-right-line mr-2"></i>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

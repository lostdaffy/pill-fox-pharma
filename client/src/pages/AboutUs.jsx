import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      {/* Top Hero */}
      <section id="about-hero" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/214961.jpg"
            alt="About Pillfox Pharma"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-white/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-gray-900 uppercase text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              About <span className="text-[#399a8c]">Pillfox Pharma</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-800 leading-relaxed">
              Innovation, quality aur trust par bana hua ek integrated pharmaceutical partner.
              Hum reliable aur affordable therapeutics deliver karte hain—ethical practices ke saath.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                to="/services"
                className="bg-[#399a8c] hover:bg-[#399a8bee] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <i className="ri-briefcase-4-line"></i>
                Our Services
              </Link>
              <Link
                to="/contact"
                className="bg-white text-[#399a8c] border border-[#399a8c] font-semibold py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center gap-2 hover:bg-[#399a8c] hover:text-white"
              >
                <i className="ri-chat-1-line"></i>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="p-8 rounded-2xl border-l-4" style={{ borderColor: "#399a8c" }}>
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <i className="ri-flag-2-line mr-2" style={{ color: "#399a8c" }}></i>
              Our Mission
            </h3>
            <p className="mt-4 text-gray-700 text-lg">
              Quality aur affordability ko balance karke har patient tak trusted therapies pahunchana,
              with uncompromising ethics and transparency.
            </p>
          </div>

          <div className="p-8 rounded-2xl border-l-4" style={{ borderColor: "#399a8c" }}>
            <h3 className="text-2xl font-bold text-gray-900 flex items-center">
              <i className="ri-eye-line mr-2" style={{ color: "#399a8c" }}></i>
              Our Vision
            </h3>
            <p className="mt-4 text-gray-700 italic">
              “To create a world where no patient is left behind—by delivering trusted,
              affordable therapies with conscience.”
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16" style={{ backgroundColor: "rgba(57,154,140,0.05)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Who <span style={{ color: "#399a8c" }}>We Are</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Pillfox Pharma ek vertically integrated pharmaceutical company hai jo R&amp;D se le kar
              delivery tak end-to-end solutions provide karti hai. IIT (PhD) scholars ke saath humara
              R&amp;D excellence cutting-edge formulations aur scalable manufacturing enable karta hai.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Hum nation-wide distribution, strong QA/QC systems, serialization-based authenticity
              verification aur transparent documentation practices maintain karte hain.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "ri-shield-check-line", title: "GMP Focus" },
                { icon: "ri-hand-coin-line", title: "Affordable" },
                { icon: "ri-hand-heart-line", title: "With Conscience" },
              ].map((i, idx) => (
                <div key={idx} className="p-4 bg-white rounded-xl shadow">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-2"
                    style={{ backgroundColor: "rgba(57,154,140,0.12)" }}
                  >
                    <i className={`${i.icon} text-xl`} style={{ color: "#399a8c" }}></i>
                  </div>
                  <div className="font-semibold text-gray-900">{i.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/3454543.jpg"
              alt="Pillfox Manufacturing"
              className="rounded-2xl shadow-2xl w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Milestones / Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            Our <span style={{ color: "#399a8c" }}>Milestones</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { year: "2019", text: "Foundation laid with a mission to deliver ethical, affordable care" },
              { year: "2021", text: "R&D collaborations with IIT (PhD) scholars" },
              { year: "2023", text: "Scale-up of GMP-compliant manufacturing lines" },
              { year: "2025", text: "Serialization & nationwide distribution expansion" },
            ].map((m, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-extrabold text-gray-900">{m.year}</div>
                <p className="mt-3 text-gray-700">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications / Compliance */}
      <section className="py-16" style={{ backgroundColor: "rgba(57,154,140,0.05)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            Compliance & <span style={{ color: "#399a8c" }}>Certifications</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "ri-shield-star-line", title: "GMP Compliance" },
              { icon: "ri-file-check-line", title: "COA & Validation" },
              { icon: "ri-qr-scan-2-line", title: "Serialization Ready" },
              { icon: "ri-archive-drawer-line", title: "Robust Documentation" },
            ].map((c, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl shadow-sm text-center">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: "rgba(57,154,140,0.12)" }}
                >
                  <i className={`${c.icon} text-2xl`} style={{ color: "#399a8c" }}></i>
                </div>
                <div className="font-semibold text-gray-900">{c.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Snapshot */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            <div className="lg:col-span-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Leadership <span style={{ color: "#399a8c" }}>Team</span>
              </h2>
              <p className="mt-4 text-gray-700">
                Experienced professionals driving science, quality and access.
              </p>
            </div>

            {[1, 2].map((n) => (
              <div key={n} className="p-6 bg-gray-50 rounded-2xl shadow-sm flex gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={`/images/leader-${n}.jpg`}
                    alt={`Leader ${n}`}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <i className="ri-user-3-line text-2xl text-gray-500"></i>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Leader Name {n}</div>
                  <div className="text-sm text-gray-600">Designation</div>
                  <p className="mt-2 text-gray-700 text-sm">
                    10+ years in pharma ops, quality systems, and market expansion.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16" style={{ backgroundColor: "rgba(57,154,140,0.05)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            Our <span style={{ color: "#399a8c" }}>Values</span>
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "ri-heart-pulse-line", title: "Patient First", text: "Every decision keeps patient outcomes at the center." },
              { icon: "ri-stack-line", title: "Quality by Design", text: "Built-in quality from R&D through distribution." },
              { icon: "ri-hand-heart-line", title: "Integrity", text: "Ethical, compliant and transparent operations." },
            ].map((v, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl shadow-sm text-center">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: "rgba(57,154,140,0.12)" }}
                >
                  <i className={`${v.icon} text-2xl`} style={{ color: "#399a8c" }}></i>
                </div>
                <div className="font-semibold text-gray-900">{v.title}</div>
                <p className="text-gray-700 text-sm mt-2">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-2xl shadow-lg bg-white">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "#399a8c" }}>
                <i className="ri-rocket-line text-white text-2xl"></i>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-gray-900 text-lg">Partner With Us</h4>
                <p className="text-gray-600">Let’s advance accessible healthcare together.</p>
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

export default AboutUs;

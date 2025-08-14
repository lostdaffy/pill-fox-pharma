import React from "react";

const ManufacturingPower = () => {
  return (
    <section id="manufacturing" className="relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 bg-[#399a8c]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 bg-emerald-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative">
        {/* Header */}
        <div className="max-w-3xl text-center lg:text-left">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#399a8c]/10 text-[#399a8c] text-sm font-medium mb-3 sm:mb-4">
            <i className="ri-capsule-line" /> Pillfox Pharma
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#112e51] tracking-tight">
            Manufacturing <span className="italic text-[#399a8c]">Power</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-3 sm:mt-4">
            Next-gen integrated pharma, delivering solutions from R&amp;D to
            precision care.
          </p>
        </div>

        {/* Split: Left content, Right image */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left: Features */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <p className="text-[#112e51] text-base sm:text-lg leading-relaxed mb-6">
              Our R&amp;D is associated with IIT (PhD) scholars. With in-house
              capabilities and strategic partnerships, we ensure consistent
              quality across the product lifecycle—from raw material to
              finished goods.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "ri-graduation-cap-line",
                  title: "R&D Excellence",
                  desc: "IIT (PhD) scholar collaboration",
                },
                {
                  icon: "ri-building-2-line",
                  title: "Integrated Operations",
                  desc: "From sourcing to delivery",
                },
                {
                  icon: "ri-award-line",
                  title: "Certified Quality",
                  desc: "WHO‑GMP, ISO 9001:2015, ISO 13485",
                },
                {
                  icon: "ri-shield-check-line",
                  title: "Global Standards",
                  desc: "Schedule M, cGMP compliance",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center bg-[#399a8c]">
                      <i className={`${card.icon} text-white text-lg sm:text-xl`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#112e51] text-sm sm:text-base">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">{card.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4" />
          </div>

          {/* Right: Image with overlay stats */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative group">
              <img
                src="/images/3454543.jpg"
                alt="Pillfox Pharma Manufacturing Facility"
                className="rounded-2xl sm:rounded-3xl shadow-xl w-full object-cover ring-1 ring-black/5 group-hover:shadow-2xl transition-all duration-500"
              />

              {/* Stats Overlay: mobile below image (static), sm+ absolute on image */}
              <div
                className="
                  mt-4 sm:mt-0
                  sm:absolute sm:left-6 sm:right-6 sm:-bottom-6
                  bg-white/90 backdrop-blur
                  rounded-xl sm:rounded-2xl
                  shadow-lg
                  p-3 sm:p-4
                  flex flex-col sm:flex-row
                  items-start sm:items-center
                  justify-between
                  gap-3 sm:gap-0
                "
              >
                {[
                  ["Quality Checks", "Multi‑stage QC"],
                  ["Compliance", "cGMP + Schedule M"],
                  ["Standards", "IP / BP / USP / EP"],
                ].map(([label, value], i) => (
                  <React.Fragment key={i}>
                    <div className="text-left">
                      <p className="text-[10px] sm:text-xs uppercase tracking-wide text-gray-500">
                        {label}
                      </p>
                      <p className="text-sm sm:text-lg font-semibold text-[#112e51]">
                        {value}
                      </p>
                    </div>
                    {i < 2 && <div className="hidden sm:block h-8 w-px bg-gray-200" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-xl sm:text-2xl font-bold text-[#112e51] mb-5 sm:mb-6 text-center lg:text-left">
            Certifications &amp; Quality Standards
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[
              "WHO‑GMP certified manufacturing units",
              "ISO 9001:2015 & ISO 13485 certified",
              "Compliant with Schedule M & global regulatory standards",
              "cGMP followed across all processes",
              "Multi‑stage quality checks: raw to finished",
              "Pharmacopoeial adherence: IP / BP / USP / EP",
              "Ready for third‑party & contract manufacturing",
              "Own brand marketing capability",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 sm:p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <i className="ri-check-double-line text-[#399a8c] text-lg sm:text-xl" />
                <p className="text-sm sm:text-base text-[#112e51]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingPower;

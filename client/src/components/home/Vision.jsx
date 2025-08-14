import React from "react";
import { Link } from "react-router-dom";

const Vision = () => {
  return (
    <>
      {/* Vision Section */}
      <section id="vision" className="py-14 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Grid: stacks on mobile, 2-col on lg+ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-7 md:space-y-8">
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#112e51] leading-tight">
                  Our <span className="italic text-[#399a8c]">Vision</span>
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-[#112e51] leading-relaxed">
                  To shape a future where no patient is ever left behind — by
                  delivering therapies that are trusted, accessible, and driven
                  by conscience.
                </p>
              </div>

              {/* Vision Values */}
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-6 mt-6 sm:mt-8 md:mt-10">
                <div className="text-center group">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: "rgba(57, 154, 140, 0.1)" }}
                  >
                    <i
                      className="ri-heart-pulse-line text-xl sm:text-2xl"
                      style={{ color: "#399a8c" }}
                    ></i>
                  </div>
                  <h5 className="font-bold text-[#112e51] mb-1.5 sm:mb-2 text-base">
                    Trusted
                  </h5>
                  <p className="text-gray-600 text-sm sm:text-[0.95rem]">
                    Science-based care you can trust.
                  </p>
                </div>

                <div className="text-center group">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: "rgba(57, 154, 140, 0.1)" }}
                  >
                    <i
                      className="ri-hand-coin-line text-xl sm:text-2xl"
                      style={{ color: "#399a8c" }}
                    ></i>
                  </div>
                  <h5 className="font-bold text-[#112e51] mb-1.5 sm:mb-2 text-base">
                    Affordable
                  </h5>
                  <p className="text-gray-600 text-sm sm:text-[0.95rem]">
                    High-quality therapies made accessible for all
                  </p>
                </div>

                <div className="text-center group">
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: "rgba(57, 154, 140, 0.1)" }}
                  >
                    <i
                      className="ri-hand-heart-line text-xl sm:text-2xl"
                      style={{ color: "#399a8c" }}
                    ></i>
                  </div>
                  <h5 className="font-bold text-[#112e51] mb-1.5 sm:mb-2 text-base">
                    Conscience
                  </h5>
                  <p className="text-gray-600 text-sm sm:text-[0.95rem]">
                    Rooted in ethics, powered by compassion
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[520px] sm:max-w-[560px] md:max-w-lg">
                <img
                  src="images/23545.jpg"
                  alt="Pillfox Pharma Vision - Healthcare for All"
                  className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl object-cover transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;

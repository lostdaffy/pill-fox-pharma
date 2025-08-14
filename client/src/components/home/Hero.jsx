import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/images/6036143.mp4" type="video/mp4" />
            <source src="/images/6036143.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Centered Content */}
        <div className="relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl">
            <h1 className="text-[#112e51] uppercase text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
              Welcome to{" "}
              <span className="block text-[#399a8c]">Pillfox Pharma</span>
            </h1>
            <p className="italic mt-6 text-xl sm:text-2xl text-[#112e51] font-semibold leading-relaxed">
              "Every Pill Carries a Promise"
            </p>
            <p className="mt-4 text-lg sm:text-xl text-[#112e51] leading-relaxed max-w-4xl mx-auto">
              Pillfox Pharma is driven by innovation, quality and trust.
              Delivering reliable and affordable therapeutics across the nation
              with world-class manufacturing and ethical practices.
            </p>

            {/* QR Code Section */}
            <div className="mt-8 flex justify-center items-center gap-6">
              <div className="bg-white bg-opacity-90 ">
                <div className="w-16 h-16 bg-gray-200  flex items-center justify-center">
                  <img src="/images/bar-code.jpeg" className="rounded-lg" alt="" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-[#112e51] text-lg">
                  Verify Authenticity
                </h3>
                <p className="text-[#112e51] text-sm">
                  Scan QR code to check quality & certifications
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-[#399a8c] hover:bg-[#399a8bee] text-white font-semibold py-3 px-15 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <i className="ri-arrow-right-up-long-line"></i>
                Explore Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

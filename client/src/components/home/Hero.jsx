import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Video Background without absolute */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover min-h-screen"
        >
          <source src="/images/6036143.mp4" type="video/mp4" />
          <source src="/images/6036143.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay (dark/light tint for readability) */}
        <div className="absolute inset-0 bg-white/20"></div>

        {/* Centered Content */}
        <div className="absolute inset-0 flex justify-center px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center max-w-5xl relative z-10">
            <div>
              <img
                src="/images/icon.png"
                className="w-25 mx-auto block pb-5"
                alt=""
              />
            </div>

            <h1 className="text-[#112e51] uppercase text-3xl sm:text-5xl lg:text-8xl font-bold leading-tight">
              Welcome to{" "}
              <span className="block text-[#399a8c]">Pillfox Pharma</span>
            </h1>
            <p className="italic mt-6 text-xl sm:text-2xl text-[#112e51] font-semibold leading-relaxed">
              "Every Pill Carries a Promise"
            </p>
            <p className="mt-4 text-base sm:text-xl text-[#112e51] leading-relaxed max-w-4xl mx-auto text-justify">
              Pillfox Pharma is driven by innovation, quality and trust.
              Delivering reliable and affordable therapeutics across the nation
              with world-class manufacturing and ethical practices.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4">
              <Link
                to="/services"
                className="w-full sm:w-auto bg-[#399a8c] hover:bg-[#399a8bee] text-white 
               text-base sm:text-lg font-semibold py-3 sm:py-4 px-6 sm:px-10 
               rounded-full transition-all duration-300 inline-flex items-center 
               justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <i className="ri-capsule-fill text-lg sm:text-xl"></i>
                Explore Medicine
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

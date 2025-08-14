import React from "react";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <section id="contact" className="py-14 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <div
            className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4"
            style={{ backgroundColor: "rgba(57, 154, 140, 0.1)" }}
          >
            <span className="text-xs sm:text-sm font-semibold" style={{ color: "#399a8c" }}>
              CONTACT US
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#112e51] mb-3 sm:mb-4">
            Get In <span style={{ color: "#399a8c" }}>Touch</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Ready to partner with us or have questions about our pharmaceutical solutions? We’re here to help you with trusted, affordable healthcare.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 mb-14 lg:mb-20">
          {/* Left: Contact Form */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: "#399a8c" }}
                >
                  <i className="ri-mail-line text-white text-lg sm:text-xl" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#112e51]">
                    Send us a Message
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    We’ll get back to you within 24 hours
                  </p>
                </div>
              </div>
              {/* Web3Forms Contact Form */}
              <form
                method="POST"
                action="https://api.web3forms.com/submit"
                className="space-y-5 sm:space-y-6"
              >
                <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#399a8c] focus:outline-none transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#399a8c] focus:outline-none transition-colors duration-300"
                      placeholder="0135-3132190"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#399a8c] focus:outline-none transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#399a8c] focus:outline-none transition-colors duration-300 resize-y min-h-[140px]"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 rounded-xl text-white font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.99] shadow-lg flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#399a8c" }}
                >
                  <i className="ri-send-plane-line text-base sm:text-lg" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
          {/* Right: Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* Card: Contact Details */}
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-[#112e51] mb-6 sm:mb-8">
                Contact Information
              </h3>
              <div className="space-y-5 sm:space-y-6">
                {/* Address */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(57, 154, 140, 0.1)" }}
                  >
                    <i className="ri-map-pin-line text-lg sm:text-xl" style={{ color: "#399a8c" }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#112e51] mb-1.5 sm:mb-2">
                      Corporate Office
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Pillfox Pharma Pvt Ltd
                      <br />
                      H.in. Kh-293 S/T, Western Marg
                      <br />
                      Saidulajab, Gadaipur,
                      <br />
                      South West Delhi, New Delhi
                      <br />
                      India, 110030
                    </p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(57, 154, 140, 0.1)" }}
                  >
                    <i className="ri-phone-line text-lg sm:text-xl" style={{ color: "#399a8c" }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#112e51] mb-1.5 sm:mb-2">
                      Phone Number
                    </h4>
                    <p className="text-gray-600">
                      <Link
                        to="tel:01353132190"
                        className="hover:text-[#399a8c] transition-colors duration-300"
                      >
                        0135-3132190
                      </Link>
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">
                      Monday - Saturday: 10:30 AM - 6:00 PM
                    </p>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(57, 154, 140, 0.1)" }}
                  >
                    <i className="ri-mail-line text-lg sm:text-xl" style={{ color: "#399a8c" }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#112e51] mb-1.5 sm:mb-2">
                      Email Address
                    </h4>
                    <p className="text-gray-600">
                      <Link
                        to="mailto:pillfoxpharma@gmail.com"
                        className="hover:text-[#399a8c] transition-colors duration-300 break-all"
                      >
                        pillfoxpharma@gmail.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6">
              <h4 className="font-bold text-[#112e51] mb-5 sm:mb-6 text-center text-base sm:text-lg">
                Connect With Us
              </h4>
              <div className="flex justify-center gap-3.5 sm:gap-4">
                {["facebook-fill", "linkedin-fill", "twitter-fill", "instagram-fill"].map(
                  (icon, idx) => (
                    <Link
                      key={idx}
                      to="#"
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: "#399a8c" }}
                      aria-label={icon.replace("-fill", "")}
                    >
                      <i className={`ri-${icon} text-white text-lg sm:text-xl`} />
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Bottom CTA */}
        <div className="text-center">
          <div
            className="inline-flex w-full max-w-3xl flex-col sm:flex-row items-center gap-5 sm:gap-6 p-6 sm:p-8 rounded-2xl shadow-lg"
            style={{ backgroundColor: "rgba(57, 154, 140, 0.05)" }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "#399a8c" }}
              >
                <i className="ri-customer-service-2-line text-white text-xl sm:text-2xl" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-[#112e51] text-base sm:text-lg">
                  Need Immediate Assistance?
                </h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Our customer support team is ready to help
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Link
                to="tel:01353132190"
                className="px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 rounded-full text-white font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.99] shadow-lg inline-flex items-center justify-center"
                style={{ backgroundColor: "#399a8c" }}
              >
                <i className="ri-phone-fill mr-2" />
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;

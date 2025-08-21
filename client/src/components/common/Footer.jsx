import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-1 space-y-6">
                <div className="space-y-4">
                  <img
                    src="/images/logo.png"
                    className="w-50"
                    alt="Pillfox Pharma Logo"
                  />
                  <p className="text-gray-300 leading-relaxed">
                    Every Pill Carries a Promise - Delivering trusted,
                    affordable therapies with conscience.
                  </p>
                </div>

                {/* Social Media */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Follow Us</h4>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                      style={{ backgroundColor: "#399a8c" }}
                    >
                      <i className="ri-facebook-fill text-white"></i>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                      style={{ backgroundColor: "#399a8c" }}
                    >
                      <i className="ri-twitter-fill text-white"></i>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                      style={{ backgroundColor: "#399a8c" }}
                    >
                      <i className="ri-linkedin-fill text-white"></i>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
                      style={{ backgroundColor: "#399a8c" }}
                    >
                      <i className="ri-instagram-fill text-white"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#about"
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <i
                        className="ri-arrow-right-s-line mr-2"
                        style={{ color: "#399a8c" }}
                      ></i>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#manufacturing"
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <i
                        className="ri-arrow-right-s-line mr-2"
                        style={{ color: "#399a8c" }}
                      ></i>
                      Manufacturing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#products"
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <i
                        className="ri-arrow-right-s-line mr-2"
                        style={{ color: "#399a8c" }}
                      ></i>
                      Our Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#quality"
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <i
                        className="ri-arrow-right-s-line mr-2"
                        style={{ color: "#399a8c" }}
                      ></i>
                      Quality Assurance
                    </a>
                  </li>
                  <li>
                    <a
                      href="#careers"
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <i
                        className="ri-arrow-right-s-line mr-2"
                        style={{ color: "#399a8c" }}
                      ></i>
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <i
                        className="ri-arrow-right-s-line mr-2"
                        style={{ color: "#399a8c" }}
                      ></i>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Product Categories */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">
                  Product Categories
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#cardiovascular"
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <i
                        className="ri-heart-line mr-2"
                        style={{ color: "#399a8c" }}
                      ></i>
                      Cardiovascular
                    </a>
                  </li>
                  <li>
                    <a
                      href="#neurological"
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <i
                        className="ri-brain-line mr-2"
                        style={{ color: "#399a8c" }}
                      ></i>
                      Neurological
                    </a>
                  </li>
                  <li>
                    <a
                      href="#psychiatric"
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <i
                        className="ri-mental-health-line mr-2"
                        style={{ color: "#399a8c" }}
                      ></i>
                      Psychiatric
                    </a>
                  </li>
                  <li>
                    <a
                      href="#diabetes"
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <i
                        className="ri-syringe-line mr-2"
                        style={{ color: "#399a8c" }}
                      ></i>
                      Diabetes Care
                    </a>
                  </li>
                  <li>
                    <a
                      href="#urological"
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <i
                        className="ri-capsule-line mr-2"
                        style={{ color: "#399a8c" }}
                      ></i>
                      Urological
                    </a>
                  </li>
                  <li>
                    <a
                      href="#nutritional"
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      <i
                        className="ri-flask-line mr-2"
                        style={{ color: "#399a8c" }}
                      ></i>
                      Nutritional
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-white">
                  Contact Information
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <i
                      className="ri-map-pin-line text-xl mt-1"
                      style={{ color: "#399a8c" }}
                    ></i>
                    <div>
                      <p className="text-gray-300">Corporate Office</p>
                      <p className="text-sm text-gray-400">
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

                  <div className="flex items-center gap-3">
                    <i
                      className="ri-phone-line text-xl"
                      style={{ color: "#399a8c" }}
                    ></i>
                    <div>
                      <p className="text-gray-300">
                        <a
                          href="tel:01353132190"
                          className="hover:text-white transition-colors duration-300"
                        >
                          0135-3132190
                        </a>
                      </p>
                      <p className="text-sm text-gray-400">
                        Mon-Fri: 10:30 AM - 6:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <i
                      className="ri-mail-line text-xl"
                      style={{ color: "#399a8c" }}
                    ></i>
                    <div>
                      <p className="text-gray-300">
                        <a
                          href="mailto:pillfoxpharma@gmail.com"
                          className="hover:text-white transition-colors duration-300"
                        >
                          pillfoxpharma@gmail.com
                        </a>
                      </p>
                      <p className="text-sm text-gray-400">General Inquiries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="py-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2024 Pillfox Pharma Pvt Ltd. All rights reserved.
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <a
                  href="#privacy"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#terms"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#regulatory"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Regulatory Information
                </a>
                <a
                  href="#disclaimer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Medical Disclaimer
                </a>
              </div>
            </div>

            {/* Additional Legal Text */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong>Disclaimer:</strong> The information provided on this
                website is for educational purposes only and is not intended to
                replace professional medical advice. Always consult with a
                qualified healthcare provider before making any decisions about
                your health or medications. Pillfox Pharma products should only
                be used under the supervision of a licensed healthcare
                professional.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

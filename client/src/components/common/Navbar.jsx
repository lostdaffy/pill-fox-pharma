// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const menuItems = [
    { label: "Overview", to: "/home" },
    { label: "Services", to: "/services" },
    { label: "About Us", to: "/about-us" },
    { label: "Contact Us", to: "/contact" },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (to) => pathname === to;

  return (
    <header className="bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3.5 sm:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/home"
              aria-label="Pill Fox Pharma - Home"
              className="flex items-center gap-2"
            >
              <img
                src="/images/icon.png"
                alt="Pill Fox Pharma"
                className="h-10 sm:h-15 w-auto select-none"
                draggable={false}
              />
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-15">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={[
                  "relative text-sm lg:text-base font-semibold transition-colors",
                  isActive(item.to)
                    ? "text-[#399a8c]"
                    : "text-[#112e51] hover:text-[#399a8c]",
                ].join(" ")}
              >
                {item.label}
                {/* Active underline */}
                <span
                  aria-hidden="true"
                  className={[
                    "absolute -bottom-1 left-0 h-0.5 rounded-full transition-all",
                    isActive(item.to)
                      ? "w-full bg-[#399a8c]"
                      : "w-0 bg-transparent",
                  ].join(" ")}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop Contact button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="tel:+917302799941"
              className="bg-[#399a8c] text-white text-base font-semibold rounded-full py-3 px-10"
            >
              <i className="ri-phone-fill text-lg me-2" />
              Contact us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#399a8c] focus-visible:ring-offset-2"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <i
              className={`ri-${
                isMenuOpen ? "close" : "menu"
              }-line text-2xl text-gray-700`}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={[
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          ].join(" ")}
        >
          <nav className="py-3">
            <ul className="flex flex-col">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className={[
                      "block px-2 py-3 rounded-md mx-1.5",
                      "text-base font-medium transition-colors",
                      isActive(item.to)
                        ? "text-[#399a8c] bg-[#399a8c]/5"
                        : "text-[#112e51] hover:bg-gray-50 hover:text-[#399a8c]",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {/* Mobile Contact button */}
              <li className="mt-2">
                <Link
                  to="tel:+01353132190"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#399a8c] text-white font-semibold px-4 py-3 rounded-lg hover:bg-[#328a7e] transition-colors"
                >
                  <i className="ri-phone-fill text-lg" aria-hidden="true" />
                  <span>Contact us</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

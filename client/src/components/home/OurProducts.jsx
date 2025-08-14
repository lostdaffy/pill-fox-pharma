import React from "react";

const OurProducts = () => {
  const products = [
    { name: "TELFOX 40", category: "Cardiovascular", icon: "ri-heart-line" },
    { name: "TELFOX H40/H80", category: "Hypertension", icon: "ri-heart-pulse-line" },
    { name: "TELFOX AM", category: "Cardiovascular", icon: "ri-heart-line" },
    { name: "TELFOX CD", category: "Cardiovascular", icon: "ri-heart-line" },
    { name: "TELFOX CT", category: "Cardiovascular", icon: "ri-heart-line" },
    { name: "TELFOX M 25", category: "Cardiovascular", icon: "ri-heart-line" },
    { name: "TELFOX TRIO", category: "Combination", icon: "ri-medicine-bottle-line" },
    { name: "PILGABA MNT", category: "Neurological", icon: "ri-brain-line" },
    { name: "EASEPRAM 10", category: "Psychiatric", icon: "ri-mental-health-line" },
    { name: "EASEPRAM PLUS", category: "Psychiatric", icon: "ri-mental-health-line" },
    { name: "UREPIL", category: "Urological", icon: "ri-capsule-line" },
    { name: "UREPIL-D", category: "Urological", icon: "ri-capsule-line" },
    { name: "PILFIT", category: "Diabetes", icon: "ri-syringe-line" },
    { name: "PILFIT DM", category: "Diabetes", icon: "ri-syringe-line" },
    { name: "PILFIT Q10", category: "Nutritional", icon: "ri-flask-line" },
  ];

  return (
    <section id="products" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#112e51] mb-3 sm:mb-4">
            Our <span className="italic text-[#399a8c]">Products</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl sm:max-w-4xl mx-auto">
            Comprehensive range of pharmaceutical solutions across multiple therapeutic segments
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-5 sm:p-6 hover:shadow-xl transition-shadow duration-300 group border border-gray-100"
            >
              <div className="text-center">
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "rgba(57, 154, 140, 0.1)" }}
                >
                  <i
                    className={`${product.icon} text-xl sm:text-2xl`}
                    style={{ color: "#399a8c" }}
                  />
                </div>

                <h3 className="font-bold text-[#112e51] text-base sm:text-lg lg:text-xl mb-2">
                  {product.name}
                </h3>

                <span
                  className="inline-block px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-white"
                  style={{ backgroundColor: "#399a8c" }}
                >
                  {product.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: subtle divider for larger screens */}
        <div className="hidden sm:block h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-12" />
      </div>
    </section>
  );
};

export default OurProducts;

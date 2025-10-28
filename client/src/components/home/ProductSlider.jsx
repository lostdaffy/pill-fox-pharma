import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductSlider = () => {
  const [imageErrors, setImageErrors] = useState({});

  const products = [
    {
      name: "TELFOX-40",
      description: "For Antihypertensive Management",
      image: "/images/TELFOX-40.png",
    },
    {
      name: "PILGABA-MNT",
      description: "Advanced Neurological Treatment for better outcomes",
      image: "/images/PILGABA-MNT.png",
    },
    {
      name: "UREPIL-D",
      description: "For Treatment of BPH and Prostatic Enlargement",
      image: "/images/UREPIL-D.png",
    },
    {
      name: "PILFIT-DM",
      description: "In overall recovery of compromised Health",
      image: "/images/PILFIT-DM.png",
    },
    {
      name: "PILFIT-Q10",
      description:
        "Offers - Cardio Protection, Neuro Protection, Fertility and vitality, and Powerful Antioxidant Support",
      image: "/images/PILFIT-Q10.png",
    },
    {
      name: "TELFOX-TRIO",
      description: "For Antihypertensive Management (24 Hours BP Control )",
      image: "/images/TELFOX-TRIO.png",
    },
  ];

  const handleImageError = (productName) => {
    setImageErrors((prev) => ({
      ...prev,
      [productName]: true,
    }));
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#112e51] mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#399a8c] to-[#2d7a6e]">
              Pharmaceutical
            </span>{" "}
            Solutions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Quality healthcare products with proven efficacy and safety
            standards
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={false}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 28,
            },
          }}
          className="product-swiper !pb-14"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="product-card bg-white rounded-3xl border border-gray-500 shadow overflow-hidden h-full">
                {/* Card Content */}
                <div className="flex flex-col h-[280px] sm:h-[300px] md:h-[320px]">
                  {/* Image Section */}
                  <div className="relative flex items-center justify-center h-[140px] sm:h-[150px] md:h-[160px] bg--white p-4 sm:p-5">
                    {imageErrors[product.name] ? (
                      <div className="flex flex-col items-center justify-center w-full h-full ">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#399a8c] rounded-xl flex items-center justify-center mb-2 shadow-lg">
                          <i className="ri-capsule-fill text-2xl sm:text-3xl text-white"></i>
                        </div>
                        <p className="text-[#399a8c] font-semibold text-xs">
                          {product.name}
                        </p>
                      </div>
                    ) : (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-50 h-50 pt-5 object-contain"
                        onError={() => handleImageError(product.name)}
                      />
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 flex flex-col justify-between p-4 sm:p-5 bg-white">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#112e51] mb-1.5 line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    {/* Bottom Accent */}
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-[#399a8c]">
                          Contact Us →
                        </span>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#399a8c] to-[#2d7a6e] flex items-center justify-center">
                          <i className="ri-arrow-right-line text-white text-xs"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Styles */}
        <style jsx>{`
          .product-card {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          }

          .product-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #d1d5db;
            opacity: 0.5;
          }

          .product-swiper .swiper-pagination-bullet-active {
            background: linear-gradient(135deg, #399a8c 0%, #2d7a6e 100%);
            opacity: 1;
            width: 28px;
            border-radius: 6px;
          }
        `}</style>
      </div>
    </section>
  );
};

export default ProductSlider;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductSlider = () => {
  const [imageErrors, setImageErrors] = useState({});

  const products = [
    {
      name: "TELFOX-40",
      description: "Advanced cardiovascular therapy for optimal heart health",
      image: "/images/TELFOX-40.png",
    },
    {
      name: "PILGABA-MNT",
      description: "Comprehensive cardiovascular care medication",
      image: "/images/PILGABA-MNT.png",
    },
    {
      name: "UREPIL-D",
      description: "Advanced neurological treatment for better outcomes",
      image: "/images/UREPIL-D.png",
    },
    {
      name: "PILFIT-DM",
      description: "Mental health support with proven efficacy",
      image: "/images/PILFIT-DM.png",
    },
    {
      name: "PILFIT-Q10",
      description: "Comprehensive diabetes management solution",
      image: "/images/PILFIT-Q10.png",
    },
    {
      name: "TELFOX-TRIO",
      description: "Comprehensive diabetes management solution",
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
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header - Fully Responsive */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#112e51] mb-2 sm:mb-3 md:mb-4 px-2">
            Our <span className="italic text-[#399a8c]">Pharmaceutical</span>{" "}
            Solutions
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto px-4">
            Quality healthcare products with proven efficacy and safety
            standards
          </p>
        </div>

        {/* Enhanced Responsive Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={15}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet custom-bullet",
            bulletActiveClass:
              "swiper-pagination-bullet-active custom-bullet-active",
          }}
          loop={true}
          breakpoints={{
            // Mobile Portrait (320px और ऊपर)
            320: {
              slidesPerView: 1,
              spaceBetween: 12,
            },
            // Mobile Landscape (480px और ऊपर)
            480: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            // Small Tablets (640px और ऊपर)
            640: {
              slidesPerView: 2,
              spaceBetween: 18,
            },
            // Medium Tablets (768px और ऊपर)
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // Large Tablets (900px और ऊपर)
            900: {
              slidesPerView: 3,
              spaceBetween: 22,
            },
            // Desktop (1024px और ऊपर)
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            // Large Desktop (1200px और ऊपर)
            1200: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            // Extra Large (1400px और ऊपर)
            1400: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          style={{
            "--swiper-pagination-color": "#399a8c",
            "--swiper-pagination-bullet-inactive-color": "#d1d5db",
            "--swiper-pagination-bullet-inactive-opacity": "0.3",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-navigation-color": "#399a8c",
            "--swiper-navigation-size": "20px",
          }}
          className="pb-10 sm:pb-12 md:pb-14 custom-swiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="mb-12 sm:mb-16 md:mb-20 group bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-[#399a8c]/30 overflow-hidden h-72 sm:h-80 cursor-pointer mx-1 sm:mx-0">
                {/* Responsive Image Section */}
                <div className="relative h-40 sm:h-44 md:h-48 bg-gradient-to-br from-[#399a8c]/5 via-white to-gray-50/30 overflow-hidden">
                  {imageErrors[product.name] ? (
                    <div className="w-full h-full flex items-center justify-center p-3 sm:p-4 md:p-6">
                      <div className="text-center">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-2 sm:mb-3 bg-[#399a8c]/10 rounded-xl sm:rounded-2xl flex items-center justify-center">
                          <i className="ri-capsule-fill text-lg sm:text-xl md:text-2xl text-[#399a8c]"></i>
                        </div>
                        <p className="text-[#399a8c] font-bold text-xs sm:text-sm">
                          {product.name}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-2 sm:p-3 md:p-4 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500"
                      onError={() => handleImageError(product.name)}
                      onLoad={() => {
                        if (imageErrors[product.name]) {
                          setImageErrors((prev) => {
                            const newState = { ...prev };
                            delete newState[product.name];
                            return newState;
                          });
                        }
                      }}
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent"></div>
                </div>

                {/* Responsive Content Section */}
                <div className="p-3 sm:p-4 md:p-6 h-32 sm:h-36 md:h-32 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-[#112e51] text-base sm:text-lg md:text-xl leading-tight group-hover:text-[#399a8c] transition-colors duration-300 mb-1 sm:mb-2 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Enhanced Responsive Custom CSS */}
        <style jsx>{`
          .custom-swiper .swiper-pagination-bullet {
            background-color: #d1d5db;
            opacity: 0.4;
            transition: all 0.3s ease;
            width: 8px;
            height: 8px;
          }

          .custom-swiper .swiper-pagination-bullet-active {
            background-color: #399a8c !important;
            opacity: 1;
            transform: scale(1.2);
          }

          .custom-swiper .swiper-pagination-bullet:hover {
            opacity: 0.7;
          }

          .custom-swiper .swiper-button-next,
          .custom-swiper .swiper-button-prev {
            color: #399a8c;
            width: 35px;
            height: 35px;
          }

          @media (max-width: 640px) {
            .custom-swiper .swiper-button-next,
            .custom-swiper .swiper-button-prev {
              width: 30px;
              height: 30px;
              margin-top: -15px;
            }
            
            .custom-swiper .swiper-pagination-bullet {
              width: 6px;
              height: 6px;
            }
          }

          @media (max-width: 480px) {
            .custom-swiper .swiper-button-next,
            .custom-swiper .swiper-button-prev {
              display: none;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ProductSlider;

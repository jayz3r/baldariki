import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

const Cards = ({ cardData, category }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="py-8 sm:py-12 md:py-16 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: '.custom-swiper-button-next',
              prevEl: '.custom-swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              480: { 
                slidesPerView: 1.5,
                spaceBetween: 16 
              },
              640: { 
                slidesPerView: 2,
                spaceBetween: 20 
              },
              768: { 
                slidesPerView: 2.5,
                spaceBetween: 20 
              },
              1024: { 
                slidesPerView: 3,
                spaceBetween: 24 
              },
              1280: { 
                slidesPerView: 4,
                spaceBetween: 24 
              },
            }}
            className="pb-12! sm:pb-14!"
          >
            {cardData.map((item, id) => (
              <SwiperSlide key={id} className="h-auto">
                <NavLink 
                  to={`/${category}/${item.slug}`}
                  className="group block h-full"
                >
                  <div className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col group-hover:-translate-y-1 min-h-105 sm:min-h-115">
                    {/* Image Container */}
                    <div className="relative aspect-square overflow-hidden bg-gray-100">
                      <img 
                        src={item.img} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Optional Badge */}
                      {item.badge && (
                        <div className="absolute top-3 right-3 bg-[#3D1860] text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                          {item.badge}
                        </div>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col">
                      <h3 className="text-base sm:text-lg font-bold text-[#3D1860] mb-2 line-clamp-2 group-hover:text-[#5B2A86] transition-colors leading-tight">
                        {item.name}
                      </h3>

                      {/* Short Description */}
                      {item.text && (
                        <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2 flex-1">
                          {item.text}
                        </p>
                      )}

                      {/* Price */}
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                          <span className="text-lg sm:text-xl font-bold text-[#3D1860]">
                            {item.price || "1,500"} сом
                          </span>
                          {item.oldPrice && (
                            <span className="text-xs sm:text-sm text-gray-400 line-through">
                              {item.oldPrice} сом
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quick View Button (appears on hover on desktop) */}
                      <button className="hidden sm:block w-full mt-3 bg-[#3D1860] text-white py-2 rounded-lg font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-[#5B2A86]">
                        Подробнее
                      </button>
                    </div>
                  </div>
                </NavLink>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons - Show only on hover */}
          <button 
            className={`custom-swiper-button-prev absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#3D1860] group ${
              isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#3D1860] group-hover:text-white transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            className={`custom-swiper-button-next absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#3D1860] group ${
              isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#3D1860] group-hover:text-white transition-colors" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
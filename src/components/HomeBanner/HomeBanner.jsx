import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./HomeBanner.scss";
import { bannerData } from "../../assets/data";

const HomeBanner = () => {
  return (
    <div className="home-banner relative">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={1000}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: ".banner-pagination",
          bulletClass: "banner-bullet",
          bulletActiveClass: "banner-bullet-active",
        }}
        navigation={{
          nextEl: ".banner-next",
          prevEl: ".banner-prev",
        }}
        className="w-full h-full"
      >
        {bannerData.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="banner-image"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <button className="banner-prev custom-nav">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 6L9 12L15 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button className="banner-next custom-nav">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 6L15 12L9 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Custom Pagination */}
      <div className="banner-pagination"></div>
    </div>
  );
};

export default HomeBanner;

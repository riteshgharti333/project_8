import { reviewsData } from "../../assets/reviewData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

const Review = () => {
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleReadMore = (id) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className=" py-10 bg-white overflow-hidden">
      <div className="container mx-auto max-[480px]:px-1 px-4 ">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold tracking-widest text-yellow-600 uppercase">
            Abhimanyu Holidays
          </span>
          <h1 className="mt-2 text-3xl font-bold text-brand-brown sm:text-5xl">
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Happy Words From
            </span>{" "}
            Clients
          </h1>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".review-pagination",
            bulletClass: "review-bullet",
            bulletActiveClass: "review-bullet-active",
          }}
          navigation={{
            nextEl: ".review-next",
            prevEl: ".review-prev",
          }}
          modules={[Pagination, Navigation, Autoplay]}
          speed={800}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-16"
        >
          {reviewsData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-full p-1">
                <div className="h-full bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-lg hover:border-yellow-200">
                  <div className="max-[480px]:p-2 p-8 h-full flex flex-col">
                    <div className="flex justify-start text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i < item.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          } w-5 h-5`}
                        />
                      ))}
                    </div>

                    <FaQuoteLeft className="text-yellow-500 text-3xl opacity-20 mb-4" />

                    <div className="flex-grow">
                      <p
                        className={`text-gray-600 mb-4 ${
                          expandedReviews[index] ? "" : "line-clamp-5"
                        }`}
                      >
                        {item.review}
                      </p>

                      {item.review.length > 150 && (
                        <button
                          onClick={() => toggleReadMore(index)}
                          className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center transition-colors duration-300 mt-2 cursor-pointer"
                        >
                          {expandedReviews[index] ? "Read Less" : "Read More"}
                          <FiChevronRight
                            className={`ml-1 transition-transform duration-300 ${
                              expandedReviews[index]
                                ? "transform rotate-90"
                                : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    <div className="mt-6 flex items-center pt-4 border-t border-gray-100">
                      <div className="bg-yellow-100 p-2 rounded-full">
                        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {item.name.charAt(0)}
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-800">
                          {item.name}
                        </h4>
                        <p className="text-gray-500 text-sm">
                          {item.location || "Happy Customer"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center  items-center mt-8 space-x-4">
          <button className="review-prev p-2 rounded-full bg-white shadow-md hover:bg-yellow-500 hover:text-white text-yellow-600 cursor-pointer  transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="review-pagination justify-center items-center"></div>

          <button className="review-next cursor-pointer p-2 rounded-full bg-white shadow-md  text-yellow-600 hover:bg-yellow-500 hover:text-white transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <style jsx global>{`
        .swiper {
          overflow: visible !important;
        }
        .swiper-slide {
          transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0.9;
          transform: scale(0.96);
        }
        .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }
        .swiper-slide-next,
        .swiper-slide-prev {
          opacity: 0.9;
        }
        .review-bullet {
          display: inline-block;
          width: 12px;
          height: 12px;
          background: #e5e7eb;
          border-radius: 50%;
          margin: 0 4px;
          cursor: pointer;
          transition: all 300ms ease;
        }
        .review-bullet-active {
          background: linear-gradient(to right, #f59e0b, #d97706);
          width: 24px;
          border-radius: 6px;
        }
        .swiper-slide {
          height: auto;
        }
        .swiper-button-disabled {
          opacity: 0.3;
          pointer-events: none;
        }
        .line-clamp-5 {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Review;

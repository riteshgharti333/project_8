import React from "react";
import { bookCards } from "../../assets/data";

const Book = () => {
  return (
    <div className="px-0 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Premium Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest text-yellow-600 uppercase">
            Abhimanyu Holidays
          </span>
          <h1 className="mt-2 text-3xl font-bold text-brand-brown sm:text-5xl">
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              One Day
            </span>{" "}
            Tours
          </h1>
        </div>

        {/* Premium Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-1">
          {bookCards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl group relative"
            >
              {/* Image with overlay effect */}
              <div className="relative overflow-hidden h-60">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-3">
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-semibold text-brand-brown">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-4 text-sm">{item.desc}</p>

                <ul className="space-y-2 mb-6">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-4 h-4 text-yellow-500 mt-0.5 mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Book;

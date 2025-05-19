import React from "react";
import { checkCards } from "../../assets/data";

const Checkout = () => {
  return (
    <div className=" px-0 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white max-w-[1400px] mx-auto">
      {/* Premium Header */}
      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-widest text-yellow-600 uppercase">
          Nationwide Service
        </span>
        <h1 className="mt-2 text-3xl font-bold text-[#9D4C2C] sm:text-5xl">
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Available in
          </span>{" "}
          Other Cities
        </h1>
        <p className="mt-4 text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our premium transportation services across India
        </p>
      </div>

      {/* City Selection Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-10 px-1 sm:px-4">
        {checkCards.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl group relative"
          >
            <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center">
              <span className="text-lg font-semibold">{item.title}</span>
              <svg
                className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;

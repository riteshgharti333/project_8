import React from "react";
import { packageCard } from "../../assets/data";

const Package = () => {
  return (
    <div className="px-1 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white max-w-[1400px] mx-auto">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-widest text-yellow-600 uppercase block mb-2">
          Abhimanyu Holidays
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#9D4C2C]  leading-tight">
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Premium Taxi Services
          </span>{" "}
          in Jaipur
        </h1>
        <p className="mt-4 text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Luxury rides with professional chauffeurs for business and leisure
        </p>
      </div>

      {/* Premium Package Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-1 sm:px-4">
        {packageCard.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl group relative"
          >
            {/* Image with overlay effect */}
            <div className="relative overflow-hidden h-60">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-3">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-[#9D4C2C]">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6 text-sm">{item.desc}</p>

              <div className="flex justify-between items-center">
                 <button className="px-5 py-2.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Package;

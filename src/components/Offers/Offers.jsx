import React from "react";
import { features } from "../../assets/serviceData";



const Offers = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">Bus & Cab </span>
            <span className="block text-amber-600 mt-2">Booking Offers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.Icon; // Extract icon component properly
            return (
              <div
                key={feature.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-amber-100 text-amber-600">
                      <Icon className="text-xl" />{" "}
                      {/* ✅ Render the icon here */}
                    </div>
                    <h3 className="ml-4 text-lg font-bold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offers;

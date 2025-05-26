import React from "react";
import { features } from "../../assets/serviceData";

const Offers = ({ homeOffer }) => {
  return (
    <div className="">
      <div className="">
        {homeOffer ? (
          <div className="text-center mb-10">
            <span className="text-sm font-semibold tracking-widest text-yellow-600 uppercase block mb-2">
              Abhimanyu Holidays
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#9D4C2C]  leading-tight">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                What We
              </span>{" "}
              Offer
            </h1>
          </div>
        ) : (
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-2xl font-extrabold text-brand-brown sm:text-4xl">
              <span className="block">Bus & Cab </span>
              <span className="block bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent mt-2">
                Booking Offers
              </span>
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.Icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
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

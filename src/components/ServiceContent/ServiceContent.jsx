import React from "react";
import { aboutData } from "../../assets/aboutData";
import {
  carCards,
  features,
  placeCards,
  serviceData,
} from "../../assets/serviceData";
import { FaBoxTissue } from "react-icons/fa";
import ServiceForm from "../ServiceForm/ServiceForm";
import Offers from "../Offers/Offers";
import RentalFees from "../RentalFees/RentalFees";

const ServiceContent = () => {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <h2 className="text-2xl font-bold text-brand-brown">
          Jaipur Sightseeing Tour
        </h2>
        {aboutData.map((item, index) => (
          <p className="mt-5 text-gray-600" key={index}>
            {item}
          </p>
        ))}
      </div>

      <div className="max-w-4xl mx-auto  bg-white rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-brand-brown mb-7">
          Tour Plan of Jaipur Sightseeing
        </h2>

        <div className="space-y-6">
          <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Tour Highlights
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {serviceData.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Detailed Itinerary
            </h3>
            <ul className="space-y-4">
              {serviceData.itinerary.map((item, index) => (
                <li
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg hover:bg-amber-50 transition-colors duration-200"
                >
                  <div className="flex items-start">
                    <div className="bg-amber-100 text-amber-800 rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <span className="font-medium text-brand-brown">
                          {item.time}
                        </span>
                        <span className="hidden sm:block mx-2 text-gray-400">
                          •
                        </span>
                        <span className="font-semibold text-amber-600">
                          {item.activity}
                        </span>
                      </div>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Inclusions
              </h3>
              <ul className="space-y-2">
                {serviceData.inclusions.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-400">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Travel Tips
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceData.recommendations.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="">
        <h2 className="text-2xl font-bold text-brand-brown mb-7">
          Famous Sightseeing & Tourist Places to visit in Jaipur
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeCards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="py-2 text-center bg-primary-color">
                <h3 className="text-xl font-semibold text-white ">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <RentalFees />

      <Offers />

      <ServiceForm />
    </div>
  );
};

export default ServiceContent;

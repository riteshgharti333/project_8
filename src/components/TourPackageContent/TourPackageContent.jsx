import React from "react";
import { aboutData } from "../../assets/aboutData";
import { packageCards, packageTourData } from "../../assets/packageData";
import { MdPlace } from "react-icons/md";

import { motion } from "framer-motion";
import { FaClock, FaMapMarkerAlt, FaStar, FaArrowRight } from "react-icons/fa";
import Offers from "../Offers/Offers";
import ServiceForm from "../ServiceForm/ServiceForm";
import RentalFees from "../RentalFees/RentalFees";

const TourPackageContent = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <div className="sm:max-w-[750px] lg:max-w-[1100px] m-auto flex flex-col gap-20 mt-10 px-2">
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

      <div>
        <h2 className="text-2xl font-bold text-brand-brown mb-5">
          Places to visit in Jaipur
        </h2>
        <ul>
          {packageTourData.map((item, index) => (
            <li key={index} className="mb-5  text-gray-600">
              <span className="text-yellow-500 font-bold flex items-center gap-2 mb-2">
                <MdPlace /> {item.title} :{" "}
              </span>
              <span>{item.desc}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl font-extrabold text-brand-brown sm:text-4xl">
            <span className="block">Our Premium Tour Packages</span>
            <span className="block bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent mt-2">
              Experience Jaipur Like Never Before
            </span>
          </h2>
          <p className="mt-4 max-w-2xl  text-sm sm:text-xl text-gray-600 mx-auto">
            Carefully curated experiences showcasing the best of Pink City
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {packageCards.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Image with badge */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={pkg.img}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 space-y-2">
                    {pkg.isPopular && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-white">
                        POPULAR
                      </span>
                    )}
                    {pkg.isSpecial && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-purple-500 text-white">
                        SPECIAL OFFER
                      </span>
                    )}
                  </div>

                  {/* Duration */}
                  <span className="absolute bottom-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-gray-800">
                    <FaClock className="mr-1 text-amber-500" />
                    {pkg.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-6 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-brand-brown mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{pkg.desc}</p>

                    {/* Highlights */}
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Tour Highlights
                      </h4>
                      <ul className="space-y-1">
                        {pkg.highlights.map((item, i) => (
                          <li key={i} className="flex items-center">
                            <svg
                              className="h-4 w-4 text-amber-500 mr-2"
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

                  {/* Footer */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FaStar className="text-amber-400 mr-1" />
                        <span className="font-medium text-brand-brown">
                          {pkg.rating}
                        </span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="text-gray-600">{pkg.price}</span>
                      </div>
                      <motion.button
                        whileHover={{ x: 3 }}
                        className="inline-flex items-center text-amber-600 hover:text-amber-800 font-medium transition-colors"
                      >
                        Book Now <FaArrowRight className="ml-2" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
         
      </div>
            <RentalFees />
      
      <Offers />

      <ServiceForm />
    </div>
  );
};

export default TourPackageContent;

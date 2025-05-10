import React from "react";
import { aboutData } from "../../assets/aboutData";
import { rentalData, rentaLFees } from "../../assets/rentalData";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import Offers from "../Offers/Offers";
import ServiceForm from "../ServiceForm/ServiceForm";

const RentalContent = () => {
  const cardVariants = {
    offscreen: {
      y: 30,
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
        <h2 className="text-2xl font-bold text-gray-900">
          Car Rental Service in Jaipur
        </h2>
        <p className="mt-5 text-gray-600">
          The Pink City Holidays is a reputed name in the tourism industry of
          the country. We are offering a wide range of travel services to let
          our customers enjoy a smooth and comfortable transfer anywhere in the
          city and beyond. Experience the life and culture of Jaipur with our
          exclusive car rental services by making limitless anywhere you choose.
          Our taxi rental services ensure you the complete privacy you seek
          while allowing you to travel at your leisure. Be it for corporate
          trips or family outings, you can choose to travel anywhere with your
          travel partners. If you have any plans for outstation travel in
          Rajasthan, then simply book our car rental service and rest assured of
          affordable pricing.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Well-maintained fleet of Car –
        </h2>
        <p className="mt-5 text-gray-600">
          We have all well-maintained and clean vehicles that come with
          unlimited facilities ensuring you the comfort that you are seeking.
          All of our vehicles come with an unlimited number of kilometers, so
          you can focus on making memories rather than counting kilometers. You
          can hire cars for multiple durations – 4hr./40 kms (half-day), 8hr/80
          kms (full-day), and 12 hr./120 kms (full-day). Whatever your travel
          purpose is, our taxi rental service will help you drive through the
          cities comfortably. Here are the options available from us, from these
          you can choose any suitable one for you –
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">Premium Vehicle Rentals</span>
            <span className="block text-amber-600 mt-2">
              Travel in Comfort & Style
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm sm:text-xl text-gray-600 mx-auto">
            Choose from our fleet of well-maintained vehicles for your Jaipur
            exploration
          </p>
        </div>

        {/* Rental Options Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {rentalData.map((item, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col group">
                {/* Card Header */}
                <div className="p-3 pb-0">
                  <div className="flex items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                </div>

                {/* Models List */}
                <div className="px-3 mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Popular Models
                  </h4>
                  <ul className="space-y-1">
                    {item.models.map((model, i) => (
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
                        <span className="text-gray-700">{model}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer */}
                <div className="mt-auto p-3 pt-0">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <FaUser className="mr-1 text-amber-500" />
                      {item.capacity}
                    </span>
                    <span className="font-medium text-gray-900">
                      {item.price}
                    </span>
                  </div>
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
                    Book Now
                    <svg
                      className="ml-2 -mr-1 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">Premium</span>
            <span className="block text-amber-600 mt-2">Rental Fees</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm sm:text-xl text-gray-600 mx-auto">
            Choose from our fleet of well-maintained vehicles for your Jaipur
            exploration
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rentaLFees.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.2)] transition-all duration-300 h-full flex flex-col overflow-hidden">
                {/* Image with enhanced shadow */}
                <motion.div
                  className="h-64 overflow-hidden relative"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 shadow-[inset_0_-20px_30px_-10px_rgba(0,0,0,0.2)] z-10 pointer-events-none" />
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Content with floating effect */}
                <div className="p-6 flex-grow flex flex-col items-center text-center relative z-20 bg-white">
                  <p className="text-gray-600 uppercase text-sm tracking-wider mb-2">
                    {item.title}
                  </p>
                  <motion.h2
                    className="text-5xl font-bold text-gray-900 mb-1 drop-shadow-md"
                    whileHover={{ scale: 1.05 }}
                  >
                    ₹{item.price}
                  </motion.h2>
                  <p className="text-gray-500 text-sm shadow-sm">
                    Per Kilometer
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Offers />

      <ServiceForm />
    </div>
  );
};

export default RentalContent;

import React from "react";
import { aboutData } from "../../assets/aboutData";
import { rentalData, rentaLFees } from "../../assets/rentalData";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import Offers from "../Offers/Offers";
import ServiceForm from "../ServiceForm/ServiceForm";

const TempoContent = () => {
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
        <h2 className="text-2xl font-bold text-brand-brown">
          Book Our Taxi Services For Local Outstation Tour With Best Price
        </h2>
        <p className="mt-5 text-gray-600">
          Tempo Traveller in Jaipur is a popular mode of transportation for
          exploring the city and its surrounding areas. These spacious,
          comfortable vehicles offer convenience, flexibility, and a hassle-free
          travel experience. Whether traveling with family or friends, a Tempo
          Traveller provides ample seating, modern amenities, and the freedom to
          customize your itinerary. With a suitable Tempo Traveller rental, you
          can easily visit Jaipur’s iconic landmarks, chaotic markets, and
          cultural sites. It is an ideal choice for exploring Jaipur’s
          architectural marvels and immersing yourself in the royal heritage of
          Pink City.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-brand-brown">
          Tempo Traveller for Airport Pickup & Drop –
        </h2>
        <p className="mt-5 text-gray-600">
          The Pink City Holidays offer tempo traveller services in Jaipur for
          pickup and drop services from Jaipur airport. We offer special rates
          for airport pickup and drop at the hotel for checking in and
          sightseeing. Book a perfect tempo traveller vehicle with us for a
          corporate group tour or family travel. We assure you of hassle-free
          pickup service from Jaipur international airport. We are specialised
          in airport transfers by offering a wide range of tempo traveller
          rental services from all Indian airports for both individuals and
          groups driven by professional chauffeurs at an affordable cost.
        </p>
      </div>

      <div className="">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-extrabold text-brand-brown sm:text-4xl">
            <span className="block">Tempo</span>
            <span className="block bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent mt-2">
              Rental Service
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm lg:text-xl text-gray-600 mx-auto">
            Choose from our fleet of well-maintained vehicles for your Jaipur
            exploration
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
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
                  <motion.h2
                    className="text-2xl font-bold text-gray-900 mb-1 drop-shadow-md"
                    whileHover={{ scale: 1.05 }}
                  >
                    12 Seater Tempo Travaller
                  </motion.h2>
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

export default TempoContent;

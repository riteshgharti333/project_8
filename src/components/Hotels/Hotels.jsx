import {
  FaBed,
  FaMapMarkerAlt,
  FaStar,
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaUtensils,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { homeHotelsData } from "../../assets/bookingData";
import { Link } from "react-router-dom";

const Hotels = () => {
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
    <div className="px-0 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
      {/* Premium Header */}
      <div className="text-center mb-10">
        <span className="text-sm font-semibold tracking-widest text-yellow-600 uppercase">
          Abhimanyu Holidays
        </span>
        <h1 className="mt-2 text-3xl font-bold text-brand-brown sm:text-5xl">
          Hotel
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            {" "}
            Booking
          </span>
        </h1>
        <p className="mt-4 text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Premium accommodations showcasing Rajasthan's royal hospitality and
          modern comforts
        </p>
      </div>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {homeHotelsData.map((hotel) => (
          <motion.div
            key={hotel.id}
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
                  src={hotel.img}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-3 sm:p-6 flex-grow flex flex-col">
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-brand-brown">
                      {hotel.name}
                    </h3>
                  </div>

                  <div className="flex items-center text-gray-600 mb-3">
                    <FaMapMarkerAlt className="mr-1 text-yellow-500" />
                    <span className="text-sm">{hotel.location}</span>
                  </div>

                  <p className="text-gray-600 mb-4">{hotel.description}</p>

                  {/* Amenities */}
                  <div className="mb-7">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Amenities
                    </h4>
                    <ul className="flex items-center gap-2 flex-wrap">
                      {hotel.amenities.map((amenity, i) => (
                        <li
                          key={i}
                          className="flex items-center text-[12px] bg-blue-500 text-white rounded-full px-3 py-1"
                        >
                          {amenity.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to={`${hotel.link}`}
                  className="w-full flex justify-center bg-yellow-500 cursor-pointer text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg hover:bg-white border border-yellow-500 hover:text-yellow-500"
                >
                  Read More
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;

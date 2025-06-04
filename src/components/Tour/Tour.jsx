import { FaClock, FaMapMarkerAlt, FaStar, FaArrowRight } from "react-icons/fa";

import { motion } from "framer-motion";
import { packageCards } from "../../assets/packageData";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Tour = () => {
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
    <div className=" px-0 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
      {/* Premium Header */}
      <div className="text-center mb-10">
        <span className="text-sm font-semibold tracking-widest text-yellow-600 uppercase">
          Abhimanyu Holidays
        </span>
        <h1 className="mt-2 text-3xl font-bold text-brand-brown sm:text-5xl">
          Tour
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            {" "}
            Packages
          </span>
        </h1>
        <p className="mt-4 text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Curated experiences showcasing Rajasthan's royal heritage and cultural
          wonders
        </p>
      </div>

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
                  <div className="mb-7">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Tour Highlights
                    </h4>
                    <ul className=" flex items-center gap-y-2 gap-1 flex-wrap">
                      {pkg.highlights.map((item, i) => (
                        <li key={i} className="">
                          <span className=" text-[13px] rounded-4xl px-2 py-1  text-white bg-blue-700">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="w-full bg-amber-500   cursor-pointer  text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg hover:bg-white border border-yellow-500 hover:text-yellow-500">
                  Read More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tour;

import { FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import { motion } from "framer-motion";

const PackageCards = ({ packageCards, path, linkPath }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {packageCards.map((item, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                delay: index * 0.05,
              },
            },
            hover: {
              y: -5,
              transition: { type: "spring", stiffness: 400 },
            },
          }}
          className="group relative"
        >
          {/* Card container with subtle shine effect on hover */}
          <div className="relative h-full bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
            {/* Image with zoom and shine overlay */}
            <div className="relative h-56 overflow-hidden">
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Content area */}
            <div className="p-5 flex-grow flex flex-col">
              <div className="flex-grow">
                {/* Title with underline animation */}
                <motion.h3
                  className={`text-xl font-bold text-gray-800 ${
                    path === "removeDu" ? "mb-0" : "mb-2"
                  } relative inline-block`}
                >
                  {item.title}
                </motion.h3>

                <p className="text-gray-600 mb-4 line-clamp-2">{item.desc}</p>
              </div>

              {/* Metadata with subtle animation */}
              {path === "removeDu" ? (
                ""
              ) : (
                <motion.div
                  className="mb-4 flex items-center text-sm text-gray-500"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <FiClock className="mr-2" />
                  {item.duration}
                </motion.div>
              )}

              {/* Footer with animated button */}
              <Link
                to={`/${linkPath}/${item.link}`}
                className="mt-auto cursor-pointer pt-4 border-t border-gray-100"
              >
                <motion.button
                  className="w-full cursor-pointer flex items-center justify-between px-4 py-2.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group-hover:border-yellow-200 group-hover:bg-yellow-50"
                  whileHover={{
                    x: 3,
                    transition: { type: "spring", stiffness: 500 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-medium text-gray-700 group-hover:text-yellow-600 transition-colors">
                    Explore More
                  </span>
                  <motion.div
                    animate={{
                      x: [0, 4, 0],
                      transition: {
                        repeat: Infinity,
                        duration: 1.5,
                        delay: 1,
                      },
                    }}
                    className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <FaArrowRight />
                  </motion.div>
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Subtle glow on hover */}
          <div className="absolute inset-0 rounded-xl border-2 border-yellow-200 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-10" />
        </motion.div>
      ))}
    </div>
  );
};

export default PackageCards;

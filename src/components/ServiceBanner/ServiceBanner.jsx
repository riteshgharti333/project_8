import { useEffect, useState } from "react";
import {
  FaChevronDown,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaSearch,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const banner_img =
  "https://images.unsplash.com/photo-1518614768202-663a3a0ecf59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ServiceBanner = ({ bannerTitle, bannerImg }) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="h-[500px] w-full relative"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src={bannerImg}
          alt="Jaipur Tourism"
          className="h-full w-full object-cover block brightness-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent" />
      </motion.div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-1 sm:px-4 text-center">
        {/* Animated Title */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-5xl font-bold text-white uppercase mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {bannerTitle}
        </motion.h1>

        {/* Book Now Button with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-5"
        >
          <Link
            to="/contact-us"
            className="relative overflow-hidden group px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold cursor-pointer rounded-full text-sm sm:text-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10">BOOK NOW</span>
            {/* Hover effect background */}
            <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            {/* Animated circles on hover */}
            <span className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-full">
              {[...Array(3)].map((_, i) => (
                <span
                  key={i}
                  className="absolute block bg-white opacity-20 rounded-full"
                  style={{
                    width: "100%",
                    height: "100%",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(0)",
                    transition: `all ${0.6 + i * 0.1}s`,
                  }}
                />
              ))}
            </span>
            {/* Ripple effect */}
            <span
              className="absolute block bg-white opacity-0 group-hover:opacity-40 rounded-full transition-all duration-700"
              style={{
                width: "100px",
                height: "100px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(0)",
              }}
            />
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FaChevronDown className="text-white text-2xl opacity-80" />
      </motion.div>
    </div>
  );
};

export default ServiceBanner;

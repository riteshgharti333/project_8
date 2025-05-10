import { useEffect, useState } from "react";
import {
  FaChevronDown,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaSearch,
} from "react-icons/fa";
import { motion } from "framer-motion";

const banner_img =
  "https://images.unsplash.com/photo-1518614768202-663a3a0ecf59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ServiceBanner = ({ bannerTitle }) => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="h-[500px] w-full relative"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src={banner_img}
          alt="Jaipur Tourism"
          className="h-full w-full object-cover block brightness-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent" />
      </motion.div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-1 sm:px-4 text-center">
        {/* Animated Title */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {bannerTitle}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl text-amber-300 mb-3 max-[480px]:text-[14px]  sm:mb-8 max-w-2xl mx-auto drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover the Pink City's royal heritage with our premium services
        </motion.p>

        {/* Quick Links */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {["Heritage Walks", "Luxury Cars", "Day Trips", "Cultural Shows"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:text-amber-300 px-4 py-2 border border-white/30 hover:border-amber-300 rounded-full text-sm font-medium transition-all duration-300"
              >
                {item}
              </a>
            )
          )}
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

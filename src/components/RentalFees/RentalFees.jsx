import { motion } from "framer-motion";
import { taxies } from "../../assets/data";
import { TbEngine } from "react-icons/tb";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
const StarIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const UserIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const CogIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const FuelIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const AirConditionerIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);


const RentalFees = ({ homeRental }) => {
  return (
    <div className="">
      {homeRental ? (
        <div className="text-center mb-10">
          <span className="text-sm font-semibold tracking-widest text-yellow-600 uppercase block mb-2">
            Abhimanyu Holidays
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#9D4C2C]  leading-tight">
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Taxi{" "}
            </span>
            Services
          </h1>
        </div>
      ) : (
        <div className="text-center mb-12">
          <h2 className="text-2xl font-extrabold text-brand-brown sm:text-4xl">
            <span className="block">Our</span>
            <span className="block bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent mt-2">
              Rental Fees
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm sm:text-xl text-gray-600 mx-auto">
            Choose from our fleet of well-maintained vehicles for your Jaipur
            exploration
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {taxies.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            {/* Premium Card Container */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col overflow-hidden border border-[#ddd]">
              {/* Image with parallax effect container */}
              <motion.div
                className="h-72 overflow-hidden relative"
                whileHover="hover"
                variants={{
                  hover: {
                    scale: 1.03,
                    transition: { duration: 0.4 },
                  },
                }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />

                {/* Car image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-20">
                  Popular
                </div>
              </motion.div>

              {/* Content area */}
              <div className="p-6 flex-grow flex flex-col">
                {/* Vehicle type and name */}
                <div className="mb-4">
                  <span className=" text-gray-500 uppercase text-1xl tracking-wider font-medium">
                    {item.vehicle}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">
                    {item.title}
                  </h3>
                </div>

                {/* Features list - enhanced layout */}
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <UserIcon className="h-4 w-4 text-amber-600" />
                    </div>
                    <span>{item.seats} Seats</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <TbEngine className="h-4 w-4 text-amber-600" />
                    </div>
                    <span>{item.fuelType}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <CogIcon className="h-4 w-4 text-amber-600" />
                    </div>
                    <span>{item.transmission}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <AirConditionerIcon className="h-4 w-4 text-amber-600" />
                    </div>
                    <span>AC {item.ac ? "Available" : "Not Available"}</span>
                  </div>
                </div>

                {/* CTA Button - enhanced design */}
                <Link to={"/contact-us"} className="w-full cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:from-amber-600 hover:to-amber-700 group-hover:scale-[1.02] mt-auto">
                  <span className="flex items-center justify-center">
                    Book Now
                    <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RentalFees;

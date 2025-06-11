import {
  aboutData,
  aboutServices,
  founderData,
  visionData,
} from "../../assets/aboutData";
import { MdOutlineVerified } from "react-icons/md";
import useFullUrl from "../../utils/useFullUrl";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const banner_img =
  "https://images.unsplash.com/photo-1518614768202-663a3a0ecf59?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const about_img =
  "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-4.1.0&auto=format&fit=crop&w=1374&q=80";

const About = () => {
  const fullUrl = useFullUrl();

  return (
    <div>
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
            About Us
          </motion.h1>
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
      {/* ////////////// */}
      <div className="max-w-[1100px] m-auto mt-20 flex flex-col gap-20 max-[480pc]:px-2 px-5">
        <div>
          <h1 className=" max-[480pc]:text-2xl text-3xl font-bold text-brand-brown sm:text-3xl uppercase">
            Company Profile -
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              {" "}
              Abhimanyu Holidays
            </span>
          </h1>
          {aboutData.map((item, index) => (
            <p key={index} className="mt-3  max-[480pc]:text-1xl text-gray-600">
              {item}
            </p>
          ))}
        </div>

        <div className="flex gap-10 items-center  flex-col lg:flex-row">
          <div className="flex-6">
            <h1 className=" max-[480pc]:text-2xl text-3xl font-bold text-brand-brown sm:text-3xl uppercase">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                About Owner
              </span>{" "}
              – Mr. Bhom Singh Shekhawat
            </h1>
            {founderData.map((item, index) => (
              <p key={index} className="mt-5 leading-6 text-gray-600">
                {item}
              </p>
            ))}
          </div>
          {/* <div className="flex-4">
            <img
              src={about_img}
              alt=""
              className="rounded-xl w-full h-150 object-cover"
            />
          </div> */}
        </div>

        <div className="flex gap-10 items-center flex-col lg:flex-row">
          <div className="flex-6">
            <h1 className="  max-[480pc]:text-2xl text-3xl font-bold text-brand-brown sm:text-3xl uppercase leading-13">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Our
              </span>{" "}
              Services
            </h1>
            <p className="mt-3 leading-6 text-gray-600">
              With our consistent efforts and value added services, we are able
              to establish ourselves as a leading travel services provider in
              our market within a short span of time. Our range of services
              includes:
            </p>

            <ul className="mt-5 ml-5">
              {aboutServices.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-5 mb-5 text-[15px] font-semibold"
                >
                  <MdOutlineVerified className="text-[20px] text-blue-900 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="flex-4">
            <img
              src={about_img}
              alt=""
              className="rounded-xl w-full h-150 object-cover"
            />
          </div> */}
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto my-20 px-5 max-[480px]:px-2">
        <h1 className="text-3xl max-[480px]:text-2xl font-bold text-brand-brown sm:text-3xl uppercase mb-7">
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Our
          </span>{" "}
          Specialized Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* One Day Tours */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <MdOutlineVerified className="text-yellow-600 text-2xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  One Day Tours
                </h2>
              </div>
              <ul className="space-y-2 pl-2">
                {[
                  "Jaipur Sightseeing Tour",
                  "Jaipur Night Tour",
                  "Day Trip to Ajmer & Pushkar",
                  "One Day Trip to Agra (Taj Mahal)",
                  "One Day Trip to Ranthambore",
                  "Khatu Shyam & Salasar Dham Tour",
                  "Chokhi Dhani Night Cultural Tour",
                  "Jaipur Temple Tour",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Tour Packages */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MdOutlineVerified className="text-blue-600 text-2xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Tour Packages
                </h2>
              </div>
              <ul className="space-y-2 pl-2">
                {[
                  "Custom Rajasthan Tours",
                  "Weekend Getaways",
                  "Family & Group Packages",
                  "Heritage and Culture Tours",
                  "Spiritual Journey Packages",
                  "Luxury Rajasthan Experiences",
                  "Adventure & Wildlife Tours",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Taxi Services */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MdOutlineVerified className="text-green-600 text-2xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Taxi Services
                </h2>
              </div>
              <ul className="space-y-2 pl-2">
                {[
                  "AC Cabs for Local & Outstation",
                  "Airport Pick-up & Drop",
                  "Chauffeur-driven Vehicles",
                  "24/7 Taxi Availability",
                  "Multi-city Travel Solutions",
                  "Luxury Car Rentals",
                  "Safe & Professional Drivers",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Hotel Booking */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <MdOutlineVerified className="text-purple-600 text-2xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Hotel Booking
                </h2>
              </div>
              <ul className="space-y-2 pl-2">
                {[
                  "Budget to 5-Star Properties",
                  "Heritage & Palace Stays",
                  "Personalized Recommendations",
                  "Best Price Guarantee",
                  "Convenient Locations",
                  "Group Booking Discounts",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Travel Guide */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <MdOutlineVerified className="text-red-600 text-2xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">
                  Travel Guide
                </h2>
              </div>
              <ul className="space-y-2 pl-2">
                {[
                  "Knowledgeable Local Guides",
                  "Multilingual Support",
                  "History & Culture Walks",
                  "Temple & Spiritual Tours",
                  "Customized Itineraries",
                  "Photography Assistance",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-primary-color py-10 px-2  sm:p-10 my-20">
        <h1 className="text-center text-white text-5xl font-bold mb-15 uppercase max-[480px]:text-4xl">
          Our
          <span className="text-yellow-500"> Vision</span>
        </h1>
        <div className="grid grid-cols-1 max-[480px]:gap-10  sm:grid-cols-2 gap-5 sm:gap-10 max-w-[1000px] m-auto">
          {visionData.map((item, index) => (
            <div className="flex flex-col items-center text-center" key={index}>
              <item.icon className="text-white text-[70px]" />

              <div>
                <h1 className="text-yellow-500 font-bold text-3xl my-5 ">
                  {item.title}
                </h1>
                <p className="text-white text-sm sm:text-md">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  s;
};

export default About;

import { Link, useLocation } from "react-router-dom";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import { formatPathTitle } from "../../assets/someFunction";
import TourPackageContent from "../../components/TourPackageContent/TourPackageContent";
import { aboutData } from "../../assets/aboutData";
import { packageCards, packageTourData } from "../../assets/packageData";
import { MdPlace } from "react-icons/md";

import { motion } from "framer-motion";
import { FaArrowRight, FaClock, FaStar } from "react-icons/fa";
import RentalFees from "../../components/RentalFees/RentalFees";
import Offers from "../../components/Offers/Offers";
import ServiceForm from "../../components/ServiceForm/ServiceForm";
import { onedayCards, onedayData } from "../../assets/oneDayData";

import banner_img from "../../assets/images/onedayImgs/oneday15.jpg"


const OneDayTour = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

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
    <div>
      <ServiceBanner bannerTitle={title} bannerImg={banner_img} />

      <div className="sm:max-w-[750px] lg:max-w-[1100px] m-auto flex flex-col gap-20 mt-10 px-2">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-2xl font-bold text-brand-brown">
              {onedayData.title}
            </h2>
            {onedayData.ondayContent1.map((item, index) => (
              <p className="mt-5 text-gray-600" key={index}>
                {item}
              </p>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-brown mb-5">
              {onedayData.ondayContent2.title}
            </h2>
            <ul className="ml-5 flex flex-col gap-3 list-disc marker:text-yellow-500">
              {onedayData.ondayContent2.ondayContentLists.map((item, index) => (
                <li key={index} className=" text-gray-600">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className=" text-gray-600">{onedayData.ondayContent3.title}</p>

          <div>
            <h2 className="text-2xl font-bold text-brand-brown mb-5">
              {onedayData.ondayContent4.title}
            </h2>
            <ul className="ml-5 flex flex-col gap-3 list-disc marker:text-yellow-500">
              {onedayData.ondayContent4.ondayContentLists.map((item, index) => (
                <li key={index} className=" text-gray-600">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className=" text-gray-600">{onedayData.ondayContent5.title}</p>
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
              <span className="block">Our</span>
              <span className="block bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent mt-2">
                One Day Tours
              </span>
            </h2>
          </motion.div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {onedayCards.map((item,index) => (
              <motion.div
                key={index}
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
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-6 flex-grow flex flex-col">
                    <div className="flex-grow">
                      <h3 className="text-xl text-center font-bold text-brand-brown">
                        {item.title}
                      </h3>
                    </div>

                    <Link to={`/${item.link}`} className="w-full bg-amber-500 flex items-center justify-center   cursor-pointer  text-white font-medium py-3 px-4 mt-5 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg hover:bg-white border border-yellow-500 hover:text-yellow-500">
                      Explore More
                      <FaArrowRight className="ml-2 transition-transform duration-300 transform group-hover:translate-x-2" />
                    </Link>
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
    </div>
  );
};

export default OneDayTour;

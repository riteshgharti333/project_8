import React from "react";
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiClock,
  FiUser,
  FiShare2,
  FiBookmark,
  FiArrowRight,
} from "react-icons/fi";
import {
  blog,
  oneDayTourData,
  rajasthanBestHotels,
  rajasthanBestRoadTrips,
  rajasthanGoldenTriangleTours,
  rajasthanHiddenGems,
  rajasthanTopDestinations,
  relatedArticles,
} from "../../assets/blogsData";
import ServiceSidebar from "../../components/ServiceSidebar/ServiceSidebar";
import EnquiryForm from "../../components/EnquiryForm/EnquiryForm";

const Blog7 = () => {
  const {
    blogContent1,
    blogContent2,
    blogContent3,
    blogContent4,
    blogContent5,
    blogContent6,
    blogContent7,
    blogContent8,

  } = rajasthanGoldenTriangleTours;

  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-blue-800 to-indigo-900 py-20 px-1 sm:px-6 lg:px-8 text-white"
      >
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <span className="inline-block bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-bold mb-4">
              {blogContent1.category}
            </span>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {blogContent1.title}
            </h1>
          </motion.div>

          {/* Author and Date Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8"
          >
            <div className="flex items-center flex-wrap gap-5 justify-center space-x-6 text-sm md:text-base">
              <span className="flex items-center">
                <FiCalendar className="mr-2" />
                {blogContent1.date}
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="flex max-w-[1200px] m-auto mt-10 gap-5 flex-col px-1 lg:flex-row ">
        <div className="flex-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          ></motion.div>

          <img
            src={blogContent1.img}
            alt=""
            className="w-full h-[400px] object-cover "
            loading="lazy"
          />

          <div className="mt-5">
            <h2 className="text-2xl font-bold text-brand-brown">
              {blogContent1.title}
            </h2>
            {blogContent1.desc.map((item, index) => (
              <p className="mt-5 text-gray-600" key={index}>
                {item}
              </p>
            ))}
          </div>

          <div className="mt-5">
            <h2 className="text-2xl font-bold text-brand-brown">
              {blogContent2.title}
            </h2>
            {blogContent2.desc.map((item, index) => (
              <p className="mt-5 text-gray-600" key={index}>
                {item}
              </p>
            ))}

            <ul className="ml-5 flex flex-col gap-3 list-disc marker:text-yellow-500 mt-5">
              {blogContent2.lists.map((item, index) => (
                <li key={index} className=" text-gray-600">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h2 className="text-2xl font-bold text-brand-brown">
              {blogContent3.title}
            </h2>
            {blogContent3.desc.map((item, index) => (
              <p className="mt-5 text-gray-600" key={index}>
                {item}
              </p>
            ))}

            <ul className="ml-5 flex flex-col gap-3 list-disc marker:text-yellow-500 mt-5">
              {blogContent3.lists.map((item, index) => (
                <li key={index} className=" text-gray-600">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h2 className="text-2xl font-bold text-brand-brown">
              {blogContent4.title}
            </h2>
            {blogContent4.desc.map((item, index) => (
              <p className="mt-5 text-gray-600" key={index}>
                {item}
              </p>
            ))}

            <ul className="ml-5 flex flex-col gap-3 list-disc marker:text-yellow-500 mt-5">
              {blogContent4.lists.map((item, index) => (
                <li key={index} className=" text-gray-600">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h2 className="text-2xl font-bold text-brand-brown">
              {blogContent5.title}
            </h2>
            {blogContent5.desc.map((item, index) => (
              <p className="mt-5 text-gray-600" key={index}>
                {item}
              </p>
            ))}
            <ul className="ml-5 flex flex-col gap-3 list-disc marker:text-yellow-500 mt-5">
              {blogContent5.lists.map((item, index) => (
                <li key={index} className=" text-gray-600">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h2 className="text-2xl font-bold text-brand-brown">
              {blogContent6.title}
            </h2>
            {blogContent6.desc.map((item, index) => (
              <p className="mt-5 text-gray-600" key={index}>
                {item}
              </p>
            ))}
            <ul className="ml-5 flex flex-col gap-3 list-disc marker:text-yellow-500 mt-5">
              {blogContent6.lists.map((item, index) => (
                <li key={index} className=" text-gray-600">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h2 className="text-2xl font-bold text-brand-brown">
              {blogContent7.title}
            </h2>
            {blogContent7.desc.map((item, index) => (
              <p className="mt-5 text-gray-600" key={index}>
                {item}
              </p>
            ))}
            <ul className="ml-5 flex flex-col gap-3 list-disc marker:text-yellow-500 mt-5">
              {blogContent7.lists.map((item, index) => (
                <li key={index} className=" text-gray-600">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>


          <div className="mt-5">
            <h2 className="text-2xl font-bold text-brand-brown">
              {blogContent8.title}
            </h2>
            {blogContent8.desc.map((item, index) => (
              <p className="mt-5 text-gray-600" key={index}>
                {item}
              </p>
            ))}
          </div>

          {/* Inquiry Form Section */}
          <div className="mt-16">
            <EnquiryForm />
          </div>

          {/* Related Articles Section (keep your existing code below this) */}

          {/* Related Articles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-brand-brown mb-8 pb-2 border-b border-gray-200">
              You Might Also Like
            </h3>

            <div className="grid grid-cols-1 min-[600px]:grid-cols-2 gap-8">
              {relatedArticles.map((article) => (
                <motion.div
                  key={article.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-xs mb-3 space-x-4">
                      <span className="flex items-center">
                        <FiCalendar className="mr-1" />
                        {article.date}
                      </span>
                      <span className="flex items-center">
                        <FiClock className="mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                    <h4 className="font-bold text-xl mb-3 text-brand-brown transition-all duration-300 ease-in-out hover:text-yellow-500 cursor-pointer leading-snug">
                      {article.title}
                    </h4>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <button className="flex items-center text-blue-600 font-medium group transition-all duration-300 ease-in-out hover:text-yellow-500  cursor-pointer">
                      Read More
                      <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex-3">
          <ServiceSidebar />
        </div>
      </div>
    </div>
  );
};

export default Blog7;

import React from "react";
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";
import {
  rajasthanTopDestinations,
} from "../../assets/blogsData";
import ServiceSidebar from "../../components/ServiceSidebar/ServiceSidebar";
import EnquiryForm from "../../components/EnquiryForm/EnquiryForm";

const Blog2 = () => {
  const {
    blogContent1,
    blogContent2,
    blogContent3,
    blogContent4,
    blogContent5,
    blogContent6,
    blogContent7,
    blogContent8,
    blogContent9,
  } = rajasthanTopDestinations;

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
            loading="lazy"
            className="w-full h-[400px] object-cover "
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
            <ul className="ml-5 flex flex-col gap-3 list-disc marker:text-yellow-500 mt-5">
              {blogContent8.lists.map((item, index) => (
                <li key={index} className=" text-gray-600">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h2 className="text-2xl font-bold text-brand-brown">
              {blogContent9.title}
            </h2>
            {blogContent9.desc.map((item, index) => (
              <p className="mt-5 text-gray-600" key={index}>
                {item}
              </p>
            ))}
          </div>

          {/* Inquiry Form Section */}
          <div className="mt-16">
            <EnquiryForm />
          </div>

        </div>

        <div className="flex-3">
          <ServiceSidebar />
        </div>
      </div>
    </div>
  );
};

export default Blog2;

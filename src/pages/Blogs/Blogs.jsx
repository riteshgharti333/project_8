import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCalendar, FiClock } from "react-icons/fi";

import { blogData } from "../../assets/blogsData";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");
  const blogsPerPage = 8;
  const blogGridRef = useRef(null);

  const scrollTop = () => {
    blogGridRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Get unique categories
  const categories = ["All"];

  // Filter blogs by category
  const filteredBlogs =
    activeCategory === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === activeCategory);

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  return (
    <div className="min-h-scree">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-600 to-indigo-800 py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-10"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Our Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto"
            >
              Insights, stories, and ideas from our team of experts
            </motion.p>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
          className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-indigo-400 opacity-20"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
          className="absolute -bottom-40 right-20 w-80 h-80 rounded-full bg-blue-400 opacity-20"
        ></motion.div>
      </motion.div>

      {/* Main Content */}
      <div ref={blogGridRef} className="max-w-[1200px] m-auto px-2 mt-10">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gradient-to-br from-gray-50 to-gray-100">
          {currentBlogs.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Image Section - Fixed Height */}
              <div className="relative overflow-hidden h-48 flex-shrink-0">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content Section - Flex Grow for consistent button placement */}
              <div className="p-3 flex flex-col flex-grow">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <FiCalendar className="mr-1" />
                  <span className="mr-4">{blog.date}</span>
                </div>

                {/* Title with line clamp for consistent height */}
                <h3 className="text-xl font-bold mb-3 text-brand-brown line-clamp-2 transition-all duration-300 ease-in-out hover:text-yellow-500">
                  <Link to={blog.link}>{blog.title}</Link>
                </h3>

                {/* Description with line clamp */}
                <p className="text-gray-600 mb-5 line-clamp-2">{blog.desc}</p>

                {/* Button container that stays at bottom */}
                <div className="mt-auto pt-4">
                  <Link
                    to={blog.link}
                    className="flex items-center text-blue-600 font-medium group transition-all duration-300 ease-in-out hover:text-yellow-500"
                  >
                    Read More
                    <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1 ease-in-out hover:text-yellow-500" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {filteredBlogs.length > blogsPerPage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <div className="flex space-x-2">
              {Array.from({
                length: Math.ceil(filteredBlogs.length / blogsPerPage),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    paginate(index + 1);
                    scrollTop();
                  }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer hover:border hover:border-blue-600  ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Blogs;

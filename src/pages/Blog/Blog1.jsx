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
import { blog, relatedArticles } from "../../assets/blogsData";
import ServiceSidebar from "../../components/ServiceSidebar/ServiceSidebar";
import EnquiryForm from "../../components/EnquiryForm/EnquiryForm";

const Blog1 = () => {
  const renderContent = () => {
    return blog.content.map((block, index) => {
      switch (block.type) {
        case "paragraph":
          return (
            <p key={index} className="text-gray-700 mb-6 leading-relaxed">
              {block.text}
            </p>
          );
        case "heading":
          return (
            <h3
              key={index}
              className="text-2xl font-bold text-brand-brown mt-8 mb-4"
            >
              {block.text}
            </h3>
          );
        case "list":
          return (
            <ul
              key={index}
              className="list-disc pl-6 mb-6 space-y-2 text-gray-700"
            >
              {block.items.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
              {blog.category}
            </span>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {blog.title}
            </h1>
            <p className="text-sm sm:text-xl opacity-90 max-w-3xl mx-auto mb-8">
              {blog.excerpt}
            </p>
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
                {blog.date}
              </span>
              <span className="flex items-center">
                <FiClock className="mr-2" />
                {blog.readTime}
              </span>
              {blog.updatedDate && (
                <span className="text-xs bg-white/20 px-2 py-1 rounded">
                  Updated: {blog.updatedDate}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="flex max-w-[1200px] m-auto mt-10 gap-5 px-2 flex-col lg:flex-row">
        <div className="flex-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Featured Image */}
            <div className="relative h-96 w-full overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Blog Content */}
            <div className="p-3 md:p-5 lg:p-5">
              {/* Action Buttons */}
              <div className="flex justify-between items-center mb-8 border-b pb-6">
                <div className="flex space-x-4">
                  <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                    <FiShare2 className="mr-2" /> Share
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                    <FiBookmark className="mr-2" /> Save
                  </button>
                </div>
                <span className="text-sm text-gray-500">
                  <FiUser className="inline mr-1" /> {blog.author.name}
                </span>
              </div>

              {/* Blog Body with Enhanced Typography */}
              <article className="prose prose-lg max-w-none">
                {renderContent()}

                {/* Author Bio */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-start space-x-4">
                    <img
                      src={blog.author.avatar}
                      alt={blog.author.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-brand-brown">
                        About {blog.author.name}
                      </h4>
                      <p className="text-gray-600 mt-1">{blog.author.bio}</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </motion.div>

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

export default Blog1;

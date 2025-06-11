import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaRegStickyNote } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="min-h-screen">
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
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto"
            >
              We'd love to hear from you! Reach out for inquiries, support, or
              just to say hello.
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
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow border  border-[#ddd] max-[480px]:px-3 max-[480px]:py-6 p-8"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold  text-brand-brown mb-2">
                Get in Touch
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you soon.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all outline-none"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all outline-none"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all outline-none"
                  placeholder="+91 98XXXXXXX"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all outline-none"
                  placeholder="What's this about?"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  rows="8"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all outline-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <FiSend className="mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border  border-[#ddd]">
              <h3 className="text-2xl font-bold text-brand-brown mb-6">
                Our Contact Details
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Office Address
                    </h4>
                    <p className="text-gray-600">
                      4/164 SFS Near B2 Bypass Mansarovar
                      <br />
                      Nearby Airport Jaipur
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full text-purple-600 mr-4">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Call Us</h4>
                    <p className="text-gray-600">
                      <a
                        href="tel:+9771234567"
                        className="hover:text-blue-600 transition-colors"
                      >
                        +91 9587084879
                      </a>
                      <br />
                      <a
                        href="tel:+9779876543210"
                        className="hover:text-blue-600 transition-colors"
                      >
                        +91 9829301061
                      </a>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full text-purple-600 mr-4">
                    <FaRegStickyNote className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">GST No.</h4>
                    <p className="text-gray-600">08B74RMNPK151Z6</p>
                    <p className="text-gray-600">A Unit of Abhimanyu Export</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-600 mr-4">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email Us</h4>
                    <p className="text-gray-600">
                      <a
                        href="mailto:Info@Abhimanyuholiday.com"
                        className="hover:text-blue-600 transition-colors"
                      >
                        Info@Abhimanyuholiday.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2971.363084737143!2d75.77461247543683!3d26.83762757669203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUwJzE1LjUiTiA3NcKwNDYnMzcuOSJF!5e1!3m2!1sen!2sin!4v1749557384790!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-b-2xl"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

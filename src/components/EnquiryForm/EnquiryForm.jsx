import { motion } from "framer-motion";

const EnquiryForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mb-16 bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="max-[480px]:p-3 p-8">
        <h3 className="text-2xl font-bold text-brand-brown mb-6">
          Have Questions? Send Us a Message
        </h3>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1 not-first:"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-0 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-0 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
              placeholder="your@email.com"
              required
            />
          </div>

          {/* Contact Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Contact Number *
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-0 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
              placeholder="+977 98XXXXXXX"
              required
            />
          </div>

          {/* City */}
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              City *
            </label>
            <input
              type="text"
              id="city"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-0 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
              placeholder="Delhi"
              required
            />
          </div>

          {/* Message (Full width) */}
          <div className="md:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Message *
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-0 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
              placeholder="I'm interested in learning more about..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center cursor-pointer">
            <button
              type="submit"
              className=" bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default EnquiryForm;

import React from "react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaBuilding } from "react-icons/fa";

const HomeAbout = () => {
  const about_img = "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-4.1.0&auto=format&fit=crop&w=1374&q=80";

  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 rounded-xl overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-2xl">
          <img 
            src={about_img} 
            alt="Rajputana Cabs" 
            className="w-full h-150 object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Contact Information */}
        <div className="lg:w-1/2">
          <div className="text-center lg:text-left mb-8">
            <span className="text-sm font-semibold tracking-widest text-yellow-600 uppercase">
              Get in Touch
            </span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Contact
              </span> Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We're available 24/7 to assist with your travel needs
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-lg text-yellow-600">
                <FaPhone className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Call us</h3>
                <p className="mt-1 text-gray-600">+91 9928399846</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-lg text-yellow-600">
                <FaWhatsapp className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">WhatsApp</h3>
                <p className="mt-1 text-gray-600">+91 9928399846</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-lg text-yellow-600">
                <FaEnvelope className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">rajputanacabsindia@gmail.com</p>
                <p className="mt-1 text-gray-600">rajputanacabs@gmail.com (Corporate)</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-lg text-yellow-600">
                <FaBuilding className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Jaipur Office</h3>
                <p className="mt-1 text-gray-600">
                  24, Gopi Nagar, Jaisinghpura Khor, Jaipur, Rajasthan 302027
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/919928399846"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-green-600 hover:bg-green-700 transition-all duration-300"
              >
                <FaWhatsapp className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
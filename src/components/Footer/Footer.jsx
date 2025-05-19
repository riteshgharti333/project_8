import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10 bg-gray-900 text-white pt-16 pb-35 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Head Office & Contact
              </span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                <span>24 Gopi Nagar Vistar, Jaisinghpura Khor Delhi Bypass Jaipur, Rajasthan 302027</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-yellow-500 mr-3" />
                <span>9983010250</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-yellow-500 mr-3" />
                <span>rajputanacabsindia@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Taxi Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Our Taxi Services
              </span>
            </h3>
            <ul className="space-y-3">
              {['Jaipur', 'Udaipur', 'Jodhpur', 'Delhi', 'Ahmedabad', 'Chandigarh', 'Manali', 'Amritsar', 'Shimla'].map((city) => (
                <li key={city} className="hover:text-yellow-400 transition-colors duration-200">
                  <a href="#">{city}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Popular Tours
              </span>
            </h3>
            <ul className="space-y-3">
              {[
                'Rajasthan Car Rental',
                'Ranthambore Safari Booking',
                'Golden Triangle Tour Car',
                'Jaisalmer Tourism Packages',
                'Jaisalmer Desert Safari'
              ].map((tour) => (
                <li key={tour} className="hover:text-yellow-400 transition-colors duration-200">
                  <a href="#">{tour}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              Copyright © 2025 Rajputana Cabs. Designed and Developed by Star Marketing
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors duration-300">
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
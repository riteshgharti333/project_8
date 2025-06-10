import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import footer1 from "../../assets/images/footer.jpg";
import footer2 from "../../assets/images/footer2.jpg";
import footer3 from "../../assets/images/footer3.jpg";

const Footer = () => {
  return (
    <>
      <style>
        {`
    .footer-bg {
      background-image: url(${footer1});
    }
    @media (max-width: 1024px) {
      .footer-bg {
        background-image: url(${footer3});
      }
    }
  `}
      </style>

      <footer className="footer-bg relative mt-10 text-white pt-16 pb-36 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/50 z-1" />
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Office Address & Contact
                </span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                  <span>
                    4/164 SFS Near B2 Bypass Mansarovar Nearby Airport Jaipur
                  </span>
                </li>
                <li className="flex items-center">
                  <FaPhone className="text-yellow-500 mr-3" />
                  <p className="">
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
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-yellow-500 mr-3" />
                  <span>abhimanyouholiday@gmail.com</span>
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
                {[
                  "Jaipur",
                  "Udaipur",
                  "Jodhpur",
                  "Delhi",
                  "Ahmedabad",
                  "Chandigarh",
                  "Manali",
                  "Amritsar",
                  "Shimla",
                ].map((city) => (
                  <li
                    key={city}
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
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
                  "Rajasthan Car Rental",
                  "Ranthambore Safari Booking",
                  "Golden Triangle Tour Car",
                  "Jaisalmer Tourism Packages",
                  "Jaisalmer Desert Safari",
                ].map((tour) => (
                  <li
                    key={tour}
                    className="hover:text-yellow-400 transition-colors duration-200"
                  >
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
              <p className="text-white">
                Copyright © 2025 Rajputana Cabs. Designed and Developed by Star
                Marketing
              </p>
            </div>

            <div className="flex space-x-6">
              <a
                href="#"
                className="text-white hover:text-yellow-500 transition-colors duration-300"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-500 transition-colors duration-300"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-500 transition-colors duration-300"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

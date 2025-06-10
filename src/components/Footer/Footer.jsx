import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import footer1 from "../../assets/images/footer.jpg";
import footer2 from "../../assets/images/footer2.jpg";
import footer3 from "../../assets/images/footer3.jpg";
import {
  footerHotelData,
  footerOneDayTourData,
  footerOtherLinksData,
  footerTourPackageData,
} from "../../assets/footerData";
import { Link } from "react-router-dom";

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
        <div className="absolute inset-0 bg-black/70 z-1" />
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="lg:col-span-2 mb-12">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                Office Address & Contact
              </span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                <span className="font-semibold">
                  4/164 SFS Near B2 Bypass Mansarovar Nearby Airport Jaipur
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-yellow-500 mr-3" />
                <p className="">
                  <a
                    href="tel:+9771234567"
                    className="hover:text-yellow-600 transition-colors font-semibold"
                  >
                    +91 9587084879
                  </a>
                  <br />
                  <a
                    href="tel:+9779876543210"
                    className="hover:text-yellow-600 transition-colors font-semibold"
                  >
                    +91 9829301061
                  </a>
                </p>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-yellow-500 mr-3" />
                <span className="font-semibold">Info@Abhimanyuholiday.com</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Contact Information */}

            {/* Taxi Services */}
            <div>
              <h3 className="text-xl font-bold mb-6">
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                  One Day Tours
                </span>
              </h3>
              <ul className="space-y-3">
                {footerOneDayTourData.map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-yellow-400 transition-colors duration-200 font-semibold"
                  >
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tours */}
            <div>
              <h3 className="text-xl font-bold mb-6">
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                  Tour Packages
                </span>
              </h3>
              <ul className="space-y-3">
                {footerTourPackageData.map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-yellow-400 transition-colors duration-200 font-semibold"
                  >
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hotel Booking */}
            <div>
              <h3 className="text-xl font-bold mb-6">
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                  Hotel Booking
                </span>
              </h3>
              <ul className="space-y-3">
                {footerHotelData.map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-yellow-400 transition-colors duration-200 font-semibold"
                  >
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

               {/* Other Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                  Other Links
                </span>
              </h3>
              <ul className="space-y-3">
                {footerOtherLinksData.map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-yellow-400 font-semibold transition-colors duration-200"
                  >
                    <Link to={item.link}>{item.name}</Link>
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
              <p className="text-white text-center sm:text-left">
                Copyright © 2025 Abhimanyu Holidays. Designed and Developed by <a className="transition-all duration-300 ease-in-out  border-b-1 hover:text-yellow-500" href="https://wingstarnarketing.com/" target="__blank" >Star
                Marketing</a>
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

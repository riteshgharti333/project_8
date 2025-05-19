import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { sidebarData } from "../../assets/serviceData";
import { Link } from "react-router-dom";

const ServiceSidebar = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-300">
      {sidebarData.map((section, index) => (
        <div key={index} className="border-b border-gray-100 last:border-b-0">
          {/* Section Header */}
          <h3 className="flex items-center justify-between px-6 py-4 bg-gray-50 text-lg font-semibold text-brand-brown cursor-pointer hover:bg-amber-50 transition-colors duration-200">
            <span>{section.title}</span>
            <FaChevronRight className="text-amber-500 text-sm" />
          </h3>

          {/* Section Content */}
          <ul className="px-6 py-4 space-y-3">
            {section.lists.map((item, itemIndex) => (
              <li key={itemIndex}>
                <a
                  href={item.link || "#"}
                  className="flex items-center text-gray-600 hover:text-amber-600 transition-colors duration-200 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 opacity-0 group-hover:opacity-100 mr-3 transition-opacity duration-200"></span>
                  <span>{item.title}</span>
                  {item.badge && (
                    <span className="ml-auto px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Additional CTA Card */}
      <div className="p-6 bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg m-4 mt-6 text-center">
        <h4 className="font-medium text-gray-800 mb-2">Need Help?</h4>
        <p className="text-sm text-gray-600 mb-4">Our travel experts are here to assist you</p>
        <Link to={"/contact-us"} className="w-full block px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-md text-sm font-medium transition-colors duration-300">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default ServiceSidebar;
import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaFacebook, FaInstagram, FaTimes, FaTwitter } from "react-icons/fa";

const MobileMenu = ({ isOpen, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const navData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Taxi Service",
      link: "/",
    },
    {
      title: "Tempo Traveller",
      link: "/",
    },
    {
      title: "Our Tours",
      link: "/",
      icon: IoMdArrowDropdown,
      dropdown: [
        { name: "Sightseeing Tours", link: "/" },
        { name: "Adventure Tours", link: "/" },
        { name: "Cultural Tours", link: "/" },
      ],
    },
    {
      title: "Tour Guide",
      link: "/",
      icon: IoMdArrowDropdown,
      dropdown: [
        { name: "Jaipur Tour Guide", link: "/" },
        { name: "Udaipur Tour Guide", link: "/" },
        { name: "Jodhpur Tour Guide", link: "/" },
        { name: "Jaisalmer Tour Guide", link: "/" },
      ],
    },
    {
      title: "Blog",
      link: "/",
    },
    {
      title: "Contact",
      link: "/",
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-gray-900 bg-opacity-90 transition-all duration-300 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-6">
        <button
          onClick={onClose}
          className="text-white hover:text-yellow-500 transition-colors duration-300"
        >
          <FaTimes className="h-8 w-8" />
        </button>
      </div>

      <nav className="px-6 py-4">
        <ul className="space-y-4">
          {navData.map((item, index) => (
            <li key={index}>
              {item.dropdown ? (
                <div className="mb-2">
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="flex items-center justify-between w-full text-left text-white hover:text-yellow-500 transition-colors duration-300"
                  >
                    <span className="text-xl font-medium">{item.title}</span>
                    {openDropdown === index ? (
                      <IoMdArrowDropup className="text-yellow-500 text-xl" />
                    ) : (
                      <IoMdArrowDropdown className="text-yellow-500 text-xl" />
                    )}
                  </button>

                  {openDropdown === index && (
                    <ul className="mt-2 ml-4 space-y-3">
                      {item.dropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.link}
                            className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a
                  href={item.link}
                  className="block py-3 text-xl font-medium text-white hover:text-yellow-500 transition-colors duration-300"
                >
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>

     
    </div>
  );
};

export default MobileMenu;
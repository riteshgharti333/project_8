import { Link, NavLink } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { navData } from "../../assets/data";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useEffect, useState } from "react";

import logo from "../../assets/images/logo.png"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const pathMap = {
    tour: "tour-service/",
    package: "tour-package/",
    rental: "rental-service/",
    tempo: "tempo-service/",
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.3;
      if (window.scrollY > scrollThreshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex items-center justify-between sticky ${
        isFixed ? "top-0" : "-top-20"
      } z-50 w-full bg-gray-900 px-4  lg:px-3 py-3 max-[1200px]:px-3 shadow-lg transition-all duration-300 ease-in-out`}
    >
      {/* Logo */}
      <div className="navbar-left">
        <h1 className="text-2xl lg:text-3xl font-bold text-white hover:text-blue-200 transition-colors duration-300">
          <Link to="/">
          <img className="w-[150px]" src={logo} alt="logo" /></Link>
        </h1>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white hover:text-yellow-500 transition-colors"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <FaBars className="h-6 w-6" />
      </button>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Desktop Navigation */}
      <div className="hidden lg:block relative">
        <ul className="flex gap-1 font-medium">
          {navData.map((item, index) => (
            <li className="relative group" key={index}>
              {item.dropdown ? (
                // Dropdown items
                <Link
                  className="flex items-center gap-1.5 py-4 px-2 text-yellow-300 hover:text-blue-200 transition-all duration-300"
                  to={item.link || "#"}
                >
                  <span className="relative font-medium">
                    {item.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5  transition-all duration-500 group-hover:w-full"></span>
                  </span>
                  {item.icon && (
                    <item.icon className="w-4 h-4 transition-transform duration-500 group-hover:rotate-180" />
                  )}
                </Link>
              ) : (
                // Non-dropdown items with active state
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `flex items-center gap-1.5 py-4 px-2 transition-all duration-300   ${
                      isActive
                        ? "text-blue-300 font-semibold  "
                        : "text-yellow-300 hover:text-blue-200"
                    }`
                  }
                >
                  <span className="relative font-medium">
                    {item.title}
                       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-500 group-hover:w-full"></span>
                       <span className=""></span>
        
                      
                    </span>
                </NavLink>
              )}

              {/* Dropdown content */}
              {item.dropdown && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-[72px] w-64 opacity-0 invisible 
                    group-hover:opacity-100 group-hover:visible transition-all duration-500 transform 
                    -translate-y-2 group-hover:translate-y-0 origin-top z-50"
                >
                  <div className="bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-200/30 backdrop-blur-sm">
                    {item.dropdown.map((dropdownItem, idx) => (
                      <Link
                        key={idx}
                        className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-yellow-600 
                                transition-all duration-300 border-b border-gray-100 last:border-b-0
                                hover:pl-8 hover:font-medium group/item"
                        to={`${pathMap[item.specific] || ""}${dropdownItem.link}`}
                      >
                        <div className="flex items-center gap-2">
                          {dropdownItem.icon && (
                            <dropdownItem.icon className="w-4 h-4 text-blue-500 transition-transform duration-300 group-hover/item:scale-125" />
                          )}
                          <span className="text-[14px]">
                            {dropdownItem.name}
                          </span>
                          <span className="ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                            →
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Glow Effect Behind Active Nav Item */}
        <div className="absolute bottom-0 h-1 bg-blue-400/30 rounded-full transition-all duration-500 ease-out -z-10"></div>
      </div>
    </div>
  );
};

export default Navbar;
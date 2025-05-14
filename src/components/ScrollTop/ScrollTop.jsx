import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      setShowScrollTop(scrollPercent > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 left-6 z-[9999]">
      <button
        onClick={scrollToTop}
        className={`
          flex items-center justify-center
          w-12 h-12
          bg-gray-800 hover:bg-gray-900
          text-white
          rounded-[30px]
          shadow-lg
          transition-all
          duration-500
          transform
          ${
            showScrollTop
              ? "opacity-100 translate-y-0 hover:scale-105"
              : "opacity-0 translate-y-10 pointer-events-none"
          }
          border-2 border-white
          cursor-pointer
        `}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-5 h-5 transition-transform duration-300" />
      </button>
    </div>
  );
};

export default ScrollTop;

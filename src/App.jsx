import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import TourService1 from "./pages/TourService/TourService1";
import TourPackages1 from "./pages/TourPackages/TourPackages1";
import RentalService1 from "./pages/RentalService/RentalService1";
import TempoService1 from "./pages/TempoService/TempoService";
import Blogs from "./pages/Blogs/Blogs";
import Blog1 from "./pages/Blog/Blog1";
import Contact from "./pages/Contact/Contact";
import FloatingButton from "./components/FloatingButton/FloatingButton";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, [pathname]);

    return null;
  };

  return (
    <div className="app">
      <BrowserRouter>
      <SmoothScroll />
        <ScrollToTop />
        <ScrollTop />
        <FloatingButton />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />


          <Route
            path="/tour-service/jaipur-sightseeing-tour"
            element={<TourService1 />}
          />

          <Route
            path="/tour-package/jaipur-tour-package"
            element={<TourPackages1 />}
          />

          <Route
            path="/rental-service/car-rental-service-in-jaipur"
            element={<RentalService1 />}
          />
          <Route
            path="/tempo-service/tempo-traveller-in-jaipur"
            element={<TempoService1 />}
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog1 />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

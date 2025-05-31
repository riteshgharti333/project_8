import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
// import TourService1 from "./pages/TourService/TourService1";
import TourPackages1 from "./pages/TourPackages/TourPackages1";
import RentalService1 from "./pages/RentalService/RentalService1";
import TempoService1 from "./pages/TempoService/TempoService";
import Blogs from "./pages/Blogs/Blogs";
import Blog1 from "./pages/Blog/Blog1";
import Contact from "./pages/Contact/Contact";
import FloatingButton from "./components/FloatingButton/FloatingButton";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import OneDayTour from "./pages/OneDayTour/OneDayTour";
import OnedayContent2 from "./pages/OneDayTour/OnedayContent2";
import OnedayContent3 from "./pages/OneDayTour/OnedayContent3";
import OnedayContent4 from "./pages/OneDayTour/OnedayContent4";
import OnedayContent5 from "./pages/OneDayTour/OnedayContent5";
import OnedayContent6 from "./pages/OneDayTour/OnedayContent6";
import OnedayContent7 from "./pages/OneDayTour/OnedayContent7";
import OnedayContent8 from "./pages/OneDayTour/OnedayContent8";
import OnedayContent9 from "./pages/OneDayTour/OnedayContent9";
import OnedayContent10 from "./pages/OneDayTour/OnedayContent10";
import OnedayContent1 from "./pages/OneDayTour/OnedayContent1";
import OnedayContent11 from "./pages/OneDayTour/OnedayContent11";
import OnedayContent12 from "./pages/OneDayTour/OnedayContent12";

import OnedayContent13 from "./pages/OneDayTour/OnedayContent13";
import OnedayContent14 from "./pages/OneDayTour/OnedayContent14";

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

          {/* One Day Tour */}
          <Route path="/one-day-tours" element={<OneDayTour />} />
          <Route path="/jhalana-leopard-safari" element={<OnedayContent1 />} />
          <Route path="/jaipur-evening-tour" element={<OnedayContent2 />} />
          <Route path="/jaipur-night-our" element={<OnedayContent3 />} />
          <Route path="/jaipur-sunrise-tour" element={<OnedayContent4 />} />
          <Route path="/jaipur-sightseeing-tour" element={<OnedayContent5 />} />
          <Route path="/one-day-trip-to-agra" element={<OnedayContent6 />} />
          <Route path="/jaipur-ranthambore-one-day-trip" element={<OnedayContent7 />} />
          <Route path="/one-day-trip-to-ajmer-pushkar" element={<OnedayContent8 />} />
          <Route path="/one-day-trip-to-chand-baori-bhangarh-fort" element={<OnedayContent9 />} />
          <Route path="/one-day-trip-to-sariska-from-jaipur" element={<OnedayContent10 />} />

          <Route path="/jaipur-khatu-shyamji-salasar-balaji-tour" element={<OnedayContent11 />} />
          <Route path="/chokhi-dhani-jaipur-night-tour" element={<OnedayContent12 />} />
          <Route path="/jaipur-temple-tour" element={<OnedayContent13 />} />


          <Route path="/jaipur-shopping-tour" element={<OnedayContent14 />} />





          {/*  */}

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

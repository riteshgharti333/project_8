import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
// import TourService1 from "./pages/TourService/TourService1";
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

import TourPackages1 from "./pages/TourPackages/TourPackages1";
import TourPackages2 from "./pages/TourPackages/TourPackages2";
import TourPackages3 from "./pages/TourPackages/TourPackages3";
import TourPackages4 from "./pages/TourPackages/TourPackages4";
import TourPackages5 from "./pages/TourPackages/TourPackages5";
import TourPackages6 from "./pages/TourPackages/TourPackages6";
import TourPackages7 from "./pages/TourPackages/TourPackages7";
import TourPackages8 from "./pages/TourPackages/TourPackages8";
import TourPackages9 from "./pages/TourPackages/TourPackages9";
import TourPackages10 from "./pages/TourPackages/TourPackages10";
import TourPackages11 from "./pages/TourPackages/TourPackages11";
import TourPackages12 from "./pages/TourPackages/TourPackages12";
import specialRoutes from "./routes/specialRoute";
import HotelBooking1 from "./pages/HotelBooking/HotelBooking1";
import HotelBooking2 from "./pages/HotelBooking/HotelBooking2";
import HotelBooking3 from "./pages/HotelBooking/HotelBooking3";
import HotelBooking4 from "./pages/HotelBooking/HotelBooking4";
import HotelBooking5 from "./pages/HotelBooking/HotelBooking5";
import TravelGuide from "./pages/TravelGuide/TravelGuide";
import Blog2 from "./pages/Blog/Blog2";
import Blog3 from "./pages/Blog/Blog3";
import Blog4 from "./pages/Blog/Blog4";
import Blog5 from "./pages/Blog/Blog5";
import Blog6 from "./pages/Blog/Blog6";
import Blog7 from "./pages/Blog/Blog7";
import Blog8 from "./pages/Blog/Blog8";

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
          <Route path="/jaipur-night-tour" element={<OnedayContent3 />} />
          <Route path="/jaipur-sunrise-tour" element={<OnedayContent4 />} />
          <Route path="/jaipur-sightseeing-tour" element={<OnedayContent5 />} />
          <Route path="/one-day-trip-to-agra" element={<OnedayContent6 />} />
          <Route
            path="/jaipur-ranthambore-one-day-trip"
            element={<OnedayContent7 />}
          />
          <Route
            path="/one-day-trip-to-ajmer-pushkar"
            element={<OnedayContent8 />}
          />
          <Route
            path="/one-day-trip-to-chand-baori-bhangarh-fort"
            element={<OnedayContent9 />}
          />
          <Route
            path="/one-day-trip-to-sariska-from-jaipur"
            element={<OnedayContent10 />}
          />
          <Route
            path="/jaipur-khatu-shyamji-salasar-balaji-tour"
            element={<OnedayContent11 />}
          />
          <Route
            path="/chokhi-dhani-jaipur-night-tour"
            element={<OnedayContent12 />}
          />
          <Route path="/jaipur-temple-tour" element={<OnedayContent13 />} />
          <Route path="/jaipur-shopping-tour" element={<OnedayContent14 />} />
          {/* Tour Package */}
          <Route
            path="/tour-package/abhimanyu-holidays-special-tours"
            element={<TourPackages1 />}
          />
          <Route
            path="/tour-package/rajasthan-tour-packages"
            element={<TourPackages2 />}
          />
          <Route
            path="/tour-package/udaipur-tours"
            element={<TourPackages3 />}
          />
          <Route
            path="/tour-package/jaisalmer-tours"
            element={<TourPackages4 />}
          />
          <Route
            path="/tour-package/jaipur-tour-packages"
            element={<TourPackages5 />}
          />
          <Route
            path="/tour-package/golden-triangle-tour-packages"
            element={<TourPackages6 />}
          />
          <Route
            path="/tour-package/weekend-tours-from-jaipur"
            element={<TourPackages7 />}
          />{" "}
          <Route
            path="/tour-package/ayodhya-tour-packages"
            element={<TourPackages8 />}
          />{" "}
          <Route
            path="/tour-package/all-inclusive-tour-packages"
            element={<TourPackages9 />}
          />{" "}
          <Route
            path="/tour-package/himachal-tour-packages"
            element={<TourPackages10 />}
          />{" "}
          <Route
            path="/tour-package/kashmir-tour-packages"
            element={<TourPackages11 />}
          />{" "}
          <Route
            path="/tour-package/india-tour-packages"
            element={<TourPackages12 />}
          />
          {/* Special Tours */}
          {specialRoutes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
          {/* Hotels */}
          <Route path="/hotels-in-jaipur" element={<HotelBooking1 />} />
          <Route path="/hotels-in-udaipur" element={<HotelBooking2 />} />
          <Route path="/hotels-in-pushakr" element={<HotelBooking3 />} />
          <Route path="/hotels-in-jaisalmer" element={<HotelBooking4 />} />
          <Route path="/hotels-in-jodhpur" element={<HotelBooking5 />} />
          {/* Travel Guide */}
          <Route path="/travel-guide" element={<TravelGuide />} />
          {/*  */}
          <Route path="/taxi-service" element={<RentalService1 />} />
          <Route
            path="/tempo-service/tempo-traveller-in-jaipur"
            element={<TempoService1 />}
          />
          {/*  Blog */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/best-one-day-tour-rajasthan" element={<Blog1 />} />
          <Route path="/blog/rajasthan-top-destinations" element={<Blog2 />} />
          <Route path="/blog/best-hotels-rajasthan" element={<Blog3 />} />
          <Route
            path="/blog/unforgettable-road-trips-rajasthan"
            element={<Blog4 />}
          />
          <Route
            path="/blog/essential-travel-tips-rajasthan"
            element={<Blog5 />}
          />
          <Route
            path="/blog/discovering-rajasthan-hidden-gems"
            element={<Blog6 />}
          />
          <Route
            path="/blog/golden-triangle-rajasthan-tour"
            element={<Blog7 />}
          />
          <Route
            path="/blog/rajasthan's-wildlife-sanctuaries"
            element={<Blog8 />}
          />
          {/*  */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

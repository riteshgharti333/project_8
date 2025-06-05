import "./Homepage.scss";

import CompanySlider from "../../components/CompanySlider/CompanySlider";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Package from "../../components/Package/Package";
import Tour from "../../components/Tour/Tour";
import HomeContact from "../../components/HomeContact/HomeContact";
import Book from "../../components/Book/Book";
import Checkout from "../../components/Checkout/Checkout";
import Safari from "../../components/Safari/Safari";
import Selling from "../../components/Selling/Selling";
import Taxi from "../../components/Taxi/Taxi";
import HomeAbout from "../../components/HomeAbout/HomeAbout";
import HomeBlog from "../../components/Blog/HomeBlog";
import HomeDetail from "../../components/HomeDetail/HomeDetail";
import RentalFees from "../../components/RentalFees/RentalFees";
import Offers from "../../components/Offers/Offers";
import Review from "../../components/Review/Review";
import Achieve from "../../components/Achieve/Achieve";
import OneDay from "../../components/OneDay/OneDay";
import Hotels from "../../components/Hotels/Hotels";
import TravelGuides from "../../components/TravelGuides/TravelGuides";

const Homepage = () => {
  return (
    <div className="homepage overflow-hidden">
      <HomeBanner />
      {/* <CompanySlider /> */}

      <HomeDetail />

          <div className="px-1 sm:px-6 lg:px-8  max-w-[1400px] mx-auto">
        <OneDay />
      </div>

      {/* <Package />/ */}
      <div className="px-1 sm:px-6 lg:px-8  max-w-[1400px] mx-auto">
        <Tour />
      </div>

      <div className="px-1 sm:px-6 lg:px-8  max-w-[1400px] mx-auto">
        <RentalFees homeRental="homeRental" />
      </div>
       <div className="px-1 sm:px-6 lg:px-8  max-w-[1400px] mx-auto">
        <Hotels homeRental="homeRental" />
      </div>
        <div className="px-1 sm:px-6 lg:px-8  max-w-[1400px] mx-auto">
        <TravelGuides homeRental="homeRental" />
      </div>
      <div className="px-1 sm:px-6 lg:px-8  max-w-[1400px] mx-auto">
        <Offers homeOffer="homeOffer" />
      </div>

      {/* <Book /> */}

      <HomeContact />

      <Review />

      <Achieve />

      {/* <Checkout />/ */}
      {/* <Safari /> */}
      {/* <Selling /> */}
      {/* <Taxi /> */}
      {/* <HomeAbout /> */}
      <HomeBlog />
    </div>
  );
};

export default Homepage;

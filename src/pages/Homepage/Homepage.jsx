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
import Blog from "../../components/Blog/Blog";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomeBanner />
      <CompanySlider />
      <Package />
      <Tour />
      <HomeContact />
      <Book />
      <Checkout />
      <Safari />
      <Selling />
      <Taxi />
      <HomeAbout />
      <Blog />
    </div>
  );
};

export default Homepage;

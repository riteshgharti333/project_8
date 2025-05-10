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
      <HomeBlog />
    </div>
  );
};

export default Homepage;

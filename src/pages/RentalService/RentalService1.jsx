import React from "react";
import { useLocation } from "react-router-dom";
import { formatPathTitle } from "../../assets/someFunction";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import RentalContent from "../../components/RentalContent/RentalContent";

import rentalBanner from "../../assets/images/about.jpg";

const RentalService1 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);
  return (
    <div>
      <ServiceBanner bannerTitle={title} bannerImg={rentalBanner} />
      <RentalContent />
    </div>
  );
};

export default RentalService1;

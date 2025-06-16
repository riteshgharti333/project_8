import React from "react";
import { useLocation } from "react-router-dom";
import { formatPathTitle } from "../../assets/someFunction";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import RentalContent from "../../components/RentalContent/RentalContent";
import TempoContent from "../../components/TempoContent/TempoContent";

const TempoService1 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);
  return (
    <div>
      <ServiceBanner bannerTitle={title} />
      <TempoContent />
    </div>
  );
};

export default TempoService1;

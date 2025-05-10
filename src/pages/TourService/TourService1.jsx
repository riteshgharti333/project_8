import React from "react";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import { useLocation } from "react-router-dom";
import { formatPathTitle } from "../../assets/someFunction";
import ServiceContent from "../../components/ServiceContent/ServiceContent";
import ServiceSidebar from "../../components/ServiceSidebar/ServiceSidebar";

const TourService1 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

  return (
    <div>
      <ServiceBanner bannerTitle={title} />

      <div className="lg:max-w-[1200px] sm:max-w-[750px]  m-auto mt-10 px-2 ">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4">
          <div className="flex-7">
            <ServiceContent serviceTitle={title} />
          </div>
          <div className="flex-3">
            <ServiceSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourService1;

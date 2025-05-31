import React from "react";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import { useLocation } from "react-router-dom";
import { formatPathTitle } from "../../assets/someFunction";
import DayOneContent from "../../components/DayOneContent/DayOneContent";
import ServiceSidebar from "../../components/ServiceSidebar/ServiceSidebar";
import { jaipurRanthamboreOneDayTripContent } from "../../assets/oneDayData";

import banner_img from "../../assets/images/onedayImgs/oneday7.jpg";

const OnedayContent7 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

  return (
    <div>
      <ServiceBanner bannerTitle={title} bannerImg={banner_img} />

      <div className="lg:max-w-[1300px] sm:max-w-[750px]  m-auto mt-10 px-2 ">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4">
          <div className="flex-7">
            <DayOneContent oneDayData={jaipurRanthamboreOneDayTripContent} />
          </div>
          <div className="flex-3">
            <ServiceSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnedayContent7;

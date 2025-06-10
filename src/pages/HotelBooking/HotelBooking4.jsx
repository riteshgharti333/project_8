import React from "react";
import { useLocation } from "react-router-dom";
import { formatPathTitle } from "../../assets/someFunction";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import BookingContent from "../../components/BookingContent/BookingContent";
import { jaipurHotels, jaisalmerHotels } from "../../assets/bookingData";

const HotelBooking4 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

  return (
    <div>
      <ServiceBanner bannerTitle={title} bannerImg={jaisalmerHotels.img}/>
      <BookingContent  hotelData={jaisalmerHotels}  />
    </div>
  );
};

export default HotelBooking4;

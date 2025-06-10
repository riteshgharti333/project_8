import React from "react";
import { useLocation } from "react-router-dom";
import { formatPathTitle } from "../../assets/someFunction";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import BookingContent from "../../components/BookingContent/BookingContent";
import {jodhpurHotels } from "../../assets/bookingData";

const HotelBooking5 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

  return (
    <div>
      <ServiceBanner bannerTitle={title} bannerImg={jodhpurHotels.img} />
      <BookingContent hotelData={jodhpurHotels} />
    </div>
  );
};

export default HotelBooking5;

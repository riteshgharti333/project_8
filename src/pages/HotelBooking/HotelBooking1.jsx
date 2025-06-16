import React from "react";
import { useLocation } from "react-router-dom";
import { formatPathTitle } from "../../assets/someFunction";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import BookingContent from "../../components/BookingContent/BookingContent";
import { jaipurHotels } from "../../assets/bookingData";

const HotelBooking1 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

  return (
    <div>
      <ServiceBanner bannerTitle={title} bannerImg={jaipurHotels.img} />
      <BookingContent hotelData={jaipurHotels} />
    </div>
  );
};

export default HotelBooking1;

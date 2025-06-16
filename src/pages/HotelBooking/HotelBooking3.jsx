import React from "react";
import { useLocation } from "react-router-dom";
import { formatPathTitle } from "../../assets/someFunction";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import BookingContent from "../../components/BookingContent/BookingContent";
import { jaipurHotels, pushakrHotels } from "../../assets/bookingData";

const HotelBooking3 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

  return (
    <div>
      <ServiceBanner bannerTitle={title} bannerImg={pushakrHotels.img} />
      <BookingContent hotelData={pushakrHotels} />
    </div>
  );
};

export default HotelBooking3;

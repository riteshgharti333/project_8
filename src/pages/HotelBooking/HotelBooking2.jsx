import React from "react";
import { useLocation } from "react-router-dom";
import { formatPathTitle } from "../../assets/someFunction";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import BookingContent from "../../components/BookingContent/BookingContent";
import { jaipurHotels, udaipurHotels } from "../../assets/bookingData";

const HotelBooking2 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

  return (
    <div>
      <ServiceBanner bannerTitle={title} bannerImg={udaipurHotels.img} />
      <BookingContent hotelData={udaipurHotels} />
    </div>
  );
};

export default HotelBooking2;

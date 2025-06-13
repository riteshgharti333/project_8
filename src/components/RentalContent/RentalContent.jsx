import React from "react";
import { aboutData } from "../../assets/aboutData";
import { rentalData, rentaLFees } from "../../assets/rentalData";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import Offers from "../Offers/Offers";
import ServiceForm from "../ServiceForm/ServiceForm";
import { taxies } from "../../assets/data";
import RentalFees from "../RentalFees/RentalFees";
import EnquiryForm from "../EnquiryForm/EnquiryForm";

const RentalContent = () => {
  const cardVariants = {
    offscreen: {
      y: 30,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="sm:max-w-[750px] lg:max-w-[1100px] m-auto flex flex-col gap-20 mt-10 px-2">
      <div>
        <h2 className="text-2xl font-bold text-brand-brown">
          Book Our Taxi Services For Local Outstation Tour With Best Price
        </h2>
        <p className="mt-5 text-gray-600">
          At Abhimanyu Holidays, we believe travel should be convenient,
          comfortable, and cost-effective. Whether you're planning a short city
          ride or a long weekend getaway, our reliable taxi services are here to
          serve you with punctuality and professionalism. We specialize in both
          local travel and outstation tours, offering clean vehicles, verified
          drivers, and a smooth booking experience — all at the most competitive
          prices.
        </p>
        <p className="mt-5 text-gray-600">
          Choose from a wide range of vehicles including hatchbacks, sedans,
          SUVs, and tempo travellers based on your group size and travel needs.
          With 24/7 availability and transparent pricing, Abhimanyu Holidays
          ensures you never have to worry about hidden charges or last-minute
          hassles. Whether it’s a family vacation, business trip, airport
          transfer, or spiritual journey, ride confidently with Abhimanyu
          Holidays — your trusted travel partner.
        </p>
      </div>

      <RentalFees homeRental="homeRental" />

      <Offers />

      <EnquiryForm />
    </div>
  );
};

export default RentalContent;

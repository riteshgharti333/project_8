import { useLocation } from "react-router-dom";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import { formatPathTitle } from "../../assets/someFunction";

import { packageCards } from "../../assets/packageData";
import Offers from "../../components/Offers/Offers";
import ServiceForm from "../../components/ServiceForm/ServiceForm";
import RentalFees from "../../components/RentalFees/RentalFees";

import PackageCards from "../../components/PackageCards/PackageCards";
import {
  rjTPCards,
  rjTPData,
  udaipurTPCards,
  goldenTPData,
  himachalTPCards,
} from "../../assets/tourpackageData/tourPackageData";

const TourPackages10 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

  return (
    <div>
      <ServiceBanner bannerTitle={title} />
      <div className="sm:max-w-[750px] lg:max-w-[1100px] m-auto flex flex-col gap-20 mt-10 px-2">
        <div className="">
          <h2 className="text-2xl font-bold text-brand-brown mb-4">
            Himachal Tour Packages
          </h2>
          <PackageCards packageCards={himachalTPCards} />
        </div>

        <RentalFees />

        <Offers />

        <ServiceForm />
      </div>
    </div>
  );
};

export default TourPackages10;

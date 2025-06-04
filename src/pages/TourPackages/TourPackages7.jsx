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
  weekendTPCards,
  weekendTPData,
} from "../../assets/tourpackageData/tourPackageData";

const TourPackages7 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

  return (
    <div>
      <ServiceBanner bannerTitle={title} />
      <div className="sm:max-w-[750px] lg:max-w-[1100px] m-auto flex flex-col gap-20 mt-10 px-2">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-2xl font-bold text-brand-brown">
              {weekendTPData.packageContent1.title}
            </h2>
            {weekendTPData.packageContent1.desc.map((item, index) => (
              <p className="mt-5 text-gray-600" key={index}>
                {item}
              </p>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-brown">
              {weekendTPData.packageContent2.title}
            </h2>
            <ul>
              {weekendTPData.packageContent2.lists.map((item, index) => (
                <li key={index} className="mt-5">
                  <span className="font-bold text-yellow-600">
                    {" "}
                    {item.title} -{" "}
                  </span>{" "}
                  <span className="text-gray-600">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {weekendTPData.packageContent3.desc.map((item, index) => (
              <p className="mt-5 text-gray-600" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>

        <PackageCards packageCards={weekendTPCards} />

        <RentalFees />

        <Offers />

        <ServiceForm />
      </div>
    </div>
  );
};

export default TourPackages7;

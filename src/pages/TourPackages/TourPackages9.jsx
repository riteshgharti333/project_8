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
  inclusiveTPData,
  inclusiveTPCards,
} from "../../assets/tourpackageData/tourPackageData";

import tp_banner from "../../assets/images/tpBanner/inclusive.jpg";

const TourPackages9 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

  return (
    <div>
      <ServiceBanner bannerTitle={title} bannerImg={tp_banner}  />
      <div className="sm:max-w-[750px] lg:max-w-[1100px] m-auto flex flex-col gap-20 mt-10 px-2">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-2xl font-bold text-brand-brown">
              {inclusiveTPData.packageContent1.title}
            </h2>
            {inclusiveTPData.packageContent1.desc.map((item, index) => (
              <p className="mt-5 text-gray-600" key={index}>
                {item}
              </p>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-brown">
              {inclusiveTPData.packageContent2.title}
            </h2>
            <ul>
              {inclusiveTPData.packageContent2.lists.map((item, index) => (
                <li key={index} className="mt-5">
                  <span className="text-gray-600">- {item}</span>
                </li>
              ))}
            </ul>
          </div>

             <div>
            <h2 className="text-2xl font-bold text-brand-brown">
              {inclusiveTPData.packageContent3.title}
            </h2>
            <ul>
              {inclusiveTPData.packageContent3.lists.map((item, index) => (
                <li key={index} className="mt-5">
                  <span className="text-gray-600">- {item}</span>
                </li>
              ))}
            </ul>
          </div>

            <div>
            <h2 className="text-2xl font-bold text-brand-brown">
              {inclusiveTPData.packageContent4.title}
            </h2>
            {inclusiveTPData.packageContent4.desc.map((item, index) => (
              <p className="mt-5 text-gray-600" key={index}>
                {item}
              </p>
            ))}
          </div>

          
        </div>

        <PackageCards packageCards={inclusiveTPCards} />

        <RentalFees />

        <Offers />

        <ServiceForm />
      </div>
    </div>
  );
};

export default TourPackages9;

import { useLocation } from "react-router-dom";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import { formatPathTitle } from "../../assets/someFunction";

import Offers from "../../components/Offers/Offers";
import ServiceForm from "../../components/ServiceForm/ServiceForm";
import RentalFees from "../../components/RentalFees/RentalFees";

import PackageCards from "../../components/PackageCards/PackageCards";
import {
  udaipurTPCards,
  udaipurTPData,
} from "../../assets/tourpackageData/tourPackageData";

import tp_banner from "../../assets/images/tpBanner/udaiput.jpg";
import EnquiryForm from "../../components/EnquiryForm/EnquiryForm";


const TourPackages3 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

  return (
    <div>
      <ServiceBanner bannerTitle={title} bannerImg={tp_banner}/>
      <div className="sm:max-w-[750px] lg:max-w-[1100px] m-auto flex flex-col gap-20 mt-10 px-2">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-2xl font-bold text-brand-brown">
              {udaipurTPData.packageContent1.title}
            </h2>
            {udaipurTPData.packageContent1.desc.map((item, index) => (
              <p className="mt-5 text-gray-600" key={index}>
                {item}
              </p>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-brown">
              {udaipurTPData.packageContent2.title}
            </h2>
            <ul>
              {udaipurTPData.packageContent2.lists.map((item, index) => (
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
            <h2 className="text-2xl font-bold text-brand-brown">
              {udaipurTPData.packageContent3.title}
            </h2>
            <p className="mt-5 text-gray-600">
              {udaipurTPData.packageContent3.desc}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-brown">
              {udaipurTPData.packageContent4.title}
            </h2>
            <ul>
              {udaipurTPData.packageContent4.lists.map((item, index) => (
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
            <h2 className="text-2xl font-bold text-brand-brown">
              {udaipurTPData.packageContent5.title}
            </h2>
            <p className="mt-5 text-gray-600">
              {udaipurTPData.packageContent5.desc}
            </p>
          </div>
        </div>

        <PackageCards packageCards={udaipurTPCards} linkPath="udaipur-tour-package" />

        <RentalFees />

        <Offers />

       <EnquiryForm />
      </div>
    </div>
  );
};

export default TourPackages3;

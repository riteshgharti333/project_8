import { useLocation } from "react-router-dom";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import { formatPathTitle } from "../../assets/someFunction";

import { packageCards } from "../../assets/packageData";
import Offers from "../../components/Offers/Offers";
import ServiceForm from "../../components/ServiceForm/ServiceForm";
import RentalFees from "../../components/RentalFees/RentalFees";

import PackageCards from "../../components/PackageCards/PackageCards";
import {
  jaisalmerTPData,
  jaisalmerTPCards,
} from "../../assets/tourpackageData/tourPackageData";


import tp_banner from "../../assets/images/tpBanner/jaisalmer.jpg";

const TourPackages4 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

  return (
    <div>
      <ServiceBanner bannerTitle={title} bannerImg={tp_banner} />
      <div className="sm:max-w-[750px] lg:max-w-[1100px] m-auto flex flex-col gap-20 mt-10 px-2">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-2xl font-bold text-brand-brown">
              {jaisalmerTPData.packageContent1.title}
            </h2>
            {jaisalmerTPData.packageContent1.desc.map((item, index) => (
              <p className="mt-5 text-gray-600" key={index}>
                {item}
              </p>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-brown">
              {jaisalmerTPData.packageContent2.title}
            </h2>
            <ul>
              {jaisalmerTPData.packageContent2.lists.map((item, index) => (
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
              {jaisalmerTPData.packageContent3.title}
            </h2>
            <ul>
              {jaisalmerTPData.packageContent3.lists.map((item, index) => (
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
              {jaisalmerTPData.packageContent4.title}
            </h2>
            <ul>
              {jaisalmerTPData.packageContent4.lists.map((item, index) => (
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
              {jaisalmerTPData.packageContent5.title}
            </h2>
            <ul>
              {jaisalmerTPData.packageContent5.lists.map((item, index) => (
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
              {jaisalmerTPData.packageContent6.title}
            </h2>
            <p className="mt-5 text-gray-600">
              {jaisalmerTPData.packageContent6.desc}
            </p>
          </div>
        </div>

        <PackageCards packageCards={jaisalmerTPCards} linkPath="jaisalmer-tour-package" />

        <RentalFees />

        <Offers />

        <ServiceForm />
      </div>
    </div>
  );
};

export default TourPackages4;

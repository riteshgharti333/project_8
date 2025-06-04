import { useLocation } from "react-router-dom";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import { formatPathTitle } from "../../assets/someFunction";
import { rjTPData } from "../../assets/tourpackageData/tourPackageData";
import EnquiryForm from "../../components/EnquiryForm/EnquiryForm";
import { JaipurTourPackage2Nights3Days } from "../../assets/tourpackageData/specialPackageData";

console.log(JaipurTourPackage2Nights3Days);

const SpecialTour1 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

  return (
    <div>
      <ServiceBanner bannerTitle={title} />
      <div className="sm:max-w-[750px] lg:max-w-[1100px] m-auto flex flex-col gap-20 mt-10 px-2">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-2xl font-bold text-brand-brown">
              {JaipurTourPackage2Nights3Days.stContent1.title}
            </h2>
            <div className="flex gap-3 mt-4 flex-wrap">
              <span>
                <span className="text-yellow-600">Duration</span> :
                <span className="font-bold text-gray-600">
                  {" "}
                  {JaipurTourPackage2Nights3Days.stContent1.duration}
                </span>
              </span>

              <span>
                <span className="text-yellow-600">Destination</span> :
                <span className="font-bold text-gray-600">
                  {" "}
                  {JaipurTourPackage2Nights3Days.stContent1.destination}
                </span>
              </span>
            </div>

            <p className="mt-5 text-gray-600">
              {JaipurTourPackage2Nights3Days.stContent1.desc}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-brown">
              {JaipurTourPackage2Nights3Days.stContent2.title}
            </h2>
            {JaipurTourPackage2Nights3Days.stContent2.lists.map(
              (item, index) => (
                <ul className="list-disc pl-5 marker:text-yellow-500">
                  <li className="mt-3 text-gray-600" key={index}>
                    {item}
                  </li>
                </ul>
              )
            )}
          </div>

          <div className="">
            <h2 className="text-3xl font-bold text-brand-brown mb-8">
              {JaipurTourPackage2Nights3Days.stContentDay.title}
            </h2>

            <div className="space-y-8">
              {JaipurTourPackage2Nights3Days.stContentDay.lists.map(
                (item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                  >
                    {/* Day Header */}
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-4">
                      <h3 className="text-xl font-bold text-white flex max-[480px]:flex-col  max-[480px]:items-start  max-[480px]:gap-2  items-center">
                        <span className="bg-white text-amber-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          {index + 1}
                        </span>
                        Day {index + 1}: {item.title}
                      </h3>
                    </div>

                    {/* Day Content */}
                    <div className="p-2 sm:p-6 flex flex-col gap-3">
                      {item.desc.map((item, index) => (
                        <p className="text-gray-700 " key={index}>
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <EnquiryForm />
      </div>
    </div>
  );
};

export default SpecialTour1;

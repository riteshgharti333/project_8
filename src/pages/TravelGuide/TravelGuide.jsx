import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import { useLocation } from "react-router-dom";
import { formatPathTitle } from "../../assets/someFunction";
import { travelGuideData } from "../../assets/guideData";

import EnquiryForm from "../../components/EnquiryForm/EnquiryForm";

const TravelGuide = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

  const bannerImg =
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div>
      <ServiceBanner bannerTitle={title} bannerImg={bannerImg} />

      <div className="sm:max-w-[750px] lg:max-w-[1100px] m-auto flex flex-col gap-20 mt-10 px-2">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-2xl font-bold text-brand-brown">
              {travelGuideData.title}
            </h2>
            {travelGuideData.guideContent1.map((item, index) => (
              <p className="mt-5 text-gray-600" key={index}>
                {item}
              </p>
            ))}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-brown mb-5">
              {travelGuideData.guideContent2.title}
            </h2>
            <ul className="ml-5 flex flex-col gap-3 list-disc marker:text-yellow-500">
              {travelGuideData.guideContent2.guideContentLists.map(
                (item, index) => (
                  <li key={index} className=" text-gray-600">
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <p className=" text-gray-600">
            {travelGuideData.guideContent3.title}
          </p>

          <div>
            <h2 className="text-2xl font-bold text-brand-brown mb-5">
              {travelGuideData.guideContent4.title}
            </h2>
            <ul className="ml-5 flex flex-col gap-3 list-disc marker:text-yellow-500">
              {travelGuideData.guideContent4.guideContentLists.map(
                (item, index) => (
                  <li key={index} className=" text-gray-600">
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <p className=" text-gray-600">
            {travelGuideData.guideContent5.title}
          </p>
        </div>

        <EnquiryForm />
      </div>
    </div>
  );
};

export default TravelGuide;

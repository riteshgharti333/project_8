import { useLocation } from "react-router-dom";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import { formatPathTitle } from "../../assets/someFunction";
import EnquiryForm from "../../components/EnquiryForm/EnquiryForm";
import {
  JaipurTourPackage2Nights3Days,
  Rajasthan5Nights6DaysTour,
} from "../../assets/paackSmData/spePackageData";
import SmTourPackageComp from "../../components/SmTourPackageComp/SmTourPackageComp";

const SpecialTour7 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

  return (
    <div>
      <ServiceBanner
        bannerTitle={title}
        bannerImg={Rajasthan5Nights6DaysTour.stContent1.img}
      />
      <div className="sm:max-w-[750px] lg:max-w-[1100px] m-auto flex flex-col gap-20 mt-10 px-2">
        <SmTourPackageComp smPackageData={Rajasthan5Nights6DaysTour} />

        <EnquiryForm />
      </div>
    </div>
  );
};

export default SpecialTour7;

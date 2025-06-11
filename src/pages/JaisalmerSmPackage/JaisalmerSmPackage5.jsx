import { useLocation } from "react-router-dom";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import { formatPathTitle } from "../../assets/someFunction";
import EnquiryForm from "../../components/EnquiryForm/EnquiryForm";
import { JaipurTourPackage2Nights3Days } from "../../assets/paackSmData/spePackageData";
import SmTourPackageComp from "../../components/SmTourPackageComp/SmTourPackageComp";
import { UdaipurLuxuryTour } from "../../assets/paackSmData/udaiPackafeData";
import { JaisalmerThreeDaysTour } from "../../assets/paackSmData/jaiPackageData";

const JaisalmerSmPackage5 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

  return (
    <div>
      <ServiceBanner
        bannerTitle={title}
        bannerImg={JaisalmerThreeDaysTour.stContent1.img}
      />
      <div className="sm:max-w-[750px] lg:max-w-[1100px] m-auto flex flex-col gap-20 mt-10 px-2">
        <SmTourPackageComp smPackageData={JaisalmerThreeDaysTour} />

        <EnquiryForm />
      </div>
    </div>
  );
};

export default JaisalmerSmPackage5;

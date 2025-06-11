import { useLocation } from "react-router-dom";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import { formatPathTitle } from "../../assets/someFunction";
import EnquiryForm from "../../components/EnquiryForm/EnquiryForm";
import { JaipurTourPackage2Nights3Days } from "../../assets/paackSmData/spePackageData";
import SmTourPackageComp from "../../components/SmTourPackageComp/SmTourPackageComp";
import { UdaipurLuxuryTour } from "../../assets/paackSmData/udaiPackafeData";
import { JaisalmerFiveDaysTour } from "../../assets/paackSmData/jaiPackageData";

const JaisalmerSmPackage7 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

  return (
    <div>
      <ServiceBanner
        bannerTitle={title}
        bannerImg={JaisalmerFiveDaysTour.stContent1.img}
      />
      <div className="sm:max-w-[750px] lg:max-w-[1100px] m-auto flex flex-col gap-20 mt-10 px-2">
        <SmTourPackageComp smPackageData={JaisalmerFiveDaysTour} />

        <EnquiryForm />
      </div>
    </div>
  );
};

export default JaisalmerSmPackage7;

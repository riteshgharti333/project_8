import { useLocation } from "react-router-dom";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import { formatPathTitle } from "../../assets/someFunction";
import EnquiryForm from "../../components/EnquiryForm/EnquiryForm";
import SmTourPackageComp from "../../components/SmTourPackageComp/SmTourPackageComp";
import { UdaipurFiveDaysTour } from "../../assets/paackSmData/udaiPackafeData";
import { JaipurTourPackage2Days } from "../../assets/paackSmData/rajasthanSmPackageData";

const JaipurSmPackage13 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

  return (
    <div>
      <ServiceBanner
        bannerTitle={title}
        bannerImg={JaipurTourPackage2Days.stContent1.img}
      />
      <div className="sm:max-w-[750px] lg:max-w-[1100px] m-auto flex flex-col gap-20 mt-10 px-2">
        <SmTourPackageComp smPackageData={JaipurTourPackage2Days} />

        <EnquiryForm />
      </div>
    </div>
  );
};

export default JaipurSmPackage13;

import { useLocation } from "react-router-dom";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import { formatPathTitle } from "../../assets/someFunction";
import EnquiryForm from "../../components/EnquiryForm/EnquiryForm";
import {JaipurTourPackage3Nights4Days } from "../../assets/paackSmData/spePackageData";
import SmTourPackageComp from "../../components/SmTourPackageComp/SmTourPackageComp";

const SpecialTour2 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

 

  return (
    <div>
      <ServiceBanner bannerTitle={title} bannerImg={JaipurTourPackage3Nights4Days.stContent1.img} />
      <div className="sm:max-w-[750px] lg:max-w-[1100px] m-auto flex flex-col gap-20 mt-10 px-2">

       <SmTourPackageComp smPackageData={JaipurTourPackage3Nights4Days} />    
   
        <EnquiryForm />
      </div>
    </div>
  );
};

export default SpecialTour2;

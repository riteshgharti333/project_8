import { useLocation } from "react-router-dom";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import { formatPathTitle } from "../../assets/someFunction";
import EnquiryForm from "../../components/EnquiryForm/EnquiryForm";
import SmTourPackageComp from "../../components/SmTourPackageComp/SmTourPackageComp";
import { JaisalmerHalfDayTour } from "../../assets/paackSmData/jaiPackageData";
import { Urbania12SeaterJaipur } from "../../assets/paackSmData/jaipurSmData";

const RjSmPackageData27 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

  return (
    <div>
      <ServiceBanner
        bannerTitle={title}
        bannerImg={Urbania12SeaterJaipur.stContent1.img}
      />
      <div className="sm:max-w-[750px] lg:max-w-[1100px] m-auto flex flex-col gap-20 mt-10 px-2">
        <SmTourPackageComp smPackageData={Urbania12SeaterJaipur} />

        <EnquiryForm />
      </div>
    </div>
  );
};

export default RjSmPackageData27;

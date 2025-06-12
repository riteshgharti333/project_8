import { useLocation } from "react-router-dom";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import { formatPathTitle } from "../../assets/someFunction";
import TourPackageContent from "../../components/TourPackageContent/TourPackageContent";
import {
  specialPackageCards,
  specialPackageContent,
} from "../../assets/tourpackageData/specialPackageData";

import tp_banner from "../../assets/images/tpBanner/special.jpg";

const TourPackages1 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

  return (
    <div>
      <ServiceBanner bannerTitle={title} bannerImg={tp_banner} />
      <TourPackageContent
        packageData={specialPackageCards}
        specialData={specialPackageContent}
        linkPath="special-tour-package"
      />
    </div>
  );
};

export default TourPackages1;

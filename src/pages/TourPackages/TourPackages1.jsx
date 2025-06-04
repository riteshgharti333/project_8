import { useLocation } from "react-router-dom";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import { formatPathTitle } from "../../assets/someFunction";
import TourPackageContent from "../../components/TourPackageContent/TourPackageContent";
import {
  specialPackageCards,
  specialPackageContent,
} from "../../assets/tourpackageData/specialPackageData";

const TourPackages1 = () => {
  const { pathname } = useLocation();
  const title = formatPathTitle(pathname);

  return (
    <div>
      <ServiceBanner bannerTitle={title} />
      <TourPackageContent
        packageData={specialPackageCards}
        specialData={specialPackageContent}
      />
    </div>
  );
};

export default TourPackages1;

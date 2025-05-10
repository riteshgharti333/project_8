import React from 'react'
import { useLocation } from 'react-router-dom';
import { formatPathTitle } from '../../assets/someFunction';
import ServiceBanner from '../../components/ServiceBanner/ServiceBanner';
import RentalContent from '../../components/RentalContent/RentalContent';

const RentalService1 = () => {
    const { pathname } = useLocation();
      const title = formatPathTitle(pathname);
  return (
    <div>
      <ServiceBanner  bannerTitle={title}  />
      <RentalContent />
    </div>
  )
}

export default RentalService1

import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const loadInstituteTemp = (tempType) => {
  let t = tempType.slice(4);
  return lazy(() => import(`./templates/institutes/temp${t}/ITemp${t}`));
};

const Shop_Temp = () => {
  const { tempType } = useParams();
  const location = useLocation();
  const contentData = location.state?.contentData;
  const images = location.state?.images; // Get the images from the location state

  const InstituesTempComponent = loadInstituteTemp(tempType);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InstituesTempComponent contentData={contentData} images={images} />
    </Suspense>
  );
};

export default Shop_Temp;
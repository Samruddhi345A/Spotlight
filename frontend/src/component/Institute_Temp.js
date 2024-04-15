import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const loadInstituteTemp = (tempType) => {
  let t = tempType.slice(4);
  return lazy(() => import(`./templates/Org/temp${t}/ITemp${t}`));
};

const Institute_Temp = () => {
  const { tempType } = useParams();
  const location = useLocation();
  const contentData = location.state?.contentData; // Get the data from the location state
  const images = location.state?.images; // Get the images from the location state
  console.log(contentData)
  const InstituteTempComponent = loadInstituteTemp(tempType);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InstituteTempComponent contentData={contentData} images={images} />
    </Suspense>
  );
};

export default Institute_Temp;
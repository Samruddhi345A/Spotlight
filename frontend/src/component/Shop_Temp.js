import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const loadShopTemp = (tempType) => {
  let t = tempType.slice(4);
  
  return lazy(() => import(`./templates/shops/temp${t}/STemp${t}`));
};

const Shop_Temp = () => {
  const { tempType } = useParams();
  const location = useLocation();
  const contentData = location.state?.contentData;
  const images = location.state?.images; // Get the images from the location state

  const ShopTempComponent = loadShopTemp(tempType);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopTempComponent contentData={contentData} images={images} />
    </Suspense>
  );
};

export default Shop_Temp;
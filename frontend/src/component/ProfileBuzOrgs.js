import React from 'react'
import { Link } from 'react-router-dom';
import getImageIds from './Spot';

function ProfileBuzOrgs({ data, images }) {
  const { contentData, tempType } = data || {};

  // Check if contentData is defined before accessing its properties
  const shopTitle = contentData?.title?.shopTitle || "";
  const shopDescription = contentData?.description?.shopDescription || "";

  // Get the image IDs for the current item
  const imageIds = getImageIds(data);

  // Find the image data for chooseImage
  const shopImageId = contentData?.images?.shopImage?.[0] || '';
  const shopImageData = images.find(img => img.id === shopImageId.toString());
  const shopImageUrl = shopImageData ? URL.createObjectURL(shopImageData.blob) : '';

  return (
    <div className="card border-info mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header">{shopTitle}</div>
      <div className="card-body text-info">

        {shopImageUrl ? (
          <img src={shopImageUrl} width="200px" height="200px" alt="Shop" />
        ) : (
          <p>No choose image available</p>
        )}
        <h5 className="card-title"></h5>
        <p className="card-text">{shopDescription}</p>
        <Link to={`/shop-temp/${tempType}`} state={{ contentData, images }}>
          check it &rarr;
        </Link>
      </div>
    </div>
  );
}

export default ProfileBuzOrgs;



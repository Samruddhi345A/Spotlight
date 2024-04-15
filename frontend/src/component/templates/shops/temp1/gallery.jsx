import React from "react";
import getImageIds from '../../../Spot';

export const Gallery = ( {contentData, images} ) => {
  
  // Get the image IDs for the current item
  const getImageIdsByType = (contentData, imageType) => {
    const imageIds = [];
    
    if (contentData && contentData.images) {
      const { images } = contentData;
      const imageArray = images[imageType] || [];
      imageArray.forEach((imageId) => {
        imageIds.push(imageId.toString());
      });
    }
    return imageIds;
  };
   // Get the image IDs for different image types
   const galleryImageIds = getImageIdsByType(contentData, 'galleryImage');
   
 
  // Find the image data for galleryImage
  const galleryImageData = galleryImageIds
  .map((imageId) => images.find((img) => img.id === imageId))
  .filter(Boolean);

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          
        </div>
        <div className="row">
        {galleryImageData.length > 0 ? (
            galleryImageData.map((imageData, i) => (
              <div key={`gallery-${i}`} className="col-sm-6 col-md-4 col-lg-4">
                <img src={`data:image/png;base64,${imageData.data}`} alt={`Gallery Image ${i}`} />
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};
import React from "react";

export const About = (props) => {
  const { contentData, images } = props || {};
  const { description = {} } = contentData || {};
  const { chooseDescription = [] } = description;

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
   const chooseImageIds = getImageIdsByType(contentData, 'chooseImage');
   const shopImageIds = getImageIdsByType(contentData, 'shopImage');
   

 
  // Find the image data for chooseImage
  const chooseImageData = chooseImageIds
  .map((imageId) => images.find((img) => img.id === imageId))
  .filter(Boolean);

  // Find the image data for shopImage
  const shopImageData = shopImageIds
  .map((imageId) => images.find((img) => img.id === imageId))
  .filter(Boolean);

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            {chooseImageData.length > 0 ? (
              chooseImageData.map((imageData, i) => (
                <div key={`choose-${i}`} className="col-sm-6 col-md-4 col-lg-4">
                  <img
                    src={`data:image/png;base64,${imageData.data}`}
                    width="100px"
                    height="400px"
                    alt={`Choose Image ${i}`}
                  />
                </div>
              ))
            ) : (
              <p></p>
            )}
          </div>
          <div className="col-xs-12 offset-2 col-md-4">
            <div className="about-text">
              <h2>About Us</h2>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {chooseDescription.length > 0 ? (
                      chooseDescription.map((d, i) => <li key={i}>{d}</li>)
                    ) : (
                      <p>Loading...</p>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

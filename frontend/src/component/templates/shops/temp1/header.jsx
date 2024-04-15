import React from "react";

export const Header = (props) => {
  const { contentData, images } = props || {};
  const { title = {}, description = {} } = contentData || {};
  const { shopTitle = " " } = title;
  const { shopDescription = " " } = description;
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
 const shopImageIds = getImageIdsByType(contentData, 'shopImage');
 

// Find the image data for shopImage
const shopImageData = shopImageIds
.map((imageId) => images.find((img) => img.id === imageId))
.filter(Boolean);
const backgroundImageStyle = shopImageData.length > 0
? {
    backgroundImage: `url('${shopImageData.map((img) => `data:image/png;base64,${img.data}`).join(',')}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }
: {};
  return (
    <header id="header">
      <div className="temp1-intro" style={backgroundImageStyle} >
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 .temp1-intro-text">
                <h1>
                  {shopTitle}
                  <span></span>
                </h1>
                <p>{shopDescription}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
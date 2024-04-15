import { Link } from 'react-router-dom';
import {getImageIds} from './Spot';
function SpotsItem({ data, images }) {
  const { contentData, tempType } = data || {};
  const shopTitle = contentData?.title?.shopTitle || "";
  const shopDescription = contentData?.description?.shopDescription || "";

  // Get the image IDs for the current item
  const getImageIdsByType = (ele, imageType) => {
    const imageIds = [];
    const { contentData } = ele;
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
   const shopImageIds = getImageIdsByType(data, 'shopImage');
   
 
  // Find the image data for shopImage
  const shopImageData = shopImageIds
  .map((imageId) => images.find((img) => img.id === imageId))
  .filter(Boolean);

  return (
    <div>
      <div className=" row item mb-5  spot-item">
        <div className="media">
          <div className="col-sm-3">
            {shopImageData.length > 0 ? (
              shopImageData.map((imageData, index) => (
                <img className='spot-image'
                  key={index}
                  src={`data:image/png;base64,${imageData.data}`}
                  width="200px"
                  height="200px"
                  alt="Shop Image"
                />
              ))
            ) : (
              <p>No shop image available</p>
            )}
          </div>
          <div className="col-sm-9">
            <div className="media-body">
              <h3 className="title mb-1">
                <span className="spot-title">{shopTitle}</span>
                
              </h3>
              <br />
              <p>{shopDescription}</p>
              <Link className='spot-link' to={`/shop-temp/${tempType}`} state={{ contentData, images }}>
                Read more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpotsItem;
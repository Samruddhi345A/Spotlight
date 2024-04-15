// ISpotItem.js
import { Link } from 'react-router-dom';
import getImageIds from './Spot';
import '../css/spots.css'
function ISpotItem({ data, images }) {
  const { contentData, tempType } = data || {};

  // Check if contentData is defined before accessing its properties
  const instituteTitle = contentData?.title?.instituteTitle || "";
  const instituteDescription = contentData?.description?.instituteDescription || "";
  
  // Get the image IDs for the current item
  const imageIds = getImageIds(data);

  // Find the image data for instituteImage
  const instituteImageId = contentData?.images?.instituteImage?.[0] || '';

  const getImageUrl = (imageId) => {
    const imageData = images.find((img) => img.id === imageId);
    return imageData ? `data:image/png;base64,${imageData.data}` : null;
  };

  return (
    <div>
      <div className="row item mb-5 spot-item">
        <div className="media">
          <div className='col-sm-3 '>
            {instituteImageId ? (
              <img className='spot-image' src={getImageUrl(instituteImageId)} width="200px" height="200px" alt="Institute Image" />
            ) :  (
              <p>No institute image available</p>
            )}
          </div>
          <div className="col-sm-9">
            <div className="media-body">
              <h3 className="title mb-1">
                <span className="spot-title">{instituteTitle}</span>
              </h3>
              <br />
              <p>{instituteDescription}</p>
              <Link className='spot-link' to={`/institute-temp/${tempType}`} state={{ contentData, images }}>
                Read more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ISpotItem;
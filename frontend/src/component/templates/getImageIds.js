import React from 'react'

function getImageIds() {
    const getImageId = (ele, imageType) => {
        const imageIds = [];
        if (ele && ele.images) {
          const { images } = ele;
          const imageArray = images[imageType] || [];
          imageArray.forEach((imageId) => {
            imageIds.push(imageId.toString());
          });
        }
        return imageIds;
      };
  return (<></>)
}

export default getImageIds


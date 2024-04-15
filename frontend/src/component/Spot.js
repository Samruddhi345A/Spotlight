import React, { useContext, useEffect, useState } from 'react';
import SpotsItem from './SpotsItem';
import SpotItemI from './ISpotItem';
import buzContext from '../context/buzContext';
import insContext from '../context/insContext';
import { useNavigate } from 'react-router-dom';
import "../css/spots.css"
// Export the getImageIds function
export
  const getImageIds = (ele) => {
    const imageIds = [];
    const { contentData } = ele;

    if (contentData && contentData.images) {
      const { images } = contentData;
      Object.values(images).forEach((imageArray) => {
        imageArray.forEach((imageId) => {
          imageIds.push(imageId.toString());
        });
      });
    }

    return imageIds;
  };

function Spot() {
  const Buz = useContext(buzContext);
  const Ins = useContext(insContext);
  const navigate = useNavigate();
  const { buzs, images, setBuz, getAllBuz, getImages } = Buz;
  const { inss, imagesI, setIns, getAllIns, getImagesI } = Ins;
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
    
        try {
          await getAllBuz();
          await getAllIns();
        } catch (error) {
          console.error('Error fetching data:', error);
        }
     
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (buzs.length > 0 || inss.length > 0) {
      const allBusinessImageIds = buzs.flatMap(getImageIds);
      getImages(allBusinessImageIds);
      const allInstituteImageIds = inss.flatMap(getImageIds);
      getImagesI(allInstituteImageIds);
      const combinedArray = [...buzs, ...inss];
      // Shuffle the combinedArray
      combinedArray.sort(() => Math.random() - 0.5);
      setCombinedData(combinedArray);
    }
  }, [buzs, inss]);

  return (
    <>
      <div className=" spots-background">
        <div className='row'>
        {combinedData.map((ele) => {
        
          const isInstitute = ele.contentData && Object.keys(ele.contentData).includes('title') && ele.contentData.title.instituteTitle;
          const Component = isInstitute ? SpotItemI : SpotsItem;
          const imagesForComponent = isInstitute ? imagesI : images;
          return (
            <div className="container  col-sm-12 " key={ele._id}>
              <Component data={ele} images={imagesForComponent} />
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
}

export default Spot;

import React, { useContext, useEffect, useState } from 'react';
import SpotsItem from './SpotsItem';
import buzContext from '../context/buzContext';
import { useNavigate } from 'react-router-dom';
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

function Business(){
   
  const Buz = useContext(buzContext);
  const navigate = useNavigate();
  const { buzs, images, setBuz, getAllBuz, getImages } = Buz;
 
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      if (localStorage.getItem('token')) {
        try {
          await getAllBuz();
         
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      } else {
        navigate('/Login');
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (buzs.length > 0) {
      const allBusinessImageIds = buzs.flatMap(getImageIds);
      getImages(allBusinessImageIds);
    }
  }, [buzs]);


  return (
    <>
      <div className="row">
        {buzs.map((ele) => {
          console.log(ele);
          return (
            <div className="container-fluid col-sm-12 my-4" key={ele._id}>
              <SpotsItem data={ele} images={images} />
            </div>
          );
        })}
      </div>
    </>
  );
}


export default Business

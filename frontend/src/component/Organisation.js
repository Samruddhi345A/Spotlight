
import Events from './Events'
import "../css/Ev.css"
import React, { useContext, useEffect, useState } from 'react';
import SpotsItem from './SpotsItem';
import SpotItemI from './ISpotItem';
import buzContext from '../context/buzContext';
import insContext from '../context/insContext';
import { useNavigate } from 'react-router-dom';
import ISpotItem from './ISpotItem';

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
  
function Organisation()  {
  const Ins = useContext(insContext);
  const navigate = useNavigate();
  const { inss, imagesI, getAllIns, getImagesI } = Ins;

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      if (localStorage.getItem('token')) {
        try {
          await getAllIns();
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
    if (inss.length > 0) {
      
      const allInstituteImageIds = inss.flatMap(getImageIds);
      getImagesI(allInstituteImageIds);
     
    }
  }, [inss]);

  return (
    <>
       <Events /> 
      <div className="row">
        {inss.map((ele) => {
          return (
            <div className="container-fluid col-sm-12 my-4" key={ele._id}>
              <ISpotItem data={ele} images={imagesI} />
            </div>
          );
        })}
      </div>
    </>
  );
}


export default Organisation

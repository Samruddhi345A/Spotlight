import { useState ,useEffect} from "react";
import EveContext from "./eveContext";

const EveState = (props) => {
  const host = "http://localhost:5000";
  const eveInitial = [];
  const [eves, setEves] = useState(eveInitial);
  const [userEves, setUserEves] = useState(eveInitial);
  const [imagesE, setEImages] = useState([]);
  // Get All Eves
  const getAllEves = async () => {
    const response = await fetch(`${host}/api/eve/fetcheve`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const json = await response.json();
    setEves(json);
    
  };

  // Get eves of one user
 // Get eves of one user
const getEvesOfOne = async () => {
  try {
    const response = await fetch(`${host}/api/eve/fetchevetouser`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    setUserEves(json);
  } catch (error) {
    console.error('Error fetching eves:', error);
  }
};
  // Add event
  const addEve = async (formData) => {
    try {
      for (const [key, value] of formData.entries()) {
        console.log(key, value);
      }
      const response = await fetch(`${host}/api/eve/addeve`, {
        method: 'POST',
        body: formData,
        timeout: 600000,
        maxBodyLength: 1000000000,
        headers: {
          'auth-token': localStorage.getItem('token')
        },
      });
      const data = await response.json();
      console.log(data.message, data.result);
    } catch (err) {
      console.error(err);
    }
  };

  // Delete Event
  const deleteEve = async (id) => {
    try {
      const response = await fetch(`${host}/api/eve/deleteeve/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },
      });
      if (response.ok) {
        const updatedEves = eves.filter((eve) => eve._id !== id);
        setEves(updatedEves);
        console.log('Event deleted successfully');
      } else {
        const error = await response.json();
        console.error('Error deleting event:', error);
      }
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  // Update Event
  const updateEve = () => {};

  const getImagesE = async (ids) => {
    try {
      const response = await fetch(`${host}/api/eve/imagesE?ids=${ids.join(',')}`, {
        method: 'GET',
        headers: {
          'auth-token': localStorage.getItem('token'),
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const imageDataArray = await response.json();
      if(imageDataArray.length>0){
        
        console.log(imageDataArray)
        const idata = imageDataArray
        console.log(idata)
        setEImages(imageDataArray)
        
        return idata
      }
    } catch (err) {
      console.error(err);
    }
  };
  // Function to send the imageDataArray
// const sendImageDataArray = (imageDataArray) => {
//   return imageDataArray
// };
  return (
    <EveContext.Provider value={{ eves, imagesE, userEves, getAllEves, getEvesOfOne, addEve, deleteEve, updateEve, getImagesE }}>
      {props.children}
    </EveContext.Provider>
  );
};

export default EveState;
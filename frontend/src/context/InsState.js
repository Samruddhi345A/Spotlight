import { useState } from "react";
import InsContext from "./insContext";

const InsState = (props) => {
  const host = "http://localhost:5000";
  const insInitial = [];
  const [inss, setIns] = useState(insInitial);
  const [userInss, setUserInss] = useState(insInitial);

  const [imagesI, setImagesI] = useState([]);

  // Get All Ins
  const getAllIns = async () => {
    const response = await fetch(`${host}/api/ins/fetchins`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = await response.json();
    setIns(json);
  };

  // Get ins of one user
  const getInsOfOne = async () => {
    const response = await fetch(`${host}/api/ins/fetchinstouser`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = await response.json();
    setUserInss(json);
  };

  // Add ins
  const addIns = async (formData) => {
    for (const [key,value] of formData.entries()){
      console.log(key,value)
    
    }
    try {
      const response = await fetch('http://localhost:5000/api/ins/addins', {
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

  // Delete Ins
  const deleteIns = async (id) => {
    try {
      const response = await fetch(`${host}/api/ins/deleteins/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },
      });

      if (response.ok) {
        const updatedInss = inss.filter((ins) => ins._id !== id);
        setIns(updatedInss);
        console.log('Institute deleted successfully');
      } else {
        const error = await response.json();
        console.error('Error deleting ins:', error);
      } 
    } catch (error) {
      console.error('Error deleting ins:', error);
    }
  };

  // Update Ins
  const updateIns = () => {
    // Add update logic here
  };

  const getImagesI = async (ids) => {
    try {
      const response = await fetch(`${host}/api/ins/images?ids=${ids.join(',')}`, {
        method: 'GET',
        headers: {
          'auth-token': localStorage.getItem('token'),
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const imageDataArray = await response.json();
      setImagesI(imageDataArray);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <InsContext.Provider value={{ inss,userInss, imagesI, getAllIns, getInsOfOne, addIns, deleteIns, updateIns, getImagesI }}>
      {props.children}
    </InsContext.Provider>
  );
};

export default InsState;
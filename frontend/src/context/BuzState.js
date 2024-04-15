import { useState } from "react";
import BuzContext from "./buzContext";

const BuzState = (props)=>{
    const host = "http://localhost:5000"
    const buzInitial =[]; 
      const [buzs,setBuz] = useState(buzInitial)
      const [userBuzs, setUserBuzs] = useState(buzInitial);
      const [images, setImages] = useState([]);
      //Get All Buz
      const getAllBuz = async ()=>{
         const response = await fetch("http://localhost:5000/api/buz/fetchbuzz",{
          method:'Get',
          headers:{
            'Content-Type':'application/json',
            'auth-token':localStorage.getItem('token')
          }
      
         });
       
         const json = await response.json();
         setBuz(json)
         
      }

      //Get buz of one user
      const getBuzOfOne = async ()=>{
        try {
        const response = await fetch(`${host}/api/buz/fetchbuztouser`,{
         method:'Get',
         headers:{
           'Content-Type':'application/json',
           'auth-token':localStorage.getItem('token')
         },
        });
        const json = await response.json();
        setUserBuzs(json)
      } catch (error) {
        console.error('Error fetching buzs:', error);}
     }


      //Add business
      const addBuz = async (formData)=>{
        try {
          for (const [key,value] of formData.entries()){
            console.log(key,value)
          
          }
          const response = await fetch('http://localhost:5000/api/buz/addbuz',{
            method:'POST',
            body: formData,
            timeout:600000,
            maxBodyLength:1000000000,
            headers:{
              'auth-token':localStorage.getItem('token')
            },
        
          });
          const data = await response.json();
          console.log(data.message,data.result);
        } catch (err) {
          console.error(err)
        }
      }

      //Delete Business
      const deleteBuz = async (id)=>{
        try {
          const response = await fetch(`${host}/api/buz/deletebuz/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token'),
            },
          });
      
          if (response.ok) {
            const updatedBuzs = buzs.filter((buz) => buz._id !== id);
            setBuz(updatedBuzs);
            console.log('Business deleted successfully');
          } else {
            const error = await response.json();
            console.error('Error deleting business:', error);
          }
        } catch (error) {
          console.error('Error deleting business:', error);
        }
      
      }
      //Update Business
      const updateBuz = ()=>{

      }
      const getImages = async (ids) => {
        try {
          const response = await fetch(`${host}/api/buz/images?ids=${ids.join(',')}`, {
            method: 'GET',
            headers: {
              'auth-token': localStorage.getItem('token'),
            },
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const imageDataArray = await response.json();
          setImages(imageDataArray);
        } catch (err) {
          console.error(err);
        }
      };
    return (
        <BuzContext.Provider value={{buzs,images,userBuzs,getAllBuz,getBuzOfOne,addBuz,deleteBuz,updateBuz,getImages}}>
            {props.children}
        </BuzContext.Provider>
    )
}


export default BuzState;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "../css/inputEve.css"
function AddEvents() {
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [credentials, setCredentials] = useState({
    orgName: "",})
    let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      console.error('No image selected');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('orgName', credentials.orgName);
      const response = await fetch('http://localhost:5000/api/eve/addeve', {
        method: 'POST',
        body: formData,
        headers: {
          'auth-token': localStorage.getItem('token'),
        },
      });

      if (response.ok) {
        console.log("data added")
       if(window.confirm("Event Added Successfully!")){
        navigate("/Profile")
       }
      } else {
        console.error('Error uploading image');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange=(e)=>{
    e.preventDefault();
    const { name, value } = e.target;

    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    // Create a preview URL for the selected image
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl);
    } else {
      setPreviewImage(null);
    }
  };

  return (
    <div className="event-form my-5">
    
      <h2>Enter your Institute's Event</h2>
      <form onSubmit={handleSubmit}>
        <br/>
        <div className="form-group">
        <label htmlFor="OrgName">Organisation Name</label>
        <input className="input--style-4" onChange={handleChange} type="text" value={credentials.orgName} name="orgName" minLength={3} required />
          </div>
          <div className='form-group'>
          <label htmlFor="image">Select Image:</label>
          <input type="file" id="image" onChange={handleImageChange} />
        </div>
        {previewImage && (
          <div className="form-group">
            <img src={previewImage} alt="Preview" className="preview-image" />
          </div>
        )}
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddEvents;
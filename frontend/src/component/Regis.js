import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Avatar from 'react-avatar-edit';
import '../css/regist.css'
export default function Regis() {
    const [src, setSrc] = useState(null);
    const [preview, setPreview] = useState(null);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const onCrop = view => {
        setPreview(view)
    }

    const [credentials, setCredentials] = useState({
        first_name: "",
        last_name: "",
        birthdate: "",
        gender: "",
        email: "",
        password: "",
        c_password: "",
        role: "Business User"
    })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = credentials.first_name + " " + credentials.last_name;
        const { birthdate, gender, email, password, role,c_password } = credentials;
        if(c_password!==password){
            alert("Passwords do not match")
            return
        }
        // Create a new FormData object
        const formData = new FormData();

        if (preview) {
            const base64Data = preview.split(',')[1]; // Remove the data:image/png;base64 prefix
            const binaryData = atob(base64Data); // Decode base64 string
            const arrayBuffer = new ArrayBuffer(binaryData.length);
            const uint8Array = new Uint8Array(arrayBuffer);
        
            for (let i = 0; i < binaryData.length; i++) {
              uint8Array[i] = binaryData.charCodeAt(i);
            }
        
            const blob = new Blob([uint8Array], { type: 'image/png' });
            formData.append('avatar', blob, 'avatar.png');
          }
        
        // Append the other form data
        formData.append('name', name);
        formData.append('birthdate', birthdate);
        formData.append('gender', gender);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('role', role);
        
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            body: formData // Send the FormData object in the request body
        });

        const json = await response.json();
        if (json.success) {
            localStorage.setItem('token', json.authToken);
            navigate("/Profile")
        } else {
            alert("Invalid credentials")
        }
    }
    useEffect(() => {
        // Validate password and confirm password
        if (
          credentials.password &&
          credentials.c_password &&
          credentials.password !== credentials.c_password
        ) {
          setPasswordMatch(false);
         
        } else {
          setPasswordMatch(true);
         
        }
      }, [credentials.password, credentials.c_password]);
    
      const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
    
        setCredentials((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

    return (
        <>
            <div className="container bg-gra-02 p-t-130 p-b-100 font-poppins">
                <div className="wrapper wrapper--w680">
                    <div className="card card-4">
                        <div className="card-body">
                            <h2 className="title">Registration Form</h2>
                            <form method="POST" onSubmit={handleSubmit}>
                                <div className="row my-3">
                                    <center>
                                        <Avatar round="10px"
                                            required
                                            facebookId="100008343750912"
                                            onCrop={onCrop}
                                            src={src}
                                            height={200}
                                            size="150" />
                                    </center>
                                </div>
                                <div className="row row-space">
                                    <div className="col-6">
                                        <div className="input-group">
                                            <label className="label">first name</label>
                                            <input className="input--style-4" onChange={handleChange} type="text" value={credentials.first_name} name="first_name" minLength={3} required />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="input-group">
                                            <label className="label">last name</label>
                                            <input className="input--style-4" onChange={handleChange} type="text" value={credentials.last_name} name="last_name" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-space">
                                    <div className="col-4">
                                        <div className="input-group">
                                            <label className="label">Birthday</label>
                                            <div className="input-group-icon">
                                                <input className="input--style-4 js-datepicker" type="date" name="birthdate" onChange={handleChange} required />
                                                <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="input-group">
                                            <label className="label">Gender</label>
                                            <div className="p-t-10">
                                                <label className="radio-container mr-3">Male
                                                    <input type="radio" onChange={handleChange} value="Male" name="gender" />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="radio-container mr-3">Female
                                                    <input type="radio" onChange={handleChange} value="Female" name="gender" />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <label className="radio-container">Other
                                                    <input type="radio" onChange={handleChange} value="Other" name="gender" />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-space">
                                    <div className="col-6">
                                        <div className="input-group">
                                            <label className="label">Email</label>
                                            <input className="input--style-4" onChange={handleChange} type="email" value={credentials.email} name="email" required />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="input-group">
                                            <label className="label">Password </label>
                                            <input
                                                className="input--style-4" style={{
                                                    border: !passwordMatch ? "1px solid red" : "inherit",
                                                  }}
                                                onChange={handleChange}
                                                type="password"
                                                value={credentials.password}
                                                name="password"
                                                minLength={8}
                                                required
                                            />
                                            </div>
                                    </div>
                                </div>
                                <div className="row row-space">
                                    <div className="col-6">
                                        <div className="input-group">
                                            <div><label className="label mr-2">Role: </label></div>
                                            <div className="rs-select2 js-select-simple select--no-search">
                                                <div className=" select-dropdown">
                                                    <select value={credentials.role} onChange={handleChange} name="role" min="4">
                                                        <option name="role" value="Business User">Business Person</option>
                                                        <option name="role" value="Organisation User">Head Of Organisation</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=" col-6">
                                        <div className="input-group">
                                            <label className="label">Confirm Password </label>
                                            <input
                                                className="input--style-4" style={{
                                                    border: !passwordMatch ? "1px solid red" : "inherit",
                                                  }}
                                                value={credentials.c_password}
                                                onChange={handleChange}
                                                type="password"
                                                name="c_password"
                                                required
                                            />
                                            {!passwordMatch && (
                                                <div 
                                                style={{
                                                  color: "red",
                                                  fontSize: "0.8rem",
                                                  marginTop: "0.25rem",
                                                }}>
                                                    Passwords do not match
                                                </div>
                                            )}  </div>
                                    </div>

                                </div>
                                <div className="p-t-15">
                                    <button className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
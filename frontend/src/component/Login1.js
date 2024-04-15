import React,{useState} from "react";
import { Link,useNavigate } from 'react-router-dom';

import '../css/login.css'


export default function Login1(props) {
  const [credentials,setCredentials ] = useState({email:"",password:""})
  let navigate = useNavigate();
  const handleSubmit=async (e)=>{
    e.preventDefault();
      const response = await fetch("http://localhost:5000/api/auth/login",{
       method:'POST',
       headers:{
         'Content-Type':'application/json',
          },
          body: JSON.stringify({email: credentials.email,password:credentials.password})
      });
      const json = await response.json();
      console.log(json);
      if(json.success){
        localStorage.setItem('token',json.authToken);
        navigate("/Profile")
      }
      else{
        alert("Invalid credentials")
      }
  }

  const onChange =(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value});
  }

  return (
    <div className="container login-background ">
      <center>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input type="email" name="email" value={credentials.email} onChange={onChange} required="" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" value={credentials.value} onChange={onChange} required="" />
            <label>Password</label>
          </div>
          <button  className="submit-box" type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
          <div className="reg-box">
            <div className="A1">
              <a className="link-color" href="forget.js">Forgot Password?</a>
            </div>
            <div className="A2 text-center">
              <small>
                Don't have an account?
                <Link className="link-color" to="/SignUp">Register</Link>
              </small>
            </div>
          </div>
        </form>
      </div>
      </center>
     
    </div>
  );
}

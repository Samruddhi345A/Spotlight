// UserState.js
import { useState } from "react";
import UserContext from "./userContext";

const UserState = (props) => {
  const host = "http://localhost:5000";
 
  const userInitial = [];
  const [users, setUsers] = useState(userInitial);

  // Add User
  const addUser = async (formData) => {
    try {
      const response = await fetch(`${host}/api/auth/createuser`, {
        method: 'POST',
        body: formData,
        headers: {
          'auth-token': localStorage.getItem('token')
        }
      });
      const data = await response.json();
      console.log(data.message, data.result);
    } catch (err) {
      console.error(err);
    }
  }
//localhost:5000/api/auth/getuser
const getUser = async () => {
  try {
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: 'POST',
      headers: {
        'auth-token': localStorage.getItem('token')
      }
    });
    const data = await response.json();
    setUsers(data)
    
  } catch (err) {
    console.error(err);
  }
}
  // Delete User
  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${host}/api/auth/deleteuser/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const data = await response.json();
      console.log(data.message);
    } catch (err) {
      console.error(err);
    }
  }

  // Update User
  const updateUser = async (id, formData) => {
    try {
      const response = await fetch(`${host}/api/auth/updateuser/${id}`, {
        method: 'PUT',
        body: formData,
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
      const data = await response.json();
      console.log(data.message);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <UserContext.Provider value={{ users, getUser, deleteUser, updateUser }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState;
import { useState } from "react";
import emailjs from "@emailjs/browser";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const { contentData } = props || {};
  const { contact = {} } = contentData || {};
  const { contactNo = [],contactE=[] } = contact;
 
console.log(contentData)

  return (
    <div>
     <br/>
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Contacts</h2>
            </div>
      <div className="container row">
     
     
      {contactNo.length > 0 ? (
            contactNo.map((d, i) => (
              <div key={i} className="col-sm-4 offset-4">
                  <h3>{d}</h3>
              
              </div>
            ))
          ) : (
            <p></p>
          )}
      </div>
        <div className="container row">
      <div className="col-sm-4 offset-4 my-2">
     
      {contactE.length > 0 ? (
            contactE.map((d, i) => (
              <div key={i} className="col-sm-4 offset-4">
                  <h3>{d}</h3>
              </div>
            ))
          ) : (
            <p></p>
          )}                    </div>
</div>
      </div>
      </div>
  
    </div>
  );
};

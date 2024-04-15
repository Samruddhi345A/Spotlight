import React from "react";

export const Services = (props) => {
  const { contentData } = props || {};
  const { title = {}, description = {} } = contentData || {};
  const { serviceTitle = [] } = title;
  const {  serviceDescription = [] } = description;


  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          {serviceTitle.length > 0 ? (
            serviceTitle.map((d, i) => (
              <div key={i} className="col-md-4">
                {" "}
                <i></i>
                <div className="service-desc">
                  <h3>{d}</h3>
                  <p>{serviceDescription[i] || ""}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};
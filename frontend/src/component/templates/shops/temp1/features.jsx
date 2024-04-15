import React from "react";

export const Features = (props) => {
  const { contentData } = props || {};
  const { title = {}, description = {} } = contentData || {};
  const { featureTitle = [] } = title;
  const { featureDescription = [] } = description;

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {featureTitle.length > 0 ? (
            featureTitle.map((d, i) => (
              <div key={i} className="col-xs-6 col-md-3">
                {" "}
                <i></i>
                <h3>{d}</h3>
                <p>{featureDescription[i] || ""}</p>
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
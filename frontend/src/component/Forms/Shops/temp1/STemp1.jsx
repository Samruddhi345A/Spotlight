import React, { useState, useContext } from "react";
import EditExt from "react-editext";
import { useNavigate } from 'react-router-dom';
import buzContext from "../../../../context/buzContext";
import "./css/style.css";
import "./STemp_1.css";


const STemp1 = () => {
  const navigate = useNavigate();
//getting add buz from context
const Buz = useContext(buzContext)
const {addBuz} = Buz;
  //sample data to use in <p> tag
  const [replaceData, setreplaceData] = useState({
    title: "Title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus cum iste nesciunt adipisci atque, eveniet hic quod modi voluptatum est ad alias illo laboriosam inventore debitis quibusdam doloribus veritatis aliquid!",
    image: null,
    contactNo:"Contact number",
    contactE:"Email address"
  });

//sample image to use in <ing> tag
const placeholderImage =
"https://via.placeholder.com/300x200?text=Placeholder";

//to change between input field and p tag. initial value is false.If false=shows <p> tag. If True=shows <editext> tag
  const [editingState, setEditingState] = useState({
    shopTitle: false,
    shopDescription: false,
    shopImage: false,
    chooseImage: false,
    galleryImage: false,
    featureTitle1: false,
    featureDescription1: false,
    featureTitle2: false,
    featureDescription2: false,
    featureTitle3: false,
    featureDescription3: false,
    chooseDescription: false,
    serviceTitle1: false,
    serviceDescription1: false,
    serviceTitle2: false,
    serviceDescription2: false,
    serviceTitle3: false,
    serviceDescription3: false,
    contactNo1:false,contactNo2:false,contactNo3:false,contactE1:false,contactE2:false,contactE3:false  

  });

  //Values from user are stored here
  const [nbuzs, setnBuz] = useState({
    images: { galleryImage: [], chooseImage: [],shopImage: [] },
    
    title: { shopTitle: [], featureTitle: [], serviceTitle: [] },
    description: {
      shopDescription: [],
      featureDescription: [],
      serviceDescription: [],
      chooseDescription: [],
    },contact:{contactNo:[],contactE:[]},
    tempType:"Temp1"
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("tempType", nbuzs.tempType);
  
      // Add images
  nbuzs.images.galleryImage.forEach((image) => {
    formData.append('images.galleryImage', image);
  });

  nbuzs.images.chooseImage.forEach((image) => {
    formData.append('images.chooseImage', image);
  });

  nbuzs.images.shopImage.forEach((image) => {
    formData.append('images.shopImage', image);
  });

  
    // Add titles
    Object.entries(nbuzs.title).forEach(([key, value]) => {
      if (value.length > 0) {
        formData.append(`title.${key}`, JSON.stringify(value));
      }
    });
  
    // Add descriptions
    Object.entries(nbuzs.description).forEach(([key, value]) => {
      if (value.length > 0) {
        formData.append(`description.${key}`, JSON.stringify(value));
      }
    });
   
     // Add contact
     Object.entries(nbuzs.contact).forEach(([key, value]) => {
      if (value.length > 0) {
        formData.append(`contact.${key}`, JSON.stringify(value));
      }
    });
   
    addBuz(formData);
    if(window.confirm("Your Website is posted")){
       navigate("/Profile")
    }
  };
  //to save images taken from users
  const handleImgChange = (e, field) => {
    const newImages = Array.from(e.target.files);
    setnBuz((prevData) => {
      const newData = { ...prevData };
      newData.images[field] = newImages;
      return newData;
    });

  };

  //To save the text inputted from user
  const handleChange = (e, field, index) => {
    setnBuz((prevData) => {
      const newData = { ...prevData };

      const handleFieldChange = (obj, prop, value) => {
        obj[prop] = [
          ...(obj[prop] || []).slice(0, index),
          value,
          ...(obj[prop] || []).slice(index + 1),
        ];
      };

      if (field === "featureTitle") {
        handleFieldChange(newData.title, "featureTitle", e.target.value);
      } else if (field === "featureDescription") {
        handleFieldChange(
          newData.description,
          "featureDescription",
          e.target.value
        );
      } else if (field === "serviceTitle") {
        handleFieldChange(newData.title, "serviceTitle", e.target.value);
      } else if (field === "serviceDescription") {
        handleFieldChange(
          newData.description,
          "serviceDescription",
          e.target.value
        );
      } else if (field === "shopTitle") {
        handleFieldChange(newData.title, "shopTitle", e.target.value);
      } else if (field === "shopDescription") {
        handleFieldChange(newData.description,"shopDescription",e.target.value
        );
      } else if (field === "chooseDescription") {
        handleFieldChange(newData.description,"chooseDescription",e.target.value
        );
      } 
      else if (field === "contactNo") {
        handleFieldChange(newData.contact,"contactNo",e.target.value
        );
      } 
      else if (field === "contactE") {
        handleFieldChange(newData.contact,"contactE",e.target.value
        );
      } 
      else {
        newData[field] = {
          ...newData[field],
          [index]: e.target.value,
        };
      }

      return newData;
    });
  };

  //to toggle between input field and normal <p> tag
  const handleClick = (field) => {
    setEditingState((prevState) => ({
      ...prevState,
      [field]: true,
    }));
  };

  //save after user clicks on tick-mark
  const handleSave = (value, field, index) => {
    handleChange({ target: { value } }, field, index);
    // Additional logic to handle the save event, if needed
  };

  return (
    <form className="container-fluid" onSubmit={handleSubmit}>
      {/* Header */}
      <header id="header">
        <div className="temp1-intro" style={{background:`url(.${placeholderImage}) center center no-repeat`}}>
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 .temp1-intro-text">
                  <h1>
                    {editingState.shopTitle ? (
                      <EditExt
                        name="shopTitle"
                        defaultValue={
                          nbuzs.title.shopTitle[0] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "shopTitle", 0)}
                        onSave={(value) => handleSave(value, "shopTitle", 0)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("shopTitle")}>
                        {nbuzs.title.shopTitle[0] || replaceData.title}
                      </span>
                    )}
                  </h1>
                  <p>
                    {editingState.shopDescription ? (
                      <EditExt
                        name="shopDescription"
                        defaultValue={
                          nbuzs.description.shopDescription[0] ||
                          replaceData.description
                        }
                        inline
                        onChange={(e) => handleChange(e, "shopDescription", 0)}
                        onSave={(value) =>
                          handleSave(value, "shopDescription", 0)
                        }
                        placeholder={<span>Click to edit description</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("shopDescription")}>
                        {nbuzs.description.shopDescription[0] ||
                          replaceData.description}

                      </span>
                    )}
                    {
  editingState.shopImage ? (
    < input type="file"
      onChange={(e) => handleImgChange(e,"shopImage" )}
      multiple
      placeholder={
        <img
          src={
            nbuzs.images.shopImage && nbuzs.images.shopImage[0]
              ? nbuzs.images.shopImage[0]
              : placeholderImage
          }
          alt="Placeholder"
        />
      }
    />
  ) : (
    <img
      src={placeholderImage}
      alt="Placeholder"
      onClick={() => handleClick("shopImage")}
      style={{ cursor: "pointer" }}
    />
  )
}
                  </p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-12 col-md-offset-1 section-title">
            <h2>Features</h2>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-4">
              <h3>
                {editingState.featureTitle1 ? (
                  <EditExt
                    name="featureTitle1"
                    defaultValue={
                      nbuzs.title.featureTitle[0] || replaceData.title
                    }
                    inline
                    onChange={(e) => handleChange(e, "featureTitle", 0)}
                    onSave={(value) => handleSave(value, "featureTitle", 0)}
                    placeholder={<span>Click to edit title</span>}
                  />
                ) : (
                  <span onClick={() => handleClick("featureTitle1")}>
                    {nbuzs.title.featureTitle[0] || replaceData.title}
                  </span>
                )}
              </h3>
              <p>
                {editingState.featureDescription1 ? (
                  <EditExt
                    name="featureDescription1"
                    defaultValue={
                      nbuzs.description.featureDescription[0] ||
                      replaceData.description
                    }
                    inline
                    onChange={(e) => handleChange(e, "featureDescription", 0)}
                    onSave={(value) =>
                      handleSave(value, "featureDescription", 0)
                    }
                    placeholder={<span>Click to edit description</span>}
                  />
                ) : (
                  <span onClick={() => handleClick("featureDescription1")}>
                    {nbuzs.description.featureDescription[0] ||
                      replaceData.description}
                  </span>
                )}
              </p>
            </div>
            <div className="col-xs-6 col-md-4">
              <h3>
                {editingState.featureTitle2 ? (
                  <EditExt
                    name="featureTitle2"
                    defaultValue={
                      nbuzs.title.featureTitle[1] || replaceData.title
                    }
                    inline
                    onChange={(e) => handleChange(e, "featureTitle", 1)}
                    onSave={(value) => handleSave(value, "featureTitle", 1)}
                    placeholder={<span>Click to edit title</span>}
                  />
                ) : (
                  <span onClick={() => handleClick("featureTitle2")}>
                    {nbuzs.title.featureTitle[1] || replaceData.title}
                  </span>
                )}
              </h3>
              <p>
                {editingState.featureDescription2 ? (
                  <EditExt
                    name="featureDescription2"
                    defaultValue={
                      nbuzs.description.featureDescription[1] ||
                      replaceData.description
                    }
                    inline
                    onChange={(e) => handleChange(e, "featureDescription", 1)}
                    onSave={(value) =>
                      handleSave(value, "featureDescription", 1)
                    }
                    placeholder={<span>Click to edit description</span>}
                  />
                ) : (
                  <span onClick={() => handleClick("featureDescription2")}>
                    {nbuzs.description.featureDescription[1] ||
                      replaceData.description}
                  </span>
                )}
              </p>
            </div>
            <div className="col-xs-6 col-md-4">
              <h3>
                {editingState.featureTitle3 ? (
                  <EditExt
                    name="featureTitle3"
                    defaultValue={
                      nbuzs.title.featureTitle[2] || replaceData.title
                    }
                    inline
                    onChange={(e) => handleChange(e, "featureTitle", 2)}
                    onSave={(value) => handleSave(value, "featureTitle", 2)}
                    placeholder={<span>Click to edit title</span>}
                  />
                ) : (
                  <span onClick={() => handleClick("featureTitle3")}>
                    {nbuzs.title.featureTitle[2] || replaceData.title}
                  </span>
                )}
              </h3>
              <p>
                {editingState.featureDescription3 ? (
                  <EditExt
                    name="featureDescription3"
                    defaultValue={
                      nbuzs.description.featureDescription[2] ||
                      replaceData.description
                    }
                    inline
                    onChange={(e) => handleChange(e, "featureDescription", 2)}
                    onSave={(value) =>
                      handleSave(value, "featureDescription", 2)
                    }
                    placeholder={<span>Click to edit description</span>}
                  />
                ) : (
                  <span onClick={() => handleClick("featureDescription3")}>
                    {nbuzs.description.featureDescription[2] ||
                      replaceData.description}
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
            {
  editingState.chooseImage ? (
    <input type="file"
      onChange={(e) => handleImgChange(e,"chooseImage" )}
      multiple
      placeholder={
        <img
          src={
            nbuzs.images.chooseImage && nbuzs.images.chooseImage[0]
              ? nbuzs.images.chooseImage[0]
              : placeholderImage
          }
          alt="Placeholder"
        />
      }
    />
  ) : (
    <img
      src={placeholderImage}
      alt="Placeholder"
      onClick={() => handleClick("chooseImage")}
      style={{ cursor: "pointer" }}
    />
  )
}
            </div>
            <div className="col-xs-12 col-md-5 offset-md-1">
              <div className="about-text">
                <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <p>
                    {editingState.chooseDescription ? (
                      <EditExt
                        name="chooseDescription"
                        defaultValue={
                          nbuzs.description.chooseDescription[0] ||
                          replaceData.description
                        }
                        multiline
                        onChange={(e) =>
                          handleChange(e, "chooseDescription", 0)
                        }
                        onSave={(value) =>
                          handleSave(value, "chooseDescription", 0)
                        }
                        placeholder={<span>Click to edit description</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("chooseDescription")}>
                        {nbuzs.description.chooseDescription[0] ||
                          replaceData.description}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Gallery */}
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Gallery</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div className="portfolio-items">
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-4">
                {editingState.galleryImage ? (
                  <input type="file"
                    name="image"
                    onChange={(e) => handleImgChange(e,"galleryImage" )} 
                    multiple
                    placeholder={
                      <img src={ nbuzs.images.galleryImage && nbuzs.images.galleryImage[0]
                        ? nbuzs.images.galleryImage[0]
                        : placeholderImage} alt="Placeholder" />
                    }
                  />
                ) : (
                  <img
                    src={placeholderImage}
                    alt="Placeholder"
                    onClick={() => handleClick("galleryImage")}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Gallery */}
      {/* Services */}
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="service-desc">
                <h3>
                  {editingState.serviceTitle1 ? (
                    <EditExt
                      name="serviceTitle1"
                      defaultValue={
                        nbuzs.title.serviceTitle[0] || replaceData.title
                      }
                      inline
                      onChange={(e) => handleChange(e, "serviceTitle", 0)}
                      onSave={(value) => handleSave(value, "serviceTitle", 0)}
                      placeholder={<span>Click to edit title</span>}
                    />
                  ) : (
                    <span onClick={() => handleClick("serviceTitle1")}>
                      {nbuzs.title.serviceTitle[0] || replaceData.title}
                    </span>
                  )}
                </h3>
                <p>
                  {editingState.serviceDescription1 ? (
                    <EditExt
                      name="serviceDescription1"
                      defaultValue={
                        nbuzs.description.serviceDescription[0] ||
                        replaceData.description
                      }
                      inline
                      onChange={(e) => handleChange(e, "serviceDescription", 0)}
                      onSave={(value) =>
                        handleSave(value, "serviceDescription", 0)
                      }
                      placeholder={<span>Click to edit description</span>}
                    />
                  ) : (
                    <span onClick={() => handleClick("serviceDescription1")}>
                      {nbuzs.description.serviceDescription[0] ||
                        replaceData.description}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-desc">
                <h3>
                  {editingState.serviceTitle2 ? (
                    <EditExt
                      name="serviceTitle2"
                      defaultValue={
                        nbuzs.title.serviceTitle[1] || replaceData.title
                      }
                      inline
                      onChange={(e) => handleChange(e, "serviceTitle", 1)}
                      onSave={(value) => handleSave(value, "serviceTitle", 1)}
                      placeholder={<span>Click to edit title</span>}
                    />
                  ) : (
                    <span onClick={() => handleClick("serviceTitle2")}>
                      {nbuzs.title.serviceTitle[1] || replaceData.title}
                    </span>
                  )}
                </h3>
                <p>
                  {editingState.serviceDescription2 ? (
                    <EditExt
                      name="serviceDescription2"
                      defaultValue={
                        nbuzs.description.serviceDescription[1] ||
                        replaceData.description
                      }
                      inline
                      onChange={(e) => handleChange(e, "serviceDescription", 1)}
                      onSave={(value) =>
                        handleSave(value, "serviceDescription", 1)
                      }
                      placeholder={<span>Click to edit description</span>}
                    />
                  ) : (
                    <span onClick={() => handleClick("serviceDescription2")}>
                      {nbuzs.description.serviceDescription[1] ||
                        replaceData.description}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-desc">
                <h3>
                  {editingState.serviceTitle3 ? (
                    <EditExt
                      name="serviceTitle3"
                      defaultValue={
                        nbuzs.title.serviceTitle[2] || replaceData.title
                      }
                      inline
                      onChange={(e) => handleChange(e, "serviceTitle", 2)}
                      onSave={(value) => handleSave(value, "serviceTitle", 2)}
                      placeholder={<span>Click to edit title</span>}
                    />
                  ) : (
                    <span onClick={() => handleClick("serviceTitle3")}>
                      {nbuzs.title.serviceTitle[2] || replaceData.title}
                    </span>
                  )}
                </h3>
                <p>
                  {editingState.serviceDescription3 ? (
                    <EditExt
                      name="serviceDescription3"
                      defaultValue={
                        nbuzs.description.serviceDescription[2] ||
                        replaceData.description
                      }
                      inline
                      onChange={(e) => handleChange(e, "serviceDescription", 2)}
                      onSave={(value) =>
                        handleSave(value, "serviceDescription", 2)
                      }
                      placeholder={<span>Click to edit description</span>}
                    />
                  ) : (
                    <span onClick={() => handleClick("serviceDescription3")}>
                      {nbuzs.description.serviceDescription[2] ||
                        replaceData.description}
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Contacts</h2>
            </div>
      <div className="container row">
      <div className="col-sm-4 offset-4 my-2">
     
      {editingState.contactNo1 ? (
                      <EditExt
                        name="contactNo1"
                        defaultValue={
                          nbuzs.contact.contactNo[0] ||
                          replaceData.contactNo
                        }
                        inline
                        onChange={(e) => handleChange(e, "contactNo", 0)}
                        onSave={(value) =>
                          handleSave(value, "contactNo", 0)
                        }
                        placeholder={<span>Click to edit description</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("contactNo1")}>
                        {nbuzs.contact.contactNo[0] ||
                          replaceData.contactNo}
                      </span>
                    )}
                  
                   </div>
                  
                   <div className="col-sm-4 offset-4 my-2">
                    {editingState.contactNo2 ? (
                      <EditExt
                        name="contactNo2"
                        defaultValue={
                          nbuzs.contact.contactNo[1] ||
                          replaceData.contactNo
                        }
                        inline
                        onChange={(e) => handleChange(e, "contactNo", 1)}
                        onSave={(value) =>
                          handleSave(value, "contactNo", 1)
                        }
                        placeholder={<span>Click to edit description</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("contactNo2")}>
                        {nbuzs.contact.contactNo[1] ||
                          replaceData.contactNo}
                      </span>
                    )}</div>
                    <div className="col-sm-4 offset-4 my-2 ">
                    {editingState.contactNo3 ? (
                      <EditExt
                        name="contactNo3"
                        defaultValue={
                          nbuzs.contact.contactNo[2] ||
                          replaceData.contactNo
                        }
                        inline
                        onChange={(e) => handleChange(e, "contactNo", 2)}
                        onSave={(value) =>
                          handleSave(value, "contactNo", 2)
                        }
                        placeholder={<span>Click to edit description</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("contactNo3")}>
                        {nbuzs.contact.contactNo[2] ||
                          replaceData.contactNo}
                      </span>
                    )}
                    </div>
      </div>
        <div className="container row">
      <div className="col-sm-4 offset-4 my-2">
     
      {editingState.contactE1 ? (
                      <EditExt
                        name="contactE1"
                        defaultValue={
                          nbuzs.contact.contactE[0] ||
                          replaceData.contactE
                        }
                        inline
                        onChange={(e) => handleChange(e, "contactE", 0)}
                        onSave={(value) =>
                          handleSave(value, "contactE", 0)
                        }
                        placeholder={<span>Click to edit description</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("contactE1")}>
                        {nbuzs.contact.contactE[0] ||
                          replaceData.contactE}
                      </span>
                    )}
                   
                   </div>
                  
                   <div className="col-sm-4 offset-4 my-2">
                    {editingState.contactE2 ? (
                      <EditExt
                        name="contactE2"
                        defaultValue={
                          nbuzs.contact.contactE[1] ||
                          replaceData.contactE
                        }
                        inline
                        onChange={(e) => handleChange(e, "contactE", 1)}
                        onSave={(value) =>
                          handleSave(value, "contactE", 1)
                        }
                        placeholder={<span>Click to edit description</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("contactE2")}>
                        {nbuzs.contact.contactE[1] ||
                          replaceData.contactE}
                      </span>
                    )}</div>
                    <div className="col-sm-4 offset-4 my-2 ">
                    {editingState.contactE3 ? (
                      <EditExt
                        name="contactE3"
                        defaultValue={
                          nbuzs.contact.contactE[2] ||
                          replaceData.contactE
                        }
                        inline
                        onChange={(e) => handleChange(e, "contactE", 2)}
                        onSave={(value) =>
                          handleSave(value, "contactE", 2)
                        }
                        placeholder={<span>Click to edit description</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("contactE3")}>
                        {nbuzs.contact.contactE[2] ||
                          replaceData.contactE}
                      </span>
                    )}
                    </div>
</div>
      </div>
      </div>
      <input type="submit" className="btn btn-success"/>
    </form>
  );
};

export default STemp1;

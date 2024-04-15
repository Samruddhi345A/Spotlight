import React, { useState, useEffect, useContext } from "react";
import Editxt from "react-editext";
import { useNavigate } from 'react-router-dom';
import "./assets/css/style.css";
import Ins from "../../../../context/insContext"
const Home = () => {
  const navigate = useNavigate();
const Institute = useContext(Ins)
const {addIns} = Institute;
  //sample data to use in <p> tag
  const [replaceData, setreplaceData] = useState({
    title: "Title",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus cum iste nesciunt adipisci atque, eveniet hic quod modi voluptatum est ad alias illo laboriosam inventore debitis quibusdam doloribus veritatis aliquid!",
    image: null,
    contactNo:"contact No",
    contactE:"Email address"
  });
  
//sample image to use in <ing> tag
const placeholderImage =
"https://via.placeholder.com/300x200?text=Placeholder";

//to change between input field and p tag. initial value is false.If false=shows <p> tag. If True=shows <editext> tag
  const [editingState, setEditingState] = useState({
    instituteImage:false,photoTitle:false,photoTitle1:false,photoTitle2:false,photoTitle3:false,photoTitle4:false,photoTitle5:false,
   instituteTitle:false, instituteDescription:false,
   featureTitle1: false, featureDescription1: false,
    featureTitle2: false,featureDescription2: false,
    featureTitle3: false,featureDescription3: false,
    aboutTitle1: false,aboutDescription1: false,
    aboutTitle2: false,aboutDescription2: false,
    aboutTitle0: false,aboutDescription0: false,
    adTitle: false,adTitle1: false,
    adDescription:false,adDescription1:false,
    coTitle:false, coTitle1:false, coTitle2:false, coTitle3:false, coTitle4:false, coTitle5:false,
    coDescription:false, coDescription1:false, coDescription2:false,
    coDescription3:false, coDescription4:false, coDescription5:false,
    galleryImage:false, galleryImage1:false,adImage:false,adImage1:false,
    phImage:false,phImage1:false,phImage2:false,phImage3:false,phImage4:false,phImage5:false,
    coImage:false,coImage1:false,coImage2:false,coImage3:false, coImage4:false,coImage5:false,
    contactNo1:false,contactNo2:false,contactNo3:false,contactE1:false,contactE2:false,contactE3:false  
  });

  //Values from user are stored here
  const [nins, setnIns] = useState({
    tempType:"Temp1",
    images: { instituteImage:[],galleryImage: [], phImage: [] ,coImage:[],adImage:[],},
    title: { instituteTitle:[],aboutTitle: [], featureTitle: [],photoTitle: [],adTitle:[] ,coTitle:[]},
    description: {
      instituteDescription:[],featureDescription: [],aboutDescription: [],chooseDescription: [],adDescription:[], coDescription:[],
    },contact:{contactNo:[],contactE:[]}
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("tempType", nins.tempType);
  
      // Add images

Object.entries(nins.images).forEach(([key, value]) => {
  value.forEach((image) => {
    formData.append(`images.${key}`, image);
  });
});
    // Add titles
    Object.entries(nins.title).forEach(([key, value]) => {
      if (value.length > 0) {
        formData.append(`title.${key}`, JSON.stringify(value));
      }
    });
  
    // Add descriptions
    Object.entries(nins.description).forEach(([key, value]) => {
      if (value.length > 0) {
        formData.append(`description.${key}`, JSON.stringify(value));
      }
    });
    
     // Add contacts
     Object.entries(nins.contact).forEach(([key, value]) => {
      if (value.length > 0) {
        formData.append(`contact.${key}`, JSON.stringify(value));
      }
    });
    addIns(formData);
    window.confirm("Institute added")
    navigate("/Profile")
  };

  //to save images taken from users
  const handleImgChange = (e, field, index) => {
    const newImages = Array.from(e.target.files);
    const uniqueImages = [...new Set([...(nins.images[field] || []), ...newImages])];
  
    setnIns((prevData) => {
      const newData = { ...prevData };
      newData.images[field] = uniqueImages;
      return newData;
    });
  };

  //To save the text inputted from user
  const handleChange = (e, field, index) => {
    setnIns((prevData) => {
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
      } else if (field === "aboutTitle") {
        handleFieldChange(newData.title, "aboutTitle", e.target.value);
      }
      else if (field === "instituteTitle") {
        handleFieldChange(newData.title, "instituteTitle", e.target.value);
      }
       else if (field === "instituteDescription") {
        handleFieldChange(newData.description, "instituteDescription", e.target.value);
      }
      else if (field === "aboutDescription") {
        handleFieldChange(
          newData.description,
          "aboutDescription",
          e.target.value );
      } else if (field === "photoTitle") {
        handleFieldChange(newData.description, "photoTitle", e.target.value);
      } 
    else if (field === "adTitle") {
      handleFieldChange(newData.description, "adTitle", e.target.value);
    }  else if (field === "adDescription") {
      handleFieldChange(
        newData.description,
        "adDescription",
        e.target.value );
    } 
      else if (field === "coTitle") {
        handleFieldChange(newData.description, "coTitle", e.target.value);
      }
      else if (field === "coDescription") {
        handleFieldChange(
          newData.description,
          "coDescription",
          e.target.value );
      }
      else if (field === "contactNo") {
        handleFieldChange(
          newData.contact,
          "contactNo",
          e.target.value );
      }
      else if (field === "contactE") {
        handleFieldChange(
          newData.contact,
          "contactE",
          e.target.value );
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
   <>
   <form onSubmit={handleSubmit}>
  <div className="container my-2">
          <center>
           
              
                <span >
                {editingState.instituteImage ? (
                  <span  className="site-logo">
                  <input type="file"
                    name="image"
                    onChange={(e) => handleImgChange(e,"instituteImage",0 )} 
                    required
                    placeholder={
                      <img src={ nins.images.instituteImage && nins.images.instituteImage[0]
                        ? nins.images.instituteImage[0]
                        : placeholderImage} alt="Placeholder" />
                    }
                  />
                  </span>
                ) : (
                  <img
                    src={require("./assets/images/logo.jpg")}
                    alt="Placeholder"
                    className="img-fluid"
                    onClick={() => handleClick("instituteImage")}
                    style={{ cursor: "pointer" }}
                  />
                )}
                
                </span>
            
             
         
          </center>
          </div>
        
        <section id="home" class="position-relative overflow-hidden bg-light-blue">
        <div className="site-section">
          <div className="container">
            <div className="row mb-5 justify-content-center text-center">
              <div className="col-lg-4 mb-5">
                <h2 className="section-title-underline mb-5">
                  <span>{editingState.instituteTitle ? (
                  <Editxt
                    name="featureTitle1"
                    defaultValue={
                      nins.title.instituteTitle[0] || replaceData.title
                    }
                    inline
                    required
                    onChange={(e) => handleChange(e, "instituteTitle", 0)}
                    onSave={(value) => handleSave(value, "instituteTitle", 0)}
                    placeholder={<span>Click to edit title</span>}
                  />
                ) : (
                  <span onClick={() => handleClick("instituteTitle")}>
                    {nins.title.instituteTitle[0] || <p>Institute Title</p>}
                  </span>
                )}</span>
                </h2>
                <p>{editingState.instituteDescription ? (
                  <Editxt
                    name="instituteDescription1"
                    defaultValue={
                      nins.description.instituteDescription[0] ||
                      replaceData.description
                    }
                    inline
                    onChange={(e) => handleChange(e, "instituteDescription", 0)}
                    onSave={(value) =>
                      handleSave(value, "instituteDescription", 0)
                    }
                    placeholder={<span>Click to edit description</span>}
                  />
                ) : (
                  <span onClick={() => handleClick("instituteDescription")}>
                    {nins.description.instituteDescription[0] ||
                      <p>Institute Description</p>}
                  </span>
                )}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="feature-1 border">
                  <div className="icon-wrapper bg-primary">
                    <span className="flaticon-mortarboard text-white"></span>
                  </div>
                  <div className="feature-1-content">
                    <h2>{editingState.featureTitle1 ? (
                  <Editxt
                    name="featureTitle1"
                    defaultValue={
                      nins.title.featureTitle[0] || replaceData.title
                    }
                    inline
                    onChange={(e) => handleChange(e, "featureTitle", 0)}
                    onSave={(value) => handleSave(value, "featureTitle", 0)}
                    placeholder={<span>Click to edit title</span>}
                  />
                ) : (
                  <span onClick={() => handleClick("featureTitle1")}>
                    {nins.title.featureTitle[0] || <p>Feature Title</p>}
                  </span>
                )}</h2>
                    <p>
                    {editingState.featureDescription1 ? (
                  <Editxt
                    name="featureDescription1"
                    defaultValue={
                      nins.description.featureDescription[0] ||
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
                    {nins.description.featureDescription[0] ||
                      replaceData.description}
                  </span>
                )}
                    </p>
                    <p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="feature-1 border">
                  <div className="icon-wrapper bg-primary">
                    <span className="flaticon-school-material text-white"></span>
                  </div>
                  <div className="feature-1-content">
                    <h2>{editingState.featureTitle2 ? (
                  <Editxt
                    name="featureTitle2"
                    defaultValue={
                      nins.title.featureTitle[1] || replaceData.title
                    }
                    inline
                    onChange={(e) => handleChange(e, "featureTitle", 1)}
                    onSave={(value) => handleSave(value, "featureTitle", 1)}
                    placeholder={<span>Click to edit title</span>}
                  />
                ) : (
                  <span onClick={() => handleClick("featureTitle2")}>
                    {nins.title.featureTitle[1] ||<p>Feature Title</p>}
                  </span>
                )}</h2>
                    <p>
                    {editingState.featureDescription2 ? (
                  <Editxt
                    name="featureDescription2"
                    defaultValue={
                      nins.description.featureDescription[1] ||
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
                    {nins.description.featureDescription[1] ||
                      replaceData.description}
                  </span>
                )}
                    </p>
                    <p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="feature-1 border">
                  <div className="icon-wrapper bg-primary">
                    <span className="flaticon-library text-white"></span>
                  </div>
                  <div className="feature-1-content">
                    <h2>{editingState.featureTitle3 ? (
                  <Editxt
                    name="featureTitle3"
                    defaultValue={
                      nins.title.featureTitle[2] || replaceData.title
                    }
                    inline
                    onChange={(e) => handleChange(e, "featureTitle", 2)}
                    onSave={(value) => handleSave(value, "featureTitle", 2)}
                    placeholder={<span>Click to edit title</span>}
                  />
                ) : (
                  <span onClick={() => handleClick("featureTitle3")}>
                    {nins.title.featureTitle[2] || <p>Feature Title</p>}
                  </span>
                )}</h2>
                    <p>
                    {editingState.featureDescription3 ? (
                  <Editxt
                    name="featureDescription3"
                    defaultValue={
                      nins.description.featureDescription[2] ||
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
                    {nins.description.featureDescription[2] ||
                      replaceData.description}
                  </span>
                )}
                    </p>
                    <p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="news-updates">
          <div className="container">
            <div className="row col-lg-12">
                <div className="row mb-5 justify-content-center text-center">
                  <div className="col-lg-6 mb-5">
                    <h2 className="section-title-underline mb-3">
                      <span> Institute Photos</span>
                    </h2>
                    <p>Our Institute Photos</p>
                  </div>
                </div>
              </div>
              <div className="row col-lg-12">
                <div className="col-lg-4">
                  <div className="post-entry-big">
                  {editingState.phImage ? (
                  <input type="file"
                    name="image"
                    onChange={(e) => handleImgChange(e,"phImage",0 )} 
                    multiple
                    placeholder={
                      <img src={ nins.images.phImage && nins.images.phImage[0]
                        ? nins.images.phImage[0]
                        : placeholderImage} alt="Placeholder" />
                    }
                  />
                ) : (
                  <img
                    src={placeholderImage}
                    alt="Placeholder"
                    onClick={() => handleClick("phImage")}
                    style={{ cursor: "pointer" }}
                  />
                )}
                    <div className="post-content">
                      <h3 className="post-heading">
                        <p href="">
                        {editingState.photoTitle ? (
                      <Editxt
                        name="photoTitle"
                        defaultValue={
                          nins.title.photoTitle[0] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "photoTitle", 0)}
                        onSave={(value) => handleSave(value, "photoTitle", 0)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("photoTitle")}>
                        {nins.title.photoTitle[0] || <p>photo Title</p>}
                      </span>
                    )}
                        </p>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="post-entry-big">
                  {editingState.phImage1 ? (
                  <input type="file"
                    name="image"
                    onChange={(e) => handleImgChange(e,"phImage",1 )} 
                    multiple
                    placeholder={
                      <img src={ nins.images.phImage && nins.images.phImage[1]
                        ? nins.images.phImage[1]
                        : placeholderImage} alt="Placeholder" />
                    }
                  />
                ) : (
                  <img
                    src={placeholderImage}
                    alt="Placeholder"
                    onClick={() => handleClick("phImage1")}
                    style={{ cursor: "pointer" }}
                  />
                )}
                    <div className="post-content">
                      <h3 className="post-heading">
                        <p href="">
                        {editingState.photoTitle1 ? (
                      <Editxt
                        name="photoTitle1"
                        defaultValue={
                          nins.title.photoTitle[1] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "photoTitle", 1)}
                        onSave={(value) => handleSave(value, "photoTitle", 1)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("photoTitle1")}>
                        {nins.title.photoTitle[1] || <p>photo Title</p>}
                      </span>
                    )}
                        </p>
                      </h3>
                      
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="post-entry-big">
                    
                    {editingState.phImage2 ? (
                  <input type="file"
                    name="image"
                    onChange={(e) => handleImgChange(e,"phImage",2 )} 
                    multiple
                    placeholder={
                      <img src={ nins.images.phImage && nins.images.phImage[2]
                        ? nins.images.phImage[2]
                        : placeholderImage} alt="Placeholder" />
                    }
                  />
                ) : (
                  <img
                    src={placeholderImage}
                    alt="Placeholder"
                    onClick={() => handleClick("phImage2")}
                    style={{ cursor: "pointer" }}
                  />
                )}
                    <div className="post-content">
                      <h3 className="post-heading">
                        <p href="">
                        {editingState.photoTitle2 ? (
                      <Editxt
                        name="photoTitle2"
                        defaultValue={
                          nins.title.photoTitle[2] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "photoTitle", 2)}
                        onSave={(value) => handleSave(value, "photoTitle", 2)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("photoTitle2")}>
                        {nins.title.photoTitle[2] ||<p>photo Title</p>}
                      </span>
                    )}
                        </p>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div>
             
              </div>
              <div className="row col-lg-12">
                <div className="col-lg-4">
                  <div className="post-entry-big">
                  {editingState.phImage3 ? (
                  <input type="file"
                    name="image"
                    onChange={(e) => handleImgChange(e,"phImage",3 )} 
                    multiple
                    placeholder={
                      <img src={ nins.images.phImage && nins.images.phImage[3]
                        ? nins.images.phImage[3]
                        : placeholderImage} alt="Placeholder" />
                    }
                  />
                ) : (
                  <img
                    src={placeholderImage}
                    alt="Placeholder"
                    onClick={() => handleClick("phImage3")}
                    style={{ cursor: "pointer" }}
                  />
                )}
                   <div className="post-content">
                      <h3 className="post-heading">
                        <p href="">
                        {editingState.photoTitle3 ? (
                      <Editxt
                        name="photoTitle3"
                        defaultValue={
                          nins.title.photoTitle[3] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "photoTitle", 3)}
                        onSave={(value) => handleSave(value, "photoTitle", 3)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("photoTitle3")}>
                        {nins.title.photoTitle[3] || <p>photo Title</p>}
                      </span>
                    )}
                        </p>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="post-entry-big">
                  {editingState.phImage4 ? (
                  <input type="file"
                    name="image"
                    onChange={(e) => handleImgChange(e,"phImage",4 )} 
                    multiple
                    placeholder={
                      <img src={ nins.images.phImage && nins.images.phImage[4]
                        ? nins.images.phImage[4]
                        : placeholderImage} alt="Placeholder" />
                    }
                  />
                ) : (
                  <img
                    src={placeholderImage}
                    alt="Placeholder"
                    onClick={() => handleClick("phImage4")}
                    style={{ cursor: "pointer" }}
                  />
                )}
                    <div className="post-content">
                      <h3 className="post-heading">
                        <p href="">
                        {editingState.photoTitle4 ? (
                      <Editxt
                        name="photoTitle4"
                        defaultValue={
                          nins.title.photoTitle[4] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "photoTitle", 4)}
                        onSave={(value) => handleSave(value, "photoTitle", 4)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("photoTitle4")}>
                        {nins.title.photoTitle[4] ||<p>photo Title</p>}
                      </span>
                    )}
                        </p>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="post-entry-big">
                  {editingState.phImage5 ? (
                  <input type="file"
                    name="image"
                    onChange={(e) => handleImgChange(e,"phImage",5 )} 
                    multiple
                    placeholder={
                      <img src={ nins.images.phImage && nins.images.phImage[5]
                        ? nins.images.phImage[5]
                        : placeholderImage} alt="Placeholder" />
                    }
                  />
                ) : (
                  <img
                    src={placeholderImage}
                    alt="Placeholder"
                    onClick={() => handleClick("phImage5")}
                    style={{ cursor: "pointer" }}
                  />
                )}
                    <div className="post-content">
                    <div className="post-content">
                      <h3 className="post-heading">
                        <p href="">
                        {editingState.photoTitle5 ? (
                      <Editxt
                        name="photoTitle5"
                        defaultValue={
                          nins.title.photoTitle[5] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "photoTitle", 5)}
                        onSave={(value) => handleSave(value, "photoTitle", 5)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("photoTitle5")}>
                        {nins.title.photoTitle[5] || <p>photo Title</p>}
                      </span>
                    )}
                        </p>
                      </h3>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </section>

    <section id="about">
    <div
          className="site-section ftco-subscribe-1 site-blocks-cover pb-4"
          style={{ backgroundImage: "url('./assets/images/bg_1.jpg');" }}
        >
          <div className="container">
            <div className="row align-items-end">
              <div
                className="col-lg-7"
                style={{ fontStyle: "italic", fontSize: 50, color: "white" }}
              >
                <h1 className="mb-0">About</h1>
                <h3>About our Institute</h3>
              </div>
            </div>
          </div>
        </div>
    <div class="custom-breadcrumns border-bottom">
        <div class="container">
          <a href="home">Home</a>
          <span class="mx-3 icon-keyboard_arrow_right"></span>
          <span class="current">About Us</span>
        </div>
      </div>
      <div class="container pt-5 mb-5">
        <div class="row">
          <div class="col-lg-4">
            <h2 class="section-title-underline">
            {editingState.aboutTitle0 ? (
                      <Editxt
                        name="aboutTitle0"
                        defaultValue={
                          nins.title.aboutTitle[0] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "aboutTitle", 0)}
                        onSave={(value) => handleSave(value, "aboutTitle", 0)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("aboutTitle0")}>
                        {nins.title.aboutTitle[0] || replaceData.title}
                      </span>
                    )}
            </h2>
          </div>
          <div class="col-lg-8">
            <p>
            {editingState.aboutDescription0 ? (
                      <Editxt
                        name="aboutDescription0"
                        defaultValue={
                          nins.description.aboutDescription[0] ||
                          replaceData.description
                        }
                        inline
                        onChange={(e) => handleChange(e, "aboutDescription", 0)}
                        onSave={(value) =>
                          handleSave(value, "aboutDescription", 0)
                        }
                        placeholder={<span>Click to edit description</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("aboutDescription0")}>
                        {nins.description.aboutDescription[0] ||
                          replaceData.description}
                      </span>
                    )}
            </p>
          </div>
          
        </div>
      </div>
      <div class="site-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-lg-6 mb-lg-0 mb-4">
            {editingState.galleryImage ? (
                  <input type="file"
                    name="image"
                    onChange={(e) => handleImgChange(e,"galleryImage",0 )} 
                    multiple
                    placeholder={
                      <img src={ nins.images.galleryImage && nins.images.galleryImage[0]
                        ? nins.images.galleryImage[0]
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
            <div class="col-lg-5 ml-auto align-self-center">
              <h2 class="section-title-underline mb-5">
              {editingState.aboutTitle1 ? (
              <Editxt
                        name="aboutTitle1"
                        defaultValue={
                          nins.title.aboutTitle[1] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "aboutTitle", 1)}
                        onSave={(value) => handleSave(value, "aboutTitle", 1)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("aboutTitle1")}>
                        {nins.title.aboutTitle[1] || replaceData.title}
                      </span>
                    )}
              </h2>
              <p>
              {editingState.aboutDescription1 ? (
                      <Editxt
                        name="aboutDescription1"
                        defaultValue={
                          nins.description.aboutDescription[1] ||
                          replaceData.description
                        }
                        inline
                        onChange={(e) => handleChange(e, "aboutDescription", 1)}
                        onSave={(value) =>
                          handleSave(value, "aboutDescription", 1)
                        }
                        placeholder={<span>Click to edit description</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("aboutDescription1")}>
                        {nins.description.aboutDescription[1] ||
                          replaceData.description}
                      </span>
                    )}
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
            {editingState.galleryImage1 ? (
                  <input type="file"
                    name="image"
                    onChange={(e) => handleImgChange(e,"galleryImage",1 )} 
                    multiple
                    placeholder={
                      <img src={ nins.images.galleryImage && nins.images.galleryImage[1]
                        ? nins.images.galleryImage[1]
                        : placeholderImage} alt="Placeholder" />
                    }
                  />
                ) : (
                  <img
                    src={placeholderImage}
                    alt="Placeholder"
                    onClick={() => handleClick("galleryImage1")}
                    style={{ cursor: "pointer" }}
                  />
                )}
            </div>
            <div class="col-lg-5 mr-auto align-self-center order-2 order-lg-1">
              <h2 class="section-title-underline mb-5">
              {editingState.aboutTitle2 ? (
              <Editxt
                        name="aboutTitle2"
                        defaultValue={
                          nins.title.aboutTitle[2] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "aboutTitle", 2)}
                        onSave={(value) => handleSave(value, "aboutTitle", 2)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("aboutTitle2")}>
                        {nins.title.aboutTitle[2] || replaceData.title}
                      </span>
                    )}
              </h2>
              <p>
              {editingState.aboutDescription2 ? (
                      <Editxt
                        name="aboutDescription2"
                        defaultValue={
                          nins.description.aboutDescription[2] ||
                          replaceData.description
                        }
                        inline
                        onChange={(e) => handleChange(e, "aboutDescription", 2)}
                        onSave={(value) =>
                          handleSave(value, "aboutDescription", 2)
                        }
                        placeholder={<span>Click to edit description</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("aboutDescription2")}>
                        {nins.description.aboutDescription[2] ||
                          replaceData.description}
                      </span>
                    )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="admission">
    <div
          className="site-section ftco-subscribe-1 site-blocks-cover pb-4"
          style={{ backgroundImage: "url('./assets/images/bg_1.jpg');" }}
        >
          <div className="container">
            <div className="row align-items-end">
              <div
                className="col-lg-7"
                style={{ fontStyle: "italic", fontSize: 50, color: "white" }}
              >
                <h1 className="mb-0">Admissions</h1>
                <h3>Get Admission in our Institute</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-breadcrumns border-bottom">
          <div className="container">
            <a href="home">Home</a>
            <span className="mx-3 icon-keyboard_arrow_right"></span>
            <span className="current">Admission</span>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-6 mb-lg-0 mb-4">
              {editingState.adImage ? (
                  <input type="file"
                    name="image"
                    onChange={(e) => handleImgChange(e,"adImage",0 )} 
                    multiple
                    placeholder={
                      <img src={ nins.images.adImage && nins.images.adImage[0]
                        ? nins.images.adImage[0]
                        : placeholderImage} alt="Placeholder" />
                    }
                  />
                ) : (
                  <img
                    src={placeholderImage}
                    alt="Placeholder"
                    onClick={() => handleClick("adImage")}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>
              <div className="col-lg-5 ml-auto align-self-center">
                <h2 className="section-title-underline mb-5">
                  <span> {editingState.adTitle ? (
              <Editxt
                        name="adTitle"
                        defaultValue={
                          nins.title.adTitle[0] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "adTitle", 0)}
                        onSave={(value) => handleSave(value, "adTitle", 0)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("adTitle")}>
                        {nins.title.adTitle[0] || replaceData.title}
                      </span>
                    )}</span>
                </h2>
                <p>
                {editingState.adDescription ? (
                      <Editxt
                        name="adDescription"
                        defaultValue={
                          nins.description.adDescription[0] ||
                          replaceData.description
                        }
                        inline
                        onChange={(e) => handleChange(e, "adDescription", 0)}
                        onSave={(value) =>
                          handleSave(value, "adDescription", 0)
                        }
                        placeholder={<span>Click to edit description</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("adDescription")}>
                        {nins.description.adDescription[0] ||
                          replaceData.description}
                      </span>
                    )}
                </p>
               
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
              {editingState.adImage1 ? (
                  <input type="file"
                    name="image"
                    onChange={(e) => handleImgChange(e,"adImage",1 )} 
                    multiple
                    placeholder={
                      <img src={ nins.images.adImage && nins.images.adImage[1]
                        ? nins.images.adImage[1]
                        : placeholderImage} alt="Placeholder" />
                    }
                  />
                ) : (
                  <img
                    src={placeholderImage}
                    alt="Placeholder"
                    onClick={() => handleClick("adImage1")}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </div>
              <div className="col-lg-5 mr-auto align-self-center order-2 order-lg-1">
                <h2 className="section-title-underline mb-5">
                  <span>{editingState.adTitle1 ? (
              <Editxt
                        name="adTitle1"
                        defaultValue={
                          nins.title.adTitle[1] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "adTitle", 1)}
                        onSave={(value) => handleSave(value, "adTitle", 1)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("adTitle1")}>
                        {nins.title.adTitle[1] || replaceData.title}
                      </span>
                    )}</span>
                </h2>
                <p>
                {editingState.adDescription1 ? (
                      <Editxt
                        name="adDescription1"
                        defaultValue={
                          nins.description.adDescription[1] ||
                          replaceData.description
                        }
                        inline
                        onChange={(e) => handleChange(e, "adDescription", 1)}
                        onSave={(value) =>
                          handleSave(value, "adDescription", 1)
                        }
                        placeholder={<span>Click to edit description</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("adDescription1")}>
                        {nins.description.adDescription[1] ||
                          replaceData.description}
                      </span>
                    )}
                </p>
               
              </div>
            </div>
          </div>
        </div>
    </section>

    <section id="course">
    <div
        class="site-section ftco-subscribe-1 site-blocks-cover pb-4"
        style={{ backgroundImage: "url('./assets/images/bg_1.jpg')" }}
      >
        <div class="container">
          <div class="row align-items-end">
            <div
              class="col-lg-7"
              style={{ fontStyle: "italic", fontSize: 50, color: "white" }}
            >
              <h1 class="mb-0">Courses</h1>
              <h3>Our Institute All Courses</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="custom-breadcrumns border-bottom">
        <div class="container">
          <a href="home">Home</a>
          <span class="mx-3 icon-keyboard_arrow_right"></span>
          <span class="current">Courses</span>
        </div>
      </div>

      <div class="site-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="course-1-item">
                <figure class="thumnail">
                 
                  {editingState.coImage ? (
                  <input type="file"
                    name="image"
                    onChange={(e) => handleImgChange(e,"coImage",0 )} 
                    
                    placeholder={
                      <img src={ nins.images.coImage && nins.images.coImage[0]
                        ? nins.images.coImage[0]
                        : placeholderImage} alt="Placeholder" />
                    }
                  />
                ) : (
                  <img
                    src={placeholderImage}
                    alt="Placeholder"
                    onClick={() => handleClick("coImage")}
                    style={{ cursor: "pointer" }}
                  />
                )}
                
                  <div class="category">
                    <h3>{editingState.coTitle ? (
              <Editxt
                        name="coTitle"
                        defaultValue={
                          nins.title.coTitle[0] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "coTitle", 0)}
                        onSave={(value) => handleSave(value, "coTitle", 0)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("coTitle")}>
                        {nins.title.coTitle[0] || <p>Course title</p>}
                      </span>
                    )}</h3>
                  </div>
                </figure>
                <div class="course-1-content pb-4">
                 
                  <p class="desc mb-4">
                  {editingState.coDescription ? (
                      <Editxt
                        name="coDescription"
                        defaultValue={
                          nins.description.coDescription[0] ||
                          replaceData.description
                        }
                        inline
                        onChange={(e) => handleChange(e, "coDescription", 0)}
                        onSave={(value) =>
                          handleSave(value, "coDescription", 0)
                        }
                        placeholder={<span>Click to edit description</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("coDescription")}>
                        {nins.description.coDescription[0] ||
                          replaceData.description}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="course-1-item">
                <figure class="thumnail">
                 
                  {editingState.coImage1 ? (
                  <input type="file"
                    name="image"
                    onChange={(e) => handleImgChange(e,"coImage" ,1)} 
                    multiple
                    placeholder={
                      <img src={ nins.images.coImage && nins.images.coImage[1]
                        ? nins.images.coImage[1]
                        : placeholderImage} alt="Placeholder" />
                    }
                  />
                ) : (
                  <img
                    src={placeholderImage}
                    alt="Placeholder"
                    onClick={() => handleClick("coImage1")}
                    style={{ cursor: "pointer" }}
                  />
                )}
                 
                  <div class="category">
                    <h3>{editingState.coTitle1 ? (
              <Editxt
                        name="coTitle1"
                        defaultValue={
                          nins.title.coTitle[1] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "coTitle", 1)}
                        onSave={(value) => handleSave(value, "coTitle", 1)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("coTitle1")}>
                        {nins.title.coTitle[1] || <p>Course title</p>}
                      </span>
                    )}</h3>
                  </div>
                </figure>
                <div class="course-1-content pb-4">
                 
                  <p class="desc mb-4">
                  {editingState.coDescription1 ? (
                      <Editxt
                        name="coDescription1"
                        defaultValue={
                          nins.description.coDescription[1] ||
                          replaceData.description
                        }
                        inline
                        onChange={(e) => handleChange(e, "coDescription", 1)}
                        onSave={(value) =>
                          handleSave(value, "coDescription", 1)
                        }
                        placeholder={<span>Click to edit description</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("coDescription1")}>
                        {nins.description.coDescription[1] ||
                          replaceData.description}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="course-1-item">
                <figure class="thumnail">
                 
                  {editingState.coImage2 ? (
                  <input type="file"
                    name="image"
                    onChange={(e) => handleImgChange(e,"coImage",2 )} 
                    multiple
                    placeholder={
                      <img src={ nins.images.coImage && nins.images.coImage[2]
                        ? nins.images.coImage[2]
                        : placeholderImage} alt="Placeholder" />
                    }
                  />
                ) : (
                  <img
                    src={placeholderImage}
                    alt="Placeholder"
                    onClick={() => handleClick("coImage2")}
                    style={{ cursor: "pointer" }}
                  />
                )}
                
                  <div class="category">
                    <h3>{editingState.coTitle2 ? (
              <Editxt
                        name="coTitle2"
                        defaultValue={
                          nins.title.coTitle[2] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "coTitle", 2)}
                        onSave={(value) => handleSave(value, "coTitle", 2)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("coTitle2")}>
                        {nins.title.coTitle[2] || <p>Course title</p>}
                      </span>
                    )}</h3>
                  </div>
                </figure>
                <div class="course-1-content pb-4">
                 
                  <p class="desc mb-4">
                  {editingState.coDescription2 ? (
                      <Editxt
                        name="coDescription2"
                        defaultValue={
                          nins.description.coDescription[2] ||
                          replaceData.description
                        }
                        inline
                        onChange={(e) => handleChange(e, "coDescription", 2)}
                        onSave={(value) =>
                          handleSave(value, "coDescription", 2)
                        }
                        placeholder={<span>Click to edit description</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("coDescription2")}>
                        {nins.description.coDescription[2] ||
                          replaceData.description}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="course-1-item">
                <figure class="thumnail">
               
                  {editingState.coImage3 ? (
                  <input type="file"
                    name="image"
                    onChange={(e) => handleImgChange(e,"coImage" ,3)} 
                    multiple
                    placeholder={
                      <img src={ nins.images.coImage && nins.images.coImage[3]
                        ? nins.images.coImage[3]
                        : placeholderImage} alt="Placeholder" />
                    }
                  />
                ) : (
                  <img
                    src={placeholderImage}
                    alt="Placeholder"
                    onClick={() => handleClick("coImage3")}
                    style={{ cursor: "pointer" }}
                  />
                )}
                
                  <div class="category">
                    <h3>{editingState.coTitle3 ? (
              <Editxt
                        name="coTitle3"
                        defaultValue={
                          nins.title.coTitle[3] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "coTitle", 3)}
                        onSave={(value) => handleSave(value, "coTitle", 3)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("coTitle3")}>
                        {nins.title.coTitle[3] || <p>Course title</p>}
                      </span>
                    )}</h3>
                  </div>
                </figure>
                <div class="course-1-content pb-4">
                 
                  <p class="desc mb-4">
                  {editingState.coDescription3 ? (
                      <Editxt
                        name="coDescription3"
                        defaultValue={
                          nins.description.coDescription[3] ||
                          replaceData.description
                        }
                        inline
                        onChange={(e) => handleChange(e, "coDescription", 3)}
                        onSave={(value) =>
                          handleSave(value, "coDescription", 3)
                        }
                        placeholder={<span>Click to edit description</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("coDescription3")}>
                        {nins.description.coDescription[3] ||
                          replaceData.description}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="course-1-item">
                <figure class="thumnail">
                
                  {editingState.coImage4 ? (
                  <input type="file"
                    name="image"
                    onChange={(e) => handleImgChange(e,"coImage" ,4)} 
                    multiple
                    placeholder={
                      <img src={ nins.images.coImage && nins.images.coImage[4]
                        ? nins.images.coImage[4]
                        : placeholderImage} alt="Placeholder" />
                    }
                  />
                ) : (
                  <img
                    src={placeholderImage}
                    alt="Placeholder"
                    onClick={() => handleClick("coImage4")}
                    style={{ cursor: "pointer" }}
                  />
                )}
                 
                  <div class="category">
                    <h3>{editingState.coTitle4 ? (
              <Editxt
                        name="coTitle4"
                        defaultValue={
                          nins.title.coTitle[4] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "coTitle", 4)}
                        onSave={(value) => handleSave(value, "coTitle", 4)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("coTitle4")}>
                        {nins.title.coTitle[4] || <p>Course title</p>}
                      </span>
                    )}</h3>
                  </div>
                </figure>
                <div class="course-1-content pb-4">
                 
                  <p class="desc mb-4">
                  {editingState.coDescription4 ? (
                      <Editxt
                        name="coDescription4"
                        defaultValue={
                          nins.description.coDescription[4] ||
                          replaceData.description
                        }
                        inline
                        onChange={(e) => handleChange(e, "coDescription", 4)}
                        onSave={(value) =>
                          handleSave(value, "coDescription", 4)
                        }
                        placeholder={<span>Click to edit description</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("coDescription4")}>
                        {nins.description.coDescription[4] ||
                          replaceData.description}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="course-1-item">
                <figure class="thumnail">
                
                  {editingState.coImage5 ? (
                  <input type="file"
                    name="image"
                    onChange={(e) => handleImgChange(e,"coImage",5 )} 
                    multiple
                    placeholder={
                      <img src={ nins.images.coImage && nins.images.coImage[5]
                        ? nins.images.coImage[5]
                        : placeholderImage} alt="Placeholder" />
                    }
                  />
                ) : (
                  <img
                    src={placeholderImage}
                    alt="Placeholder"
                    onClick={() => handleClick("coImage5")}
                    style={{ cursor: "pointer" }}
                  />
                )}
               
                  <div class="category">
                    <h3>{editingState.coTitle5 ? (
              <Editxt
                        name="coTitle5"
                        defaultValue={
                          nins.title.coTitle[5] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "coTitle", 5)}
                        onSave={(value) => handleSave(value, "coTitle", 5)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("coTitle5")}>
                        {nins.title.coTitle[5] || <p>Course title</p>}
                      </span>
                    )}</h3>
                  </div>
                </figure>
                <div class="course-1-content pb-4">
                 
                  <p class="desc mb-4">
                  {editingState.coDescription5 ? (
                      <Editxt
                        name="coDescription5"
                        defaultValue={
                          nins.description.coDescription[5] ||
                          replaceData.description
                        }
                        inline
                        onChange={(e) => handleChange(e, "coDescription", 5)}
                        onSave={(value) =>
                          handleSave(value, "coDescription", 5)
                        }
                        placeholder={<span>Click to edit description</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("coDescription5")}>
                        {nins.description.coDescription[5] ||
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

      <div
        class="site-section ftco-subscribe-1 site-blocks-cover pb-4"
        style={{ backgroundImage: "url('../assets/images/bg_1.jpg')" }}
      >
        <div class="container">
          <div class="row align-items-end">
            <div
              class="col-lg-7"
              style={{ fontStyle: "italic", fontSize: 50, color: "white" }}
            >
              <h1 class="mb-0 ">Contact</h1>
              <h3>Contact Us</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <div class="custom-breadcrumns border-bottom">
        <div class="container">
          <a href="index.html">Home</a>
          <span class="mx-3 icon-keyboard_arrow_right"></span>
          <span class="current">Contact</span>
        </div>
      </div>
      <div className="container row">
      <div className="col-sm-4 offset-6 my-2">
     
      {editingState.contactNo1 ? (
                      <Editxt
                        name="contactNo1"
                        defaultValue={
                          nins.contact.contactNo[0] ||
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
                        {nins.contact.contactNo[0] ||
                          replaceData.contactNo}
                      </span>
                    )}
                  
                   </div>
                  
                   <div className="col-sm-4 offset-6 my-2">
                    {editingState.contactNo2 ? (
                      <Editxt
                        name="contactNo2"
                        defaultValue={
                          nins.contact.contactNo[1] ||
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
                        {nins.contact.contactNo[1] ||
                          replaceData.contactNo}
                      </span>
                    )}</div>
                    <div className="col-sm-4 offset-6 my-2 ">
                    {editingState.contactNo3 ? (
                      <Editxt
                        name="contactNo3"
                        defaultValue={
                          nins.contact.contactNo[2] ||
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
                        {nins.contact.contactNo[2] ||
                          replaceData.contactNo}
                      </span>
                    )}
                    </div>
      </div>
      <div className="container row">
      <div className="col-sm-4 offset-6 my-2">
     
      {editingState.contactE1 ? (
                      <Editxt
                        name="contactE1"
                        defaultValue={
                          nins.contact.contactE[0] ||
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
                        {nins.contact.contactE[0] ||
                          replaceData.contactE}
                      </span>
                    )}
                   
                   </div>
                  
                   <div className="col-sm-4 offset-6 my-2">
                    {editingState.contactE2 ? (
                      <Editxt
                        name="contactE2"
                        defaultValue={
                          nins.contact.contactE[1] ||
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
                        {nins.contact.contactE[1] ||
                          replaceData.contactE}
                      </span>
                    )}</div>
                    <div className="col-sm-4 offset-6 my-2 ">
                    {editingState.contactE3 ? (
                      <Editxt
                        name="contactE3"
                        defaultValue={
                          nins.contact.contactE[2] ||
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
                        {nins.contact.contactE[2] ||
                          replaceData.contactE}
                      </span>
                    )}
                    </div>
      </div>
    </section>
    <input type="submit" className="btn btn-success"/>
    </form>
   </>
  );
};

export default Home;


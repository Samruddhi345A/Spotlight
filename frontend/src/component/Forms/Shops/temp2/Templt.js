import React, { useState, useContext } from "react";
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/css/slick.css';
import { useNavigate } from 'react-router-dom';

import Editxt from "react-editext";
import buzContext from "../../../../context/buzContext";
const Templt = () => {
    const navigate = useNavigate();
    //sample data to use in <p> tag
    //getting add buz from context
    const Buz = useContext(buzContext)
    const { addBuz } = Buz;
    const [replaceData] = useState({
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
        serviceTitle1: false,
        serviceDescription1: false,
        serviceTitle2: false,
        serviceDescription2: false,
        serviceTitle3: false,
        serviceDescription3: false,
        serviceTitle4: false,
        serviceDescription4: false,
        serviceTitle5: false,
        serviceDescription5: false,
        aboutTitle1: false,
        aboutDescription1: false,
        aboutTitle2: false,
        aboutDescription2: false,
        aboutTitle3: false,
        aboutDescription3: false,
        blogImage: false,
        exploreImage: false,
        shopImage:false,
        contactNo1:false,contactNo2:false,contactNo3:false,contactE1:false,contactE2:false,contactE3:false  

    });

    //Values from user are stored here
    const [nbuzs, setnBuz] = useState({
        images: { exploreImage: [], blogImage: [], shopImage: []},
        
        title: { shopTitle: [], serviceTitle: [], aboutTitle: [] },
        description: {
            shopDescription: [],
            serviceDescription: [],
            aboutDescription: [],
        },contact:{contactNo:[],contactE:[]},
        tempType:"Temp2"
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("tempType", nbuzs.tempType);

        // Add images
        nbuzs.images.blogImage.forEach((image) => {
            formData.append('images.blogImage', image);
        });

        nbuzs.images.exploreImage.forEach((image) => {
            formData.append('images.exploreImage', image);
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

            
     // Add contact
     Object.entries(nbuzs.contact).forEach(([key, value]) => {
        if (value.length > 0) {
          formData.append(`contact.${key}`, JSON.stringify(value));
        }
      });
        });
        for (const [key, value] of formData.entries()) {
            console.log(key, value)
        }
        console.log(nbuzs)
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
                    ...(obj[prop] ?? []).slice(0, index),
                    value,
                    ...(obj[prop] ?? []).slice(index + 1),
                ];
            };

            if (field === "shopTitle") {
                handleFieldChange(newData.title, "shopTitle", e.target.value);
            } else if (field === "shopDescription") {
                handleFieldChange(
                    newData.description,
                    "shopDescription",
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
            } else if (field === "aboutTitle") {
                handleFieldChange(newData.description, "aboutTitle", e.target.value);
            } else if (field === "aboutDescription") {
                handleFieldChange(
                    newData.description,
                    "aboutDescription",
                    e.target.value
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

        <>
            <form Method="POST" onSubmit={handleSubmit}>
                <section className="top-area">
                    <div className="header-area">
                        <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

                            <div className="container">
                                <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                                    <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                        <li className=" scroll active"><a href="#home">home</a></li>
                                        <li className="scroll"><a href="#works">Shop Information</a></li>
                                        <li className="scroll"><a href="#explore">explore</a></li>
                                        <li className="scroll"><a href="#reviews">Images</a></li>
                                        <li className="scroll"><a href="#blog">blog</a></li>
                                        <li className="scroll"><a href="#contact">contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="clearfix"></div>

                </section>
                <section id="home" className="welcome-hero">
                    <div className="container">
                        <div className="welcome-hero-txt">
                            <h2 style={{ color: "black" }}> {editingState.shopTitle ? (
                                <Editxt
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
                                    {
                                        nbuzs.title.shopTitle[0] || replaceData.title
                                    }                            </span>
                            )}</h2>
                            <p style={{ color: "black" }}>
                                {editingState.shopDescription ? (
                                    <Editxt
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
                                        {
                                            nbuzs.description.shopDescription[0] ||
                                            replaceData.description
                                        }                                </span>
                                )}
                            </p>
                        </div>
                        {editingState.shopImage ? (
                                            <input type="file"
                                                onChange={(e) => handleImgChange(e, "shopImage")}
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
                    </div>
                </section>


                <section id="list-topics" className="list-topics">
                    <div className="container">
                        <div className="list-topics-content">
                            <ul>
                                <li>
                                    <div className="single-list-topics-content">

                                        <h2>{editingState.serviceTitle1 ? (
                                            <Editxt
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
                                                {
                                                    nbuzs.title.serviceTitle[0] || replaceData.title
                                                }                                        </span>
                                        )}</h2>
                                        <p>{editingState.serviceDescription1 ? (
                                            <Editxt
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
                                                {
                                                    nbuzs.description.serviceDescription[0] ||
                                                    replaceData.description
                                                }                                        </span>
                                        )}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="single-list-topics-content">

                                        <h2>{editingState.serviceTitle2 ? (
                                            <Editxt
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
                                                {
                                                    nbuzs.title.serviceTitle[1] || replaceData.title
                                                }                                        </span>
                                        )}</h2>
                                        <p>{editingState.serviceDescription2 ? (
                                            <Editxt
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
                                                {
                                                    nbuzs.description.serviceDescription[1] ||
                                                    replaceData.description
                                                }                                        </span>
                                        )}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="single-list-topics-content">

                                        <h2>{editingState.serviceTitle3 ? (
                                            <Editxt
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
                                                {
                                                    nbuzs.title.serviceTitle[2] || replaceData.title
                                                }                                        </span>
                                        )}</h2>
                                        <p>{editingState.serviceDescription3 ? (
                                            <Editxt
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
                                                {
                                                    nbuzs.description.serviceDescription[2] ||
                                                    replaceData.description
                                                }                                        </span>
                                        )}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="single-list-topics-content">

                                        <h2>{editingState.serviceTitle4 ? (
                                            <Editxt
                                                name="serviceTitle4"
                                                defaultValue={
                                                    nbuzs.title.serviceTitle[3] || replaceData.title
                                                }
                                                inline
                                                onChange={(e) => handleChange(e, "serviceTitle", 3)}
                                                onSave={(value) => handleSave(value, "serviceTitle", 3)}
                                                placeholder={<span>Click to edit title</span>}
                                            />
                                        ) : (
                                            <span onClick={() => handleClick("serviceTitle4")}>
                                                {
                                                    nbuzs.title.serviceTitle[3] || replaceData.title
                                                }                                        </span>
                                        )}</h2>
                                        <p>{editingState.serviceDescription4 ? (
                                            <Editxt
                                                name="serviceDescription4"
                                                defaultValue={
                                                    nbuzs.description.serviceDescription[3] ||
                                                    replaceData.description
                                                }
                                                inline
                                                onChange={(e) => handleChange(e, "serviceDescription", 3)}
                                                onSave={(value) =>
                                                    handleSave(value, "serviceDescription", 3)
                                                }
                                                placeholder={<span>Click to edit description</span>}
                                            />
                                        ) : (
                                            <span onClick={() => handleClick("serviceDescription4")}>
                                                {
                                                    nbuzs.description.serviceDescription[3] ||
                                                    replaceData.description
                                                }                                        </span>
                                        )}</p>
                                    </div>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </section>



                <section id="works" className="works">
                    <div className="container">
                        <div className="section-header">
                            <h2>Shop Information</h2>
                            <p>Learn More about our shop</p>
                        </div>
                        <div className="works-content">
                            <div className="row">
                                <div className="col-md-4 col-sm-6">

                                    <h2>{editingState.aboutTitle1 ? (
                                        <Editxt
                                            name="aboutTitle1"
                                            defaultValue={
                                                nbuzs.title.aboutTitle[0] || replaceData.title
                                            }
                                            inline
                                            onChange={(e) => handleChange(e, "aboutTitle", 0)}
                                            onSave={(value) => handleSave(value, "aboutTitle", 0)}
                                            placeholder={<span>Click to edit title</span>}
                                        />
                                    ) : (
                                        <span onClick={() => handleClick("aboutTitle1")}>
                                            {
                                                nbuzs.title.aboutTitle[0] || replaceData.title
                                            }                                        </span>
                                    )}</h2>
                                    <p>
                                        {editingState.aboutDescription1 ? (
                                            <Editxt
                                                name="aboutDescription1"
                                                defaultValue={
                                                    nbuzs.description.aboutDescription[0] ||
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
                                            <span onClick={() => handleClick("aboutDescription1")}>
                                                {
                                                    nbuzs.description.aboutDescription[0] ||
                                                    replaceData.description
                                                }                                            </span>
                                        )}
                                    </p>

                                </div>
                                <div className="col-md-4 col-sm-6">

                                    <h2>{editingState.aboutTitle2 ? (
                                        <Editxt
                                            name="aboutTitle2"
                                            defaultValue={
                                                nbuzs.title.aboutTitle[1] || replaceData.title
                                            }
                                            inline
                                            onChange={(e) => handleChange(e, "aboutTitle", 1)}
                                            onSave={(value) => handleSave(value, "aboutTitle", 1)}
                                            placeholder={<span>Click to edit title</span>}
                                        />
                                    ) : (
                                        <span onClick={() => handleClick("aboutTitle2")}>
                                            {
                                                nbuzs.title.aboutTitle[1] || replaceData.title
                                            }                                        </span>
                                    )}</h2>
                                    <p>
                                        {editingState.aboutDescription2 ? (
                                            <Editxt
                                                name="aboutDescription2"
                                                defaultValue={
                                                    nbuzs.description.aboutDescription[1] ||
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
                                            <span onClick={() => handleClick("aboutDescription2")}>
                                                {
                                                    nbuzs.description.aboutDescription[1] ||
                                                    replaceData.description
                                                }                                            </span>
                                        )}
                                    </p>

                                </div>
                                <div className="col-md-4 col-sm-6">

                                    <h2>{editingState.aboutTitle3 ? (
                                        <Editxt
                                            name="aboutTitle3"
                                            defaultValue={
                                                nbuzs.title.aboutTitle[2] || replaceData.title
                                            }
                                            inline
                                            onChange={(e) => handleChange(e, "aboutTitle", 2)}
                                            onSave={(value) => handleSave(value, "aboutTitle", 2)}
                                            placeholder={<span>Click to edit title</span>}
                                        />
                                    ) : (
                                        <span onClick={() => handleClick("aboutTitle3")}>
                                            {
                                                nbuzs.title.aboutTitle[2] || replaceData.title
                                            }                                        </span>
                                    )}</h2>
                                    <p>
                                        {editingState.aboutDescription3 ? (
                                            <Editxt
                                                name="aboutDescription3"
                                                defaultValue={
                                                    nbuzs.description.aboutDescription[2] ||
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
                                            <span onClick={() => handleClick("aboutDescription3")}>
                                                {
                                                    nbuzs.description.aboutDescription[2] ||
                                                    replaceData.description
                                                }                                            </span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="explore" className="explore">
                    <div className="container">
                        <div className="section-header">
                            <h2>Images</h2>
                            <p>Some Images of our product and our shop</p>
                        </div>
                        <div className="explore-content">
                            <div className="row">
                                <div className=" col-md-4 col-sm-6">
                                    <div className="single-explore-item">

                                        {editingState.exploreImage ? (
                                            <input type="file"
                                                onChange={(e) => handleImgChange(e, "exploreImage")}
                                                multiple
                                                placeholder={
                                                    <img
                                                        src={
                                                            nbuzs.images.exploreImage && nbuzs.images.exploreImage[0]
                                                                ? nbuzs.images.exploreImage[0]
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
                                                onClick={() => handleClick("exploreImage")}
                                                style={{ cursor: "pointer" }}
                                            />
                                        )
                                        }                                        
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section id="blog" className="blog" >
                    <div className="container">
                        <div className="section-header">
                            <h2>New Posts</h2>
                            <p>Here some new invented products of our shop</p>
                        </div>
                        <div className="blog-content">
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="single-blog-item">
                                        <div className="single-blog-item-img">
                                            {editingState.blogImage ? (
                                                <input type="file"
                                                    onChange={(e) => handleImgChange(e, "blogImage")}
                                                    multiple
                                                    placeholder={
                                                        <img
                                                            src={
                                                                nbuzs.images.blogImage && nbuzs.images.blogImage[0]
                                                                    ? nbuzs.images.blogImage[0]
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
                                                    onClick={() => handleClick("blogImage")}
                                                    style={{ cursor: "pointer" }}
                                                />
                                            )
                                            }                                          </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <br/>
         <section id="explore" className="explore">
                    <div className="container">
                        <div className="section-header">
                            <h2>Contacts</h2>
                        </div>
      <div className="container row">
      <div className="col-sm-4 offset-5 my-2">
     
      {editingState.contactNo1 ? (
                      <Editxt
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
                  
                   <div className="col-sm-4 offset-5 my-2">
                    {editingState.contactNo2 ? (
                      <Editxt
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
                    <div className="col-sm-4 offset-5 my-2 ">
                    {editingState.contactNo3 ? (
                      <Editxt
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
      <div className="col-sm-4 offset-5 my-2">
     
      {editingState.contactE1 ? (
                      <Editxt
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
                  
                   <div className="col-sm-4 offset-5 my-2">
                    {editingState.contactE2 ? (
                      <Editxt
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
                    <div className="col-sm-4 offset-5 my-2 ">
                    {editingState.contactE3 ? (
                      <Editxt
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
      </section>
                <input className="btn btn-success" type="submit" />
            </form>




        </>

    );

}

export default Templt;
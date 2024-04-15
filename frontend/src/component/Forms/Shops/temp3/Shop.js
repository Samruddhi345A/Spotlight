import React, { useState, useEffect } from "react";
import Editxt from "react-editext";

const Shop = () => {

  //sample data to use in <p> tag
  const [replaceData, setreplaceData] = useState({
    title: "Title",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus cum iste nesciunt adipisci atque, eveniet hic quod modi voluptatum est ad alias illo laboriosam inventore debitis quibusdam doloribus veritatis aliquid!",
    image: null,
  });
  //sample image to use in <ing> tag
  const placeholderImage =
    "https://via.placeholder.com/300x200?text=Placeholder";

  //to change between input field and p tag. initial value is false.If false=shows <p> tag. If True=shows <editext> tag
  const [editingState, setEditingState] = useState({
    shopTitle1: false, selTitle: false, selTitle1: false,
    phImage: false, wtImage: false,
    coTitle: false, coTitle1: false, coTitle2: false, coTitle3: false,
    coDescription: false, coDescription1: false, coDescription2: false,
    coDescription3: false,
    moTitle: false, moTitle1: false, moTitle2: false, moTitle3: false, moTitle4: false, moTitle5: false,
    wtTitle: false, wtTitle1: false, wtTitle2: false, wtTitle3: false, wtTitle4: false, wtTitle5: false,
    wtImage: false, postTitle: false, postTitle1: false, postTitle2: false, postTitle3: false,
    logoDescription: false, logoDescription1: false, logoDescription2: false, logoTitle: false, logoTitle1: false,
    ruTitle1: false, ruTitle2: false, ruTitle3: false, ruTitle4: false, ruTitle5: false, ruTitle6: false, ruTitle17: false,
    ruTitle8: false, ruTitle9: false, ruTitle10: false, ruTitle11: false, ruTitle12: false, ruTitle13: false,
  });

  //Values from user are stored here
  const [nbuzs, setnBuz] = useState({
    images: { phImage: [], wtImage: [], },

    title: {
      shopTitle: [], coTitle: [], moTitle: [], wtTitle: [], selTitle: [], postTitle: [],
      logoTitle: [], ruTitle: [],
    },
    description: {
      coDescription: [],
      logoDescription: [],
    },
  });

  const handleSubmit = () => {
    //To do
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

      if (field === "shopTitle") {
        handleFieldChange(newData.title, "shopTitle", e.target.value);
      }

      else if (field === "coDescription") {
        handleFieldChange(
          newData.description,
          "coDescription",
          e.target.value);
      }
      else if (field === "logoDescription") {
        handleFieldChange(
          newData.description,
          "logoDescription",
          e.target.value);
      }
      else if (field === "logoTitle") {
        handleFieldChange(newData.description, "logoTitle", e.target.value);
      }
      else if (field === "ruTitle") {
        handleFieldChange(newData.description, "ruTitle", e.target.value);
      }
      else if (field === "coTitle") {
        handleFieldChange(newData.description, "coTitle", e.target.value);
      }
      else if (field === "selTitle") {
        handleFieldChange(newData.description, "selTitle", e.target.value);
      }
      else if (field === "coDescription") {
        handleFieldChange(
          newData.description,
          "coDescription",
          e.target.value);
      }
      else if (field === "moTitle") {
        handleFieldChange(newData.description, "moTitle", e.target.value);
      }
      else if (field === "wtTitle") {
        handleFieldChange(newData.description, "wtTitle", e.target.value);
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
      <header id="header" class="site-header header-scrolled position-fixed text-black bg-light">
        <nav id="header-nav" class="navbar navbar-expand-lg px-3 mb-3">
          <div class="container-fluid">
            <a class="navbar-brand" href="index.html">
              <img src={require("./assets/images/main-logo.png")} class="logo" />
            </a>
            <button class="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
              <svg class="navbar-icon">
                <a href="#navbar-icon"></a>
              </svg>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
              <div class="offcanvas-header px-4 pb-0">
                <a class="navbar-brand" href="index.html">
                  <img src={require("./assets/images/main-logo.png")} class="logo" />
                </a>
                <button type="button" class="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar"></button>
              </div>
              <div class="offcanvas-body">
                <ul id="navbar" class="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
                  <li class="nav-item">
                    <a class="nav-link me-4 active" href="#billboard">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link me-4" href="#company-services">Services</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link me-4" href="#mobile-products">Products</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link me-4" href="#smart-watches">Watches</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link me-4" href="#yearly-sale">Sale</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link me-4" href="#latest-blog">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section id="billboard" class="position-relative overflow-hidden bg-light-blue">
        <div class="swiper main-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="container">
                <div class="row d-flex align-items-center">
                  <div class="col-md-6">
                    <div class="banner-content">
                      <h1 class="display-2 text-uppercase text-dark pb-5">{editingState.shopTitle1 ? (
                        <Editxt
                          name="shopTitle1"
                          defaultValue={
                            nbuzs.title.shopTitle[0] || replaceData.title
                          }
                          inline
                          onChange={(e) => handleChange(e, "shopTitle", 0)}
                          onSave={(value) => handleSave(value, "shopTitle", 0)}
                          placeholder={<span>Click to edit title</span>}
                        />
                      ) : (
                        <span onClick={() => handleClick("shopTitle1")}>
                          {nbuzs.title.shopTitle[0] || <p>Your Shop Name</p>}
                        </span>
                      )}</h1>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="image-holder">
                      <img src={require("./assets/images/banner-image.png")} alt="banner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="company-services" class="padding-large">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 pb-3">
              <div class="icon-box d-flex">
                <div class="icon-box-icon pe-3 pb-3">
                  <svg class="cart-outline">
                    <a href="#cart-outline" />
                  </svg>
                </div>
                <div class="icon-box-content">
                  <h3 class="card-title text-uppercase text-dark">{editingState.coTitle ? (
                    <Editxt
                      name="coTitle"
                      defaultValue={
                        nbuzs.title.coTitle[0] || replaceData.title
                      }
                      inline
                      onChange={(e) => handleChange(e, "coTitle", 0)}
                      onSave={(value) => handleSave(value, "coTitle", 0)}
                      placeholder={<span>Click to edit title</span>}
                    />
                  ) : (
                    <span onClick={() => handleClick("coTitle")}>
                      {nbuzs.title.coTitle[0] || <p>Service Title</p>}
                    </span>
                  )}</h3>
                  <p>{editingState.coDescription ? (
                    <Editxt
                      name="coDescription"
                      defaultValue={
                        nbuzs.description.coDescription[0] ||
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
                      {nbuzs.description.coDescription[0] ||
                        replaceData.description}
                    </span>
                  )}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 pb-3">
              <div class="icon-box d-flex">
                <div class="icon-box-icon pe-3 pb-3">
                  <svg class="quality">
                    <a href="#quality" />
                  </svg>
                </div>
                <div class="icon-box-content">
                  <h3 class="card-title text-uppercase text-dark">{editingState.coTitle1 ? (
                    <Editxt
                      name="coTitle1"
                      defaultValue={
                        nbuzs.title.coTitle[1] || replaceData.title
                      }
                      inline
                      onChange={(e) => handleChange(e, "coTitle", 1)}
                      onSave={(value) => handleSave(value, "coTitle", 1)}
                      placeholder={<span>Click to edit title</span>}
                    />
                  ) : (
                    <span onClick={() => handleClick("coTitle1")}>
                      {nbuzs.title.coTitle[1] || <p>service title</p>}
                    </span>
                  )}</h3>
                  <p>{editingState.coDescription1 ? (
                    <Editxt
                      name="coDescription1"
                      defaultValue={
                        nbuzs.description.coDescription[1] ||
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
                      {nbuzs.description.coDescription[1] ||
                        replaceData.description}
                    </span>
                  )}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 pb-3">
              <div class="icon-box d-flex">
                <div class="icon-box-icon pe-3 pb-3">
                  <svg class="price-tag">
                    <a href="#price-tag" />
                  </svg>
                </div>
                <div class="icon-box-content">
                  <h3 class="card-title text-uppercase text-dark">{editingState.coTitle2 ? (
                    <Editxt
                      name="coTitle2"
                      defaultValue={
                        nbuzs.title.coTitle[2] || replaceData.title
                      }
                      inline
                      onChange={(e) => handleChange(e, "coTitle", 2)}
                      onSave={(value) => handleSave(value, "coTitle", 2)}
                      placeholder={<span>Click to edit title</span>}
                    />
                  ) : (
                    <span onClick={() => handleClick("coTitle2")}>
                      {nbuzs.title.coTitle[2] || <p>service title</p>}
                    </span>
                  )}</h3>
                  <p>{editingState.coDescription2 ? (
                    <Editxt
                      name="coDescription2"
                      defaultValue={
                        nbuzs.description.coDescription[2] ||
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
                      {nbuzs.description.coDescription[2] ||
                        replaceData.description}
                    </span>
                  )}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 pb-3">
              <div class="icon-box d-flex">
                <div class="icon-box-icon pe-3 pb-3">
                  <svg class="shield-plus">
                    <a href="#shield-plus" />
                  </svg>
                </div>
                <div class="icon-box-content">
                  <h3 class="card-title text-uppercase text-dark">{editingState.coTitle3 ? (
                    <Editxt
                      name="coTitle3"
                      defaultValue={
                        nbuzs.title.coTitle[3] || replaceData.title
                      }
                      inline
                      onChange={(e) => handleChange(e, "coTitle", 3)}
                      onSave={(value) => handleSave(value, "coTitle", 3)}
                      placeholder={<span>Click to edit title</span>}
                    />
                  ) : (
                    <span onClick={() => handleClick("coTitle")}>
                      {nbuzs.title.coTitle[3] || <p>service title</p>}
                    </span>
                  )}</h3>
                  <p>{editingState.coDescription3 ? (
                    <Editxt
                      name="coDescription3"
                      defaultValue={
                        nbuzs.description.coDescription[3] ||
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
                      {nbuzs.description.coDescription[3] ||
                        replaceData.description}
                    </span>
                  )}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mobile-products" class="product-store position-relative padding-large no-padding-top">
        <div class="container">
          <div class="row">
            <div class="display-header d-flex justify-content-between pb-3">
              <h2 class="display-7 text-dark text-uppercase">Mobile Products</h2>
            </div>
            <div className="row col-lg-12">
              <div className="col-lg-4">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="product-card position-relative">
                      <div class="image-holder">
                        {editingState.phImage ? (
                          <input type="file"
                            name="image"
                            onChange={(e) => handleImgChange(e, "phImage")}
                            multiple
                            placeholder={
                              <img src={nbuzs.images.phImage && nbuzs.images.phImage[0]
                                ? nbuzs.images.phImage[0]
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
                      </div>
                      <div class="cart-concern position-absolute">
                      </div>
                      <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                        <h3 class="card-title text-uppercase">
                          {editingState.moTitle ? (
                            <Editxt
                              name="moTitle"
                              defaultValue={
                                nbuzs.title.moTitle[0] || replaceData.title
                              }
                              inline
                              onChange={(e) => handleChange(e, "moTitle", 0)}
                              onSave={(value) => handleSave(value, "moTitle", 0)}
                              placeholder={<span>Click to edit title</span>}
                            />
                          ) : (
                            <span onClick={() => handleClick("moTitle")}>
                              {nbuzs.title.moTitle[0] || <p>Mobile Title</p>}
                            </span>
                          )}
                        </h3>
                        <span class="item-price text-primary">{editingState.ruTitle1 ? (
                          <Editxt
                            name="ruTitle1"
                            defaultValue={
                              nbuzs.title.ruTitle[0] || replaceData.title
                            }
                            inline
                            onChange={(e) => handleChange(e, "ruTitle", 0)}
                            onSave={(value) => handleSave(value, "ruTitle", 0)}
                            placeholder={<span>Click to edit title</span>}
                          />
                        ) : (
                          <span onClick={() => handleClick("ruTitle1")}>
                            {nbuzs.title.ruTitle[0] || <p>Rupee</p>}
                          </span>
                        )}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="swiper-slide">
                  <div class="product-card position-relative">
                    <div class="image-holder">
                      {editingState.phImage ? (
                        <input type="file"
                          name="image"
                          onChange={(e) => handleImgChange(e, "phImage")}
                          multiple
                          placeholder={
                            <img src={nbuzs.images.phImage && nbuzs.images.phImage[0]
                              ? nbuzs.images.phImage[0]
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
                    </div>
                    <div class="cart-concern position-absolute">
                    </div>
                    <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                      <h3 class="card-title text-uppercase">
                        {editingState.moTitle1 ? (
                          <Editxt
                            name="moTitle1"
                            defaultValue={
                              nbuzs.title.moTitle[1] || replaceData.title
                            }
                            inline
                            onChange={(e) => handleChange(e, "moTitle", 1)}
                            onSave={(value) => handleSave(value, "moTitle", 1)}
                            placeholder={<span>Click to edit title</span>}
                          />
                        ) : (
                          <span onClick={() => handleClick("moTitle1")}>
                            {nbuzs.title.moTitle[1] || <p>Mobile Title</p>}
                          </span>
                        )}
                      </h3>
                      <span class="item-price text-primary">{editingState.ruTitle2 ? (
                        <Editxt
                          name="ruTitle2"
                          defaultValue={
                            nbuzs.title.ruTitle[1] || replaceData.title
                          }
                          inline
                          onChange={(e) => handleChange(e, "ruTitle", 1)}
                          onSave={(value) => handleSave(value, "ruTitle", 1)}
                          placeholder={<span>Click to edit title</span>}
                        />
                      ) : (
                        <span onClick={() => handleClick("ruTitle2")}>
                          {nbuzs.title.ruTitle[1] || <p>Rupee</p>}
                        </span>
                      )}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="swiper-slide">
                  <div class="product-card position-relative">
                    <div class="image-holder">
                      {editingState.phImage ? (
                        <input type="file"
                          name="image"
                          onChange={(e) => handleImgChange(e, "phImage")}
                          multiple
                          placeholder={
                            <img src={nbuzs.images.phImage && nbuzs.images.phImage[0]
                              ? nbuzs.images.phImage[0]
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
                    </div>
                    <div class="cart-concern position-absolute">
                    </div>
                    <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                      <h3 class="card-title text-uppercase">
                        {editingState.moTitle2 ? (
                          <Editxt
                            name="moTitle2"
                            defaultValue={
                              nbuzs.title.moTitle[2] || replaceData.title
                            }
                            inline
                            onChange={(e) => handleChange(e, "moTitle", 2)}
                            onSave={(value) => handleSave(value, "moTitle", 2)}
                            placeholder={<span>Click to edit title</span>}
                          />
                        ) : (
                          <span onClick={() => handleClick("moTitle2")}>
                            {nbuzs.title.moTitle[2] || <p>Mobile Title</p>}
                          </span>
                        )}
                      </h3>
                      <span class="item-price text-primary">{editingState.ruTitle3 ? (
                        <Editxt
                          name="ruTitle3"
                          defaultValue={
                            nbuzs.title.ruTitle[2] || replaceData.title
                          }
                          inline
                          onChange={(e) => handleChange(e, "ruTitle", 2)}
                          onSave={(value) => handleSave(value, "ruTitle", 2)}
                          placeholder={<span>Click to edit title</span>}
                        />
                      ) : (
                        <span onClick={() => handleClick("ruTitle3")}>
                          {nbuzs.title.ruTitle[2] || <p>Rupee</p>}
                        </span>
                      )}</span>
                    </div>
                  </div>
                </div> </div>
            </div>
            <div>
            </div>
            <div className="row col-lg-12">
              <div className="col-lg-4">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="product-card position-relative">
                      <div class="image-holder">
                        {editingState.phImage ? (
                          <input type="file"
                            name="image"
                            onChange={(e) => handleImgChange(e, "phImage")}
                            multiple
                            placeholder={
                              <img src={nbuzs.images.phImage && nbuzs.images.phImage[0]
                                ? nbuzs.images.phImage[0]
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
                      </div>
                      <div class="cart-concern position-absolute">
                      </div>
                      <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                        <h3 class="card-title text-uppercase">
                          {editingState.moTitle3 ? (
                            <Editxt
                              name="moTitle3"
                              defaultValue={
                                nbuzs.title.moTitle[3] || replaceData.title
                              }
                              inline
                              onChange={(e) => handleChange(e, "moTitle", 3)}
                              onSave={(value) => handleSave(value, "moTitle", 3)}
                              placeholder={<span>Click to edit title</span>}
                            />
                          ) : (
                            <span onClick={() => handleClick("moTitle3")}>
                              {nbuzs.title.moTitle[3] || <p>Mobile Title</p>}
                            </span>
                          )}
                        </h3>
                        <span class="item-price text-primary">{editingState.ruTitle4 ? (
                          <Editxt
                            name="ruTitle4"
                            defaultValue={
                              nbuzs.title.ruTitle[3] || replaceData.title
                            }
                            inline
                            onChange={(e) => handleChange(e, "ruTitle", 3)}
                            onSave={(value) => handleSave(value, "ruTitle", 3)}
                            placeholder={<span>Click to edit title</span>}
                          />
                        ) : (
                          <span onClick={() => handleClick("ruTitle4")}>
                            {nbuzs.title.ruTitle[3] || <p>Rupee</p>}
                          </span>
                        )}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="swiper-slide">
                  <div class="product-card position-relative">
                    <div class="image-holder">
                      {editingState.phImage ? (
                        <input type="file"
                          name="image"
                          onChange={(e) => handleImgChange(e, "phImage")}
                          multiple
                          placeholder={
                            <img src={nbuzs.images.phImage && nbuzs.images.phImage[0]
                              ? nbuzs.images.phImage[0]
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
                    </div>
                    <div class="cart-concern position-absolute">
                    </div>
                    <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                      <h3 class="card-title text-uppercase">
                        {editingState.moTitle4 ? (
                          <Editxt
                            name="moTitle4"
                            defaultValue={
                              nbuzs.title.moTitle[4] || replaceData.title
                            }
                            inline
                            onChange={(e) => handleChange(e, "moTitle", 4)}
                            onSave={(value) => handleSave(value, "moTitle", 4)}
                            placeholder={<span>Click to edit title</span>}
                          />
                        ) : (
                          <span onClick={() => handleClick("moTitle4")}>
                            {nbuzs.title.moTitle[4] || <p>Mobile Title</p>}
                          </span>
                        )}
                      </h3>
                      <span class="item-price text-primary">{editingState.ruTitle5 ? (
                        <Editxt
                          name="ruTitle5"
                          defaultValue={
                            nbuzs.title.ruTitle[4] || replaceData.title
                          }
                          inline
                          onChange={(e) => handleChange(e, "ruTitle", 4)}
                          onSave={(value) => handleSave(value, "ruTitle", 4)}
                          placeholder={<span>Click to edit title</span>}
                        />
                      ) : (
                        <span onClick={() => handleClick("ruTitle5")}>
                          {nbuzs.title.ruTitle[4] || <p>Rupee</p>}
                        </span>
                      )}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="swiper-slide">
                  <div class="product-card position-relative">
                    <div class="image-holder">
                      {editingState.phImage ? (
                        <input type="file"
                          name="image"
                          onChange={(e) => handleImgChange(e, "phImage")}
                          multiple
                          placeholder={
                            <img src={nbuzs.images.phImage && nbuzs.images.phImage[0]
                              ? nbuzs.images.phImage[0]
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
                    </div>
                    <div class="cart-concern position-absolute">
                    </div>
                    <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                      <h3 class="card-title text-uppercase">
                        {editingState.moTitle5 ? (
                          <Editxt
                            name="moTitle5"
                            defaultValue={
                              nbuzs.title.moTitle[5] || replaceData.title
                            }
                            inline
                            onChange={(e) => handleChange(e, "moTitle", 5)}
                            onSave={(value) => handleSave(value, "moTitle", 5)}
                            placeholder={<span>Click to edit title</span>}
                          />
                        ) : (
                          <span onClick={() => handleClick("moTitle5")}>
                            {nbuzs.title.moTitle[5] || <p>Mobile Title</p>}
                          </span>
                        )}
                      </h3>
                      <span class="item-price text-primary">{editingState.ruTitle6 ? (
                        <Editxt
                          name="ruTitle6"
                          defaultValue={
                            nbuzs.title.ruTitle[5] || replaceData.title
                          }
                          inline
                          onChange={(e) => handleChange(e, "ruTitle", 5)}
                          onSave={(value) => handleSave(value, "ruTitle", 5)}
                          placeholder={<span>Click to edit title</span>}
                        />
                      ) : (
                        <span onClick={() => handleClick("ruTitle6")}>
                          {nbuzs.title.ruTitle[5] || <p>Rupee</p>}
                        </span>
                      )}</span>
                    </div>
                  </div>
                </div> </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </section>

      <section id="smart-watches" class="product-store padding-large position-relative">
        <div class="container">
          <div class="row">
            <div class="display-header d-flex justify-content-between pb-3">
              <h2 class="display-7 text-dark text-uppercase">Smart Watches</h2>
            </div>
            <div className="row col-lg-12">
              <div className="col-lg-4">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="product-card position-relative">
                      <div class="image-holder">
                        {editingState.wtImage ? (
                          <input type="file"
                            name="image"
                            onChange={(e) => handleImgChange(e, "wtImage")}
                            multiple
                            placeholder={
                              <img src={nbuzs.images.wtImage && nbuzs.images.wtImage[0]
                                ? nbuzs.images.wtImage[0]
                                : placeholderImage} alt="Placeholder" />
                            }
                          />
                        ) : (
                          <img
                            src={placeholderImage}
                            alt="Placeholder"
                            onClick={() => handleClick("wtImage")}
                            style={{ cursor: "pointer" }}
                          />
                        )}</div>
                      <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                        <h3 class="card-title text-uppercase">
                          {editingState.wtTitle ? (
                            <Editxt
                              name="wtTitle"
                              defaultValue={
                                nbuzs.title.wtTitle[0] || replaceData.title
                              }
                              inline
                              onChange={(e) => handleChange(e, "wtTitle", 0)}
                              onSave={(value) => handleSave(value, "wtTitle", 0)}
                              placeholder={<span>Click to edit title</span>}
                            />
                          ) : (
                            <span onClick={() => handleClick("wtTitle")}>
                              {nbuzs.title.wtTitle[0] || <p>Watch Title</p>}
                            </span>
                          )}
                        </h3>
                        <span class="item-price text-primary">{editingState.ruTitle7 ? (
                          <Editxt
                            name="ruTitle7"
                            defaultValue={
                              nbuzs.title.ruTitle[6] || replaceData.title
                            }
                            inline
                            onChange={(e) => handleChange(e, "ruTitle", 6)}
                            onSave={(value) => handleSave(value, "ruTitle", 6)}
                            placeholder={<span>Click to edit title</span>}
                          />
                        ) : (
                          <span onClick={() => handleClick("ruTitle7")}>
                            {nbuzs.title.ruTitle[6] || <p>Rupee</p>}
                          </span>
                        )}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="swiper-slide">
                  <div class="product-card position-relative">
                    <div class="image-holder">
                      {editingState.wtImage ? (
                        <input type="file"
                          name="image"
                          onChange={(e) => handleImgChange(e, "wtImage")}
                          multiple
                          placeholder={
                            <img src={nbuzs.images.wtImage && nbuzs.images.wtImage[0]
                              ? nbuzs.images.wtImage[0]
                              : placeholderImage} alt="Placeholder" />
                          }
                        />
                      ) : (
                        <img
                          src={placeholderImage}
                          alt="Placeholder"
                          onClick={() => handleClick("wtImage")}
                          style={{ cursor: "pointer" }}
                        />
                      )}</div>                  <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                      <h3 class="card-title text-uppercase">
                        {editingState.wtTitle1 ? (
                          <Editxt
                            name="wtTitle1"
                            defaultValue={
                              nbuzs.title.wtTitle[1] || replaceData.title
                            }
                            inline
                            onChange={(e) => handleChange(e, "wtTitle", 1)}
                            onSave={(value) => handleSave(value, "wtTitle", 1)}
                            placeholder={<span>Click to edit title</span>}
                          />
                        ) : (
                          <span onClick={() => handleClick("wtTitle1")}>
                            {nbuzs.title.wtTitle[1] || <p>Watch Title</p>}
                          </span>
                        )}
                      </h3>
                      <span class="item-price text-primary">{editingState.ruTitle8 ? (
                        <Editxt
                          name="ruTitle8"
                          defaultValue={
                            nbuzs.title.ruTitle[7] || replaceData.title
                          }
                          inline
                          onChange={(e) => handleChange(e, "ruTitle", 7)}
                          onSave={(value) => handleSave(value, "ruTitle", 7)}
                          placeholder={<span>Click to edit title</span>}
                        />
                      ) : (
                        <span onClick={() => handleClick("ruTitle8")}>
                          {nbuzs.title.ruTitle[7] || <p>Rupee</p>}
                        </span>
                      )}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="swiper-slide">
                  <div class="product-card position-relative">
                    <div class="image-holder">
                      {editingState.wtImage ? (
                        <input type="file"
                          name="image"
                          onChange={(e) => handleImgChange(e, "wtImage")}
                          multiple
                          placeholder={
                            <img src={nbuzs.images.wtImage && nbuzs.images.wtImage[0]
                              ? nbuzs.images.wtImage[0]
                              : placeholderImage} alt="Placeholder" />
                          }
                        />
                      ) : (
                        <img
                          src={placeholderImage}
                          alt="Placeholder"
                          onClick={() => handleClick("wtImage")}
                          style={{ cursor: "pointer" }}
                        />
                      )}                  </div>
                    <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                      <h3 class="card-title text-uppercase">
                        {editingState.wtTitle2 ? (
                          <Editxt
                            name="wtTitle2"
                            defaultValue={
                              nbuzs.title.wtTitle[2] || replaceData.title
                            }
                            inline
                            onChange={(e) => handleChange(e, "wtTitle", 2)}
                            onSave={(value) => handleSave(value, "wtTitle", 2)}
                            placeholder={<span>Click to edit title</span>}
                          />
                        ) : (
                          <span onClick={() => handleClick("wtTitle2")}>
                            {nbuzs.title.wtTitle[2] || <p>Watch Title</p>}
                          </span>
                        )}
                      </h3>
                      <span class="item-price text-primary">{editingState.ruTitle9 ? (
                        <Editxt
                          name="ruTitle9"
                          defaultValue={
                            nbuzs.title.ruTitle[8] || replaceData.title
                          }
                          inline
                          onChange={(e) => handleChange(e, "ruTitle", 8)}
                          onSave={(value) => handleSave(value, "ruTitle", 8)}
                          placeholder={<span>Click to edit title</span>}
                        />
                      ) : (
                        <span onClick={() => handleClick("ruTitle9")}>
                          {nbuzs.title.ruTitle[8] || <p>Rupee</p>}
                        </span>
                      )}</span>
                    </div>
                  </div>
                </div> </div>
            </div>
            <div>
            </div>
            <div className="row col-lg-12">
              <div className="col-lg-4">
                <div class="swiper-slide">
                  <div class="product-card position-relative">
                    <div class="image-holder">
                      {editingState.wtImage ? (
                        <input type="file"
                          name="image"
                          onChange={(e) => handleImgChange(e, "wtImage")}
                          multiple
                          placeholder={
                            <img src={nbuzs.images.wtImage && nbuzs.images.wtImage[0]
                              ? nbuzs.images.wtImage[0]
                              : placeholderImage} alt="Placeholder" />
                          }
                        />
                      ) : (
                        <img
                          src={placeholderImage}
                          alt="Placeholder"
                          onClick={() => handleClick("wtImage")}
                          style={{ cursor: "pointer" }}
                        />
                      )}                   </div>
                    <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                      <h3 class="card-title text-uppercase">
                        {editingState.wtTitle3 ? (
                          <Editxt
                            name="wtTitle3"
                            defaultValue={
                              nbuzs.title.wtTitle[3] || replaceData.title
                            }
                            inline
                            onChange={(e) => handleChange(e, "wtTitle", 3)}
                            onSave={(value) => handleSave(value, "wtTitle", 3)}
                            placeholder={<span>Click to edit title</span>}
                          />
                        ) : (
                          <span onClick={() => handleClick("wtTitle3")}>
                            {nbuzs.title.wtTitle[3] || <p>Watch Title</p>}
                          </span>
                        )}
                      </h3>
                      <span class="item-price text-primary">{editingState.ruTitle10 ? (
                        <Editxt
                          name="ruTitle10"
                          defaultValue={
                            nbuzs.title.ruTitle[9] || replaceData.title
                          }
                          inline
                          onChange={(e) => handleChange(e, "ruTitle", 9)}
                          onSave={(value) => handleSave(value, "ruTitle", 9)}
                          placeholder={<span>Click to edit title</span>}
                        />
                      ) : (
                        <span onClick={() => handleClick("ruTitle10")}>
                          {nbuzs.title.ruTitle[9] || <p>Rupee</p>}
                        </span>
                      )}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="swiper-slide">
                  <div class="product-card position-relative">
                    <div class="image-holder">
                      {editingState.wtImage ? (
                        <input type="file"
                          name="image"
                          onChange={(e) => handleImgChange(e, "wtImage")}
                          multiple
                          placeholder={
                            <img src={nbuzs.images.wtImage && nbuzs.images.wtImage[0]
                              ? nbuzs.images.wtImage[0]
                              : placeholderImage} alt="Placeholder" />
                          }
                        />
                      ) : (
                        <img
                          src={placeholderImage}
                          alt="Placeholder"
                          onClick={() => handleClick("wtImage")}
                          style={{ cursor: "pointer" }}
                        />
                      )}     </div>                  <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                      <h3 class="card-title text-uppercase">
                        {editingState.wtTitle4 ? (
                          <Editxt
                            name="wtTitle4"
                            defaultValue={
                              nbuzs.title.wtTitle[4] || replaceData.title
                            }
                            inline
                            onChange={(e) => handleChange(e, "wtTitle", 4)}
                            onSave={(value) => handleSave(value, "wtTitle", 4)}
                            placeholder={<span>Click to edit title</span>}
                          />
                        ) : (
                          <span onClick={() => handleClick("wtTitle4")}>
                            {nbuzs.title.wtTitle[4] || <p>Watch Title</p>}
                          </span>
                        )}
                      </h3>
                      <span class="item-price text-primary">{editingState.ruTitle11 ? (
                        <Editxt
                          name="ruTitle11"
                          defaultValue={
                            nbuzs.title.ruTitle[10] || replaceData.title
                          }
                          inline
                          onChange={(e) => handleChange(e, "ruTitle", 10)}
                          onSave={(value) => handleSave(value, "ruTitle", 10)}
                          placeholder={<span>Click to edit title</span>}
                        />
                      ) : (
                        <span onClick={() => handleClick("ruTitle11")}>
                          {nbuzs.title.ruTitle[10] || <p>Rupee</p>}
                        </span>
                      )}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div class="swiper-slide">
                  <div class="product-card position-relative">
                    <div class="image-holder">
                      {editingState.wtImage ? (
                        <input type="file"
                          name="image"
                          onChange={(e) => handleImgChange(e, "wtImage")}
                          multiple
                          placeholder={
                            <img src={nbuzs.images.wtImage && nbuzs.images.wtImage[0]
                              ? nbuzs.images.wtImage[0]
                              : placeholderImage} alt="Placeholder" />
                          }
                        />
                      ) : (
                        <img
                          src={placeholderImage}
                          alt="Placeholder"
                          onClick={() => handleClick("wtImage")}
                          style={{ cursor: "pointer" }}
                        />
                      )}                  </div>
                    <div class="card-detail d-flex justify-content-between pt-3">
                      <h3 class="card-title text-uppercase">
                        {editingState.wtTitle5 ? (
                          <Editxt
                            name="wtTitle5"
                            defaultValue={
                              nbuzs.title.wtTitle[5] || replaceData.title
                            }
                            inline
                            onChange={(e) => handleChange(e, "wtTitle", 5)}
                            onSave={(value) => handleSave(value, "wtTitle", 5)}
                            placeholder={<span>Click to edit title</span>}
                          />
                        ) : (
                          <span onClick={() => handleClick("wtTitle5")}>
                            {nbuzs.title.wtTitle[5] || <p>Watch Title</p>}
                          </span>
                        )}
                      </h3>
                      <span class="item-price text-primary">{editingState.ruTitle12 ? (
                        <Editxt
                          name="ruTitle12"
                          defaultValue={
                            nbuzs.title.ruTitle[11] || replaceData.title
                          }
                          inline
                          onChange={(e) => handleChange(e, "ruTitle", 11)}
                          onSave={(value) => handleSave(value, "ruTitle", 11)}
                          placeholder={<span>Click to edit title</span>}
                        />
                      ) : (
                        <span onClick={() => handleClick("ruTitle12")}>
                          {nbuzs.title.ruTitle[11] || <p>Rupee</p>}
                        </span>
                      )}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="yearly-sale" class="bg-light-blue overflow-hidden mt-5 padding-xlarge" style={{ backgroundImage: "url('images/single-image1.png');background-position: right; background-repeat: no-repeat;" }}>
        <div class="row d-flex flex-wrap align-items-center">
          <div class="col-md-6 col-sm-12">
            <div class="text-content offset-4 padding-medium">
              <h3>{editingState.selTitle1 ? (
                <Editxt
                  name="selTitle1"
                  defaultValue={
                    nbuzs.title.selTitle[1] || replaceData.title
                  }
                  inline
                  onChange={(e) => handleChange(e, "selTitle", 1)}
                  onSave={(value) => handleSave(value, "selTitle", 1)}
                  placeholder={<span>Click to edit title</span>}
                />
              ) : (
                <span onClick={() => handleClick("selTitle1")}>
                  {nbuzs.title.selTitle[1] || <p>Sel Title</p>}
                </span>
              )}</h3>
              <h2 class="display-2 pb-5 text-uppercase text-dark"> {editingState.selTitle ? (
                <Editxt
                  name="selTitle"
                  defaultValue={
                    nbuzs.title.selTitle[0] || replaceData.title
                  }
                  inline
                  onChange={(e) => handleChange(e, "selTitle", 0)}
                  onSave={(value) => handleSave(value, "selTitle", 0)}
                  placeholder={<span>Click to edit title</span>}
                />
              ) : (
                <span onClick={() => handleClick("selTitle")}>
                  {nbuzs.title.selTitle[0] || <p>Sel Title</p>}
                </span>
              )}</h2>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <img src={require("./assets/images/single-image1.png")} alt="product-item" class="img-fluid" />
          </div>
        </div>
      </section>
      <section id="latest-blog" class="padding-large">
        <div class="container">
          <div class="row">
            <div class="display-header d-flex justify-content-between pb-3">
              <h2 class="display-7 text-dark text-uppercase">Latest Posts</h2>
            </div>
            <div class="post-grid d-flex flex-wrap justify-content-between">
              <div class="col-lg-4 col-sm-12">
                <div class="card border-none me-3">
                  <div class="card-image">
                    {editingState.postImage ? (
                      <input type="file"
                        name="image"
                        onChange={(e) => handleImgChange(e, "postImage")}
                        multiple
                        placeholder={
                          <img src={nbuzs.images.postImage && nbuzs.images.postImage[0]
                            ? nbuzs.images.postImage[0]
                            : placeholderImage} alt="Placeholder" />
                        }
                      />
                    ) : (
                      <img
                        src={placeholderImage}
                        alt="Placeholder"
                        onClick={() => handleClick("postImage")}
                        style={{ cursor: "pointer" }}
                      />
                    )}                   </div>
                </div>
                <div class="card-body text-uppercase">
                  <h3 class="card-title">
                    {editingState.postTitle ? (
                      <Editxt
                        name="postTitle"
                        defaultValue={
                          nbuzs.title.postTitle[0] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "postTitle", 0)}
                        onSave={(value) => handleSave(value, "postTitle", 0)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("postTitle")}>
                        {nbuzs.title.postTitle[0] || <p>post Title</p>}
                      </span>
                    )}                </h3>
                </div>
              </div>
              <div class="col-lg-4 col-sm-12">
                <div class="card border-none me-3">
                  <div class="card-image">
                    {editingState.postImage ? (
                      <input type="file"
                        name="image"
                        onChange={(e) => handleImgChange(e, "postImage")}
                        multiple
                        placeholder={
                          <img src={nbuzs.images.postImage && nbuzs.images.postImage[0]
                            ? nbuzs.images.postImage[0]
                            : placeholderImage} alt="Placeholder" />
                        }
                      />
                    ) : (
                      <img
                        src={placeholderImage}
                        alt="Placeholder"
                        onClick={() => handleClick("postImage")}
                        style={{ cursor: "pointer" }}
                      />
                    )}                  </div>
                </div>
                <div class="card-body text-uppercase">
                  <h3 class="card-title">
                    {editingState.postTitle1 ? (
                      <Editxt
                        name="postTitle1"
                        defaultValue={
                          nbuzs.title.postTitle[1] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "postTitle", 1)}
                        onSave={(value) => handleSave(value, "postTitle", 1)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("postTitle1")}>
                        {nbuzs.title.postTitle[1] || <p>post Title</p>}
                      </span>
                    )}                  </h3>
                </div>
              </div>
              <div class="col-lg-4 col-sm-12">
                <div class="card border-none me-3">
                  <div class="card-image">
                    {editingState.postImage ? (
                      <input type="file"
                        name="image"
                        onChange={(e) => handleImgChange(e, "postImage")}
                        multiple
                        placeholder={
                          <img src={nbuzs.images.postImage && nbuzs.images.postImage[0]
                            ? nbuzs.images.postImage[0]
                            : placeholderImage} alt="Placeholder" />
                        }
                      />
                    ) : (
                      <img
                        src={placeholderImage}
                        alt="Placeholder"
                        onClick={() => handleClick("postImage")}
                        style={{ cursor: "pointer" }}
                      />
                    )}                  </div>
                </div>
                <div class="card-body text-uppercase">
                  <h3 class="card-title">
                    {editingState.postTitle3 ? (
                      <Editxt
                        name="postTitle3"
                        defaultValue={
                          nbuzs.title.postTitle[3] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "postTitle", 3)}
                        onSave={(value) => handleSave(value, "postTitle", 3)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("postTitle3")}>
                        {nbuzs.title.postTitle[3] || <p>post Title</p>}
                      </span>
                    )}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" class="overflow-hidden">
        <div class="container">
          <div class="row">
            <div class="footer-top-area">
              <div class="row d-flex flex-wrap justify-content-between">
                <div class="col-lg-5 col-sm-6 pb-3">
                  <div class="footer-menu">
                    <img src={require("./assets/images/main-logo.png")} alt="logo" />
                    <p>{editingState.logoDescription ? (
                      <Editxt
                        name="logoDescription"
                        defaultValue={
                          nbuzs.title.logoDescription[0] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "logoDescription", 0)}
                        onSave={(value) => handleSave(value, "logoDescription", 0)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("logoDescription")}>
                        {nbuzs.title.logoDescription[0] || <p> Description</p>}
                      </span>
                    )}</p>
                  </div>
                </div>
                <div class="col-lg-5 pb-3">
                  <div class="footer-menu contact-item">
                    <h5 class="widget-title text-uppercase pb-2">Contact Us</h5>
                    <p>{editingState.logoDescription1 ? (
                      <Editxt
                        name="logoDescription1"
                        defaultValue={
                          nbuzs.title.logoDescription[1] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "logoDescription", 1)}
                        onSave={(value) => handleSave(value, "logoDescription", 1)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("logoDescription1")}>
                        {nbuzs.title.logoDescription[1] || <p> Description</p>}
                      </span>
                    )} <a href="mailto:">{editingState.logoTitle ? (
                      <Editxt
                        name="logoTitle"
                        defaultValue={
                          nbuzs.title.logoTitle[0] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "logoTitle", 0)}
                        onSave={(value) => handleSave(value, "logoTitle", 0)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("logoTitle")}>
                        {nbuzs.title.logoTitle[0] || <p>Mail</p>}
                      </span>
                    )}</a>
                    </p>
                    <p>{editingState.logoDescription2 ? (
                      <Editxt
                        name="logoDescription2"
                        defaultValue={
                          nbuzs.title.logoDescription[2] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "logoDescription", 2)}
                        onSave={(value) => handleSave(value, "logoDescription", 2)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("logoDescription2")}>
                        {nbuzs.title.logoDescription[2] || <p> Description</p>}
                      </span>
                    )}<a href="">{editingState.logoTitle1 ? (
                      <Editxt
                        name="logoTitle1"
                        defaultValue={
                          nbuzs.title.logoTitle[1] || replaceData.title
                        }
                        inline
                        onChange={(e) => handleChange(e, "logoTitle", 1)}
                        onSave={(value) => handleSave(value, "logoTitle", 1)}
                        placeholder={<span>Click to edit title</span>}
                      />
                    ) : (
                      <span onClick={() => handleClick("logoTitle1")}>
                        {nbuzs.title.logoTitle[1] || <p>Mobile No</p>}
                      </span>
                    )}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}
export default Shop;
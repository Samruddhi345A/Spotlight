import React from "react";
import "./assets/css/style.css";
const getImageIdsByType = (contentData, imageType) => {
  const imageIds = [];
  if (contentData && contentData.images) {
    const { images } = contentData;
    const imageArray = images[imageType] || [];
    imageArray.forEach((imageId) => {
      imageIds.push(imageId.toString());
    });
  }
  return imageIds;
};

const findImageData = (imageIds, images) => {
  return imageIds
    .map((imageId) => images.find((img) => img.id === imageId))
    .filter(Boolean);
};

const processImageData = (contentData, imageType, titleKey, descriptionKey, images) => {
  const imageData = [];
  const imageIds = getImageIdsByType(contentData, imageType);
  const imageDataObjects = findImageData(imageIds, images);

  if (contentData && contentData.images && contentData.images[imageType]) {
    contentData.images[imageType].forEach((imageId, index) => {
      const imageDataObj = imageDataObjects.find((img) => img.id === imageId);
      const title = contentData.title[titleKey][index] || '';
      const description = contentData.description[descriptionKey][index] || '';
      if (imageDataObj) {
        imageData.push({ imageDataObj, title, description });
      }
    });
  }
  return imageData;
};

const Home = ({ contentData, images }) => {
  const { description = {}, title = {} } = contentData || {};
  const { instituteDescription = [], aboutDescription = [], featureDescription = [], } = description;
  const { instituteTitle = [], aboutTitle = [], featureTitle = [] } = title;

console.log(contentData);
  const instituteImageIds = getImageIdsByType(contentData, 'instituteImage');
  const instituteImageData = findImageData(instituteImageIds, images);

  const phImageData = processImageData(contentData, 'phImage', 'phTitle', 'phDescription', images);
  const adImageData = processImageData(contentData, 'adImage', 'adTitle', 'adDescription', images);
  const galleryImageData = processImageData(contentData, 'galleryImage', 'aboutTitle', 'aboutDescription', images);
  const coImageData = processImageData(contentData, 'coImage', 'coTitle', 'coDescription', images);

  return (
    <>
       <div className="container my-2">
          <center>
           
              <span >
                {instituteImageData.length > 0 ? (
                  instituteImageData.map((imageData, i) => (
                    <div key={`institute-${i}`} >
                        <img src={`data:image/png;base64,${imageData.data}`} alt={`Institiute Image ${i}`} />
                      </div>
                  ))
                ) : (
                  <p></p>
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
                  {instituteTitle}
                </h2>
                <p>{instituteDescription}
                </p>
              </div>
            </div>
            <div className="row">
              {featureTitle.length > 0 ? (
                featureTitle.map((d, i) => (
                  <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <div className="feature-1 border">
                      <div className="icon-wrapper bg-primary">
                        <span className="flaticon-mortarboard text-white"></span>
                      </div>
                      <div className="feature-1-content">
                        <h2>{d}</h2>
                        <p>{featureDescription[i] || ""}</p>
                      </div>
                    </div>
                  </div>

                ))
              ) : (
                <p></p>
              )
              }
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
              {phImageData.map(({ imageData, title, description }, index) => (
                <div key={`ph-image-${index}`} className="col-lg-4">
                  <div className="post-entry-big">
                    <img src={`data:image/png;base64,${imageData.data}`} alt={`Ph Image ${index}`} />
                    <div className="post-content">
                      <h3 className="post-heading">
                        <p >{title}</p>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section >

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

            {aboutTitle ? (
              <div class="col-lg-4">
                <h2 class="section-title-underline">{aboutTitle}</h2></div>
            ) : (
              <span >
              </span>
            )}
            {aboutDescription ? (
              <div class="col-lg-8">
                <p>{aboutDescription}</p></div>)
              : (
                <span >
                </span>
              )}
          </div>
        </div>
      </section>
      <section>
        <div class="site-section">
          <div class="container">
            <div class="row mb-5">
              {galleryImageData.map(({ imageData, title, description }, index) => (
                <div key={`ph-image-${index}`} class="col-lg-6 mb-lg-0 mb-4">
                  <div className="post-entry-big">
                    <img src={`data:image/png;base64,${imageData.data}`} alt={`Ph Image ${index}`} />
                    <div class="col-lg-5 ml-auto align-self-center">
                      <h2 class="section-title-underline mb-5">
                        <p >{title}</p>
                      </h2>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              ))}
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
              {adImageData.map(({ imageData, title, description }, index) => (
                <>
                  <div key={`ad-image-${index}`} className="col-lg-6 mb-lg-0 mb-4">
                    <img src={`data:image/png;base64,${imageData.data}`} alt={`Ad Image ${index}`} />
                  </div >
                  <div className="col-lg-5 ml-auto align-self-center">
                    <h2 className="section-title-underline mb-5">{title}
                    </h2>
                    <p>
                      {description}</p>
                    <ol className="ul-check primary list-unstyled">
                      <li></li> </ol>
                  </div>
                </>
              ))}
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
              {coImageData.map(({ imageData, title, description }, index) => (
                <div key={`co-image-${index}`} class="col-lg-4 col-md-6 mb-4">
                  <div class="course-1-item">
                    <figure class="thumnail">

                      <img src={`data:image/png;base64,${imageData.data}`} alt={`Co Image ${index}`} />
                      <div class="category">
                        <h3>{title}
                        </h3>
                      </div>
                    </figure>
                    <div class="course-1-content pb-4">
                      <p class="desc mb-4">
                        {description}</p>
                    </div>
                  </div>
                </div>
              ))}

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
      </section>
    </>
  );
};

export default Home;


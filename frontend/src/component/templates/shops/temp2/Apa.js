import React from "react";
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/css/slick.css';

const Templt = (props) => {
    const { contentData, images } = props || {};
    const { description = {}, title = {} } = contentData || {};
    const { shopDescription = [], serviceDescription = [], aboutDescription = [], } = description;
    const { shopTitle = [], serviceTitle = [], aboutTitle = [] } = title;
   
     // Get the image IDs for the current item
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
   // Get the image IDs for different image types
   const exploreImageIds = getImageIdsByType(contentData, 'exploreImage');
   const shopImageIds = getImageIdsByType(contentData, 'shopImage');
   const blogImageIds = getImageIdsByType(contentData, 'blogImage');
  

 
  // Find the image data for exploreImage
  const exploreImageData = exploreImageIds
  .map((imageId) => images.find((img) => img.id === imageId))
  .filter(Boolean);

  // Find the image data for shopImage
  const shopImageData = shopImageIds
  .map((imageId) => images.find((img) => img.id === imageId))
  .filter(Boolean);
  const backgroundImageStyle = shopImageData.length > 0
  ? {
      backgroundImage: `url('${shopImageData.map((img) => `data:image/png;base64,${img.data}`).join(',')}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  : {};
    // Find the image data for blogImage
    const blogImageData = blogImageIds
    .map((imageId) => images.find((img) => img.id === imageId))
    .filter(Boolean);
  
    return (

        <>
            <section className="top-area">
                <div className="header-area">
                    <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

                        <div className="container">

                            <div className="navbar-header">

                                <a className="navbar-brand" href="index.html">list<span>race</span></a>

                            </div>
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
            <section id="home" className="welcome-hero" style={backgroundImageStyle}>
                <div className="container">
                    <div className="welcome-hero-txt">
                        <h2 h2 style={{ color: "black" }}>
                            {shopTitle}
                        </h2>
                        <p style={{ color: "black" }}>
                            {shopDescription}
                        </p>
                    </div>
                </div>
            </section>


            <section id="list-topics" className="list-topics">
                <div className="container">
                    <div className="list-topics-content">
                        <ul>
                            {serviceTitle.length > 0 ? (
                                serviceTitle.map((d, i) => (
                                    <li>
                                        <div className="single-list-topics-content">
                                            <h2>{d}</h2>
                                            <p>{serviceDescription[i] || ""}</p>
                                        </div>
                                    </li>
  
                                ))
                            ) : (
                                <p></p>
                            )
                            }
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
                            {aboutTitle.length > 0 ? (
                                aboutTitle.map((d, i) => (
                                    <div className="col-md-4 col-sm-6">
                                        <h2>{d}</h2>
                                        <p>{aboutDescription[i] || ""}</p>
                                    </div>
                                ))
                            ) : (
                                <p>Loading...</p>
                            )
                            }
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
                        {exploreImageData.length > 0 ? (
                                exploreImageData.map((imageData, i) => (
                                    <div key={`explore-${i}`} className="col-md-4 col-sm-6">
                                        <div className="single-explore-item">
                                            <img src={`data:image/png;base64,${imageData.data}`} alt={`Explores Image ${i}`} />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p></p>
                            )}
                        </div>
                    </div>
                </div>
            </section >
            <section id="blog" className="blog" >
                <div className="container">
                    <div className="section-header">
                        <h2>New Posts</h2>
                        <p>Here some new invented products of our shop</p>
                    </div>
                    <div className="blog-content">
                        <div className="row">
                        {blogImageData.length > 0 ? (
                                blogImageData.map((imageData, i) => (
                                    <div key={`blog-${i}`} className="col-md-4 col-sm-6">
                                        <div className="single-blog-item">
                                            <div className="single-blog-item-img">
                                                <img src={`data:image/png;base64,${imageData.data}`} alt={`Blog Image ${i}`} />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No blog images available</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>

    );

}

export default Templt;
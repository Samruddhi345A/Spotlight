import React from 'react'

export default function Apa() {
    return (
        <>
            <section className="top-area">
                <div className="header-area">
                    <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                    <i className="fa fa-bars"></i>
                                </button>
                                <a className="navbar-brand" href="index.html">list<span>race</span></a>

                            </div>
                            <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                                    <li className=" scroll active"><a href="#home">home</a></li>
                                    <li className="scroll"><a href="#works">how it works</a></li>
                                    <li className="scroll"><a href="#explore">explore</a></li>
                                    <li className="scroll"><a href="#reviews">review</a></li>
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
                        <h2>best place to find and explore <br /> that all you need </h2>
                        <p>
                            Find Best Place, Restaurant, Hotel, Real State and many more think in just One click
                        </p>
                    </div>
                    <div className="welcome-hero-serch-box">
                        <div className="welcome-hero-form">
                            <div className="single-welcome-hero-form">
                                <h3>what?</h3>
                                <form action="index.html">
                                    <input type="text" placeholder="Ex: palce, resturent, food, automobile" />
                                </form>
                                <div className="welcome-hero-form-icon">
                                    <i className="flaticon-list-with-dots"></i>
                                </div>
                            </div>
                            <div className="single-welcome-hero-form">
                                <h3>location</h3>
                                <form action="index.html">
                                    <input type="text" placeholder="Ex: london, newyork, rome" />
                                </form>
                                <div className="welcome-hero-form-icon">
                                    <i className="flaticon-gps-fixed-indicator"></i>
                                </div>
                            </div>
                        </div>
                        <div className="welcome-hero-serch">
                            <button className="welcome-hero-btn" onClick="window.location.href='/#'">
                                search  <i data-feather="search"></i>
                            </button>
                        </div>
                    </div>
                </div>

            </section>
            <section id="list-topics" className="list-topics">
                <div className="container">
                    <div className="list-topics-content">
                        <ul>
                            <li>
                                <div className="single-list-topics-content">
                                    <div className="single-list-topics-icon">
                                        <i className="flaticon-restaurant"></i>
                                    </div>
                                    <h2><a href="/#">resturent</a></h2>
                                    <p>150 listings</p>
                                </div>
                            </li>
                            <li>
                                <div className="single-list-topics-content">
                                    <div className="single-list-topics-icon">
                                        <i className="flaticon-travel"></i>
                                    </div>
                                    <h2><a href="/#">destination</a></h2>
                                    <p>214 listings</p>
                                </div>
                            </li>
                            <li>
                                <div className="single-list-topics-content">
                                    <div className="single-list-topics-icon">
                                        <i className="flaticon-building"></i>
                                    </div>
                                    <h2><a href="/#">hotels</a></h2>
                                    <p>185 listings</p>
                                </div>
                            </li>
                            <li>
                                <div className="single-list-topics-content">
                                    <div className="single-list-topics-icon">
                                        <i className="flaticon-pills"></i>
                                    </div>
                                    <h2><a href="/#">healthcaree</a></h2>
                                    <p>200 listings</p>
                                </div>
                            </li>
                            <li>
                                <div className="single-list-topics-content">
                                    <div className="single-list-topics-icon">
                                        <i className="flaticon-transport"></i>
                                    </div>
                                    <h2><a href="/#">automotion</a></h2>
                                    <p>120 listings</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
            <section id="works" className="works">
                <div className="container">
                    <div className="section-header">
                        <h2>how it works</h2>
                        <p>Learn More about how our website works</p>
                    </div>
                    <div className="works-content">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="single-how-works">
                                    <div className="single-how-works-icon">
                                        <i className="flaticon-lightbulb-idea"></i>
                                    </div>
                                    <h2><a href="/#">choose <span> what to</span> do</a></h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.
                                    </p>
                                    <button className="welcome-hero-btn how-work-btn" onClick="window.location.href='/#'">
                                        read more
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="single-how-works">
                                    <div className="single-how-works-icon">
                                        <i className="flaticon-networking"></i>
                                    </div>
                                    <h2><a href="/#">find <span> what you want</span></a></h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.
                                    </p>
                                    <button className="welcome-hero-btn how-work-btn" onClick="window.location.href='/#'">
                                        read more
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="single-how-works">
                                    <div className="single-how-works-icon">
                                        <i className="flaticon-location-on-road"></i>
                                    </div>
                                    <h2><a href="/#">explore <span> amazing</span> place</a></h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.
                                    </p>
                                    <button className="welcome-hero-btn how-work-btn" onClick="window.location.href='/#'">
                                        read more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id="explore" className="explore">
                <div className="container">
                    <div className="section-header">
                        <h2>explore</h2>
                        <p>Explore New place, food, culture around the world and many more</p>
                    </div>
                    <div className="explore-content">
                        <div className="row">
                            <div className=" col-md-4 col-sm-6">
                                <div className="single-explore-item">
                                    <div className="single-explore-img">
                                        <img src={require("../assets/images/explore/e1.jpg")} alt="explore_image" />
                                        <div className="single-explore-img-info">
                                            <button onClick="window.location.href='/#'">best rated</button>
                                            <div className="single-explore-image-icon-box">
                                                <ul>
                                                    <li>
                                                        <div className="single-explore-image-icon">
                                                            <i className="fa fa-arrows-alt"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-explore-image-icon">
                                                            <i className="fa fa-bookmark-o"></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-explore-txt bg-theme-1">
                                        <h2><a href="/#">tommy helfinger bar</a></h2>
                                        <p className="explore-rating-price">
                                            <span className="explore-rating">5.0</span>
                                            <a href="/#"> 10 ratings</a>
                                            <span className="explore-price-box">
                                                form
                                                <span className="explore-price">5$-300$</span>
                                            </span>
                                            <a href="/#">resturent</a>
                                        </p>
                                        <div className="explore-person">
                                            <div className="row">
                                                <div className="col-sm-2">
                                                    <div className="explore-person-img">
                                                        <a href="/#">

                                                            <img src={require("../assets/images/explore/person.png")} alt="explore person" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-10">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="explore-open-close-part">
                                            <div className="row">
                                                <div className="col-sm-5">
                                                    <button className="close-btn" onClick="window.location.href='/#'">close now</button>
                                                </div>
                                                <div className="col-sm-7">
                                                    <div className="explore-map-icon">
                                                        <a href="/#"><i data-feather="map-pin"></i></a>
                                                        <a href="/#"><i data-feather="upload"></i></a>
                                                        <a href="/#"><i data-feather="heart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="single-explore-item">
                                    <div className="single-explore-img">
                                        <img src={require("./assets/images/explore/e2.jpg")} alt="explore_image" />
                                        <div className="single-explore-img-info">
                                            <button onClick="window.location.href='/#'">featured</button>
                                            <div className="single-explore-image-icon-box">
                                                <ul>
                                                    <li>
                                                        <div className="single-explore-image-icon">
                                                            <i className="fa fa-arrows-alt"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-explore-image-icon">
                                                            <i className="fa fa-bookmark-o"></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-explore-txt bg-theme-2">
                                        <h2><a href="/#">swim and dine resort</a></h2>
                                        <p className="explore-rating-price">
                                            <span className="explore-rating">4.5</span>
                                            <a href="/#"> 8 ratings</a>
                                            <span className="explore-price-box">
                                                form
                                                <span className="explore-price">50$-500$</span>
                                            </span>
                                            <a href="/#">hotel</a>
                                        </p>
                                        <div className="explore-person">
                                            <div className="row">
                                                <div className="col-sm-2">
                                                    <div className="explore-person-img">
                                                        <a href="/#">
                                                            <img src={require("./assets/images/explore/person.png")} alt="explore person" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-10">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="explore-open-close-part">
                                            <div className="row">
                                                <div className="col-sm-5">
                                                    <button className="close-btn open-btn" onClick="window.location.href='/#'">open now</button>
                                                </div>
                                                <div className="col-sm-7">
                                                    <div className="explore-map-icon">
                                                        <a href="/#"><i data-feather="map-pin"></i></a>
                                                        <a href="/#"><i data-feather="upload"></i></a>
                                                        <a href="/#"><i data-feather="heart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="single-explore-item">
                                    <div className="single-explore-img">
                                        <img src={require("./assets/images/explore/e3.jpg")} alt="explore_image" />
                                        <div className="single-explore-img-info">
                                            <button onClick="window.location.href='/#'">best rated</button>
                                            <div className="single-explore-image-icon-box">
                                                <ul>
                                                    <li>
                                                        <div className="single-explore-image-icon">
                                                            <i className="fa fa-arrows-alt"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-explore-image-icon">
                                                            <i className="fa fa-bookmark-o"></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-explore-txt bg-theme-3">
                                        <h2><a href="/#">europe tour</a></h2>
                                        <p className="explore-rating-price">
                                            <span className="explore-rating">5.0</span>
                                            <a href="/#"> 15 ratings</a>
                                            <span className="explore-price-box">
                                                form
                                                <span className="explore-price">5k$-10k$</span>
                                            </span>
                                            <a href="/#">destination</a>
                                        </p>
                                        <div className="explore-person">
                                            <div className="row">
                                                <div className="col-sm-2">
                                                    <div className="explore-person-img">
                                                        <a href="/#">
                                                            <img src={require("./assets/images/explore/person.png")} alt="explore person" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-10">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="explore-open-close-part">
                                            <div className="row">
                                                <div className="col-sm-5">
                                                    <button className="close-btn" onClick="window.location.href='/#'">close now</button>
                                                </div>
                                                <div className="col-sm-7">
                                                    <div className="explore-map-icon">
                                                        <a href="/#"><i data-feather="map-pin"></i></a>
                                                        <a href="/#"><i data-feather="upload"></i></a>
                                                        <a href="/#"><i data-feather="heart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-md-4 col-sm-6">
                                <div className="single-explore-item">
                                    <div className="single-explore-img">
                                        <img src={require("./assets/images/explore/e4.jpg")} alt="explore_image" />
                                        <div className="single-explore-img-info">
                                            <button onClick="window.location.href='/#'">most view</button>
                                            <div className="single-explore-image-icon-box">
                                                <ul>
                                                    <li>
                                                        <div className="single-explore-image-icon">
                                                            <i className="fa fa-arrows-alt"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-explore-image-icon">
                                                            <i className="fa fa-bookmark-o"></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-explore-txt bg-theme-4">
                                        <h2><a href="/#">banglow with swiming pool</a></h2>
                                        <p className="explore-rating-price">
                                            <span className="explore-rating">5.0</span>
                                            <a href="/#"> 10 ratings</a>
                                            <span className="explore-price-box">
                                                form
                                                <span className="explore-price">10k$-15k$</span>
                                            </span>
                                            <a href="/#">real estate</a>
                                        </p>
                                        <div className="explore-person">
                                            <div className="row">
                                                <div className="col-sm-2">
                                                    <div className="explore-person-img">
                                                        <a href="/#">
                                                            <img src={require("./assets/images/explore/person.png")} alt="explore person" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-10">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="explore-open-close-part">
                                            <div className="row">
                                                <div className="col-sm-5">
                                                    <button className="close-btn" onClick="window.location.href='/#'">close now</button>
                                                </div>
                                                <div className="col-sm-7">
                                                    <div className="explore-map-icon">
                                                        <a href="/#"><i data-feather="map-pin"></i></a>
                                                        <a href="/#"><i data-feather="upload"></i></a>
                                                        <a href="/#"><i data-feather="heart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="single-explore-item">
                                    <div className="single-explore-img">
                                        <img src={require("./assets/images/explore/e5.jpg")} alt="explore_image" />
                                        <div className="single-explore-img-info">
                                            <button onClick="window.location.href='/#'">featured</button>
                                            <div className="single-explore-image-icon-box">
                                                <ul>
                                                    <li>
                                                        <div className="single-explore-image-icon">
                                                            <i className="fa fa-arrows-alt"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-explore-image-icon">
                                                            <i className="fa fa-bookmark-o"></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-explore-txt bg-theme-2">
                                        <h2><a href="/#">vintage car expo</a></h2>
                                        <p className="explore-rating-price">
                                            <span className="explore-rating">4.2</span>
                                            <a href="/#"> 8 ratings</a>
                                            <span className="explore-price-box">
                                                form
                                                <span className="explore-price">500$-1200$</span>
                                            </span>
                                            <a href="/#">automotion</a>
                                        </p>
                                        <div className="explore-person">
                                            <div className="row">
                                                <div className="col-sm-2">
                                                    <div className="explore-person-img">
                                                        <a href="/#">
                                                            <img src={require("./assets/images/explore/person.png")} alt="explore person" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-10">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="explore-open-close-part">
                                            <div className="row">
                                                <div className="col-sm-5">
                                                    <button className="close-btn open-btn" onClick="window.location.href='/#'">open now</button>
                                                </div>
                                                <div className="col-sm-7">
                                                    <div className="explore-map-icon">
                                                        <a href="/#"><i data-feather="map-pin"></i></a>
                                                        <a href="/#"><i data-feather="upload"></i></a>
                                                        <a href="/#"><i data-feather="heart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="single-explore-item">
                                    <div className="single-explore-img">
                                        <img src={require("./assets/images/explore/e6.jpg")} alt="explore_image" />
                                        <div className="single-explore-img-info">
                                            <button onClick="window.location.href='/#'">best rated</button>
                                            <div className="single-explore-image-icon-box">
                                                <ul>
                                                    <li>
                                                        <div className="single-explore-image-icon">
                                                            <i className="fa fa-arrows-alt"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-explore-image-icon">
                                                            <i className="fa fa-bookmark-o"></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-explore-txt bg-theme-5">
                                        <h2><a href="/#">thailand tour</a></h2>
                                        <p className="explore-rating-price">
                                            <span className="explore-rating">5.0</span>
                                            <a href="/#"> 15 ratings</a>
                                            <span className="explore-price-box">
                                                form
                                                <span className="explore-price">5k$-10k$</span>
                                            </span>
                                            <a href="/#">destination</a>
                                        </p>
                                        <div className="explore-person">
                                            <div className="row">
                                                <div className="col-sm-2">
                                                    <div className="explore-person-img">
                                                        <a href="/#">
                                                            <img src={require("./assets/images/explore/person.png")} alt="explore person" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-sm-10">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="explore-open-close-part">
                                            <div className="row">
                                                <div className="col-sm-5">
                                                    <button className="close-btn" onClick="window.location.href='/#'">close now</button>
                                                </div>
                                                <div className="col-sm-7">
                                                    <div className="explore-map-icon">
                                                        <a href="/#"><i data-feather="map-pin"></i></a>
                                                        <a href="/#"><i data-feather="upload"></i></a>
                                                        <a href="/#"><i data-feather="heart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id="reviews" className="reviews">
                <div className="section-header">
                    <h2>clients reviews</h2>
                    <p>What our client say about us</p>
                </div>carousel
                <div className="reviews-content">
                    <div className="testimonial-">
                        <div className="single-testimonial-box">
                            <div className="testimonial-description">
                                <div className="testimonial-info">
                                    <div className="testimonial-img">
                                        <img src={require("../../src/assets/images/clients/c1.png")} alt="clients" />
                                    </div>
                                    <div className="testimonial-person">
                                        <h2>Tom Leakar</h2>
                                        <h4>london, UK</h4>
                                        <div className="testimonial-person-star">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div></div>
                                <div className="testimonial-comment">
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="single-testimonial-box">
                            <div className="testimonial-description">
                                <div className="testimonial-info">
                                    <div className="testimonial-img">
                                        <img src={require("./assets/images/clients/c2.png")} alt="clients" />
                                    </div>
                                    <div className="testimonial-person">
                                        <h2>monirul islam</h2>
                                        <h4>london, UK</h4>
                                        <div className="testimonial-person-star">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div></div>
                                <div className="testimonial-comment">
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="single-testimonial-box">
                            <div className="testimonial-description">
                                <div className="testimonial-info">
                                    <div className="testimonial-img">
                                        <img src={require("./assets/images/clients/c3.png")} alt="clients" />
                                    </div>
                                    <div className="testimonial-person">
                                        <h2>Shohrab Hossain</h2>
                                        <h4>london, UK</h4>
                                        <div className="testimonial-person-star">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div></div>
                                <div className="testimonial-comment">
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="single-testimonial-box">
                            <div className="testimonial-description">
                                <div className="testimonial-info">
                                    <div className="testimonial-img">
                                        <img src={require("./assets/images/clients/c4.png")} alt="clients" />
                                    </div>
                                    <div className="testimonial-person">
                                        <h2>Tom Leakar</h2>
                                        <h4>london, UK</h4>
                                        <div className="testimonial-person-star">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div></div>
                                <div className="testimonial-comment">
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="single-testimonial-box">
                            <div className="testimonial-description">
                                <div className="testimonial-info">
                                    <div className="testimonial-img">
                                        <img src={require("./assets/images/clients/c1.png")} alt="clients" />
                                    </div>
                                    <div className="testimonial-person">
                                        <h2>Tom Leakar</h2>
                                        <h4>london, UK</h4>
                                        <div className="testimonial-person-star">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div></div>
                                <div className="testimonial-comment">
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="single-testimonial-box">
                            <div className="testimonial-description">
                                <div className="testimonial-info">
                                    <div className="testimonial-img">
                                        <img src={require("./assets/images/clients/c2.png")} alt="clients" />
                                    </div>
                                    <div className="testimonial-person">
                                        <h2>monirul islam</h2>
                                        <h4>london, UK</h4>
                                        <div className="testimonial-person-star">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div></div>
                                <div className="testimonial-comment">
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="single-testimonial-box">
                            <div className="testimonial-description">
                                <div className="testimonial-info">
                                    <div className="testimonial-img">
                                        <img src={require("./assets/images/clients/c3.png")} alt="clients" />
                                    </div>
                                    <div className="testimonial-person">
                                        <h2>Shohrab Hossain</h2>
                                        <h4>london, UK</h4>
                                        <div className="testimonial-person-star">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div></div>
                                <div className="testimonial-comment">
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="single-testimonial-box">
                            <div className="testimonial-description">
                                <div className="testimonial-info">
                                    <div className="testimonial-img">
                                        <img src={require("./assets/images/clients/c4.png")} alt="clients" />
                                    </div>
                                    <div className="testimonial-person">
                                        <h2>Tom Leakar</h2>
                                        <h4>london, UK</h4>
                                        <div className="testimonial-person-star">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-comment">
                                    <p>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id="statistics" className="statistics">
                <div className="container">
                    <div className="statistics-counter">
                        <div className="col-md-3 col-sm-6">
                            <div className="single-ststistics-box">
                                <div className="statistics-content">
                                    <div className="counter">90 </div> <span>K+</span>
                                </div>
                                <h3>listings</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="single-ststistics-box">
                                <div className="statistics-content">
                                    <div className="counter">40</div> <span>k+</span>
                                </div>
                                <h3>listing categories</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="single-ststistics-box">
                                <div className="statistics-content">
                                    <div className="counter">65</div> <span>k+</span>
                                </div>
                                <h3>visitors</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="single-ststistics-box">
                                <div className="statistics-content">
                                    <div className="counter">50</div> <span>k+</span>
                                </div>
                                <h3>happy clients</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id="blog" className="blog" >
                <div className="container">
                    <div className="section-header">
                        <h2>news and articles</h2>
                        <p>Always upto date with our latest News and Articles </p>
                    </div>
                    <div className="blog-content">
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="single-blog-item">
                                    <div className="single-blog-item-img">
                                        <img src={require("../assets/images/blog/b1.jpg")} alt="blog_image" />
                                    </div>
                                    <div className="single-blog-item-txt">
                                        <h2><a href="/#">How to find your Desired Place more quickly</a></h2>
                                        <h4>posted <span>by</span> <a href="/#">admin</a> march 2018</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="single-blog-item">
                                    <div className="single-blog-item-img">
                                        <img src={require("../assets/images/blog/b2.jpg")} alt="blog_image" />
                                    </div>
                                    <div className="single-blog-item-txt">
                                        <h2><a href="/#">How to find your Desired Place more quickly</a></h2>
                                        <h4>posted <span>by</span> <a href="/#">admin</a> march 2018</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="single-blog-item">
                                    <div className="single-blog-item-img">
                                        <img src={require("../assets/images/blog/b3.jpg")} alt="blog_image" />
                                    </div>
                                    <div className="single-blog-item-txt">
                                        <h2><a href="/#">How to find your Desired Place more quickly</a></h2>
                                        <h4>posted <span>by</span> <a href="/#">admin</a> march 2018</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id="contact" className="subscription">
                <div className="container">
                    <div className="subscribe-title text-center">
                        <h2>
                            do you want to add your business listing with us?
                        </h2>
                        <p>
                            Listrace offer you to list your business with us and we very much able to promote your Business.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="subscription-input-group">
                                <form action="#">
                                    <input type="email" className="subscription-input-form" placeholder="Enter your email here" />
                                    <button className="appsLand-btn subscribe-btn" onClick="window.location.href='/#'">
                                        creat account
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="footer-menu">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="navbar-header">
                                    <a className="navbar-brand" href="index.html">list<span>race</span></a>
                                </div>
                            </div>
                            <div className="col-sm-9">
                                <ul className="footer-menu-item">
                                    <li className="scroll"><a href="#works">how it works</a></li>
                                    <li className="scroll"><a href="#explore">explore</a></li>
                                    <li className="scroll"><a href="#reviews">review</a></li>
                                    <li className="scroll"><a href="#blog">blog</a></li>
                                    <li className="scroll"><a href="#contact">contact</a></li>
                                    <li className=" scroll"><a href="#contact">my account</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="hm-footer-copyright">
                        <div className="row">
                            <div className="col-sm-5">
                                <p>
                                    &copy;copyright. designed and developed by <a href="https://www.themesine.com/">themesine</a>
                                </p>
                            </div>
                            <div className="col-sm-7">
                                <div className="footer-social">
                                    <span><i className="fa fa-phone"> +1  (222) 777 8888</i></span>
                                    <a href="/#"><i className="fa fa-facebook"></i></a>
                                    <a href="/#"><i className="fa fa-twitter"></i></a>
                                    <a href="/#"><i className="fa fa-linkedin"></i></a>
                                    <a href="/#"><i className="fa fa-google-plus"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="scroll-Top">
                    <div className="return-to-top">
                        <i className="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
                    </div>

                </div>

            </footer>
            <script src="./assets/js/jquery.js"></script>


            <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>


            <script src="./assets/js/bootstrap.min.js"></script>


            <script src="./assets/js/bootsnav.js"></script>


            <script src="./assets/js/feather.min.js"></script>


            <script src="./assets/js/jquery.counterup.min.js"></script>
            <script src="./assets/js/waypoints.min.js"></script>


            <script src="./assets/js/slick.min.js"></script>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>


            <script src="./assets/js/custom.js"></script>

        </>
    )
}

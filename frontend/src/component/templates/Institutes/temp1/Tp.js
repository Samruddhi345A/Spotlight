import React from 'react'
import "./assets/css/style.css";
import "./assets/css/style2.css"
export default function Tp()
{
    return(
        <>
          <header
          className="site-navbar py-4.html-sticky-header site-navbar-target"
          role="banner"
        >
          <div className="container">
            <div className="d-flex align-items-center">
              <div className="site-logo">
                <a href="index.html" className="d-block">
                  <img
                    src={require("./assets/images/logo.jpg")}
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="mr-auto">
                <nav
                  className="site-navigation position-relative text-right"
                  role="navigation"
                >
                  <div className="site-menu main-menu.html-clone-nav mr-auto d-none d-lg-block">
                  <li class="nav-item">
                  <a class="nav-link me-4 active" href="#home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link me-4" href="#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link me-4" href="#admission">Admission</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link me-4" href="#course">Courses</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link me-4" href="#contact">Contact</a>
                </li>
                  </div>
                </nav>
              </div>
              <div className="ml-auto">
                <div className="social-wrap">
                  <a href="#">
                    <span className="icon-facebook"></span>
                  </a>
                  <a href="#">
                    <span className="icon-twitter"></span>
                  </a>
                  <a href="#">
                    <span className="icon-linkedin"></span>
                  </a>

                  <a
                    href="#"
                    className="d-inline-block d-lg-none site-menu-toggle.html-menu-toggle text-black"
                  >
                    <span className="icon-menu h3"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <section id="home" class="position-relative overflow-hidden bg-light-blue">
        <div className="site-section">
          <div className="container">
            <div className="row mb-5 justify-content-center text-center">
              <div className="col-lg-4 mb-5">
                <h2 className="section-title-underline mb-5">
                  <span>Why Academics Works</span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="feature-1 border">
                  <div className="icon-wrapper bg-primary">
                    <span className="flaticon-mortarboard text-white"></span>
                  </div>
                  <div className="feature-1-content">
                    <h2>Personalize Learning</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      morbi hendrerit elit
                    </p>
                    <p>
                      <a href="about" className="btn btn-primary px-4 rounded-0">
                        Learn More
                      </a>
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
                    <h2>Trusted Courses</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      morbi hendrerit elit
                    </p>
                    <p>
                      <a href="about" className="btn btn-primary px-4 rounded-0">
                        Learn More
                      </a>
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
                    <h2>Tools for Students</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      morbi hendrerit elit
                    </p>
                    <p>
                      <a href="about" className="btn btn-primary px-4 rounded-0">
                        Learn More
                      </a>
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
                    <img
                      src={require("./assets/images/blog_large_1.jpg")}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="post-content">
                      <h3 className="post-heading">
                        <a href="">
                          Photo Title
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="post-entry-big">
                    <img
                      src={require("./assets/images/blog_large_1.jpg")}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="post-content">
                      <h3 className="post-heading">
                        <a href="">
                          Photo Title
                        </a>
                      </h3>
                      
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="post-entry-big">
                    <a>
                    <img
                      src={require("./assets/images/blog_large_1.jpg")}
                      alt=""
                      className="img-fluid"
                    />
                    </a>
                    <div className="post-content">
                      <h3 className="post-heading">
                        <a href="">
                          Photo Title
                        </a>
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
                    <img
                      src={require("./assets/images/blog_large_1.jpg")}
                      alt=""
                      className="img-fluid"
                    />
                   <div className="post-content">
                      <h3 className="post-heading">
                        <a href="">
                          Photo Title
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="post-entry-big">
                    <img
                      src={require("./assets/images/blog_large_1.jpg")}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="post-content">
                      <h3 className="post-heading">
                        <a href="">
                          Photo Title
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="post-entry-big">
                    <img
                      src={require("./assets/images/blog_large_1.jpg")}
                      alt=""
                      className="img-fluid"
                    />
                    <div className="post-content">
                    <div className="post-content">
                      <h3 className="post-heading">
                        <a href="">
                          Photo Title
                        </a>
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
              <span>Academics History</span>
            </h2>
          </div>
          <div class="col-lg-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, iure
              dolorum! Nam veniam tempore tenetur aliquam architecto, hic alias
              quia quisquam, obcaecati laborum dolores. Ex libero cumque
              veritatis numquam placeat?
            </p>
          </div>
          <div class="col-lg-4">
            <p>
              Nam veniam tempore tenetur aliquam architecto, hic alias quia
              quisquam, obcaecati laborum dolores. Ex libero cumque veritatis
              numquam placeat?
            </p>
          </div>
        </div>
      </div>
      <div class="site-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-lg-6 mb-lg-0 mb-4">
              <img
                src={require("./assets/images/course_4.jpg")}
                alt="Image"
                class="img-fluid"
              />
            </div>
            <div class="col-lg-5 ml-auto align-self-center">
              <h2 class="section-title-underline mb-5">
                <span>Why Academics Works</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                itaque dolore libero corrupti! Itaque, delectus?
              </p>
              <p>
                Modi sit dolor repellat esse! Sed necessitatibus itaque libero
                odit placeat nesciunt, voluptatum totam facere.
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
              <img
                src={require("./assets/images/course_5.jpg")}
                alt="Image"
                class="img-fluid"
              />
            </div>
            <div class="col-lg-5 mr-auto align-self-center order-2 order-lg-1">
              <h2 class="section-title-underline mb-5">
                <span>Personalized Learning</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                itaque dolore libero corrupti! Itaque, delectus?
              </p>
              <p>
                Modi sit dolor repellat esse! Sed necessitatibus itaque libero
                odit placeat nesciunt, voluptatum totam facere.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="site-section">
        <div class="container">
          <div class="row mb-5 justify-content-center text-center">
            <div class="col-lg-4 mb-5">
              <h2 class="section-title-underline mb-5">
                <span>Our Teachers</span>
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-5 mb-lg-5">
              <div class="feature-1 border person text-center">
                <img
                  src={require("./assets/images/person_1.jpg")}
                  alt="Image"
                  class="img-fluid"
                />
                <div class="feature-1-content">
                  <h2>Craig Daniel</h2>
                  <span class="position mb-3 d-block">Math Teacher</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    morbi hendrerit elit
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-5 mb-lg-5">
              <div class="feature-1 border person text-center">
                <img
                  src={require("./assets/images/person_2.jpg")}
                  alt="Image"
                  class="img-fluid"
                />
                <div class="feature-1-content">
                  <h2>Taylor Simpson</h2>
                  <span class="position mb-3 d-block">Math Teacher</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    morbi hendrerit elit
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-5 mb-lg-5">
              <div class="feature-1 border person text-center">
                <img
                  src={require("./assets/images/person_3.jpg")}
                  alt="Image"
                  class="img-fluid"
                />
                <div class="feature-1-content">
                  <h2>Jonas Tabble</h2>
                  <span class="position mb-3 d-block">Math Teacher</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    morbi hendrerit elit
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-5 mb-lg-5">
              <div class="feature-1 border person text-center">
                <img
                  src={require("./assets/images/person_4.jpg")}
                  alt="Image"
                  class="img-fluid"
                />
                <div class="feature-1-content">
                  <h2>Craig Daniel</h2>
                  <span class="position mb-3 d-block">Math Teacher</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    morbi hendrerit elit
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-5 mb-lg-5">
              <div class="feature-1 border person text-center">
                <img
                  src={require("./assets/images/person_2.jpg")}
                  alt="Image"
                  class="img-fluid"
                />
                <div class="feature-1-content">
                  <h2>Taylor Simpson</h2>
                  <span class="position mb-3 d-block">Math Teacher</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    morbi hendrerit elit
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-5 mb-lg-5">
              <div class="feature-1 border person text-center">
                <img
                  src={require("./assets/images/person_3.jpg")}
                  alt="Image"
                  class="img-fluid"
                />
                <div class="feature-1-content">
                  <h2>Jonas Tabble</h2>
                  <span class="position mb-3 d-block">Math Teacher</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    morbi hendrerit elit
                  </p>
                </div>
              </div>
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
                <img
                  src={require("./assets/images/course_6.jpg")}
                  alt="Image"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-5 ml-auto align-self-center">
                <h2 className="section-title-underline mb-5">
                  <span>College Requirements</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  itaque dolore libero corrupti! Itaque, delectus?
                </p>
                <p>
                  Modi sit dolor repellat esse! Sed necessitatibus itaque libero
                  odit placeat nesciunt, voluptatum totam facere.
                </p>
                <ol className="ul-check primary list-unstyled">
                  <li>Accomplished Application Form</li>
                  <li>High School Report Card </li>
                  <li>High School Transcript</li>
                  <li>Certificate of Good Moral Characte</li>
                  <li>2×2 picture</li>
                  <li>1×1 picture</li>
                </ol>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
                <img
                  src={require("./assets/images/course_3.jpg")}
                  alt="Image"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-5 mr-auto align-self-center order-2 order-lg-1">
                <h2 className="section-title-underline mb-5">
                  <span>Transferees</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  itaque dolore libero corrupti! Itaque, delectus?
                </p>
                <p>
                  Modi sit dolor repellat esse! Sed necessitatibus itaque libero
                  odit placeat nesciunt, voluptatum totam facere.
                </p>
                <ol className="ul-check primary list-unstyled">
                  <li>Accomplished Application Form</li>
                  <li>High School Report Card </li>
                  <li>High School Transcript</li>
                  <li>Certificate of Good Moral Characte</li>
                  <li>2×2 picture</li>
                  <li>1×1 picture</li>
                </ol>
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
                  <a href="">
                    <img
                      src={require("./assets/images/course_1.jpg")}
                      alt="Image"
                      class="img-fluid"
                    />
                  </a>
                  <div class="category">
                    <h3>Course Name</h3>
                  </div>
                </figure>
                <div class="course-1-content pb-4">
                  <div class="rating text-center mb-3">
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                  </div>
                  <p class="desc mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique accusantium ipsam.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="course-1-item">
                <figure class="thumnail">
                  <a href="">
                    <img
                      src={require("./assets/images/course_2.jpg")}
                      alt="Image"
                      class="img-fluid"
                    />
                  </a>
                  <div class="category">
                    <h3>Course Name</h3>
                  </div>
                </figure>
                <div class="course-1-content pb-4">
                  <div class="rating text-center mb-3">
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                  </div>
                  <p class="desc mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique accusantium ipsam.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="course-1-item">
                <figure class="thumnail">
                  <a href="">
                    <img
                      src={require("./assets/images/course_3.jpg")}
                      alt="Image"
                      class="img-fluid"
                    />
                  </a>
                  <div class="category">
                    <h3>Course Name</h3>
                  </div>
                </figure>
                <div class="course-1-content pb-4">
                  <div class="rating text-center mb-3">
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                  </div>
                  <p class="desc mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique accusantium ipsam.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="course-1-item">
                <figure class="thumnail">
                  <a href="">
                    <img
                      src={require("./assets/images/course_4.jpg")}
                      alt="Image"
                      class="img-fluid"
                    />
                  </a>
                  <div class="category">
                    <h3>Course Name</h3>
                  </div>
                </figure>
                <div class="course-1-content pb-4">
                  <div class="rating text-center mb-3">
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                  </div>
                  <p class="desc mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique accusantium ipsam.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="course-1-item">
                <figure class="thumnail">
                  <a href="">
                    <img
                      src={require("./assets/images/course_5.jpg")}
                      alt="Image"
                      class="img-fluid"
                    />
                  </a>
                  <div class="category">
                    <h3>Course Name</h3>
                  </div>
                </figure>
                <div class="course-1-content pb-4">
                  <div class="rating text-center mb-3">
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                  </div>
                  <p class="desc mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique accusantium ipsam.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="course-1-item">
                <figure class="thumnail">
                  <a href="">
                    <img
                      src={require("./assets/images/course_6.jpg")}
                      alt="Image"
                      class="img-fluid"
                    />
                  </a>
                  <div class="category">
                    <h3>Course Name</h3>
                  </div>
                </figure>
                <div class="course-1-content pb-4">
                  <div class="rating text-center mb-3">
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                    <span class="icon-star2 text-warning"></span>
                  </div>
                  <p class="desc mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Similique accusantium ipsam.
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

      <div class="site-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6 form-group">
              <label for="fname">First Name</label>
              <input
                type="text"
                id="fname"
                class="form-control form-control-lg"
              />
            </div>
            <div class="col-md-6 form-group">
              <label for="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                class="form-control form-control-lg"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 form-group">
              <label for="eaddress">Email Address</label>
              <input
                type="text"
                id="eaddress"
                class="form-control form-control-lg"
              />
            </div>
            <div class="col-md-6 form-group">
              <label for="tel">Tel. Number</label>
              <input
                type="text"
                id="tel"
                class="form-control form-control-lg"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 form-group">
              <label for="message">Message</label>
              <textarea
                name=""
                id="message"
                cols="30"
                rows="10"
                class="form-control"
              ></textarea>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <input
                type="submit"
                value="Send Message"
                class="btn btn-primary btn-lg px-5"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="site-section ftco-subscribe-1"
        style={{ backgroundImage: "url('assets/images/bg_1.jpg')" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h2>Subscribe to us!</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia,
              </p>
            </div>
            <div className="col-lg-5">
              <form action="" className="d-flex">
                <input
                  type="text"
                  className="rounded form-control mr-2 py-3"
                  placeholder="Enter your email"
                />
                <button
                  className="btn btn-primary rounded py-3 px-4"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <p className="mb-4">
                <img
                  src={require("./assets/images/logo.png")}
                  alt=""
                  className="img-fluid"
                />
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                nemo minima qui dolor, iusto iure.
              </p>
              <p>
                <a href="Learn More">Learn More</a>
              </p>
            </div>
            <div className="col-lg-3">
              <h3 className="footer-heading">
                <span>Our Campus</span>
              </h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Acedemic</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Our Interns</a>
                </li>
                <li>
                  <a href="#">Our Leadership</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Human Resources</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h3 className="footer-heading">
                <span>Our Courses</span>
              </h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Math</a>
                </li>
                <li>
                  <a href="#">
                    Science &amp; Engineering
                  </a>
                </li>
                <li>
                  <a href="#">Arts &amp; Humanities</a>
                </li>
                <li>
                  <a href="#">Economics &amp; Finance</a>
                </li>
                <li>
                  <a href="#">Business Administration</a>
                </li>
                <li>
                  <a href="#">Computer Science</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h3 className="footer-heading">
                <span>Contact</span>
              </h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Support Community</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Share Your Story</a>
                </li>
                <li>
                  <a href="Our Suppoters">Our Supporters</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}
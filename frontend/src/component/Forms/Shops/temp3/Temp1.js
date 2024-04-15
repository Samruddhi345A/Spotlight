import React from 'react'
export default function Temp1()
{
    return(
        <>
    <header id="header" class="site-header header-scrolled position-fixed text-black bg-light">
      <nav id="header-nav" class="navbar navbar-expand-lg px-3 mb-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            <img src={require("./assets/images/main-logo.png" )}class="logo"/>
          </a>
          <button class="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <svg class="navbar-icon">
              <a href="#navbar-icon"></a>
            </svg>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
            <div class="offcanvas-header px-4 pb-0">
              <a class="navbar-brand" href="index.html">
                <img src={require("./assets/images/main-logo.png")} class="logo"/>
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
                    <h1 class="display-2 text-uppercase text-dark pb-5">Your Shop Name </h1>
                    <a href="shop.html" class="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</a>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="image-holder">
                    <img src={require("./assets/images/banner-image.png")} alt="banner"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-icon swiper-arrow swiper-arrow-prev">
        <svg class="chevron-left">
          <a href="#chevron-left" />
        </svg>
      </div>
      <div class="swiper-icon swiper-arrow swiper-arrow-next">
        <svg class="chevron-right">
          <a href="#chevron-right" />
        </svg>
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
                <h3 class="card-title text-uppercase text-dark">Free delivery</h3>
                <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
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
                <h3 class="card-title text-uppercase text-dark">Quality guarantee</h3>
                <p>Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
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
                <h3 class="card-title text-uppercase text-dark">Daily offers</h3>
                <p>Amet consectetur adipi elit loreme ipsum dolor sit.</p>
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
                <h3 class="card-title text-uppercase text-dark">100% secure payment</h3>
                <p>Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
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
            <div class="btn-right">
              <a href="shop.html" class="btn btn-medium btn-normal text-uppercase">Go to Shop</a>
            </div>
          </div>
          <div className="row col-lg-12">
                <div className="col-lg-4">
                <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="product-card position-relative">
                  <div class="image-holder">
                  <img src={require("./assets/images/product-item1.jpg")} alt="product-item" class="img-fluid"/>                  </div>
                  <div class="cart-concern position-absolute">
                    <div class="cart-button d-flex">
                      <a href="#" class="btn btn-medium btn-black">Shop Now<svg class="cart-outline"><a href="#cart-outline"></a> </svg></a>
                    </div>
                  </div>
                  <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 class="card-title text-uppercase">
                      <a href="#">Iphone 10</a>
                    </h3>
                    <span class="item-price text-primary">$980</span>
                  </div>
                </div>
              </div>
                </div>
                </div>
                <div className="col-lg-4">
                <div class="swiper-slide">
                <div class="product-card position-relative">
                  <div class="image-holder">
                  <img src={require("./assets/images/product-item2.jpg")} alt="product-item" class="img-fluid"/>                  </div>
                  <div class="cart-concern position-absolute">
                    <div class="cart-button d-flex">
                      <a href="#" class="btn btn-medium btn-black">Shop Now<svg class="cart-outline"><a href="#cart-outline"></a> </svg></a>
                    </div>
                  </div>
                  <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 class="card-title text-uppercase">
                      <a href="#">Iphone 11</a>
                    </h3>
                    <span class="item-price text-primary">$1100</span>
                  </div>
                </div>
              </div>
                </div>
                <div className="col-lg-4">
                <div class="swiper-slide">
                <div class="product-card position-relative">
                  <div class="image-holder">
                  <img src={require("./assets/images/product-item3.jpg")} alt="product-item" class="img-fluid"/>
                    </div>
                  <div class="cart-concern position-absolute">
                    <div class="cart-button d-flex">
                      <a href="#" class="btn btn-medium btn-black">Shop Now<svg class="cart-outline"><a href="#cart-outline"></a> </svg></a>
                    </div>
                  </div>
                  <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 class="card-title text-uppercase">
                      <a href="#">Iphone 8</a>
                    </h3>
                    <span class="item-price text-primary">$780</span>
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
                  <img src={require("./assets/images/product-item4.jpg")} alt="product-item" class="img-fluid"/>                  </div>
                  <div class="cart-concern position-absolute">
                    <div class="cart-button d-flex">
                      <a href="#" class="btn btn-medium btn-black">Shop Now<svg class="cart-outline"><a href="#cart-outline"></a> </svg></a>
                    </div>
                  </div>
                  <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 class="card-title text-uppercase">
                      <a href="#">Iphone 13</a>
                    </h3>
                    <span class="item-price text-primary">$1500</span>
                  </div>
                </div>
              </div>
                </div>
                </div>
                <div className="col-lg-4">
                <div class="swiper-slide">
                <div class="product-card position-relative">
                  <div class="image-holder">
                  <img src={require("./assets/images/product-item5.jpg")} alt="product-item" class="img-fluid"/>                  </div>
                  <div class="cart-concern position-absolute">
                    <div class="cart-button d-flex">
                      <a href="#" class="btn btn-medium btn-black">Shop Now<svg class="cart-outline"><a href="#cart-outline"></a> </svg></a>
                    </div>
                  </div>
                  <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 class="card-title text-uppercase">
                      <a href="#">Iphone 12</a>
                    </h3>
                    <span class="item-price text-primary">$1300</span>
                  </div>
                </div>
              </div>
                </div>
                <div className="col-lg-4">
                <div class="swiper-slide">
                <div class="product-card position-relative">
                  <div class="image-holder">
                  <img src={require("./assets/images/product-item5.jpg")} alt="product-item" class="img-fluid"/>                  </div>
                  <div class="cart-concern position-absolute">
                    <div class="cart-button d-flex">
                      <a href="#" class="btn btn-medium btn-black">Shop Now<svg class="cart-outline"><a href="#cart-outline"></a> </svg></a>
                    </div>
                  </div>
                  <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 class="card-title text-uppercase">
                      <a href="#">Iphone 12</a>
                    </h3>
                    <span class="item-price text-primary">$1300</span>
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
            <div class="btn-right">
              <a href="shop.html" class="btn btn-medium btn-normal text-uppercase">Go to Shop</a>
            </div>
          </div>
          <div className="row col-lg-12">
                <div className="col-lg-4">
                <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="product-card position-relative">
                  <div class="image-holder">
                  <img src={require("./assets/images/product-item6.jpg")} alt="product-item" class="img-fluid"/>                  </div>
                  <div class="cart-concern position-absolute">
                    <div class="cart-button d-flex">
                      <a href="#" class="btn btn-medium btn-black">Shop Now<svg class="cart-outline"><a href="#cart-outline"></a> </svg></a>
                    </div>
                  </div>
                  <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 class="card-title text-uppercase">
                      <a href="#">PINK WATCH</a>
                    </h3>
                    <span class="item-price text-primary">$1500</span>
                  </div>
                </div>
              </div>
                </div>
                </div>
                <div className="col-lg-4">
                <div class="swiper-slide">
                <div class="product-card position-relative">
                  <div class="image-holder">
                  <img src={require("./assets/images/product-item7.jpg")} alt="product-item" class="img-fluid"/>                  </div>
                  <div class="cart-concern position-absolute">
                    <div class="cart-button d-flex">
                      <a href="#" class="btn btn-medium btn-black">Shop Now<svg class="cart-outline"><a href="#cart-outline"></a> </svg></a>
                    </div>
                  </div>
                  <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 class="card-title text-uppercase">
                      <a href="#">Heavy watch</a>
                    </h3>
                    <span class="item-price text-primary">$1300</span>
                  </div>
                </div>
              </div>
                </div>
                <div className="col-lg-4">
                <div class="swiper-slide">
                <div class="product-card position-relative">
                  <div class="image-holder">
                  <img src={require("./assets/images/product-item8.jpg")} alt="product-item" class="img-fluid"/>                  </div>
                  <div class="cart-concern position-absolute">
                    <div class="cart-button d-flex">
                      <a href="#" class="btn btn-medium btn-black">Shop Now<svg class="cart-outline"><a href="#cart-outline"></a> </svg></a>
                    </div>
                  </div>
                  <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 class="card-title text-uppercase">
                      <a href="#">spotted watch</a>
                    </h3>
                    <span class="item-price text-primary">$1300</span>
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
                  <img src={require("./assets/images/product-item9.jpg")} alt="product-item" class="img-fluid"/>                  </div>
                  <div class="cart-concern position-absolute">
                    <div class="cart-button d-flex">
                      <a href="#" class="btn btn-medium btn-black">Shop Now<svg class="cart-outline"><a href="#cart-outline"></a> </svg></a>
                    </div>
                  </div>
                  <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 class="card-title text-uppercase">
                      <a href="#">black watch</a>
                    </h3>
                    <span class="item-price text-primary">$1500</span>
                  </div>
                </div>
                </div>
                </div>
                <div className="col-lg-4">
                <div class="swiper-slide">
                <div class="product-card position-relative">
                  <div class="image-holder">
                  <img src={require("./assets/images/product-item10.jpg")} alt="product-item" class="img-fluid"/>                  </div>
                  <div class="cart-concern position-absolute">
                    <div class="cart-button d-flex">
                      <a href="#" class="btn btn-medium btn-black">Shop Now<svg class="cart-outline"><a href="#cart-outline"></a> </svg></a>
                    </div>
                  </div>
                  <div class="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 class="card-title text-uppercase">
                      <a href="#">Simple Watch</a>
                    </h3>
                    <span class="item-price text-primary">$1300</span>
                  </div>
                </div>
              </div>
                </div>
                <div className="col-lg-4">
                <div class="swiper-slide">
                <div class="product-card position-relative">
                  <div class="image-holder">
                  <img src={require("./assets/images/product-item10.jpg")} alt="product-item" class="img-fluid"/>                  </div>
                  <div class="cart-concern position-absolute">
                    <div class="cart-button d-flex">
                      <a href="#" class="btn btn-medium btn-black">Shop Now<svg class="cart-outline"><a href="#cart-outline"></a> </svg></a>
                    </div>
                  </div>
                  <div class="card-detail d-flex justify-content-between pt-3">
                    <h3 class="card-title text-uppercase">
                      <a href="#">Simple Watch</a>
                    </h3>
                    <span class="item-price text-primary">$1300</span>
                  </div>
                </div>
              </div>
            </div>
              </div>
        </div>
      </div>
    </section>
    <section id="yearly-sale" class="bg-light-blue overflow-hidden mt-5 padding-xlarge" style={{backgroundImage:"url('images/single-image1.png');background-position: right; background-repeat: no-repeat;"}}>
      <div class="row d-flex flex-wrap align-items-center">
        <div class="col-md-6 col-sm-12">
          <div class="text-content offset-4 padding-medium">
            <h3>10% off</h3>
            <h2 class="display-2 pb-5 text-uppercase text-dark">New year sale</h2>
            <a href="shop.html" class="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Sale</a>
          </div>
        </div>
        <div class="col-md-6 col-sm-12">
        <img src={require("./assets/images/single-image1.png")} alt="product-item" class="img-fluid"/>
        </div>
      </div>
    </section>
    <section id="latest-blog" class="padding-large">
      <div class="container">
        <div class="row">
          <div class="display-header d-flex justify-content-between pb-3">
            <h2 class="display-7 text-dark text-uppercase">Latest Posts</h2>
            <div class="btn-right">
              <a href="blog.html" class="btn btn-medium btn-normal text-uppercase">Read Blog</a>
            </div>
          </div>
          <div class="post-grid d-flex flex-wrap justify-content-between">
            <div class="col-lg-4 col-sm-12">
              <div class="card border-none me-3">
                <div class="card-image">
                  <img src={require("./assets/images/post-item1.jpg")} alt="" class="img-fluid"/>
                </div>
              </div>
              <div class="card-body text-uppercase">
                <div class="card-meta text-muted">
                  <span class="meta-date">feb 22, 2023</span>
                  <span class="meta-category">- Gadgets</span>
                </div>
                <h3 class="card-title">
                  <a href="#">Get some cool gadgets in 2023</a>
                </h3>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12">
              <div class="card border-none me-3">
                <div class="card-image">
                  <img src={require("./assets/images/post-item2.jpg")} alt="" class="img-fluid"/>
                </div>
              </div>
              <div class="card-body text-uppercase">
                <div class="card-meta text-muted">
                  <span class="meta-date">feb 25, 2023</span>
                  <span class="meta-category">- Technology</span>
                </div>
                <h3 class="card-title">
                  <a href="#">Technology Hack You Won't Get</a>
                </h3>
              </div>
            </div>
            <div class="col-lg-4 col-sm-12">
              <div class="card border-none me-3">
                <div class="card-image">
                  <img src={require("./assets/images/post-item3.jpg")} alt="" class="img-fluid"/>
                </div>
              </div>
              <div class="card-body text-uppercase">
                <div class="card-meta text-muted">
                  <span class="meta-date">feb 22, 2023</span>
                  <span class="meta-category">- Camera</span>
                </div>
                <h3 class="card-title">
                  <a href="#">Top 10 Small Camera In The World</a>
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
                  <img src={require("./assets/images/main-logo.png")} alt="logo"/>
                  <p>Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.</p>
                  </div>
                  </div>
              <div class="col-lg-5 pb-3">
                <div class="footer-menu contact-item">
                  <h5 class="widget-title text-uppercase pb-2">Contact Us</h5>
                  <p>Do you have any queries or suggestions? <a href="mailto:">yourinfo@gmail.com</a>
                  </p>
                  <p>If you need support? Just give us a call. <a href="">+55 111 222 333 44</a>
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
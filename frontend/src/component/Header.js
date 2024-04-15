import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-awesome-reveal";

import "../css/home_layout.css"
class Header extends Component {
  render() {
    
    return (
      <header className="header1" id="home">
        <ParticlesBg type="circle" bg={true} />
        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">SpotLight</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>An Advertising Website</h3>
            </Fade>
            <hr />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

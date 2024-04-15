import React, { Component } from 'react'
import '../css/about.css'
export class About extends Component {
    render() {
        return (
            <div className="about-contain">
            <h2 className="about-heading">About Us</h2>
            <div className="about">
              <p>Introducing a new app that empowers small businesses to compete in the market.</p>
              <p>Small businesses and organization play a crucial role in our economy and communities. However, they often face challenges in marketing and advertising. To address this issue, our app allows small businesses to create comprehensive profiles with all the necessary information customers need.</p>
              <p>Browse businesses, contact owners, and discover local gems. Free for businesses and customers alike.</p>
              <p>Connect with potential customers, showcase your business, and grow your brand - with free Templates!</p>
            </div>
          </div>
          
        )
    }
}

export default About

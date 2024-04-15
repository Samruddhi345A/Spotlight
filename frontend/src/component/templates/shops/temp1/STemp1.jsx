import React from "react";
import { Navigation } from "./navigation";
import { Header } from "./header";
import { Features } from "./features";
import { About } from "./about";
import { Services } from "./services";
import { Gallery } from "./gallery";
import { Testimonials } from "./testimonials";
import { Team } from "./Team";
import { Contact } from "./contact";

import "./css/style.css";
import "./STemp_1.css";

const STemp1 = ({ contentData, images }) => {
  
  return (
    <>
      <Navigation  contentData={contentData} />
      <Header images={images} contentData={contentData}  />
      <Features  contentData={contentData} />
      <About  contentData={contentData} images={images} />
      <Services  contentData={contentData}  />
      <Gallery  contentData={contentData} images={images} />
      <Testimonials />
      {/* <Team data={JsonData.Team} />*/}
      <Contact contentData={contentData} />
    </>
  );
};

export default STemp1;
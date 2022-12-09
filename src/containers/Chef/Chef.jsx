import React from "react";
import "./chef.css";
import { images } from "../../constants";
import { Subheading } from "../../components";

const Chef = () => {
  return (
    <div className="g__chef section__padding g__bg g__wrapper">
      <div className="g__wrapper_img g__wrapper_img-reverse">
        <img src={images.chef} alt="Chef" />
      </div>
      <div className="g__wrapper_info">
        <Subheading title="Chef's Word" />
        <h2 className="headtext__cormorant">What we believe in</h2>
        <div className="g__chef-content">
          <div className="g__chef-content_quote">
            <img src={images.quote} alt="Quote" />
            <p className="p__opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
              sit.
            </p>
          </div>
          <p className="p__opensans">
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
        </div>
        <div className="g__chef-sign">
          <p className="p__cormorant">Kevin Luo</p>
          <p className="p__opensans">Chef & Founder</p>
          <img src={images.sign} alt="Sign" />
        </div>
      </div>
    </div>
  );
};

export default Chef;

import React from "react";
import "./about.css";
import { images } from "../../constants";

const About = () => {
  return (
    <div className="g__about g__bg flex__center section__padding" id="about">
      <div className="g__about-overlay flex__center">
        <img src={images.G} alt="G" />
      </div>
      <div className="g__about-content flex__center">
        <div className="g__about-content_left">
          <h2 className="headtext__cormorant">About us</h2>
          <img src={images.spoon} alt="About" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
        <div className="g__about-content_center">
          <img src={images.knife} alt="Knife" />
        </div>
        <div className="g__about-content_right">
          <h2 className="headtext__cormorant">Our History</h2>
          <img src={images.spoon} alt="About" className="spoon__img" />
          <p className="p__opensans">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

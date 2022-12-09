import React from "react";
import "./findus.css";
import { images } from "../../constants";
import { Subheading } from "../../components";

const Findus = () => {
  return (
    <div
      className="g__wrapper g__findus g__bg flex__center section__padding"
      id="contact"
    >
      <div className="g__wrapper_info">
        <Subheading title="Contact" />
        <h2 className="headtext__cormorant">Find us</h2>
        <p className="p__opensans" style={{ color: "#aaa" }}>
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <p className="p__cormorant" style={{ color: "#dcca87" }}>
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        <button className="custom__button">Visit us</button>
      </div>
      <div className="g__wrapper_img">
        <img src={images.findus} alt="Find us" />
      </div>
    </div>
  );
};

export default Findus;

import React from "react";
import "./subheading.css";
import { images } from "../../constants";

const Subheading = ({ title }) => {
  return (
    <div className="g__subheading p__cormorant">
      <p>{title}</p>
      <img src={images.spoon} alt={title} />
    </div>
  );
};

export default Subheading;

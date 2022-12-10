import React from "react";
import "./newsletter.css";
import Subheading from "../Subheading/Subheading";

const Newsletter = () => {
  return (
    <div className="g__newsletter">
      <div className="g__newsletter-heading">
        <Subheading title="Newsletter" />
        <h2 className="headtext__cormorant">Subscribe to Our Newsletter</h2>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="g__newsletter-input flex__center">
        <input type="email" placeholder="Enter your email address" />
        <button type="button" className="custom__button">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;

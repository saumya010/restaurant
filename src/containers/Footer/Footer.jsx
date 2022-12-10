import React from "react";
import "./footer.css";
import { Footeroverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";

const Footer = () => {
  return (
    <div className="g__footer section__padding">
      <Footeroverlay />
      <Newsletter />
      <div className="g__footer-content">
        <div className="g__footer-links">
          <h4 className="g__footer-headtext">Contact Us</h4>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>
        <div className="g__footer-logo">
          <img src={images.gericht} alt="Logo" />
          <p className="p__opensans">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img src={images.spoon} alt="Spoon" />
          <div className="g__footer-logo_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="g__footer-work">
          <h4 className="g__footer-headtext">Working Hours</h4>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am -12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00am -11:00 pm</p>
        </div>
      </div>
      <div className="g__footer-copyright">
        <p className="p__opensans" style={{ color: "#aaa" }}>
          2021 Gerícht. All Rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

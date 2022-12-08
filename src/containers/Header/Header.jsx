import React from "react";
import "./header.css";
import { images } from "../../constants";
import { Subheading } from "../../components";

const Header = () => {
  return (
    <div className="g__header section__padding g__wrapper" id="home">
      <div className="g__wrapper-info">
        <Subheading title="Chase the new Flavour" />
        <h1 className="g__header-h1">The key to Fine dining</h1>
        <p className="p__opensans g__header-p">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="g__wrapper-img">
        <img src={images.welcome} alt="Welcome" />
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import "./menu.css";
import { images, data } from "../../constants";
import { Subheading, Menuitem } from "../../components";

const Menu = () => {
  return (
    <div className="g__menu flex__center section__padding" id="menu">
      <div className="g__menu-heading">
        <Subheading title="Menu that fits your palate" />
        <h2 className="headtext__cormorant">Today's Special</h2>
      </div>
      <div className="g__menu-content">
        <div className="g__menu-content_left">
          <p className="g__menu-content_heading">Wine & Beer</p>
          <div className="g__menu-content_items">
            {data.wines.map((wine, index) => {
              return (
                <Menuitem
                  key={wine.title + index}
                  title={wine.title}
                  price={wine.price}
                  tags={wine.tags}
                />
              );
            })}
          </div>
        </div>
        <div className="g__menu-content_center">
          <img src={images.menu} alt="Menu" />
        </div>
        <div className="g__menu-content_right">
          <p className="g__menu-content_heading">Cocktails</p>
          <div className="g__menu-content_items">
            {data.cocktails.map((cocktail, index) => {
              return (
                <Menuitem
                  key={cocktail.title + index}
                  title={cocktail.title}
                  price={cocktail.price}
                  tags={cocktail.tags}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="g__menu-button">
        <button className="custom__button" type="button">
          View More
        </button>
      </div>
    </div>
  );
};

export default Menu;

import React from "react";
import "./menuitem.css";

const Menuitem = ({ title, price, tags }) => {
  return (
    <div className="g__menuitem">
      <div className="g__menuitem-head">
        <div className="g__menuitem-name">
          <p className="p__cormorant" style={{ color: "#dcca87" }}>
            {title}
          </p>
        </div>
        <div className="g__menuitem-dash"></div>
        <div className="g__menuitem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>
      <div className="g__menuitem-tags">
        <p className="p__opensans" style={{ color: "#aaa" }}>
          {tags}
        </p>
      </div>
    </div>
  );
};

export default Menuitem;

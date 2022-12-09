import React from "react";
import "./laurels.css";
import { images, data } from "../../constants";
import { Subheading } from "../../components";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
  return (
    <div className="g__laurels_awards-card">
      <img src={imgUrl} alt={title} />
      <div className="g__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: "#dcca87" }}>
          {title}
        </p>
        <p className="p__opensans" style={{ color: "#aaa" }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

const Laurels = () => {
  return (
    <div className="g__bg g__wrapper g__laurels section__padding" id="awards">
      <div className="g__wrapper_info">
        <Subheading title="Awards & recognition" />
        <h2 className="headtext__cormorant">Our Laurels</h2>
        <div className="g__laurels_awards">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>
      <div className="g__wrapper_img">
        <img src={images.laurels} alt="Laurels" />
      </div>
    </div>
  );
};

export default Laurels;

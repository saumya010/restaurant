import React, { useRef } from "react";
import "./gallery.css";
import { images } from "../../constants";
import { Subheading } from "../../components";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

const imgs = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = (dir) => {
    const { current } = scrollRef;
    if (dir === "left") current.scrollLeft -= 300;
    else current.scrollLeft += 300;
  };
  return (
    <div className="g__gallery flex__center">
      <div className="g__gallery-left">
        <Subheading title="Instagram" />
        <h2 className="headtext__cormorant">Photo Gallery</h2>
        <p className="p__opensans" style={{ color: "#aaa", margin: "2rem 0" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="g__gallery-right">
        <div className="g__gallery-right_container" ref={scrollRef}>
          {imgs.map((img, index) => (
            <div
              className="g__gallery-images_card flex__center"
              key={img + index}
            >
              <img src={img} alt="Gallery" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="g__gallery-right_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageCarousel.scss";

const ImageCarousel = ({ item }) => {
  const imageKeys = Object.keys(item)
    .filter((key) => key.startsWith("img") && item[key])
    .sort((a, b) => {
      const aNum = parseInt(a.replace("img", "")) || 0;
      const bNum = parseInt(b.replace("img", "")) || 0;
      return aNum - bNum;
    });

  const showCarousel = imageKeys.length > 1;

  if (showCarousel) {
    return (
      <Carousel
        showArrows={true}
        dynamicHeight={false}
        infiniteLoop={true}
        width="300px"
        height="300px"
        showThumbs={false}
        showStatus={false}
        showIndicators={imageKeys.length > 1}
        className="carousel-container"
      >
        {imageKeys.map((key, index) => (
          <div key={key}>
            <img src={item[key]} alt={`${item.nombre} - Imagen ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    );
  } else {
    const singleImageKey = imageKeys[0] || "img";
    return (
      <img
        src={item[singleImageKey]}
        className="imgsizedetail"
        alt={item.nombre}
      />
    );
  }
};

export default ImageCarousel;

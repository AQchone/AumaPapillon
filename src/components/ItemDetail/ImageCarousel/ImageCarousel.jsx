import "./ImageCarousel.scss";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ item }) => {
  const imageKeys = Object.keys(item)
    .filter((key) => key.startsWith("img") && item[key])
    .sort((a, b) => {
      const aNum = parseInt(a.replace("img", "")) || 0;
      const bNum = parseInt(b.replace("img", "")) || 0;
      return aNum - bNum;
    });

  const showCarousel = imageKeys.length > 0;

  return (
    <>
      {showCarousel ? (
        <Carousel
          showArrows={imageKeys.length > 1}
          dynamicHeight={false}
          infiniteLoop={true}
          width="300px"
          height="300px"
          showThumbs={false}
          showStatus={imageKeys.length > 1}
          showIndicators={imageKeys.length > 1}
          className="carousel-container"
        >
          {imageKeys.map((key, index) => (
            <div key={key}>
              <img
                src={item[key]}
                alt={`${item.nombre} - Imagen ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <img src={item.img} className="imgsizedetail" alt={item.nombre} />
      )}
    </>
  );
};

export default ImageCarousel;

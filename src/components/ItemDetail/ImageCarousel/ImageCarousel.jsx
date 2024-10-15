import "./ImageCarousel.scss";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ item }) => {
  const imageUrls = Object.entries(item)
    .filter(([key, value]) => key.startsWith("img") && value)
    .map(([_, value]) => value);

  const showCarousel = imageUrls.length > 1;

  return (
    <>
      {showCarousel ? (
        <Carousel
          showArrows={true}
          dynamicHeight={false}
          infiniteLoop={true}
          width="300px"
          height="300px"
          showThumbs={false}
          className="carousel-container"
        >
          {imageUrls.map((url, index) => (
            <div key={index}>
              <img src={url} alt={`${item.nombre} - Imagen ${index + 1}`} />
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

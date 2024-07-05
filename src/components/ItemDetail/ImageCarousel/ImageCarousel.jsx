import "./ImageCarousel.scss";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ item }) => {
  const showCarousel = item.img && item.img2 && item.img3;

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
          <div>
            <img src={item.img} alt={item.nombre} />
          </div>
          <div>
            <img src={item.img2} alt={`${item.nombre} - Imagen 2`} />
          </div>
          <div>
            <img src={item.img3} alt={`${item.nombre} - Imagen 3`} />
          </div>
        </Carousel>
      ) : (
        <img src={item.img} className="imgsizedetail" alt={item.nombre} />
      )}
    </>
  );
};

export default ImageCarousel;

import "./ImageCarousel.scss";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ item }) => {
  // Función para obtener todas las imágenes del item
  const getImages = (item) => {
    const images = [];
    let index = 1;
    while (item[`img${index}`]) {
      images.push(item[`img${index}`]);
      index++;
    }
    return images;
  };

  const images = getImages(item);

  // Mostramos el carrusel solo si hay más de una imagen
  const showCarousel = images.length > 1;

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
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`${item.nombre} - Imagen ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      ) : (
        <img
          src={images[0] || item.img1}
          className="imgsizedetail"
          alt={item.nombre}
        />
      )}
    </>
  );
};

export default ImageCarousel;

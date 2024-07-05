import React, { useState } from "react";
import "./Gallery.scss";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(null);
  const [images, setImages] = useState([
    { id: 1, src: "https://i.imgur.com/tZpAlnE.jpeg" },
    { id: 2, src: "https://i.imgur.com/CyCfq55.jpeg" },
    { id: 3, src: "https://i.imgur.com/i9BbF1H.jpg" },
    { id: 4, src: "https://i.imgur.com/DwECfcB.jpg" },
    { id: 5, src: "https://i.imgur.com/uj75CC7.jpg" },
    { id: 6, src: "https://i.imgur.com/aa1XE9p.jpg" },
    { id: 7, src: "https://i.imgur.com/L4LnLvH.jpeg" },
    { id: 8, src: "https://i.imgur.com/PVYIrbO.jpeg" },
    { id: 9, src: "https://i.imgur.com/VZPfT7G.jpeg" },
    { id: 10, src: "https://i.imgur.com/m8A7V9I.png" },
    { id: 11, src: "https://i.imgur.com/hWlbOhZ.jpeg" },
    { id: 12, src: "https://i.imgur.com/wk85OYs.jpeg" },
    { id: 13, src: "https://i.imgur.com/VCEsldQ.jpeg" },
    { id: 14, src: "https://i.imgur.com/ZzxjFoK.jpeg" },
    { id: 15, src: "https://i.imgur.com/TJwjfK7.jpeg" },
    { id: 16, src: "https://i.imgur.com/a1caull.jpeg" },
    { id: 17, src: "https://i.imgur.com/0cnHdTP.jpeg" },
    { id: 18, src: "https://i.imgur.com/RgeMvOU.jpeg" },
    { id: 19, src: "https://i.imgur.com/XeZr1bh.jpg" },
    { id: 20, src: "https://i.imgur.com/XnZ0w21.jpeg" },
    { id: 21, src: "https://i.imgur.com/nDdN1OL.jpeg" },
    { id: 22, src: "https://i.imgur.com/YReUoT4.jpeg" },
    { id: 23, src: "https://i.imgur.com/oJC1EXJ.jpeg" },
    { id: 24, src: "https://i.imgur.com/w9POeNy.jpg" },
    { id: 25, src: "https://i.imgur.com/V8m6LTY.jpg" },
    { id: 26, src: "https://i.imgur.com/DU1aLBJ.jpeg" },
    { id: 27, src: "https://i.imgur.com/vwieDCz.jpg" },
    { id: 28, src: "https://i.imgur.com/xZrwxKQ.jpeg" },
    { id: 29, src: "https://i.imgur.com/dALbVlN.jpeg" },
    { id: 30, src: "https://i.imgur.com/EXL7Luf.jpg" },
    { id: 31, src: "https://i.imgur.com/zgDJhyU.jpeg" },
    { id: 32, src: "https://i.imgur.com/whytSZa.jpg" },
    { id: 33, src: "https://i.imgur.com/HkPydzR.jpg" },
  ]);

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  const handleClose = () => {
    setCurrentImage(null);
  };

  return (
    <div className="gallery animate__animated animate__fadeIn">
      <h2 className="titular__h2 ">Galería</h2>
      <div className="gallery__thumbnails">
        {images.map((image) => (
          <div
            key={image.id}
            className="gallery__thumbnail"
            onClick={() => handleImageClick(image)}
          >
            <img src={image.src} alt={image.title} />
          </div>
        ))}
      </div>
      {currentImage && (
        <div className="gallery__modal">
          <img src={currentImage.src} alt={currentImage.title} />
          <h4>{currentImage.title}</h4>
          <button onClick={handleClose} className="btn">
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;

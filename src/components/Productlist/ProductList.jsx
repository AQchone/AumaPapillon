import React, { useState, useEffect } from "react";
import "./ProductList.scss";
import { Link } from "react-router-dom";
import logo1 from "../../assets/inicio logos/1.jpg";
import logo2 from "../../assets/inicio logos/2.jpg";
import logo3 from "../../assets/inicio logos/3.jpg";
import logo4 from "../../assets/inicio logos/4.jpg";
import logo5 from "../../assets/inicio logos/5.jpg";
import logo6 from "../../assets/inicio logos/6.jpg";
import logo7 from "../../assets/inicio logos/7.jpg";
import logo8 from "../../assets/inicio logos/8.jpg";
import logo1mobile from "../../assets/inicio logos/1mob.jpg";
import logo2mobile from "../../assets/inicio logos/2mob.jpg";
import logo3mobile from "../../assets/inicio logos/3mob.jpg";
import logo4mobile from "../../assets/inicio logos/4mob.jpg";
import logo5mobile from "../../assets/inicio logos/5mob.jpg";
import logo6mobile from "../../assets/inicio logos/6mob.jpg";
import logo7mobile from "../../assets/inicio logos/7mob.jpg";
import logo8mobile from "../../assets/inicio logos/8mob.jpg";

const ProductList = () => {
  const [images, setImages] = useState([
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
  ]);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setImages(
        isMobile
          ? [
              logo1mobile,
              logo2mobile,
              logo3mobile,
              logo4mobile,
              logo5mobile,
              logo6mobile,
              logo7mobile,
              logo8mobile,
            ]
          : [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8]
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="main-containe2 animate__animated animate__fadeIn">
        <div className="list-container">
          <Link to="/productos/DiseñoYAsesoria" className="button-container2">
            <div className="image-container">
              <img src={images[0]} className="button-img2" alt="" />
              <span className="button-text-product">Diseño y asesoria</span>
            </div>
          </Link>
          <Link
            to="/productos/FraganciasTextiles"
            className="button-container2"
          >
            <div className="image-container">
              <img src={images[1]} className="button-img2" alt="" />
              <span className="button-text-product">Fragancias Textiles</span>
            </div>
          </Link>
          <Link to="/productos/Arte" className="button-container2">
            <div className="image-container">
              <img src={images[2]} className="button-img2" alt="" />
              <span className="button-text-product">Arte</span>
            </div>
          </Link>
          <Link
            to="/productos/AcabadosMetalicosYPintura"
            className="button-container2"
          >
            <div className="image-container">
              <img src={images[3]} className="button-img2" alt="" />
              <span className="button-text-product">
                Acabados Metálicos
                <br />y Pintura
              </span>
            </div>
          </Link>
          <Link to="/productos/Mobiliario" className="button-container2">
            <div className="image-container">
              <img src={images[4]} className="button-img2" alt="" />
              <span className="button-text-product">Mobiliario</span>
            </div>
          </Link>
          <Link to="/productos/LineaCemento" className="button-container2">
            <div className="image-container">
              <img src={images[5]} className="button-img2" alt="" />
              <span className="button-text-product">Linea Cemento</span>
            </div>
          </Link>
          <Link to="/productos/Herrajes" className="button-container2">
            <div className="image-container">
              <img src={images[6]} className="button-img2" alt="" />
              <span className="button-text-product">Herrajes</span>
            </div>
          </Link>
          <Link
            to="/productos/PiezasDecoLuminarias"
            className="button-container2"
          >
            <div className="image-container">
              <img src={images[7]} className="button-img2" alt="" />
              <span className="button-text-product">
                Piezas Deco
                <br />y Luminarias
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ProductList;

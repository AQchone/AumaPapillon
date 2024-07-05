import "./mainList.scss";
import "animate.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/img1.jpg";
import menu_1 from "../../assets/MenuLogos/menu_1.jpg";
import menu_2 from "../../assets/MenuLogos/menu_2.jpg";
import menu_3 from "../../assets/MenuLogos/menu_3.jpg";
import menu_4 from "../../assets/MenuLogos/menu_4.jpg";

export const MainList = () => {
  return (
    <nav>
      <div className="main-container">
        <img
          src={img1}
          className="main-image animate__animated animate__fadeIn"
          alt="Main Image"
          loading="lazy"
        />
        <div className="menu-container animate__animated animate__fadeIn">
          <Link
            to="/SobreNosotros"
            className="button-container1"
            aria-label="Go to About Us"
          >
            <img
              src={menu_2}
              className="button-img"
              alt="Sobre Nosotros"
              loading="lazy"
            />
            <span className="button-text"></span>
          </Link>
          <Link
            to="/Tienda"
            className="button-container1"
            aria-label="Go to Store"
          >
            <img
              src={menu_3}
              className="button-img"
              alt="Tienda"
              loading="lazy"
            />
            <span className="button-text"></span>
          </Link>
          <Link
            to="/Galeria"
            className="button-container1"
            aria-label="Go to Gallery"
          >
            <img
              src={menu_4}
              className="button-img"
              alt="Galeria"
              loading="lazy"
            />
            <span className="button-text"></span>
          </Link>
          <Link
            to="/Contactanos"
            className="button-container1"
            aria-label="Go to Contact"
          >
            <img
              src={menu_1}
              className="button-img"
              alt="Contactos"
              loading="lazy"
            />
            <span className="button-text"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

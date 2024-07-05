import "./Navbar.scss";
import logo from "../../assets/Completelogo.svg";
import CartWidget from "../CartWidget/CartWidget";
import { Link, useLocation } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

export const Navbar = () => {
  const location = useLocation();
  const shouldDisplayNavbar = location.pathname !== "/";
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => setShowOffcanvas(!showOffcanvas);

  return (
    <header className="header">
      {shouldDisplayNavbar && (
        <div className="header__container">
          <Link to="/">
            <img src={logo} alt="LOGO" />
          </Link>
          <nav className="navbar">
            <span className="navbar__link" onClick={handleOffcanvasToggle}>
              Tienda
            </span>
            <Link to="/SobreNosotros" className="navbar__link">
              Quienes Somos
            </Link>
            <Link to="/Contactanos" className="navbar__link">
              Contacto
            </Link>
            <Link to="/galeria" className="navbar__link">
              Galería
            </Link>
          </nav>
          <CartWidget />
        </div>
      )}
      <Offcanvas
        show={showOffcanvas}
        onHide={handleOffcanvasToggle}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="offcanvas__title">
            Nuestros Productos
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="offcanvas-links">
            <Link to="/productos/Arte" onClick={handleOffcanvasToggle}>
              Arte
            </Link>
            <Link to="/productos/Mobiliario" onClick={handleOffcanvasToggle}>
              Mobiliario
            </Link>
            <Link to="/productos/PiezasDeco" onClick={handleOffcanvasToggle}>
              Piezas Deco
            </Link>
            <Link to="/productos/Herrajes" onClick={handleOffcanvasToggle}>
              Herrajes
            </Link>
            <Link to="/productos/LineaCemento" onClick={handleOffcanvasToggle}>
              Linea cemento
            </Link>
            <Link
              to="/productos/DiseñoYAsesoria"
              onClick={handleOffcanvasToggle}
            >
              Diseño y asesoria
            </Link>
            <Link
              to="/productos/FraganciasTextiles"
              onClick={handleOffcanvasToggle}
            >
              Fragancias Textiles
            </Link>
            <Link
              to="/productos/AcabadosMetalicosYPintura"
              onClick={handleOffcanvasToggle}
            >
              Acabados metálicos Y Pintura
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

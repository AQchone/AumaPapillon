// Footer.jsx
import React from "react";
import "./Footer.scss";
import logo from "../../assets/logocrema.svg";

export const Footer = () => {
  const socialLinks = [
    [
      {
        href: "https://www.facebook.com/Aumadeco",
        src: "https://i.imgur.com/pCNNodc.png",
        alt: "Facebook AumaDeco",
      },
      {
        href: "https://www.instagram.com/auma.ok",
        src: "https://i.imgur.com/xDwnM5Z.png",
        alt: "Instagram AumaDeco",
      },
      {
        href: "https://wa.me/message/FM34KB2G22KGF1",
        src: "https://i.imgur.com/FTatTSl.png",
        alt: "WhatsApp AumaDeco",
      },
    ],
    [
      {
        href: "https://www.facebook.com/profile.php?id=61559875317963&mibextid=ZbWKwL",
        src: "https://i.imgur.com/pCNNodc.png",
        alt: "Facebook Papillon",
      },
      {
        href: "https://www.instagram.com/papillon.arteydeco",
        src: "https://i.imgur.com/xDwnM5Z.png",
        alt: "Instagram Papillon",
      },
      {
        href: "https://wa.me/message/KBF6EZPHVWMUC1",
        src: "https://i.imgur.com/FTatTSl.png",
        alt: "Whatsapp papillon",
      },
    ],
  ];

  return (
    <div className="footer2 menu-container animate__animated animate__fadeIn">
      <div className="footer menu-container animate__animated animate__fadeIn">
        <section className="footer__contenidoCrema">
          <br />
          <img
            src={logo}
            className="footer__imagenCrema"
            alt="Logo en color crema"
          />
          <p className="Lugar">Olivos - Buenos Aires</p>
        </section>

        <section className="footer__redes">
          <h3 className="footer__redesTitulo">Encontranos en</h3>
          <hr className="footer__hrRedes" />

          <div className="footer__socialContainer">
            {socialLinks.map((row, rowIndex) => (
              <div key={rowIndex} className="footer__socialRow">
                <h4 className="footer__rowTitle">
                  {rowIndex === 0 ? "AumaDeco" : "Papillon Arte&Deco"}
                </h4>
                <div className="footer__socialGrid">
                  {row.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer__link"
                    >
                      <img
                        src={link.src}
                        className="footer__imagen"
                        alt={`Boton ${link.alt}`}
                      />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section>
        <a className="Qlink" href="https://www.instagram.com/qchone/">
          Design by Qchone
        </a>
        <br />
      </section>
    </div>
  );
};

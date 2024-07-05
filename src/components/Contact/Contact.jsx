import "./Contact.scss";

export const Contact = () => {
  return (
    <nav className="maincont animate__animated animate__fadeIn">
      <h2 className="titular__h2">Contacto</h2>
      <section className="contacto">
        <div className="contacto__row">
          <div className="contacto__card">
            <a
              href="https://www.facebook.com/Aumadeco"
              target="_blank"
              rel="noopener noreferrer"
              className="contactolink"
            >
              Facebook : Aumadeco
            </a>
          </div>
          <div className="contacto__card">
            <a
              href="https://www.instagram.com/auma.ok"
              target="_blank"
              rel="noopener noreferrer"
              className="contactolink"
            >
              Instagram : auma.ok
            </a>
          </div>
          <div className="contacto__card">
            <a
              href="https://wa.me/message/FM34KB2G22KGF1"
              target="_blank"
              rel="noopener noreferrer"
              className="contactolink"
            >
              Whatsapp : +54 9 11 57002924
            </a>
          </div>
        </div>
        <div className="contacto__row">
          <div className="contacto__card">
            <a
              href="https://www.facebook.com/profile.php?id=61559875317963&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="contactolink"
            >
              Facebook : papillon.arteydeco
            </a>
          </div>
          <div className="contacto__card">
            <a
              href="https://www.instagram.com/papillon.arteydeco"
              target="_blank"
              rel="noopener noreferrer"
              className="contactolink"
            >
              Instagram : papillon.arteydeco
            </a>
          </div>
          <div className="contacto__card">
            <a
              href="https://wa.me/message/KBF6EZPHVWMUC1"
              target="_blank"
              rel="noopener noreferrer"
              className="contactolink"
            >
              Whatsapp : +54 9 11 66814144
            </a>
          </div>
        </div>
      </section>
      <div className="contacto__email">
        <a href="mailto:auma.decor@gmail.com" className="contactolinkemail">
          Correo : auma.decor@gmail.com
        </a>
      </div>
      <p className="contacto__text">
        Recorda que para pasarte un presupuesto es imprescindible nos envies
        fotos, planos o renders con medidas. MUCHAS GRACIAS
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </nav>
  );
};

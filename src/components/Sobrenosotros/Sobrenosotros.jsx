import "./Sobrenosotros.scss";
import img from "../../assets/imagenes/IMG_6895.png";
import img2 from "../../assets/imagenes/Sin título-35.png";

const Sobrenosotros = () => {
  return (
    <main className="nosotros">
      <main className="integrantes animate__animated animate__fadeIn">
        <section className="titular">
          <h2 className="titular__h2 ">Quienes Somos</h2>
        </section>
        <section className="miembros">
          {/* 1 */}
          <div className="miembros__contenido ">
            <div className="miembros__texto-imagen">
              <div className="miembros__texto">
                <p className="miembros__info1">
                  Dos hermanas apasionadas: una diseñadora de interiores y la
                  otra artista visual. Nuestros proyectos se iniciaron en forma
                  individual y con el tiempo evolucionaron hacia una fusión
                  perfecta de estilos y habilidades, para de esta manera poder
                  ofrecer un servicio excepcional y piezas únicas de alta
                  calidad. No nos busquen por separado, ¡porque juntas somos
                  imparables! Simplificamos el proceso de transformar tu casa en
                  el hogar de tus sueños. Cada objeto que elijas con nosotras
                  tendrá un significado especial, ya que combinamos la
                  funcionalidad del diseño interior con la belleza del arte.
                </p>
              </div>
              <div className="miembros__imagen">
                <img src={img} alt="Descripción de la imagen" />
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="miembros__contenido ">
            <div className="miembros__texto-imagen2">
              <div className="miembros__texto">
                <p className="miembros__info2">
                  Permitinos ser tus guías en este viaje creativo. Podemos hacer
                  que cada rincón de tu hogar cobre vida con estilo y
                  personalidad. ¡Déjanos convertir tus sueños en realidad!
                </p>
              </div>
              <div className="miembros__imagen2">
                <img src={img2} alt="Descripción de la imagen" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <br />
      <br />
      <br />
    </main>
  );
};

export default Sobrenosotros;

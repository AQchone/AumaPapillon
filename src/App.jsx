import "bootstrap/dist/css/bootstrap.min.css";
import "./AppConstruction.css";
import imgAuma from "./assets/Auma.svg";

function App() {
  return (
    <div className="construction-container">
      <div className="construction-content">
        <img src={imgAuma} alt="Auma Logo" className="construction-logo" />
        <h1 className="construction-title">En Construcción</h1>
        <p className="construction-message">
          Estamos trabajando para brindarte una mejor experiencia. Vuelve
          pronto.
        </p>
      </div>
    </div>
  );
}

export default App;

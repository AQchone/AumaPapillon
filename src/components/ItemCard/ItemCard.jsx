import "./ItemCard.scss";
import { Link } from "react-router-dom";
import "./alinear.css";

const ItemCard = ({ item }) => {
  const isStringPrice = typeof item.precio === "string";
  const isStringStock = typeof item.stock === "string";

  return (
    <div
      className="crd col-3 m-3 p-3 alinear shadow"
      style={{ width: "18rem" }}
    >
      <h3 className="cardfont">{item.nombre}</h3>
      <img src={item.img} alt={item.nombre} className="imgsize" />
      <p className="cardtext">{item.descripcion}</p>
      <p className="cardtext">Categoria {item.category}</p>
      <p>
        <strong>
          Precio: {isStringPrice ? item.precio : `$${item.precio}`}
        </strong>
      </p>
      {!isStringStock && item.stock <= 10 && (
        <p style={{ color: "red" }}>¡Quedan pocas unidades!</p>
      )}
      <Link to={`/detail/${item.id}`} className="btn">
        Ver más
      </Link>
    </div>
  );
};

export default ItemCard;

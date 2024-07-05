import { useContext, useMemo, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel/ImageCarousel";

const ItemDetail = ({ item }) => {
  const { cart, agregarAlCarrito, isInCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);
  const [estiloSeleccionado, setEstiloSeleccionado] = useState(
    item.estilo ? "opcion1" : ""
  );

  const isStringPrice = typeof item.precio === "string";
  const isStringStock = typeof item.stock === "string";

  const handleAgregar = () => {
    const newItem = {
      ...item,
      cantidad,
      precio: isStringPrice ? 0 : item.precio,
      stock: isStringStock ? Infinity : item.stock,
      estilo: item.estilo ? estiloSeleccionado : "",
    };

    agregarAlCarrito(newItem);
  };

  const handleSelect = (e) => {
    setEstiloSeleccionado(e.target.value);
  };

  return (
    <div className="text-center">
      <h3>{item.nombre}</h3>
      <ImageCarousel item={item} />
      <p>{item.descripcion}</p>
      <p>Categoria {item.category}</p>
      <p>
        <strong>
          Precio: {isStringPrice ? item.precio : `$${item.precio}`}
        </strong>
      </p>
      {!isStringPrice && <p>Subtotal: {item.precio * cantidad}</p>}

      {item.estilo && (
        <>
          <select onChange={handleSelect}>
            <option value={"opcion1"}>Opcion 1</option>
            <option value={"opcion2"}>Opcion 2</option>
            <option value={"opcion3"}>Opcion 3</option>
          </select>
          <br />
        </>
      )}
      <br />
      {isInCart(item.id) ? (
        <Link className="btn" to="/cart">
          Terminar mi compra
        </Link>
      ) : (
        <ItemCount
          cantidad={cantidad}
          setCantidad={setCantidad}
          stock={isStringStock ? Infinity : item.stock}
          agregar={handleAgregar}
        />
      )}
    </div>
  );
};

export default ItemDetail;

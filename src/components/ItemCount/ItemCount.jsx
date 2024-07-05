const ItemCount = ({ cantidad, setCantidad, stock, agregar }) => {
  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="text-center">
      <button
        onClick={handleRestar}
        className={`btn mx-1 ${cantidad === 1 ? "boton" : ""} ${
          cantidad === 1 ? "btn-danger" : "btn-primary"
        }`}
        disabled={cantidad === 1}
      >
        -
      </button>

      <span className="mx-2">{cantidad}</span>

      <button
        onClick={handleSumar}
        className={
          cantidad === stock ? "btn mx-1 btn-danger " : "btn mx-1 btn-primary "
        }
        disabled={cantidad === stock}
      >
        +
      </button>
      <br />
      <br />
      <button onClick={agregar} className="btn my-2">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;

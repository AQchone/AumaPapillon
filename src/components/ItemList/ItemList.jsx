import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({ items }) => {
  return (
    <div>
      <h2 className="titular__h2 mb-3">Productos</h2>
      <hr className="mb-4" />

      <div className="d-flex justify-content-center flex-wrap">
        {items.map((prod) => (
          <ItemCard item={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;

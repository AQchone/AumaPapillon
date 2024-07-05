import "./itemDetailContainer.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/itemDetail.jsx";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "productos", itemId);

    getDoc(docRef)
      .then((doc) => {
        const _item = {
          id: doc.id,
          ...doc.data(),
        };

        setItem(_item);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="background-custom">
      <div className="container">
        {loading ? (
          <div>
            {" "}
            <Loader />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        ) : (
          <ItemDetail item={item} />
        )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;

import "./Checkout.scss";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Navigate } from "react-router-dom";
import {
  collection,
  getDoc,
  addDoc,
  getDocs,
  writeBatch,
  query,
  where,
  documentId,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  nombre: Yup.string()
    .required("Este campo es requerido")
    .min(3, "El nombre es muy corto")
    .max(20, "El nombre es demasiado largo"),
  direccion: Yup.string()
    .required("Este campo es requerido")
    .min(6, "La dirección es muy corta")
    .max(20, "La dirección es demasiado larga"),
  email: Yup.string()
    .email("El email no es válido")
    .required("Este campo es requerido"),
  telefono: Yup.string().required("Este campo es requerido"),
});

const Checkout = () => {
  const { cart, totalCompra, emptyCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const generarOrden = async (values) => {
    const orden = {
      client: {
        nombre: values.nombre,
        direccion: values.direccion,
        email: values.email,
        telefono: values.telefono,
      },
      items: cart.map((item) => ({
        id: item.id,
        nombre: item.nombre,
        cantidad: item.cantidad,
        estilo: item.estilo,
      })),
      total: totalCompra(),
      fyh: new Date(),
    };

    const batch = writeBatch(db);
    const productosRef = collection(db, "productos");
    const ordersRef = collection(db, "orders");

    const promesas = cart.map((item) => {
      const ref = doc(productosRef, item.id);
      return getDoc(ref);
    });

    const productos = await Promise.all(promesas);

    const outOfStock = [];

    productos.forEach((doc) => {
      const item = cart.find((i) => i.id === doc.id);
      const stock = doc.data().stock;

      if (typeof stock === "string") {
        batch.update(doc.ref, {
          stock: stock,
        });
      } else if (stock >= item.cantidad) {
        batch.update(doc.ref, {
          stock: stock - item.cantidad,
        });
      } else {
        outOfStock.push(item);
      }
    });

    if (outOfStock.length === 0) {
      addDoc(ordersRef, orden).then((doc) => {
        batch.commit();
        setOrderId(doc.id);
        emptyCart();
      });
    } else {
      console.log(outOfStock);
      alert("Hay items sin stock");
    }
  };

  if (orderId) {
    return (
      <div className="container my-5">
        <h2>Tu compra se registró exitosamente!</h2>
        <hr />
        <p>Guardá tu número de orden: {orderId}</p>
        <Link to="/" className="btn">
          Volver
        </Link>
        <hr />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <h2>Checkout</h2>
      <hr />

      <Formik
        initialValues={{
          nombre: "",
          direccion: "",
          email: "",
          telefono: "",
        }}
        validationSchema={schema}
        onSubmit={generarOrden}
      >
        {(props) => (
          <Form>
            <label>
              Nombre: {""}
              <Field
                name="nombre"
                type="text"
                className={`form-control my-2 ${
                  props.errors.nombre && props.touched.nombre ? "error" : ""
                }`}
                placeholder={
                  props.errors.nombre && props.touched.nombre
                    ? props.errors.nombre
                    : "Este campo es requerido"
                }
              />
            </label>
            <label>
              {" "}
              Dirección de envio:
              <Field
                name="direccion"
                type="text"
                className={`form-control my-2 ${
                  props.errors.direccion && props.touched.direccion
                    ? "error"
                    : ""
                }`}
                placeholder={
                  props.errors.direccion && props.touched.direccion
                    ? props.errors.direccion
                    : "Este campo es requerido"
                }
              />
            </label>
            <label>
              {" "}
              Email:
              <Field
                name="email"
                type="email"
                className={`form-control my-2 ${
                  props.errors.email && props.touched.email ? "error" : ""
                }`}
                placeholder={
                  props.errors.email && props.touched.email
                    ? props.errors.email
                    : "Este campo es requerido"
                }
              />
            </label>
            <label>
              Teléfono:
              <Field
                name="telefono"
                type="text"
                className={`form-control my-2 ${
                  props.errors.telefono && props.touched.telefono ? "error" : ""
                }`}
                placeholder={
                  props.errors.telefono && props.touched.telefono
                    ? props.errors.telefono
                    : "Este campo es requerido"
                }
              />
            </label>
            <hr />
            <button className="btn" type="submit">
              Enviar
            </button>
            <hr />
            <p>El costo de envio queda a cargo del cliente</p>
            <br />
            <br />
            <br />
            <br />
            <br />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Checkout;

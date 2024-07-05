import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { Navbar } from "../components/Navbar/Navbar";
import ItemDetailContainer from "../components/itemDetailContainer/itemDetailContainer.jsx";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";
import { MainList } from "../components/MainList/mainList";
import { Contact } from "../components/Contact/Contact";
import Gallery from "../components/Gallery/Gallery";
import Sobrenosotros from "../components/Sobrenosotros/Sobrenosotros";
import ProductList from "../components/Productlist/ProductList.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<MainList />} />
          <Route path="/Contactanos" element={<Contact />} />
          <Route path="/Galeria" element={<Gallery />} />
          <Route path="/SobreNosotros" element={<Sobrenosotros />} />
          <Route path="/Tienda" element={<ProductList />} />
          <Route
            path="/productos/:categoryId"
            element={<ItemListContainer />}
          />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default AppRouter;

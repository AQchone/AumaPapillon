import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import AppRouter from "./router/AppRouter";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <CartProvider>
      <AppRouter />
      <Footer />
    </CartProvider>
  );
}

export default App;

import { createContext, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
export const cartContext = createContext();
function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  function addToCart(item) {
    setCart((prev) => [...prev, item]);
  }
  function handleShowCart() {
    setShowCart((prev) => !prev);
  }
  function closeCart() {
    setShowCart(false);
  }
  function removeCart(data) {
    setCart((prev) => {
      return prev.filter((item) => {
        return item !== data;
      });
    });
  }

  console.log(cart);
  return (
    <cartContext.Provider
      value={{ addToCart, closeCart, cart, setCart, removeCart }}
    >
      <div className=" relative">
        <Navbar />
        <Home />
        <button
          onClick={handleShowCart}
          className=" rounded-full p-4 bg-yellow-300 inline-block fixed bottom-0 right-0"
        >
          {cart.length}
        </button>
        {showCart ? <Cart /> : ""}
        <Footer />
      </div>
    </cartContext.Provider>
  );
}

export default App;

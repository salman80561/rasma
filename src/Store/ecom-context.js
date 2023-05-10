import React, { useState } from "react";

const Econtext = React.createContext({
  singleProduct: {},
  cart: [],
  email: "",
  showCart: false,
  addToCart: (product) => {},
  updateCartItem: (productId, quantity) => {},
  removeFromCart: (productId) => {},
  clearCart: () => {},
  onShowCart: () => {},
  onHideCart: () => {},
  setEmail: (email) => {},
});

export const EcontextProvider = ({ children }) => {
  const [singleProduct, setSingleProduct] = useState({});
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState("");
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const updateCartItem = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const onShowCart = () => {
    setShowCart(true);
  };

  const onHideCart = () => {
    setShowCart(false);
  };

  return (
    <Econtext.Provider
      value={{
        singleProduct,
        cart,
        email,
        showCart,
        addToCart,
        updateCartItem,
        removeFromCart,
        clearCart,
        onShowCart,
        onHideCart,
        setEmail,
      }}
    >
      {children}
    </Econtext.Provider>
  );
};

export default Econtext;

import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import Store from "./Pages/store";
import Home from "./Pages/Home";
import About from "./Pages/About";
import LayOut from "./Components/Layouts/LayOut";
import ContactUs from "./Pages/ContactUs";
import ProductDetail from "./Components/Products/ProductDetail";
import AuthContext from "./store/AuthContext";
import AuthForm from "./Components/Auth/AuthForm";
import CartContext from "./store/CartContext";

function App() {
  const authCtx = useContext(AuthContext);
  const cartCtx = useContext(CartContext);
  const Navigate = useNavigate(); // Use the useNavigate hook to get the navigate function

  useEffect(() => {
    if (authCtx.isLogin) {
      const email = localStorage.getItem("email");
      fetch(
        `https://crudcrud.com/api/496c4482bb2a48c494a94267035d6452/ecom${email}`
      )
        .then((res) => {
          return res.json().then((data) => {
            for (const key in data) {
              cartCtx.getItem({ ...data[key] });
              console.log(data[key]._id);
            }
          });
        })
        .catch((err) => alert(err.message));
    }
  }, [authCtx.isLogin]);

  return (
    <>
      <LayOut>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/Home" element={<Home />} />
          {authCtx.isLogin ? (
            <Route path="/Store" element={<Store />} />
          ) : (
            <Route
              path="/Store"
              element={<Navigate to="/login" replace />}
            />
          )}
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/Store/:id" element={<ProductDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </LayOut>
    </>
  );
}

export default App;

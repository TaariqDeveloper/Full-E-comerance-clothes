import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import About from "./pages/About";
import Contect from "./pages/Contect";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contect />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/placeOrder" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;

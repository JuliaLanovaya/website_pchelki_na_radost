import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Products from './pages/Products.jsx';
import BeeQueens from './pages/BeeQueens.jsx';
import Contacts from './pages/Contacts.jsx';
import Cart from './pages/Cart.jsx';
import Product from './pages/Product.jsx';
import { Routes, Route } from "react-router-dom";



const App = () => {
  return (
    <React.Fragment>
      <Header />
      <NavBar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products" element={<Products />} />
        <Route path="/beequeens" element={<BeeQueens />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
      </Routes>

      <Footer />

    </React.Fragment>











  );
}

export default App;

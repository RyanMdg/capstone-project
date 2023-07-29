// Home.js
import React from "react";
import SingleProduct from "./productsingle";
import Navbar from "./navbar";
import { useState, useEffect } from "react";
import Footer from "../components/footer";

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [productsList, setproductsList] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  useEffect(() => {
    const fetchProductlist = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/products/cartlist"
        );

        setproductsList(response.data.products);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProductlist();
  }, []);

  const cartItemCount = cartItems.length;

  return (
    <section className="flex h-screen">
      <Navbar />

      <div className="absolute top-[1.4rem] right-[.6rem] z-50  bg-black text-white rounded-full h-4 w-4 flex items-center justify-center text-[.7rem] font-bold">
        {cartItemCount}
      </div>

      <div className="">
        {/* Render the SingleProduct component with cartItems */}
        <SingleProduct onAddToCart={handleAddToCart} />
        <Footer />
      </div>
    </section>
  );
};

export default Home;

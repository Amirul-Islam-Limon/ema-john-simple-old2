import React, { useState } from "react";
import fakeData from "../../fakeData";
import "./Shop.css";
import Product from "../Product/Product";
import Summary from "../Summary/Summary";

const Shop = () => {
  const fakeData10 = fakeData.slice(0, 10);
  const [cart, setCart] = useState([])
  const handleAddCart = (props) => {
    const newChart = [...cart, props];
    setCart(newChart);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {fakeData10.map((product) => (
          <Product handleAddCart={handleAddCart} product={product}></Product>
        ))}
      </div>
      <div className="summary-container">
        <Summary cart={cart}></Summary>
      </div>
    </div>
  );
};

export default Shop;

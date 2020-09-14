import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import "./Shop.css";
import Product from "../Product/Product";
import Summary from "../Summary/Summary";
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import { Link } from "react-router-dom";

const Shop = () => {
  const fakeData10 = fakeData.slice(0, 10);
  const [cart, setCart] = useState([])

  useEffect(()=>{
    const savedCart = getDatabaseCart()
    const cartKyes = Object.keys(savedCart);
    const previousProduct =cartKyes.map(pdKey => {
      const product =fakeData.find(product => product.key === pdKey)
      product.quantity = savedCart[pdKey];
      return product;
    })
    setCart(previousProduct)
  },[])

  const handleAddCart = (product) => {
    let count = 1;
    let newCart
    const sameProduct = cart.find(pd => pd.key === product.key)
    if(sameProduct){
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter( pd => pd.key !== product.key)
      newCart=[...others, sameProduct]
    }
    else{
      product.quantity = 1;
      newCart =[...cart, product]
    }
    setCart(newCart)
    addToDatabaseCart(product.key, count);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {fakeData10.map((product) => (
          <Product showAddToChart ={true}
          key={product.key}
           handleAddCart={handleAddCart} product={product}></Product>
        ))}
      </div>
      <div className="summary-container">
        <Summary cart={cart}>
            <Link to="/review"><button className="add-cart-btn">Review Order</button></Link>
        </Summary>
      </div>
    </div>
  );
};

export default Shop;

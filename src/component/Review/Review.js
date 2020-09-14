import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import './Review.css'
import {
  getDatabaseCart,
    processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import ReviewProduct from "../ReviewProduct/ReviewProduct";
import Summary from "../Summary/Summary";
import placeImage from '../../images/giphy.gif'

const Review = () => {
  const removeProduct = (productKey) => {
    const newCarts = carts.filter((pd) => pd.key !== productKey);
    setCarts(newCarts);
    removeFromDatabaseCart(productKey);
  };
  const [carts, setCarts] = useState([]);
  const [processOrders, setProcessOrders] = useState(false)
  useEffect(() => {
    const savedChart = getDatabaseCart();
    const productKeys = Object.keys(savedChart);
    const cartProduct = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedChart[key];
      return product;
    });
    setCarts(cartProduct);
    console.log(cartProduct)
  }, []);

  const handlePlaceOrder=()=>{
    setProcessOrders(true);
    processOrder()
    setCarts([])  
}
let happyImage;
if(processOrders){
    happyImage = <img src={placeImage} alt=""/>
}
  return (
    <div className="review-section">
      <div className="order-items">
        {carts.map((pd) => (
          <ReviewProduct
            product={pd}
            removeProduct={removeProduct}
          ></ReviewProduct>
        ))}
        {
            happyImage
        }
      </div>
      <div className="order-summary">
            <Summary cart ={carts}>
            <button onClick={handlePlaceOrder} className="add-cart-btn">Place Order</button>
            </Summary>
            
      </div>
    </div>
  );
};

export default Review;

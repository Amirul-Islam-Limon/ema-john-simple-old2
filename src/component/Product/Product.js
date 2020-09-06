import React from "react";
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
//   console.log(props);
  const { name, seller, price, stock, star, img } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-information">
        <h3 className="product-name">{name}</h3>
        <p> by: {seller}</p>
        <br/>
        <p>${price}</p>
        <p>
          <small>Only {stock} left in stock- order soon</small>
        </p>
        <button className="add-cart-btn" onClick={()=>props.handleAddCart(props.product)} ><FontAwesomeIcon icon={faCartPlus}/> add to cart</button>
      </div>
    </div>
  );
};

export default Product;

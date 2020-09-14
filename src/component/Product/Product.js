import React from "react";
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Product = (props) => {
  const { name, seller, price, stock, img, key } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-information">
        <h3 className="product-name"><Link to={"/product/"+key}>{name}</Link></h3>
        <p> by: {seller}</p>
        <br/>
        <p>${price}</p>
        <p>
          <small>Only {stock} left in stock- order soon</small>
        </p>
        {
          props.showAddToChart === true &&
            <button className="add-cart-btn" onClick={()=>props.handleAddCart(props.product)} ><FontAwesomeIcon icon={faCartPlus}/> add to cart</button>
        }
        
          
        
      </div>
    </div>
  );
};

export default Product;

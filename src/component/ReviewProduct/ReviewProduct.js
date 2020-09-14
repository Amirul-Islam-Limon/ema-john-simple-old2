import React from 'react';
import './ReviewProduct.css'

const ReviewProduct = (props) => {
    const{name, quantity, price, seller, key}=props.product
    return (
        <div className="reviewProduct">
            <h3>{name}</h3>
            <p>{price}</p>
            <p><small>sold by:{seller}</small></p>
            <p>Quantity:{quantity}</p>
            <br/>
            <button onClick={()=>props.removeProduct(key)} className="add-cart-btn">Remove</button>
        </div>
    );
};

export default ReviewProduct;
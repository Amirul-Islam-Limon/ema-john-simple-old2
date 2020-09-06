import React from "react";

const Summary = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, item)=> total + item.price, 0)
    const vatAndTaxt = total / 10;
    let shippingCost = 0;
    if(total > 35){
        shippingCost = 0
    }
    else if(total > 15){
        shippingCost = 9.99
    }
    else if( total > 0){
        shippingCost = 15.99;
    }
    const priceShow = (number)=>{
        const price = number.toFixed(2)
        return Number(price)
    }
  return (
    <div>
      <h2>Order Summary</h2>
      <p>Items ordered:{cart.length}</p>
      <p><small>items: ${priceShow(total)}</small></p>
      <p><small>Tax and VAT: ${priceShow(vatAndTaxt)}</small></p>
      <p><small>Shipping const: ${priceShow(shippingCost)}</small></p>
      <h3>Total price : ${priceShow(total+ vatAndTaxt + shippingCost)}</h3>
    </div>
  );
};

export default Summary;

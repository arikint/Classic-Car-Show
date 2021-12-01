import React from 'react';
import './Cart.css';
/* --------------------------------------------
 -----Function for cart------------
 ---------------------------------------------*/
const Cart = (props) => {
    const { cart } = props;
    
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.horsepower;
        totalQuantity = totalQuantity + product.quantity;
    }
/* --------------------------------------------
 -----Return cart info------------
 ---------------------------------------------*/
    return (
        <>
        <div className="carSummery">
            <h3>Car Horsepower Summary</h3>
            <h4>Total cars added: {totalQuantity}</h4>
            <h4>Total Horsepower: {total} hp</h4>
        </div>
        {cart.map((item,index) => ( 
        <div  className="carinfo" key={index}>
        <div className="cartImage">
            <img src={item.image} alt="" />
        </div>
        <div className="carin">
            <h3>{item.name}</h3>
            <h5>Horsepower: {item.horsepower} hp</h5>
        </div>
        </div>) ) } 
        </>
    );
};

export default Cart;
import React from "react";
import "./Cart.css";

const Cart = (props) => {
    const { cart } = props;

    // array map for car name
    const carName = cart.map((car) => <li key={car.key}>{car.carName}</li>);

    // array reduce for total price
    const sum = cart.reduce((prevValue, currentValue) => {
        return prevValue + currentValue.price;
    }, 0);

    return (
        <div className="cart-section">
            <h4>Added Cars:- {cart.length}</h4>
            <p>Total Price:- $ {sum}</p>
            <h3>Cars Name</h3>
            <ul>{carName}</ul>
        </div>
    );
};

export default Cart;

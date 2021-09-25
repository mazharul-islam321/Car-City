import React from "react";
import Cars from "../Cars/Cars";
import Cart from "../Cart/Cart";

const CarShop = () => {
    return (
        <div className="shop-container">
            <div className="car-container">
                <Cars />
            </div>
            <div className="cart-container">
                <Cart />
            </div>
        </div>
    );
};

export default CarShop;

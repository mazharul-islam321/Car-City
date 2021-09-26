import React, { useState, useEffect } from "react";
import "./CarShop.css";
import Cars from "../Cars/Cars";
import Cart from "../Cart/Cart";

const CarShop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("./CarsData.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    // add to click button
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    };
    return (
        <div className="shop-container">
            <div className="car-container">
                {products.map((product) => (
                    <Cars
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default CarShop;

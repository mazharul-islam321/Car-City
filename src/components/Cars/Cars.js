import React from "react";

const Cars = () => {
    return (
        <div className="car-card">
            <div>{/* <img src="" alt="" /> */}</div>
            <div>
                <h4 className="product-name">Tesla</h4>
                <p>
                    <small>Company Name: </small>
                </p>
                <p>Price: </p>
                <button className="btn-regular"> add to cart</button>
            </div>
        </div>
    );
};

export default Cars;

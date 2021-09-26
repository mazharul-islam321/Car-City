import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Cars.css";
import Rating from "react-rating";

const Cars = (props) => {
    const {
        carName,
        companyName,
        price,
        img,
        feature,
        topSpeed,
        star,
        starCount,
    } = props.product;
    return (
        <div className="car-card">
            <div className="img-div">
                <img src={img} alt="car" />
            </div>
            <div className="product-details">
                <h3>Car Name:- {carName}</h3>
                <p>Company Name:- {companyName}</p>
                <p>Feature:- {feature}</p>
                <p>Top Speed:- {topSpeed}</p>
                <p>Price:- $ {price} </p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                ></Rating>
                <span className="span"> &#40;{starCount}&#41;</span>
                <br /> <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn-regular"
                >
                    <FontAwesomeIcon icon={faShoppingCart} />
                    &nbsp;add to cart
                </button>
            </div>
        </div>
    );
};

export default Cars;

import React, { useState } from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);

  const addToBasket = () => {
    //dispatch item into dataLayer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div class="product__info">
        <p>{title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p> &#11088;</p>
            ))}
        </div>
      </div>
      <img src={image} alt=" " />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;

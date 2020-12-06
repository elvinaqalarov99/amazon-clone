import React from "react";
import "./BasketItem.css";
import { useStateValue } from "./StateProvider";
function BasketItem(props) {
  // eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      index: props.index,
    });
  };

  return (
    <div className="basketItem">
      <div className="basketItem__item">
        <img className="basketItem__image" src={props.image} alt="" />
        <div className="basketItem__details">
          <p>{props.title}</p>
          <p className="details__price">
            <small>$</small>
            <strong>{props.price}</strong>
          </p>
          <div className="details__rating">
            {new Array(props.rating).fill(null).map((_, i) => {
              return <p>⭐</p>;
            })}
          </div>
          {!props.hidden && (
            <button onClick={removeFromBasket}>Remove from the basket</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BasketItem;

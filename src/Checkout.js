import React from "react";
import "./Checkout.css";
import BasketItem from "./BasketItem";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div className="checkout__basket">
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket?.map((value, index) => {
            return (
              <BasketItem
                id={value.id}
                index={index}
                title={value.title}
                price={value.price}
                rating={value.rating}
                image={value.image}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

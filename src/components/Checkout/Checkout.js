import React from "react";
import "./Checkout.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../../StateProvider";
import FlipMove from "react-flip-move";

const Checkout = () => {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div className="checkout-info">
            <h3>Hello, {user?.email}</h3>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, press
              "Add to basket" next to the item
            </p>
          </div>
        ) : (
          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout-title">Your Shopping Basket</h2>
            <div className="flip-move">
              <FlipMove>
                {basket.map((item) => (
                  <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  />
                ))}
              </FlipMove>
            </div>
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout-right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;

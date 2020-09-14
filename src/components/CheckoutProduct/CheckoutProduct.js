import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";

const CheckoutProduct = forwardRef(
  ({ id, title, image, price, rating, hidebutton }, ref) => {
    const [{}, dispatch] = useStateValue();

    const removeFromBasket = () => {
      // remove item from basket
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      });
    };

    return (
      <div className="checkout-product" ref={ref}>
        <img className="checkout-product-image" src={image} alt={title} />

        <div className="checkout-product-info">
          <p className="checkout-product-title">{title}</p>

          <p className="checkout-product-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>

          <div className="checkout-product-rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span role="img">⭐</span>
              ))}
          </div>

          {!hidebutton && (
            <button onClick={removeFromBasket}>Remove from Basket</button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;

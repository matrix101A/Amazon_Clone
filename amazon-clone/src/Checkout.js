import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__add"
          alt=" "
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* BAsket Item  */}
          {/* BAsket Item  */}
          {/* BAsket Item  */}
        </div>
      </div>

      <div className="checkout__right">
        {/* Subtotal  */}
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

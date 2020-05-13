import React from "react";
import CustomButton from "../buttons/custom-button-component";
import "./cart-dropdown-style.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <CustomButton>GO TO CHECK OUT</CustomButton>
  </div>
);

export default CartDropdown;
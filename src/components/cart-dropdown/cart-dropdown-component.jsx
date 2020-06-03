import React from "react";
import { connect } from "react-redux";
import CustomButton from "../buttons/custom-button-component";
import "./cart-dropdown-style.scss";
import CartItems from "../cart-items/cart-item-component";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItems key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECK OUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);

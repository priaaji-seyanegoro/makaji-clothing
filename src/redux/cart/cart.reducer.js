import CartActionType from "./cart.type";
import { addItemToCart } from "./cart.utils";
const INTIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_HIDDEN_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case CartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;

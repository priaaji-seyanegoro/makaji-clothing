import CartActionType from "./cart.type";

export const toggleCartHidden = () => ({
  type: CartActionType.TOGGLE_HIDDEN_CART,
});

export const addItem = (item) => ({
  type: CartActionType.ADD_ITEM,
  payload: item,
});
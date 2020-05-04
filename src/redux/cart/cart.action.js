import { CartActionType } from "./cart.type";

export const toggleCartHidden = () => ({
  type: CartActionType.TOGGLE_HIDDEN_CART,
});

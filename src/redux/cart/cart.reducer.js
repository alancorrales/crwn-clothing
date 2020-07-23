import { CartActionTypes } from "./cart.types";
import { addItemToCart, increaseCartItemQuantity, decreaseCartItemQuantity } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, payload)
            }
        case CartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(({ id }) => id !== payload.id)
            }
        case CartActionTypes.INCREASE_CART_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: increaseCartItemQuantity(state.cartItems, payload)
            }
        case CartActionTypes.DECREASE_CART_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: decreaseCartItemQuantity(state.cartItems, payload)
            }
        default:
            return state;
    }
}

export default cartReducer;
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";

const initialProducts =  [];

export const productReducer = (state = initialProducts, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

const initialCart = [];

export const cartReducer = (state = initialCart, action) => {
    switch (action.type) {
        case ADD_TO_CART:
        return [...state, action.payload];
        case REMOVE_FROM_CART:
            return state.filter(item => item.id !== action.payload.id);
            default:
                return state;
    }
}
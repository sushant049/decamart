import { actions as actionType } from "../actions/actionTypes";

const InitialState = {
    allProducts: [],
    cartItems: [],
    loggedUser: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = InitialState, { type, payload }) => {
    switch (type) {
        case actionType.FETCH_ALL_PRODUCTS: {
            return {
                ...state,
                allProducts: payload
            }
        }

        case actionType.ADD_TO_CART: {
            const existItem = state?.cartItems?.find((item) => 
                item.id === payload.id
            );

            if(existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) =>
                        item.id === payload.id
                        ? { ...existItem, quantity: existItem.quantity + 1 }
                        : item
                    )
                }
            } else {
                return {
                    ...state,
                    cartItems: [
                        ...state.cartItems, 
                        { ...payload, quantity: 1 }
                    ],
                  };
            }
        }

        case actionType.REMOVE_FROM_CART: {
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== payload)
            }
        }

        case actionType.CART_INCREMENT: {
            let increasedCart = state.cartItems.map((item) => {
                if (item.id === payload) {
                  item.quantity++;
                }
                return item;
              });
            return {
                ...state,
                cartItems: increasedCart
            }
        }

        case actionType.CART_DECREMENT: {
            let decreasedCart = state.cartItems.map((item) => {
                if (item.id === payload) {
                  item.quantity--
                }
                return item;
              });
            return {
                ...state,
                cartItems: decreasedCart
            }
        }

        default: {
            return { ...state }
        }
    }
};
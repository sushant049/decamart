import { actions as actionType } from "./actionTypes";

export const fetchAllItems = () => async (dispatch) => {
//   await dispatch(initLoader(true));
//   const articles = await ExternalServices.getLatestArticles();
//   dispatch({
//     type: actionType.FETCH_LATEST_ARTICLES,
//     payload: articles,
//   });
//   await dispatch(initLoader(false));
};

export const addToCart = (item) => async (dispatch) => {
    dispatch({
        type: actionType.ADD_TO_CART,
        payload: item
    });
}

export const removeFromCart = (itemID) => async (dispatch) => {
    dispatch({
        type: actionType.REMOVE_FROM_CART,
        payload: itemID
    });
}

export const increaseItem = (itemID) => async (dispatch) => {
    dispatch({
        type: actionType.CART_INCREMENT,
        payload: itemID
    });
}

export const decreaseItem = (itemID) => async (dispatch) => {
    dispatch({
        type: actionType.CART_DECREMENT,
        payload: itemID
    });
}
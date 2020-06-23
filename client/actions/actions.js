import * as types from "../constants/actionTypes";

//Action creators are functions, that return an action object, which another later function (dispatch) brings to every reducer

export const addPostcard = (recipientName) => ({
    type: types.ADD_POSTCARD,
    payload: recipientName
});
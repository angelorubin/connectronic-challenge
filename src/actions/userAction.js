import { ADD_USER } from "../constants/actionTypes";

export const addUser = (dispatch, payload) => {
  dispatch({
    type: ADD_USER,
    payload
  });
};

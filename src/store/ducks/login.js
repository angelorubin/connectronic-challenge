import axios from "axios";
const apiUrl = "http://localhost:3001";

/**
 * Action Types
 */
export const Types = {
  LOGIN_STARTED: "LOGIN_STARTED",
  LOGIN_COMPLETED: "LOGIN_COMPLETED",
  LOGIN_FAILED: "LOGIN_FAILED"
};

/**
 * Action Creators
 */
export const fetchLogin = (...userData) => {
  return dispatch => {
    //nameless functions
    // Initial action dispatched
    dispatch({ type: Types.LOGIN_STARTED });
    // Return promise with success and failure actions
    return axios
      .get(`${apiUrl}/users/1`)
      .then(
        user => dispatch({ type: Types.LOGIN_COMPLETED, user }),
        error => dispatch({ type: Types.LOGIN_FAILED, error })
      );
  };
};

/**
 * Reducer
 */
export const INITIAL_STATE = {
  token: null,
  loading: false,
  error: null,
  user: [],
  snackbar: false
};

export const login = (state = INITIAL_STATE, action) => {
  if (action.type === Types.LOGIN_STARTED) {
    return (state = {
      ...state,
      loading: true
    });
  }
  if (action.type === Types.LOGIN_COMPLETED) {
    return (state = {
      ...state,
      user: [action.user.data],
      loading: false,
      token: action.user.data.token
    });
  }
  if (action.type === Types.LOGIN_FAILED) {
    // console.log(action.error);
    return (state = {
      ...state,
      error: action.error,
      loading: false,
      snackbar: true
    });
  }
  return state;
};

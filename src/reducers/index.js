import { combineReducers } from "redux";

import { userReducer } from "./userReducer";
import { postReducer } from "./postReducer";

export const reducers = combineReducers({
  users: userReducer,
  posts: postReducer
});

import { combineReducers } from "redux";

import { userReducer } from "./userReducer";
import { postReducer } from "./postReducer";
import { categoriesReducer } from "./categoriesReducer";

export const reducers = combineReducers({
  users: userReducer,
  posts: postReducer,
  categories: categoriesReducer
});

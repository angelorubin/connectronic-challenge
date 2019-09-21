import { combineReducers } from "redux";

import { categories } from "./categories";
import { login } from "./login";

export const reducers = combineReducers({
  categories,
  login
});

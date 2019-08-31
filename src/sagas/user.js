import { http } from "../config";
import { takeEvery } from "redux-saga/effects";
import { ADD_USER } from "../constants/actionTypes";

export function* addUser(user) {
  yield takeEvery(ADD_USER, action => {
    http.post("users", user).then(res => console.log(res));
  });
}

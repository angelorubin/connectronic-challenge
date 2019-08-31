import { ADD_POST } from "../constants/actionTypes";

const INITIAL_STATE = {
  posts: [
    { userId: 1, postId: 1, message: "lorem ispum dolor simet" },
    { userId: 1, postId: 2, message: "lorem ispum dolor simet" }
  ]
};

export const postReducer = (state = INITIAL_STATE, action) => {
  if (action.type === ADD_POST) {
    return (state = [...state, action.posts]);
  }
  return state;
};

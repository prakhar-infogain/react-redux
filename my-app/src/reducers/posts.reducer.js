import constants from "../constants";

const initialState = {
  postsList: []
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case constants.FETCH_ALL_POSTS:
      newState.postsList = action.payload;
      return newState;

    default:
      return state;
  }
};
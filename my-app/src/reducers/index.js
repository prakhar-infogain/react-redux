import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import postsReducer from "./posts.reducer";


const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    postsReducer
  });

export default rootReducer;
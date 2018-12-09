import { applyMiddleware, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import logger from "redux-logger";
import history from "../core/history";
import rootReducer from "../reducers";

export default createStore(
  rootReducer(history),

  process.env.NODE_ENV === "production"
    ? applyMiddleware(routerMiddleware(history), thunk)
    : (window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(routerMiddleware(history), thunk, logger))
);

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window != "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const middlewares = [thunk];

const enhancers =
  process.env.NEXT_PUBLIC_ENV !== "production"
    ? composeEnhancers(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancers);

export default store;

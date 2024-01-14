import logger from "redux-logger";
import { applyMiddleware, combineReducers, createStore } from "redux";
import todoReducer from "./TodoReducer";

const log = (store) => (next) => (action) => {
  console.group(
    `%c-------------------------------
logger
-------------------------------`,
    "color: red; font-size: 20px;"
  );
  console.log(store.getState());

  console.log(action);
  next(action);
  console.log(store.getState());
  console.groupEnd();
  console.log("-------------------------------");
};

const store = createStore(
  combineReducers({ todoReducer }),
  applyMiddleware(logger)
);

export default store;

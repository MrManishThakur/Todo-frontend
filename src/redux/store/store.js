import { configureStore, combineReducers } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import { todosReducers } from "../reducers/todosReducers";
import { tabReducer } from "../reducers/tabReducer";

const reducers = combineReducers({
  todos: todosReducers,
  currentTab: tabReducer
});
const middleware = [thunk];

const store = configureStore(
  { reducer: reducers },
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

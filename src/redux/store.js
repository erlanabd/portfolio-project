import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import skillReducer from "./skills/reducer";

const { combineReducers, createStore, applyMiddleware } = require("redux");

const rootReducer = combineReducers({
  skills: skillReducer,
  projects: [],
  experiences: [],
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

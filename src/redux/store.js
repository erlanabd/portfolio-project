import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import experienceReducer from "./experiences/reducer";
import projectReducer from "./projects/reducer";
import skillReducer from "./skills/reducer";

const { combineReducers, createStore, applyMiddleware } = require("redux");

const rootReducer = combineReducers({
  skills: skillReducer,
  projects: projectReducer,
  experiences: experienceReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

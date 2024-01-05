import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import educationReducer from "./education/reducer";
import experienceReducer from "./experiences/reducer";
import projectReducer from "./projects/reducer";
import skillReducer from "./skills/reducer";
import themeReducer from "./theme/reducer";

const { combineReducers, createStore, applyMiddleware } = require("redux");

const rootReducer = combineReducers({
  skills: skillReducer,
  projects: projectReducer,
  experiences: experienceReducer,
  education: educationReducer,
  theme: themeReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

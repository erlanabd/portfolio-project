import { CHANGE_THEME } from "./types";

const themeReducer = (state = false, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;

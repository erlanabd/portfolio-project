import {
  GET_EDUCATION_ERROR,
  GET_EDUCATION_REQUEST,
  GET_EDUCATION_SUCCESS,
} from "./types";

const initialState = {
  isFetching: false,
  list: [],
  error: null,
};

const educationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EDUCATION_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_EDUCATION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload,
      };
    case GET_EDUCATION_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default educationReducer;

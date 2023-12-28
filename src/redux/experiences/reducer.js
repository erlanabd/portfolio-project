import {
  GET_EXPERIENCES_ERROR,
  GET_EXPERIENCES_REQUEST,
  GET_EXPERIENCES_SUCCESS,
} from "./types";

const initialState = {
  isFetching: false,
  list: [],
  data: null,
  error: null,
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_EXPERIENCES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload,
      };
    case GET_EXPERIENCES_ERROR:
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

export default experienceReducer;

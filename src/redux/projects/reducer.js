import {
  GET_PROJECTS_ERROR,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECT_BY_ID_ERROR,
  GET_PROJECT_BY_ID_REQUEST,
  GET_PROJECT_BY_ID_SUCCESS,
} from "./types";

const initialState = {
  isFetching: false,
  list: [],
  data: null,
  err: null,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isFetching: false,
      };
    case GET_PROJECTS_ERROR:
      return {
        ...state,
        isFetching: false,
        err: action.payload,
      };
    case GET_PROJECT_BY_ID_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_PROJECT_BY_ID_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case GET_PROJECT_BY_ID_ERROR:
      return {
        ...state,
        isFetching: false,
        err: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default projectReducer;

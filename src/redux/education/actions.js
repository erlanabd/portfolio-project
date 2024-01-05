import {
  GET_EDUCATION_ERROR,
  GET_EDUCATION_REQUEST,
  GET_EDUCATION_SUCCESS,
} from "./types";

const getEducationRequest = () => ({
  type: GET_EDUCATION_REQUEST,
});

const getEducationSuccess = (data) => ({
  type: GET_EDUCATION_SUCCESS,
  payload: data,
});

const getEducationError = (error) => ({
  type: GET_EDUCATION_ERROR,
  payload: error,
});

export { getEducationRequest, getEducationSuccess, getEducationError };

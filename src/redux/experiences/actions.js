import {
  GET_EXPERIENCES_ERROR,
  GET_EXPERIENCES_REQUEST,
  GET_EXPERIENCES_SUCCESS,
} from "./types";

const getExperiencesRequest = () => ({
  type: GET_EXPERIENCES_REQUEST,
});
const getExperiencesSucces = (data) => ({
  type: GET_EXPERIENCES_SUCCESS,
  payload: data,
});
const getExperiencesError = (error) => ({
  type: GET_EXPERIENCES_ERROR,
  payload: error,
});

export { getExperiencesRequest, getExperiencesSucces, getExperiencesError };

import {
  GET_EXPERIENCES_ERROR,
  GET_EXPERIENCES_REQUEST,
  GET_EXPERIENCES_SUCCESS,
  GET_EXPERIENCE_BY_NAME_ERROR,
  GET_EXPERIENCE_BY_NAME_REQUEST,
  GET_EXPERIENCE_BY_NAME_SUCCESS,
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

const getExperienceRequest = () => ({
  type: GET_EXPERIENCE_BY_NAME_REQUEST,
});
const getExperienceSuccess = (data) => ({
  type: GET_EXPERIENCE_BY_NAME_SUCCESS,
  payload: data,
});
const getExperienceError = (error) => ({
  type: GET_EXPERIENCE_BY_NAME_ERROR,
  payload: error,
});

export {
  getExperiencesRequest,
  getExperiencesSucces,
  getExperiencesError,

  
  getExperienceRequest,
  getExperienceSuccess,
  getExperienceError,
};

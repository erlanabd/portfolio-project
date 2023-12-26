import {
  GET_PROJECTS_ERROR,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
} from "./types";

const getProjectsRequest = () => ({
  type: GET_PROJECTS_REQUEST,
});

const getProjectsSuccess = (data) => ({
  type: GET_PROJECTS_SUCCESS,
  payload: data,
});

const getProjectsError = (err) => ({
  type: GET_PROJECTS_ERROR,
  payload: err,
});

export { getProjectsRequest, getProjectsSuccess, getProjectsError };

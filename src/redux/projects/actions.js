import {
  GET_PROJECTS_ERROR,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECT_BY_ID_REQUEST,
  GET_PROJECT_BY_ID_SUCCESS,
  GET_PROJECT_BY_ID_ERROR,
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



const getProjectRequest = () => ({
  type: GET_PROJECT_BY_ID_REQUEST,
});

const getProjectSuccess = (data) => ({
  type: GET_PROJECT_BY_ID_SUCCESS,
  payload: data,
});

const getProjectError = (err) => ({
  type: GET_PROJECT_BY_ID_ERROR,
  payload: err,
});

export {
  getProjectsRequest,
  getProjectsSuccess,
  getProjectsError,
  

  getProjectRequest,
  getProjectSuccess,
  getProjectError,
};

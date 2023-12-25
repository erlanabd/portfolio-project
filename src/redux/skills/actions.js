import {
  GET_SKILLS_REQUEST,
  GET_SKILLS_SUCCESS,
  GET_SKILLS_ERROR,
  GET_SKILL_BY_SLUG_REQUEST,
  GET_SKILL_BY_SLUG_SUCCESS,
  GET_SKILL_BY_SLUG_ERROR,
} from "./types";

const getSkillsRequest = () => ({
  type: GET_SKILLS_REQUEST,
});

const getSkillsSuccess = (data) => ({
  type: GET_SKILLS_SUCCESS,
  payload: data,
});

const getSkillsError = (err) => ({
  type: GET_SKILLS_ERROR,
  payload: err,
});

const getSkillRequest = () => ({
  type: GET_SKILL_BY_SLUG_REQUEST,
});

const getSkillSuccess = (data) => ({
  type: GET_SKILL_BY_SLUG_SUCCESS,
  payload: data,
});

const getSkillError = (err) => ({
  type: GET_SKILL_BY_SLUG_ERROR,
  payload: err,
});




export {
  getSkillsError,
  getSkillsRequest,
  getSkillsSuccess,

  
  getSkillRequest,
  getSkillSuccess,
  getSkillError,
};

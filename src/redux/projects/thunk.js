import { PROJECTS_DATA, PROJECT_BY_ID } from "../../pages/Projects/mock_data";
import {
  getProjectsRequest,
  getProjectsSuccess,
  getProjectsError,


  getProjectRequest,
  getProjectSuccess,
  getProjectError,
} from "./actions";

const fetchProjects = () => {
  return async (dispatch) => {
    dispatch(getProjectsRequest());
    try {
      // const req = await fetch('')
      // const data = await req.json()
      // TODO: remove PROJECT_DATA when backend will be ready
      dispatch(getProjectsSuccess(PROJECTS_DATA));
    } catch (e) {
      dispatch(getProjectsError(e));
    } finally {
    }
  };
};

const fetchProjectById = (id) => {
  return async (dispatch) => {
    dispatch(getProjectRequest());
    try {
      // const req = await fetch('')
      // const data = await req.json()
      // TODO: remove PROJECT_DATA when backend will be ready
      dispatch(getProjectSuccess(PROJECT_BY_ID(id)));
    } catch (e) {
      dispatch(getProjectError(e));
    } finally {
    }
  };
};

export default { fetchProjects, fetchProjectById };

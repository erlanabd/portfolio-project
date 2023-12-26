import { PROJECTS_DATA } from "../../pages/Projects/mock_data";
import {
  getProjectsError,
  getProjectsRequest,
  getProjectsSuccess,
} from "./actions";

const fetchProjects = () => {
  return async (dispatch) => {
    dispatch(getProjectsRequest);
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

export default { fetchProjects };

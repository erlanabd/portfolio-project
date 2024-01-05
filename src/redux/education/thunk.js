import { EDUCATION_DATA } from "../../pages/Education/mock_data";
import {
  getEducationError,
  getEducationRequest,
  getEducationSuccess,
} from "./actions";

const fetchEducation = () => {
  return async (dispatch) => {
    dispatch(getEducationRequest());
    try {
      // const req = await fetch('')
      // const data = await req.json()
      // TODO: remove EXPERIENCE_DATA when backend will be ready
      dispatch(getEducationSuccess(EDUCATION_DATA));
    } catch (e) {
      dispatch(getEducationError(e));
    } finally {
    }
  };
};

export default { fetchEducation };

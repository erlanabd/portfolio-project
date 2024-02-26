import {
  getSkillsRequest,
  getSkillsSuccess,
  getSkillsError,
  getSkillRequest,
  getSkillSuccess,
  getSkillError,
} from "./actions";
import {
  SHORT_SKILL_BY_SLUG,
  SKILLS_DATA,
} from "../../pages/Skills/mock_data";

const fetchSkills = () => {
  return async (dispatch) => {
    dispatch(getSkillsRequest());
    try {
      // const req = await fetch('')
      // const data = await req.json()
      dispatch(getSkillsSuccess(SKILLS_DATA));
    } catch (e) {
      dispatch(getSkillsError(e));
    } finally {
    }
  };
};

const fetchSkillBySlug = (slug) => {
  return async (dispatch) => {
    dispatch(getSkillRequest());
    try {
      // const req = await fetch('')
      // const data = await req.json()
      dispatch(getSkillSuccess(SHORT_SKILL_BY_SLUG(slug)));
    } catch (e) {
      dispatch(getSkillError(e));
    } finally {
    }
  };
};


export default { fetchSkills, fetchSkillBySlug };

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../../components/search-bar";
import SkillCard from "./skill-card";
import styles from "./styles.module.scss";
import skillsOperation from "../../redux/skills/thunk";

const Skills = () => {
  const skills = useSelector((state) => state.skills.list);
  const isLoading = useSelector((state) => state.skills.isFetching);

  const dispatch = useDispatch();

  const { fetchSkills } = skillsOperation;

  useEffect(() => {
    dispatch(fetchSkills());
  }, []);

  if (isLoading) {
    return <div>loading ...</div>;
  }
  
  return (
    <section className={styles["skills-page"]}>
      <SearchBar title="Skills" />
      <div className={styles["skills-list"]}>
        {skills.map((skill, idx) => {
          return (
            <Link to={`/skills/${skill.name}`} key={skill.id}>
              <SkillCard
                key={skill.id}
                title={skill.label}
                image={skill.image}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

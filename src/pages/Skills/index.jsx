import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../../components/search-bar";
import SkillCard from "./skill-card";
import styles from "./styles.module.scss";
import skillsOperation from "../../redux/skills/thunk";

const Skills = () => {
  const skills = useSelector((state) => state.skills.list);
  const isLoading = useSelector((state) => state.skills.isFetching);
  const [inputValue, setInputValue] = useState("");
  const filteredSkills = skills.filter((skill) => {
    const inputLowerCase = inputValue.toLocaleLowerCase();
    if (inputValue === "") {
      return skill;
    } else {
      return skill.label.toLowerCase().includes(inputLowerCase);
    }
  });

  let inputHandler = (value) => {
    setInputValue(value);
  };

  const dispatch = useDispatch();

  const { fetchSkills } = skillsOperation;

  useEffect(() => {
    dispatch(fetchSkills());
  }, []);

  if (isLoading) {
    return <div>loading ...</div>;
  }

  const renderFilteredSkills = (skill, idx) => {
    return (
      <Link to={`/skills/${skill.name}`} key={skill.id}>
        <SkillCard key={skill.id} title={skill.label} image={skill.image} />
      </Link>
    );
  };

  return (
    <section className={styles["skills-page"]}>
      <SearchBar value={inputValue} onChange={inputHandler} title="Skills" />
      <div className={styles["skills-list"]}>
        {filteredSkills.map(renderFilteredSkills)}
      </div>
      <div className={styles["empty-skills-wrap"]}>
        {filteredSkills.length === 0 && (
          <div className={styles["empty-skills"]}>
            <i className={styles["icon"]}></i>
            <span className={styles["text"]}>Could not find anything</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;

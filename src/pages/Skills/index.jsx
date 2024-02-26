import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../../components/search-bar";
import SkillCard from "./skill-card";
import skillsOperation from "../../redux/skills/thunk";
import EmptyList from "../../components/empty-list";
import styles from "./styles.module.scss";

const Skills = () => {
  const skills = useSelector((state) => state.skills.list);
  const theme = useSelector((state) => state.theme);
  const isLoading = useSelector((state) => state.skills.isFetching);
  const dispatch = useDispatch();

  const { fetchSkills } = skillsOperation;
  const [inputValue, setInputValue] = useState("");
  const filteredSkills = skills.filter((skill) => {
    if (inputValue === "") {
      return skill;
    } else {
      return skill.label.toLowerCase().includes(inputValue);
    }
  });

  useEffect(() => {
    dispatch(fetchSkills());
  }, []);

  const inputHandler = (value) => {
    setInputValue(value.toLowerCase());
    localStorage.setItem("inputSkillsValue", value);
  };

  const renderFilteredSkills = (skill, idx) => {
    return (
      <Link to={`/skills/${skill.name}`} key={skill.id}>
        <SkillCard
          key={skill.id}
          theme={theme}
          title={skill.label}
          image={skill.image}
        />
      </Link>
    );
  };

  if (isLoading) {
    return <div>loading ...</div>;
  }

  return (
    <section className={styles["skills-page"]}>
      <SearchBar value={inputValue} onChange={inputHandler} title="Skills" />
      <div className={styles["skills-list"]}>
        {filteredSkills.map(renderFilteredSkills)}
      </div>
      {inputValue && filteredSkills.length === 0 && (
        <EmptyList
          icon="false"
          theme={theme}
          text="Could not find anything ..."
        />
      )}
    </section>
  );
};

export default Skills;

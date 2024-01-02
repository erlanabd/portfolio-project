import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../../components/search-bar";
import SkillCard from "./skill-card";
import styles from "./styles.module.scss";
import skillsOperation from "../../redux/skills/thunk";
import EmptyList from "../../components/empty-list";

const Skills = () => {
  const skills = useSelector((state) => state.skills.list);
  const isLoading = useSelector((state) => state.skills.isFetching);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const { fetchSkills } = skillsOperation;
  const filteredSkills = skills.filter((skill) => {
    if (inputValue === "") {
      return skill;
    } else {
      return skill.label.toLowerCase().includes(inputValue.toLowerCase());
    }
  });

  useEffect(() => {
    dispatch(fetchSkills());
    setInputValue(localStorage.getItem("inputValue"));
  }, []);

  if (isLoading) {
    return <div>loading ...</div>;
  }

  const inputHandler = (value) => {
    setInputValue(value);
    localStorage.setItem("inputValue", value);
  };
  
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
      {filteredSkills.length === 0 && <EmptyList />}
    </section>
  );
};

export default Skills;

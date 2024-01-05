import React, { useEffect, useState } from "react";
import EmptyList from "../../components/empty-list";
import searchIcon from "./../../assets/icons/search-in-search-page.svg";
import SearchBar from "../../components/search-bar";
import { SKILLS_DATA } from "../Skills/mock_data";
import cubeIcon from "./../../assets/icons/cube.svg";
import skillsIcon from "./../../assets/icons/skills-icon.svg";
import experienceIcon from "./../../assets/icons/experience-icon.svg";
import Chip from "../../components/chip";
import { PROJECTS_DATA } from "../Projects/mock_data";
import { EXPERIENCE_DATA } from "../Experiences/mock_data";
import styles from "./styles.module.scss";

const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (inputValue === "") {
      return null;
    } else {
      return skill.label.toLowerCase().includes(inputValue.toLocaleLowerCase());
    }
  });

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (inputValue === "") {
      return null;
    } else {
      return project.name
        .toLowerCase()
        .includes(inputValue.toLocaleLowerCase());
    }
  });

  const filteredExperiences = EXPERIENCE_DATA.filter((experience) => {
    if (inputValue === "") {
      return null;
    } else {
      return experience.title
        .toLowerCase()
        .includes(inputValue.toLocaleLowerCase());
    }
  });

  useEffect(() => {
    setInputValue(localStorage.getItem("inputSkillsValue"));
  }, []);

  const inputHandler = (value) => {
    setInputValue(value.toLowerCase());
    localStorage.setItem("inputSkillsValue", value);
  };
  return (
    <div>
      <SearchBar value={inputValue} onChange={inputHandler} title="Search" />
      <div className={styles["search-elems-wrap"]}>
        {filteredSkills.map((skill) => {
          return (
            <div className={styles["chip"]}>
              <Chip
                asLink={`/skills/${skill.name}`}
                key={skill.id}
                icon={skillsIcon}
                label={skill.label}
              />
            </div>
          );
        })}
        {filteredProjects.map((project) => {
          return (
            <div className={styles["chip"]}>
              <Chip
                key={project.id}
                asLink={`/projects/${project.id}`}
                icon={cubeIcon}
                label={project.name}
              />
            </div>
          );
        })}
        {filteredExperiences.map((experience) => {
          return (
            <div className={styles["chip"]}>
              <Chip
                asLink={`/experiences/${experience.name}`}
                key={experience.id}
                icon={experienceIcon}
                label={experience.title}
              />
            </div>
          );
        })}
      </div>
      {!inputValue && (
        <EmptyList
          icon={searchIcon}
          text="Try typing something..."
          className={styles["empty-list"]}
        />
      )}
      {filteredSkills.length === 0 &&
        filteredProjects.length === 0 &&
        filteredExperiences.length === 0 &&
        inputValue && (
          <EmptyList
            icon={cubeIcon}
            text="Oops ! Nothing to show !"
            className={styles["empty-list"]}
          />
        )}
    </div>
  );
};

export default Search;

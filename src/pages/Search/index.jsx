import React, { useEffect, useState } from "react";
import EmptyList from "../../components/empty-list";
import SearchBar from "../../components/search-bar";
import { SKILLS_DATA } from "../Skills/mock_data";
import Chip from "../../components/chip";
import { PROJECTS_DATA } from "../Projects/mock_data";
import { EXPERIENCE_DATA } from "../Experiences/mock_data";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";

const Search = () => {
  const theme = useSelector((state) => state.theme);
  const [inputValue, setInputValue] = useState("");

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (inputValue === "") {
      return null;
    } else {
      return skill.label.toLowerCase().includes(inputValue.toLocaleLowerCase());
    }
  });

  const inputHandler = (value) => {
    setInputValue(value.toLowerCase());
    localStorage.setItem("inputSkillsValue", value);
  };

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

  return (
    <section>
      <SearchBar value={inputValue} onChange={inputHandler} title="Search" />
      <div className={styles["search-elems-wrap"]}>
        {filteredSkills.map((skill) => {
          return (
            <div className={styles["chip"]}>
              <Chip
                theme={theme}
                asLink={`/skills/${skill.name}`}
                key={skill.id}
                icon={skill.image}
                label={skill.label}
              />
            </div>
          );
        })}
        {filteredProjects.map((project) => {
          return (
            <div className={styles["chip"]}>
              <Chip
                theme={theme}
                key={project.id}
                asLink={`/projects/${project.id}`}
                icon={project.icon}
                label={project.name}
              />
            </div>
          );
        })}
        {filteredExperiences.map((experience) => {
          return (
            <div className={styles["chip"]}>
              <Chip
                exp="true"
                theme={theme}
                asLink={`/experiences/${experience.name}`}
                key={experience.id}
                icon={experience.image}
                label={experience.title}
              />
            </div>
          );
        })}
      </div>
      {!inputValue && (
        <EmptyList
          icon={"search"}
          theme={theme}
          text="Try typing something..."
          className={styles["empty-list"]}
        />
      )}
      {filteredSkills.length === 0 &&
        filteredProjects.length === 0 &&
        filteredExperiences.length === 0 &&
        inputValue && (
          <EmptyList
            icon={"false"}
            theme={theme}
            text="Oops ! Nothing to show !"
            className={styles["empty-list"]}
          />
        )}
    </section>
  );
};

export default Search;

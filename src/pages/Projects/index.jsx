import React from "react";
import Chip from "../../components/chip";
import SearchBar from "../../components/search-bar";
import ProjectCard from "./project-card";
import styles from "./styles.module.scss";
import { PROJECTS_DATA } from "./mock_data";

const Projects = () => {
  return (
    <div className={styles["project-wrap"]}>
      <SearchBar
        title="Projects"
        placeholder="Search..."
        onChange={(val) => console.log(val)}
      />
      <div className={styles["chips-wrap"]}>
        <Chip className={styles["chip"]} onClick label="Typescript" />
        <Chip
          asLink={"/skills/sass"}
          className={styles["chip"]}
          onClick
          label="Sass"
        />
        <Chip
          asLink={"/skills/svelte"}
          className={styles["chip"]}
          onClick
          label="Svelte"
        />
      </div>
      <div className={styles['cards-wrap']}>
        {PROJECTS_DATA.map((item) => {
          return <ProjectCard
          className={styles['card']}
          project={item} />;
        })}
      </div>
    </div>
  );
};
export default Projects;

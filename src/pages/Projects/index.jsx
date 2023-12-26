import React, { useEffect } from "react";
import Chip from "../../components/chip";
import SearchBar from "../../components/search-bar";
import ProjectCard from "./project-card";
import projectsOperation from "./../../redux/projects/thunk";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";

const Projects = () => {
  const projects = useSelector((state) => state.projects.list);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.projects.isFetching);

  const { fetchProjects } = projectsOperation;

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className={styles["project-wrap"]}>
      <SearchBar
        title="Projects"
        placeholder="Search..."
        onChange={(val) => console.log(val)}
      />
      <div className={styles["chips-wrap"]}>
        <Chip
          asLink={"/skills/ts"}
          className={styles["chip"]}
          onClick
          label="Typescript"
        />
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
      <div className={styles["cards-wrap"]}>
        {projects.map((item) => {
          return (
            <ProjectCard
              key={item.id}
              className={styles["card"]}
              project={item}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Projects;

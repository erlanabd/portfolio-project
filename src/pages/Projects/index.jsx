import React, { useEffect, useState } from "react";
import Chip from "../../components/chip";
import SearchBar from "../../components/search-bar";
import ProjectCard from "./project-card";
import projectsOperation from "./../../redux/projects/thunk";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import EmptyList from "../../components/empty-list";

const Projects = () => {
  const projects = useSelector((state) => state.projects.list);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.projects.isFetching);

  const { fetchProjects } = projectsOperation;
  const [inputValue, setInputValue] = useState("");

  const filteredProjects = projects.filter((project) => {
    if (inputValue === "") {
      return project;
    } else {
      return project.name
        .toLowerCase()
        .includes(inputValue);
    }
  });

  useEffect(() => {
    dispatch(fetchProjects());
    setInputValue(localStorage.getItem("inputProjectsValue"));
  }, []);

  const inputHandler = (value) => {
    setInputValue(value.toLowerCase());
    localStorage.setItem("inputProjectsValue", value);
  };

  const renderFilteredProjectCards = (item, idx) => {
    return (
      <ProjectCard key={item.id} className={styles["card"]} project={item} />
    );
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className={styles["project-wrap"]}>
      <SearchBar title="Projects" value={inputValue} onChange={inputHandler} />
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
        {filteredProjects.map(renderFilteredProjectCards)}
      </div>
      {filteredProjects.length === 0 && <EmptyList />}
    </div>
  );
};
export default Projects;

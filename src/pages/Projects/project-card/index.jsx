import React from "react";
import BoxLayout from "../../../components/box-layout";
import CardLink from "../../../components/card-link";
import Chip from "../../../components/chip";
import ChipIcon from "../../../components/chip-icon";
import styles from "./styles.module.scss";

import { Link } from "react-router-dom";
import { clsx } from "clsx";
import BoxTitle from "../../../components/box-title";

const ProjectCard = (props) => {
  const { project, className, theme } = props;

  const cardClasses = clsx({
    [className]: className,
  });
  const templateWrapClasses = clsx(styles["template-wrap"], {
    [styles["template-wrap-dark"]]: theme === "dark",
  });
  const bodyClasses = clsx(styles["body"], {
    [styles["body-dark"]]: theme === "dark",
  });

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Link
      key={project.id}
      className={cardClasses}
      to={`/projects/${project.id}`}
    >
      <BoxLayout theme={theme} className={styles["project-card-wrap"]}>
        <div className={styles["img-wrap"]}>
          <img src={project.icon} alt="Project" />
        </div>
        <BoxTitle className={styles["title-wrap"]}>
          <h6 className={styles["title"]}>{project.name}</h6>
          {project.links.map((link) => (
            <CardLink
              theme={theme}
              key={link.id}
              to={link.link}
              onClick={handleClick}
              label={link.label}
            />
          ))}
        </BoxTitle>
        <div className={bodyClasses}>
          <div className={templateWrapClasses}>
            <span className={styles["template-title"]}>Website Template</span>
            <span>1 day</span>
          </div>
          <p className={styles["description"]}>{project.el}</p>
          <div className={styles["chips-wrap"]}>
            <Chip
              theme={theme}
              className={styles["chip"]}
              onClick
              label="December 2023"
            />
            <Chip
              theme={theme}
              className={styles["chip"]}
              onClick
              label="now"
            />
          </div>
        </div>
        <div className={styles["chip-icon-wrap"]}>
          {project.skills.map((skill) => {
            return (
              <ChipIcon
                theme={theme}
                key={skill.id}
                className={styles["chip-icon"]}
                label={skill.label}
                to={`/skills/${skill.slug}`}
                icon={skill.image}
              />
            );
          })}
        </div>
      </BoxLayout>
    </Link>
  );
};

export default ProjectCard;

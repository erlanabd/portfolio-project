import React from "react";
import BoxLayout from "../../../components/box-layout";
import CardLink from "../../../components/card-link";
import Chip from "../../../components/chip";
import ChipIcon from "../../../components/chip-icon";
import styles from "./styles.module.scss";

import { Link } from "react-router-dom";
import { clsx } from "clsx";

const ProjectCard = (props) => {
  const { project, className } = props;
  const cardClasses = clsx({
    [className]: className,
  });
  return (
    <Link className={cardClasses} to={`/projects/${project.id}`}>
      <BoxLayout className={styles["project-card-wrap"]}>
        <div className={styles["img-wrap"]}>
          <img src={project.icon} alt="Project" />
        </div>
        <div className={styles["title-wrap"]}>
          <h6 className={styles["title"]}>{project.name}</h6>
          {project.links.map((link) => (
            <CardLink to={link.link} label={link.label} />
          ))}
        </div>
        <div className={styles["body"]}>
          <div className={styles["template-wrap"]}>
            <span className={styles["template-title"]}>Website Template</span>
            <span>1 day</span>
          </div>
          <p className={styles["description"]}>{project.el}</p>
          <div className={styles["chips-wrap"]}>
            <Chip className={styles["chip"]} onClick label="December 2023" />
            <Chip className={styles["chip"]} onClick label="now" />
          </div>
        </div>
        <div className={styles["chip-icon-wrap"]}>
          {project.skills.map((skill) => {
            return (
              <ChipIcon
                className={styles["chip-icon"]}
                label={skill.label}
                to={`/skills/${skill.slug}`}
                icon={skill.image}
              />
              );
            })}
            {console.log(project.skills)}
        </div>
      </BoxLayout>
    </Link>
  );
};

export default ProjectCard;

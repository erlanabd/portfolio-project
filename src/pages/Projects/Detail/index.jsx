import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import projectsOperation from "./../../../redux/projects/thunk";
import Chip from "../../../components/chip";
import withoutScreenshotImg from "./../../../assets/images/without-screenshot.svg";
import linkIcon from "./../../../assets/icons/paper-clip.svg";
import styles from "./styles.module.scss";

const DetailProject = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.projects.data);
  const project = {
    ...data,
  };

  console.log(data);

  const dispatch = useDispatch();
  const { fetchProjectById } = projectsOperation;

  useEffect(() => {
    dispatch(fetchProjectById(id));
  }, []);

  const renderScreenshots = () => {
    if (project.screenshots) {
      return (
        project &&
        project.screenshots &&
        project.screenshots.map((screenshot) => {
          return (
            <div className={styles["screenshot-container"]}>
              <img
                className={styles["screenshot"]}
                src={screenshot.image}
                alt="screenshot"
              />
            </div>
          );
        })
      );
    }
  };

  return (
    <div key={project.id} className={styles["detail-wrap"]}>
      <div className={styles["title-box"]}>
        <div className={styles["title-wrap"]}>
          <h2 className={styles["title"]}>{project.name}</h2>
          <span className={styles["text"]}>Website Template</span>
          <div className={styles["image-wrap"]}>
            <img src={project.icon} alt="Skill logo" />
          </div>
          <div className={styles["border"]}></div>
        </div>
        <div className={styles["chips-wrap"]}>
          <Chip
            className={styles["chip"]}
            marginBottom
            icon={linkIcon}
            target="_blank"
            label="Github"
            asLink="https://github.com"
          />
          <div className={styles["skills-wrap"]}>
            {project &&
              project.skills &&
              project.skills.map((skill) => {
                return (
                  <Chip
                    className={styles["chip"]}
                    icon={skill.image}
                    label={skill.label}
                    asLink={`/skills/${skill.slug}`}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <div className={styles["description-wrap"]}>
        <p className={styles["description"]}>{project.description}</p>
      </div>
      <div className={styles["screenshot-images-wrap"]}>
        {renderScreenshots()}
      </div>
      {project &&
        (!project.screenshots || project.screenshots.length === 0) && (
          <div className={styles["screenshots-wrap"]}>
            <img src={withoutScreenshotImg} alt="Screenshot" />
            <div className={styles["screenshots-text"]}>
              <p>No screenshot</p>
            </div>
          </div>
        )}
    </div>
  );
};

export default DetailProject;

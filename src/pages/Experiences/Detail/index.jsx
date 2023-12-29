import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import noImg from "./../../../assets/images/no-img.svg";
import Chip from "./../../../components/chip";
import experiencesOperation from "./../../../redux/experiences/thunk";
import styles from "./styles.module.scss";

const DetailExperience = () => {
  const { slug } = useParams();

  const experience = useSelector((state) => state.experiences.data);
  const experiencesDetail = {
    ...experience,
  };

  const { fetchExperienceByName } = experiencesOperation;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExperienceByName(slug));
  }, []);

  return (
    <div className={styles["detail-wrap"]}>
      <div className={styles["title-box"]}>
        <div className={styles["title-wrap"]}>
          <h2 className={styles["title"]}>{experiencesDetail.title}</h2>
          <div className={styles["date"]}>
            <span className={styles["date-text"]}>
              Self-employed · Home · Software Development
            </span>
          </div>
          <div className={styles["date"]}>
            <span className={styles["date-text"]}>
              {experiencesDetail.duration}
            </span>
          </div>
          <div className={styles["image-wrap"]}>
            <img src={noImg} alt="Skill logo" />
          </div>
          <div className={styles["border"]}></div>
        </div>
        <div className={styles["chips-wrap"]}>
          <div className={styles["skills-wrap"]}>
            {experiencesDetail &&
              experiencesDetail.skills &&
              experiencesDetail.skills.map((skill) => {
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
        <p className={styles["description"]}>{experiencesDetail.description}</p>
      </div>
    </div>
  );
};

export default DetailExperience;

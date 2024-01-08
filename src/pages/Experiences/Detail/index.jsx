import clsx from "clsx";
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
  const theme = useSelector((state) => state.theme);
  const experiencesDetail = {
    ...experience,
  };

  const { fetchExperienceByName } = experiencesOperation;
  const dispatch = useDispatch();

  const titleClasses = clsx(styles["title"], {
    [styles["title-dark"]]: theme === "dark",
  });
  const imgClasses = clsx(styles["image-wrap"], {
    [styles["img-dark"]]: theme === "dark",
  });
  const dateTextClasses = clsx(styles["date-text"], {
    [styles["date-text-dark"]]: theme === "dark",
  });
  const borderClasses = clsx(styles["border"], {
    [styles["border-dark"]]: theme === "dark",
  });
  const titleBoxClasses = clsx(styles["title-box"], {
    [styles["title-box-dark"]]: theme === "dark",
  });

  useEffect(() => {
    dispatch(fetchExperienceByName(slug));
  }, []);

  return (
    <div className={styles["detail-wrap"]}>
      <div className={titleBoxClasses}>
        <div className={styles["title-wrap"]}>
          <h2 className={titleClasses}>{experiencesDetail.title}</h2>
          <div className={styles["date"]}>
            <span className={dateTextClasses}>
              Self-employed · Home · Software Development
            </span>
          </div>
          <div className={styles["date"]}>
            <span className={dateTextClasses}>
              {experiencesDetail.duration}
            </span>
          </div>
          <div className={imgClasses}>
            <img src={noImg} alt="Skill logo" />
          </div>
          <div className={borderClasses}></div>
        </div>
        <div className={styles["chips-wrap"]}>
          <div className={styles["skills-wrap"]}>
            {experiencesDetail &&
              experiencesDetail.skills &&
              experiencesDetail.skills.map((skill) => {
                return (
                  <Chip
                  theme={theme}
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

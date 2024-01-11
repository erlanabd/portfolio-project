import clsx from "clsx";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BoxImage from "../../../components/box-image";
import BoxTitle from "../../../components/box-title";
import MainTitle from "../../../components/main-title";
import noImg from "./../../../assets/images/no-img.svg";
import Chip from "./../../../components/chip";
import experiencesOperation from "./../../../redux/experiences/thunk";
import styles from "./styles.module.scss";

const DetailExperience = () => {
  const { slug } = useParams();
  const theme = useSelector((state) => state.theme);
  const experience = useSelector((state) => state.experiences.data);
  const experiencesDetail = {
    ...experience,
  };
  const { fetchExperienceByName } = experiencesOperation;
  const dispatch = useDispatch();

  const dateTextClasses = clsx(styles["date-text"], {
    [styles["date-text-dark"]]: theme === "dark",
  });
  const borderClasses = clsx(styles["border"], {
    [styles["border-dark"]]: theme === "dark",
  });

  useEffect(() => {
    dispatch(fetchExperienceByName(slug));
  }, []);

  return (
    <section className={styles["detail-wrap"]}>
      <BoxTitle className={styles["title-box"]}>
        <div className={styles["title-wrap"]}>
          <MainTitle className={styles["title"]}>
            {experiencesDetail.title}
          </MainTitle>
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
          <BoxImage image={noImg} />
          <div className={borderClasses}></div>
        </div>
        <div className={styles["chips-wrap"]}>
          <div className={styles["skills-wrap"]}>
            {experiencesDetail &&
              experiencesDetail.skills &&
              experiencesDetail.skills.map((skill) => {
                return (
                  <Chip
                    key={skill.id}
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
      </BoxTitle>
      <div className={styles["description-wrap"]}>
        <p className={styles["description"]}>{experiencesDetail.description}</p>
      </div>
    </section>
  );
};

export default DetailExperience;

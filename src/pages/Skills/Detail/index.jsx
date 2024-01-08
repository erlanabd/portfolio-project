import React, { useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Chip from "../../../components/chip";
import skillsOperation from "./../../../redux/skills/thunk";
import styles from "./styles.module.scss";

const DetailSkill = () => {
  const { slug } = useParams();
  const data = useSelector((state) => state.skills.data);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const newData = {
    ...data,
  };

  const { fetchSkillBySlug } = skillsOperation;

  const titleClasses = clsx(styles["title"], {
    [styles["title-dark"]]: theme === "dark",
  });
  const imgClasses = clsx(styles["image-wrap"], {
    [styles["img-dark"]]: theme === "dark",
  });
  const titleDivClasses = clsx(styles["title-wrap"], {
    [styles["title-wrap-dark"]]: theme === "dark",
  });
  const descriptionClasses = clsx(styles["description"], {
    [styles["description-dark"]]: theme === "dark",
  });

  useEffect(() => {
    dispatch(fetchSkillBySlug(slug));
  }, []);

  return (
    <div key={newData.id} className={styles["detail-page-wrap"]}>
      <div className={titleDivClasses}>
        <h1 className={titleClasses}>{newData.label}</h1>
        <div className={imgClasses}>
          <img src={newData.image} alt="Skill logo" />
        </div>
      </div>
      <p className={descriptionClasses}>{newData.description}</p>
      <div className={styles["chips-wrap"]}>
        {newData &&
          newData.relatedExperience &&
          newData.relatedExperience.map((chip, idx) => {
            return (
              <Chip
                theme={theme}
                key={chip.id}
                className={styles["chip"]}
                icon={chip.image}
                label={chip.label}
                asLink={`/experiences/${chip.to}`}
              />
            );
          })}
      </div>
    </div>
  );
};

export default DetailSkill;

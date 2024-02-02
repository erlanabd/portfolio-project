import React, { useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Chip from "../../../components/chip";
import skillsOperation from "./../../../redux/skills/thunk";
import styles from "./styles.module.scss";
import MainTitle from "../../../components/main-title";
import BoxImage from "../../../components/box-image";
import BoxTitle from "../../../components/box-title";

const DetailSkill = () => {
  const { slug } = useParams();
  const data = useSelector((state) => state.skills.data);
  const theme = useSelector((state) => state.theme);
  const { fetchSkillBySlug } = skillsOperation;
  const dispatch = useDispatch();
  const newData = {
    ...data,
  };
  const descriptionClasses = clsx(styles["description"], {
    [styles["description-dark"]]: theme === "dark",
  });

  useEffect(() => {
    dispatch(fetchSkillBySlug(slug));
  }, []);

  return (
    <section key={newData.id} className={styles["detail-page-wrap"]}>
      <BoxTitle className={styles["promo-block"]}>
        <MainTitle className={styles["title"]}>{newData.label}</MainTitle>
        <BoxImage image={newData.image} label="skill-logo" />
      </BoxTitle>
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
                asLink={chip.to}
              />
            );
          })}
      </div>
    </section>
  );
};

export default DetailSkill;

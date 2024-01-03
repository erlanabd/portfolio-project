import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Chip from "../../../components/chip";
import skillsOperation from "./../../../redux/skills/thunk";
import styles from "./styles.module.scss";

const DetailSkill = () => {
  const { slug } = useParams();
  const data = useSelector((state) => state.skills.data);
  const dispatch = useDispatch();
  const newData = {
    ...data,
  };

  const { fetchSkillBySlug } = skillsOperation;

  useEffect(() => {
    dispatch(fetchSkillBySlug(slug));
  }, []);

  return (
    <div key={newData.id} className={styles["detail-page-wrap"]}>
      <div className={styles["title-wrap"]}>
        <h1 className={styles["title"]}>{newData.label}</h1>
        <div className={styles["image-wrap"]}>
          <img src={newData.image} alt="Skill logo" />
        </div>
      </div>
      <p className={styles["description"]}>{newData.description}</p>
      <div className={styles["chips-wrap"]}>
        {newData &&
          newData.relatedExperience &&
          newData.relatedExperience.map((chip, idx) => {
            return (
              <Chip
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

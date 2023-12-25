import React from "react";
import BoxLayout from "../../../components/box-layout";
import styles from "./styles.module.scss";


const SkillCard = (props) => {
  const {title, image} = props;
  return (
    <BoxLayout className={styles["skill-card"]}>
      <h3 className={styles["title"]}>{title}</h3>
      <div className={styles["image-wrap"]}>
        <img src={image} alt="Skill logo" />
      </div>
    </BoxLayout>
  );
};

export default SkillCard;

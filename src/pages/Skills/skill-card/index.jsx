import { clsx } from "clsx";
import React from "react";
import BoxLayout from "../../../components/box-layout";
import styles from "./styles.module.scss";

const SkillCard = (props) => {
  const { title, image, theme } = props;

  const titleClasses = clsx(styles["title"], {
    [styles["title-dark"]]: theme === "dark",
  });

  const imgClasses = clsx(styles["image-wrap"], {
    [styles["img-dark"]]: theme === "dark",
  });

  return (
    <BoxLayout theme={theme} className={styles["skill-card"]}>
      <h3 className={titleClasses}>{title}</h3>
      <div className={imgClasses}>
        <img  src={image} alt="Skill logo" />
      </div>
    </BoxLayout>
  );
};

export default SkillCard;

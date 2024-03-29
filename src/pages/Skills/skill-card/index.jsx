import { clsx } from "clsx";
import React from "react";
import BoxImage from "../../../components/box-image";
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
      <BoxImage className={imgClasses} image={image} />
    </BoxLayout>
  );
};

export default SkillCard;

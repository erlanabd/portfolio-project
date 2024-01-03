import { clsx } from "clsx";
import React from "react";
import emptyIcon from "./../../assets/icons/cube.svg";
import styles from "./styles.module.scss";

const EmptyList = (props) => {
  const {
    text = "Could not find anything ...",
    icon = emptyIcon,
    className,
  } = props;
  const listClasses = clsx(styles["empty-skills-wrap"], {
    [className]: className,
  });
  return (
    <div className={listClasses}>
      <div className={styles["empty-skills"]}>
        <img src={icon} alt="Empty List Icon" className={styles["icon"]}></img>
        <span className={styles["text"]}>{text}</span>
      </div>
    </div>
  );
};

export default EmptyList;

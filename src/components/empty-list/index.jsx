import React from "react";
import styles from "./styles.module.scss";

const EmptyList = (props) => {
  const {} = props;
  return (
    <div className={styles["empty-skills-wrap"]}>
      <div className={styles["empty-skills"]}>
        <i className={styles["icon"]}></i>
        <span className={styles["text"]}>Could not find anything ...</span>
      </div>
    </div>
  );
};

export default EmptyList;

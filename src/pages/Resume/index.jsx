import React from "react";
import Chip from "../../components/chip";
import styles from "./styles.module.scss";

const Resume = () => {
  return (
    <div className={styles["resume-wrap"]}>
      <h2 className={styles["title"]}>Resumé</h2>
      <Chip
        className={styles["chip"]}
        onClick
        label="Ooops! No CV at the moment"
      />
    </div>
  );
};

export default Resume;

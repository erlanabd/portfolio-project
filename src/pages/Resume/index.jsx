import { clsx } from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import Chip from "../../components/chip";
import styles from "./styles.module.scss";
import MainTitle from "../../components/main-title";

const Resume = () => {
  const theme = useSelector((state) => state.theme);


  return (
    <section className={styles["resume-wrap"]}>
      <MainTitle>Resume</MainTitle>
      <Chip
        theme={theme}
        className={styles["chip"]}
        onClick
        label="Ooops! No CV at the moment"
      />
    </section>
  );
};

export default Resume;

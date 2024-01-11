import { clsx } from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import Chip from "../../components/chip";
import styles from "./styles.module.scss";

const Resume = () => {
  const theme = useSelector((state) => state.theme);

  const titleClasses = clsx(styles["title"], {
    [styles["title-dark"]]: theme === "dark",
  });

  return (
    <section className={styles["resume-wrap"]}>
      <h2 className={titleClasses}>Resumé</h2>
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

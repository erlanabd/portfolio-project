import React from "react";
import SearchBar from "../../components/search-bar";
import ExperienceCard from "./experience-card";
import styles from "./styles.module.scss";

const Experiences = () => {
  return (
    <div className={styles["exp-wrap"]}>
      <SearchBar title="Experiences" />
      <div className={styles["exp-cards-wrap"]}>
        <ExperienceCard />
        <div className={styles["vertical-line"]}></div>
        <ExperienceCard className={styles["card-row"]} />
      </div>
    </div>
  );
};

export default Experiences;

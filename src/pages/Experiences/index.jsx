import React from "react";
import SearchBar from "../../components/search-bar";
import ExperienceCard from "./experience-card";
import { EXPERIENCE_DATA } from "./mock_data";
import styles from "./styles.module.scss";

const Experiences = () => {
  return (
    <div className={styles["exp-wrap"]}>
      <SearchBar title="Experiences" />
      <div className={styles["exp-cards-wrap"]}>
        {EXPERIENCE_DATA.map((card, idx) => {
          return (
            <ExperienceCard
              key={card.id}
              data={card}
              className={idx % 2 !== 0 ? styles["card-row"] : styles["card"]}
            />
          );
        })}
        <div className={styles["vertical-line"]}></div>
      </div>
    </div>
  );
};

export default Experiences;

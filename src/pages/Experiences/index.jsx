import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/search-bar";
import ExperienceCard from "./experience-card";
import { EXPERIENCE_DATA } from "./mock_data";
import experiencesOperation from "./../../redux/experiences/thunk";
import styles from "./styles.module.scss";

const Experiences = () => {
  const experiences = useSelector((state) => state.experiences.list);
  const dispatch = useDispatch();
  const { fetchExperiences } = experiencesOperation;

  useEffect(() => {
    dispatch(fetchExperiences());
  }, []);

  return (
    <div className={styles["exp-wrap"]}>
      <SearchBar title="Experiences" />
      <div className={styles["exp-cards-wrap"]}>
        {experiences.map((card, idx) => {
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

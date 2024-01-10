import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/search-bar";
import ExperienceCard from "./experience-card";
import experiencesOperation from "./../../redux/experiences/thunk";
import EmptyList from "../../components/empty-list";
import styles from "./styles.module.scss";
import clsx from "clsx";

const Experiences = () => {
  const experiences = useSelector((state) => state.experiences.list);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.experiences.isFetching);

  const { fetchExperiences } = experiencesOperation;
  const [inputValue, setInputValue] = useState("");

  const filteredExperiences = experiences.filter((experience) => {
    if (inputValue === "") {
      return experience;
    } else {
      return experience.title.toLowerCase().includes(inputValue);
    }
  });

  const verticalLineClasses = clsx(styles["vertical-line"], {
    [styles["vertical-line-dark"]]: theme === "dark",
  });

  useEffect(() => {
    dispatch(fetchExperiences());
    setInputValue(localStorage.getItem("inputExperiencesValue"));
  }, []);

  const inputHandler = (value) => {
    setInputValue(value.toLowerCase());
    localStorage.setItem("inputExperiencesValue", value);
  };

  const renderFilteredExperienceCards = (card, idx) => {
    return (
      <ExperienceCard
        key={card.id}
        theme={theme}
        data={card}
        className={idx % 2 !== 0 ? styles["card-row"] : styles["card"]}
      />
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles["exp-wrap"]}>
      <SearchBar
        value={inputValue}
        onChange={inputHandler}
        title="Experiences"
      />
      <div className={styles["exp-cards-wrap"]}>
        {filteredExperiences.map(renderFilteredExperienceCards)}
        <div className={verticalLineClasses}></div>
      </div>
      {filteredExperiences.length === 0 && (
        <EmptyList theme={theme} icon="true" className={styles["empty-list"]} />
      )}
    </div>
  );
};

export default Experiences;

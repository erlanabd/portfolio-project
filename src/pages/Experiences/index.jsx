import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/search-bar";
import ExperienceCard from "./experience-card";
import experiencesOperation from "./../../redux/experiences/thunk";
import EmptyList from "../../components/empty-list";
import expIcon from "./../../assets/icons/experience-icon.svg";
import styles from "./styles.module.scss";

const Experiences = () => {
  const experiences = useSelector((state) => state.experiences.list);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.experiences.isFetching);

  const { fetchExperiences } = experiencesOperation;
  const [inputValue, setInputValue] = useState("");

  const filteredExperiences = experiences.filter((experience) => {
    if (inputValue === "") {
      return experience;
    } else {
      return experience.title
        .toLowerCase()
        .includes(inputValue.toLocaleLowerCase());
    }
  });

  useEffect(() => {
    dispatch(fetchExperiences());
    setInputValue(localStorage.getItem("inputExperiencesValue"));
  }, []);

  const inputHandler = (value) => {
    setInputValue(value);
    localStorage.setItem("inputExperiencesValue", value);
  };

  const renderFilteredExperienceCards = (card, idx) => {
    return (
      <ExperienceCard
        key={card.id}
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
        <div className={styles["vertical-line"]}></div>
      </div>
      {filteredExperiences.length === 0 && (
        <EmptyList icon={expIcon} className={styles["empty-list"]} />
      )}
    </div>
  );
};

export default Experiences;

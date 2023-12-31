import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/search-bar";
import experiencesOperation from "./../../redux/education/thunk";
import EmptyList from "../../components/empty-list";
import expIcon from "./../../assets/icons/experience-icon.svg";
import styles from "./styles.module.scss";
import EducationCard from "./education-card";
import clsx from "clsx";

const Education = () => {
  const education = useSelector((state) => state.education.list);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.experiences.isFetching);

  const { fetchEducation } = experiencesOperation;
  const [inputValue, setInputValue] = useState("");

  const filteredExperiences = education.filter((education) => {
    if (inputValue === "") {
      return education;
    } else {
      return education.title.toLowerCase().includes(inputValue);
    }
  });

  const verticalLineClasses = clsx(styles["vertical-line"], {
    [styles["vertical-line-dark"]]: theme === "dark",
  });

  useEffect(() => {
    dispatch(fetchEducation());
    setInputValue(localStorage.getItem("inputExperiencesValue"));
  }, []);

  const inputHandler = (value) => {
    setInputValue(value.toLowerCase());
    localStorage.setItem("inputExperiencesValue", value);
  };

  const renderFilteredExperienceCards = (card, idx) => {
    return (
      <EducationCard
        theme={theme}
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
      <SearchBar value={inputValue} onChange={inputHandler} title="Education" />
      <div className={styles["exp-cards-wrap"]}>
        {filteredExperiences.map(renderFilteredExperienceCards)}
        <div className={verticalLineClasses}></div>
      </div>
      {filteredExperiences.length === 0 && (
        <EmptyList icon="true" theme={theme} className={styles["empty-list"]} />
      )}
    </div>
  );
};

export default Education;

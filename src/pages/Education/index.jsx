import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/search-bar";
import experiencesOperation from "./../../redux/education/thunk";
import EmptyList from "../../components/empty-list";
import expIcon from "./../../assets/icons/experience-icon.svg";
import styles from "./styles.module.scss";
import EducationCard from "./education-card";

const Education = () => {
  const education = useSelector((state) => state.education.list);
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
        <div className={styles["vertical-line"]}></div>
      </div>
      {filteredExperiences.length === 0 && (
        <EmptyList icon={expIcon} className={styles["empty-list"]} />
      )}
    </div>
  );
};

export default Education;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../../components/search-bar";
import educationsOperation from "./../../redux/education/thunk";
import EmptyList from "../../components/empty-list";
import styles from "./styles.module.scss";
import EducationCard from "./education-card";
import clsx from "clsx";

const Education = () => {
  const education = useSelector((state) => state.education.list);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.experiences.isFetching);

  const { fetchEducation } = educationsOperation;
  const [inputValue, setInputValue] = useState("");

  const filteredEducation = education.filter((education) => {
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
    filteredEducation.map(renderFilteredEducationCards);
  }, []);

  const inputHandler = (value) => {
    setInputValue(value.toLowerCase());
    localStorage.setItem("inputExperiencesValue", value);
  };

  const renderFilteredEducationCards = (card, idx) => {
    return (
      <EducationCard
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
      <SearchBar value={inputValue} onChange={inputHandler} title="Education" />
      <div className={styles["exp-cards-wrap"]}>
        {filteredEducation.map(renderFilteredEducationCards)}
        <div className={verticalLineClasses}></div>
      </div>
      {filteredEducation.length === 0 && (
        <EmptyList icon="true" theme={theme} className={styles["empty-list"]} />
      )}
    </div>
  );
};

export default Education;

import React from "react";
import SearchBar from "../../components/search-bar";
import ExperienceCard from "./experience-card";

const Experiences = () => {
  return (
    <div>
      <SearchBar title="Experiences" />
      <ExperienceCard />
    </div>
  );
};

export default Experiences;

import React from "react";
import Input from "../input";
import styles from "./styles.module.scss";

const SearchBar = (props) => {
  const { title } = props;
  return (
    <div className={styles["search-bar"]}>
      <h2 className={styles["title"]}>{title}</h2>
      <Input placeholder='Search...'/>
    </div>
  );
};

export default SearchBar;

import React from "react";
import { useSelector } from "react-redux";
import Input from "../input";
import MainTitle from "../main-title";
import styles from "./styles.module.scss";

const SearchBar = (props) => {
  const theme = useSelector((state) => state.theme);

  const { placeholder = "Search...", value, onChange, type, title } = props;
  return (
    <section className={styles["search-bar"]}>
      <MainTitle>{title}</MainTitle>
      <Input
        theme={theme}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      />
    </section>
  );
};

export default SearchBar;

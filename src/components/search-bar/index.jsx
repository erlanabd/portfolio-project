import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import Input from "../input";
import styles from "./styles.module.scss";

const SearchBar = (props) => {
  const theme = useSelector((state) => state.theme);

  const titleClasses = clsx(styles["title"], {
    [styles["title-dark"]]: theme === "dark",
  });

  const { placeholder = "Search...", value, onChange, type, title } = props;
  return (
    <div className={styles["search-bar"]}>
      <h2 className={titleClasses}>{title}</h2>
      <Input
        theme={theme}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

export default SearchBar;

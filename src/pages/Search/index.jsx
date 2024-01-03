import React from "react";
import EmptyList from "../../components/empty-list";
import searchIcon from "./../../assets/icons/search-in-search-page.svg";
import SearchBar from "../../components/search-bar";
import styles from "./styles.module.scss";

const Search = () => {
  
  return (
    <div>
      <SearchBar title="Search" />
      <EmptyList
        icon={searchIcon}
        text="Try typing something..."
        className={styles["empty-list"]}
      />
    </div>
  );
};

export default Search;

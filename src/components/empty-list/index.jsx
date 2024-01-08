import { clsx } from "clsx";
import React from "react";
import { ReactComponent as EmptyIcon } from "./../../assets/icons/cube.svg";
import { ReactComponent as ExpIcon } from "./../../assets/icons/experience-icon.svg";
import { ReactComponent as SearchIcon } from "./../../assets/icons/search-in-search-page.svg";

import styles from "./styles.module.scss";

const EmptyList = (props) => {
  const {
    text = "Could not find anything ...",
    className,
    theme,
    icon,
  } = props;
  const listClasses = clsx(styles["empty-skills-wrap"], {
    [className]: className,
  });

  const imgClasses = clsx(styles["icon"], {
    [styles["dark-icon"]]: theme === "dark",
  });
  const textClasses = clsx(styles["text"], {
    [styles["dark-text"]]: theme === "dark",
  });

  return (
    <div className={listClasses}>
      <div className={styles["empty-skills"]}>
        {(theme === "light" || theme === false) && icon === 'false' && (
          <EmptyIcon fill="#3E3E3E" className={imgClasses} />
        )}
        {theme === "dark" && icon === 'false' && (
          <EmptyIcon fill="#C1C1C1" className={imgClasses} />
        )}
         {(theme === "light" || theme === false) && icon === 'true' && (
          <ExpIcon fill="#3E3E3E" className={imgClasses} />
        )}
         {theme === "dark" && icon === 'true' && (
          <ExpIcon fill="#C1C1C1" className={imgClasses} />
        )}
          {theme === "dark" && icon === 'search' && (
          <SearchIcon fill="#C1C1C1" className={imgClasses} />
        )}
         {theme === "light" && icon === 'search' && (
          <SearchIcon fill="#3E3E3E" className={imgClasses} />
        )}
        <span className={textClasses}>{text}</span>
      </div>
    </div>
  );
};

export default EmptyList;

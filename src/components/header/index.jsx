import { clsx } from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeTheme } from "../../redux/theme/actions";
import { ReactComponent as SkillsIcon } from "./../../assets/icons/skills-icon.svg";
import styles from "./styles.module.scss";

const Header = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const themeIconClasses = clsx(styles["header__icons"], {
    [styles["light-icon"]]: theme === "light" || theme === false,
    [styles["dark-icon"]]: theme === "dark",
  });

  const handleChangeTheme = () => {
    const body = document.querySelector("body");
    if (theme === "dark") {
      dispatch(changeTheme("light"));
      body.style.background = "#fff";
    } else {
      dispatch(changeTheme("dark"));
      body.style.background = "#000";
    }
  };

  return (
    <div className={styles["header"]}>
      <nav className={styles["header__navbar"]}>
        <ul className={styles["header__list"]}>
          <Link className={styles["link"]} to={"/"}>
            <li className={styles["header__item"]}>
              <i className={styles["logo-icon"]}></i>
              <span className={styles["header_title-text"]}>Name LASTNAME</span>
            </li>
          </Link>
          <Link className={styles["link"]} to={"/skills"}>
            <li className={`${styles["header__item"]} ${styles["skills"]}`}>
              {/* <i
                className={`${styles["header__icons"]} ${styles["skills-icon"]}`}
              ></i> */}
              <SkillsIcon className={styles["header__icons"]} />
              <span className={styles["header_text"]}>Skills</span>
            </li>
          </Link>
          <Link className={styles["link"]} to={"/projects"}>
            <li className={styles["header__item"]}>
              <i
                className={`${styles["header__icons"]} ${styles["projects-icon"]}`}
              ></i>
              <span className={styles["header_text"]}>Projects</span>
            </li>
          </Link>
          <Link className={styles["link"]} to={"/experiences"}>
            <li className={styles["header__item"]}>
              <i
                className={`${styles["header__icons"]} ${styles["experiences-icon"]}`}
              ></i>
              <span className={styles["header_text"]}>Experiences</span>
            </li>
          </Link>
          <Link className={styles["link"]} to={"/education"}>
            <li className={styles["header__item"]}>
              <i
                className={`${styles["header__icons"]} ${styles["education-icon"]}`}
              ></i>
              <span className={styles["header_text"]}>Education</span>
            </li>
          </Link>

          <Link className={styles["link"]} to={"/resume"}>
            <li className={styles["header__item"]}>
              <i
                className={`${styles["header__icons"]} ${styles["resume-icon"]}`}
              ></i>
              <span className={styles["header_text"]}>Resume</span>
            </li>
          </Link>
        </ul>
        <Link
          className={`${styles["header__icons-wrap"]} ${styles["link"]}`}
          to={"/search"}
        >
          <div className={styles["search-icon-wrap"]}>
            <i
              className={`${styles["header__icons"]}  ${styles["search-icon"]}`}
            ></i>
          </div>
        </Link>
        <div className={styles["light-icon-wrap"]}>
          <i onClick={handleChangeTheme} className={themeIconClasses}></i>
        </div>
      </nav>
    </div>
  );
};

export default Header;

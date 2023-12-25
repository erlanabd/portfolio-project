import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <nav className={styles["header__navbar"]}>
        <ul className={styles["header__list"]}>
          <Link to={"/"}>
            <li className={styles["header__item"]}>
              <i className={styles["logo-icon"]}></i>
              <span className={styles["header_title-text"]}>Name LASTNAME</span>
            </li>
          </Link>
          <Link to={"/skills"}>
            <li className={styles["header__item"]}>
              <i
                className={`${styles["header__icons"]} ${styles["skills-icon"]}`}
              ></i>
              <span className={styles["header_text"]}>Skills</span>
            </li>
          </Link>
          <Link to={"/projects"}>
            <li className={styles["header__item"]}>
              <i
                className={`${styles["header__icons"]} ${styles["projects-icon"]}`}
              ></i>
              <span className={styles["header_text"]}>Projects</span>
            </li>
          </Link>
          <Link to={"/experiences"}>
            <li className={styles["header__item"]}>
              <i
                className={`${styles["header__icons"]} ${styles["experiences-icon"]}`}
              ></i>
              <span className={styles["header_text"]}>Experiences</span>
            </li>
          </Link>
          <li className={styles["header__item"]}>
            <i
              className={`${styles["header__icons"]} ${styles["education-icon"]}`}
            ></i>
            <span className={styles["header_text"]}>Education</span>
          </li>
          <Link to={"/resume"}>
            <li className={styles["header__item"]}>
              <i
                className={`${styles["header__icons"]} ${styles["resume-icon"]}`}
              ></i>
              <span className={styles["header_text"]}>Resume</span>
            </li>
          </Link>
        </ul>
        <div className={styles["header__icons-wrap"]}>
          <i
            className={`${styles["header__icons"]} ${styles["search-icon"]}`}
          ></i>
          <i
            className={`${styles["header__icons"]} ${styles["light-icon"]}`}
          ></i>
        </div>
      </nav>
    </div>
  );
};

export default Header;

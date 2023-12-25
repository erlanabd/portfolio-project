import React from "react";
import SkillsSlider from "./skills-slider";
import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles["home-page-wrap"]}>
      <div className={styles["info-wrap"]}>
        <h2 className={styles["title"]}>Name LASTNAME,</h2>
        <div className={styles["main-info"]}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
          rerum. Debitis accusantium deleniti enim iste dignissimos? Similique,
          exercitationem! Odit vero, numquam quae ratione maxime sunt reiciendis
          laudantium quaerat iure ipsum!
        </div>
        <div className={styles["icons-wrap"]}>
          <a target="_blank" href="https://github.com">
            <i className={`${styles["icon"]} ${styles["github-icon"]}`}></i>
          </a>
          <a target="_blank" href="https://linkedin.com">
            <i className={`${styles["linkedin-icon"]} ${styles["icon"]}`}></i>
          </a>
          <a target="_blank" href="https://twitter.com">
            <i className={`${styles["twitter-icon"]} ${styles["icon"]}`}></i>
          </a>
          <a target="_blank" href="https://stackoverflow.com">
            <i
              className={`${styles["stackoverflow-icon"]} ${styles["icon"]}`}
            ></i>
          </a>
          <a target="_blank" href="https://mail.ru">
            <i className={`${styles["mail-icon"]} ${styles["icon"]}`}></i>
          </a>
          <a target="_blank" href="https://youtube.com">
            <i className={`${styles["youtube-icon"]} ${styles["icon"]}`}></i>
          </a>
          <a target="_blank" href="https://facebook.com">
            <i className={`${styles["facebook-icon"]} ${styles["icon"]}`}></i>
          </a>
        </div>
      </div>

      <div className={styles["slider"]}>
        <SkillsSlider />
      </div>
    </div>
  );
};

export default Home;

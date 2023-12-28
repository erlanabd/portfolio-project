import React from "react";
import { useParams } from "react-router-dom";
import noImg from "./../../../assets/images/no-img.svg";
import Chip from "./../../../components/chip";
import styles from "./styles.module.scss";

const DetailExperience = () => {
  const { slug } = useParams();
  return (
    <div className={styles["detail-wrap"]}>
      <div className={styles["title-box"]}>
        <div className={styles["title-wrap"]}>
          <h2 className={styles["title"]}>Open Source Developer</h2>
          <div className={styles["date"]}>
            <span className={styles["date-text"]}>December 2023 -</span>
            <span className={styles["date-text"]}> Present</span>
            <span className={styles["date-text"]}> · 1 day</span>
          </div>
          {/* <span className={styles["text"]}>Website Template</span>
          <span className={styles["text"]}>Website Template</span>
          <span className={styles["text"]}>Website Template</span> */}
          <div className={styles["image-wrap"]}>
            <img src={noImg} alt="Skill logo" />
          </div>
          <div className={styles["border"]}></div>
        </div>
        <div className={styles["chips-wrap"]}>
          <div className={styles["skills-wrap"]}>
            <Chip
              className={styles["chip"]}
              icon={noImg}
              label="Javascript"
              asLink={`/skills/js`}
            />
          </div>
        </div>
      </div>
      <div className={styles["description-wrap"]}>
        <p className={styles["description"]}>
          Creating awesome tools for developers.
        </p>
      </div>
    </div>
  );
};

export default DetailExperience;

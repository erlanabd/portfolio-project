import React from "react";
import { useParams } from "react-router-dom";
import Chip from "../../../components/chip";
import tsLogo from "./../../../assets/images/ts-logo.png";
import withoutScreenshotImg from "./../../../assets/images/without-screenshot.svg";
import linkIcon from "./../../../assets/icons/paper-clip.svg";
import noImg from "./../../../assets/images/no-img.svg";
import styles from "./styles.module.scss";

const DetailProject = () => {
  const { id } = useParams();
  return (
    <div className={styles["detail-wrap"]}>
      <div className={styles["title-box"]}>
        <div className={styles["title-wrap"]}>
          <h2 className={styles["title"]}>Slick Portfolio</h2>
          <span className={styles["text"]}>Website Template</span>
          <div className={styles["image-wrap"]}>
            <img src={noImg} alt="Skill logo" />
          </div>
          <div className={styles["border"]}></div>
        </div>
        <div className={styles["chips-wrap"]}>
          <Chip
            className={styles["chip"]}
            marginBottom
            icon={linkIcon}
            target="_blank"
            label="Github"
            asLink="https://github.com"
          />
          <Chip
            className={styles["chip"]}
            icon={tsLogo}
            label="Typescript"
            asLink={"/skills/ts"}
          />
        </div>
      </div>
      <div className={styles["description-wrap"]}>
        <p className={styles["description"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non
          dolores voluptatibus vitae praesentium aperiam, iure laboriosam
          repellendus sunt explicabo pariatur totam enim, nihil animi quisquam.
          Sit vero quod laborum!
        </p>
      </div>
      <div className={styles["screenshots-wrap"]}>
        <img src={withoutScreenshotImg} alt="Screenshot" />
      </div>
      <div className={styles["screenshots-text"]}>
        <p>No screenshot</p>
      </div>
    </div>
  );
};

export default DetailProject;

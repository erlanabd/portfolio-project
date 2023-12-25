import React from "react";
import BoxLayout from "../../../components/box-layout";
import ChipIcon from "../../../components/chip-icon";
import Exp from "../../../components/exp";
import noImg from "./../../../assets/images/no-img.svg";
import jsLogo from "./../../../assets/images/js-logo.png";
import tsLogo from "./../../../assets/images/ts-logo.png";
import styles from "./styles.module.scss";

const ExperienceCard = (props) => {
  const {} = props;
  return (
    <BoxLayout className={styles["card-wrap"]}>
      <div className={styles["img-wrap"]}>
        <img src={noImg} alt="No Img" />
      </div>
      <div className={styles["body"]}>
        <h6 className={styles["title"]}>Open Source Developer</h6>
        <div className={styles["exps-wrap"]}>
          <Exp
            className={styles["exp"]}
            value="Company: Self employed"
            type="company"
          />
          <Exp
            className={styles["exp"]}
            value="Location: Home"
            type="location"
          />
          <Exp
            className={styles["exp"]}
            value="Contract: Self employed"
            type="contract"
          />
        </div>
        <div className={styles["date"]}>
          <span className={styles["date-text"]}>
            December 2023 - Present · 1 day
          </span>
        </div>
        <div className={styles["experience"]}>
          <span className={styles["experience-text"]}>
            Creating awesome tools for developers.
          </span>
        </div>
        <div className={styles["chip-icons-wrap"]}>
          <ChipIcon
            className={styles["icon"]}
            label={"Javascript"}
            to={"/skills/js"}
            icon={jsLogo}
          />
          <ChipIcon
            className={styles["icon"]}
            label={"Typescript"}
            to={"/skills/ts"}
            icon={tsLogo}
          />
        </div>
      </div>
    </BoxLayout>
  );
};

export default ExperienceCard;

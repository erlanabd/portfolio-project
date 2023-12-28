import React from "react";
import BoxLayout from "../../../components/box-layout";
import ChipIcon from "../../../components/chip-icon";
import Exp from "../../../components/exp";
import noImg from "./../../../assets/images/no-img.svg";
import jsLogo from "./../../../assets/images/js-logo.png";
import tsLogo from "./../../../assets/images/ts-logo.png";
import { ReactComponent as ConditionIcon } from "./../../../assets/icons/condition-point.svg";

import { clsx } from "clsx";
import styles from "./styles.module.scss";

const ExperienceCard = (props) => {
  const { className, data } = props;
  const cardClasses = clsx(styles["card-box"], {
    [className]: className,
  });
  return (
    <div className={cardClasses}>
      <BoxLayout className={styles["card"]}>
        <div className={styles["img-wrap"]}>
          <img src={data.image} alt="No Img" />
        </div>
        <div className={styles["body"]}>
          <h6 className={styles["title"]}>{data.title}</h6>
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
      <div className={styles["condition-icon-wrap"]}>
        <ConditionIcon className={styles["condition-icon"]} />
      </div>
    </div>
  );
};

export default ExperienceCard;

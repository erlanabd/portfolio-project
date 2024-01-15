import React from "react";
import BoxLayout from "../../../components/box-layout";
import { ReactComponent as ConditionIcon } from "./../../../assets/icons/condition-point.svg";
import { clsx } from "clsx";
import styles from "./styles.module.scss";
import Chip from "../../../components/chip";

const EducationCard = (props) => {
  const { className, data, theme } = props;
  const cardClasses = clsx(styles["card-box"], {
    [className]: className,
  });
  const dateTextClasses = clsx(styles["date-text"], {
    [styles["date-text-dark"]]: theme === "dark",
  });
  const conditionWrapClasses = clsx(styles["condition-icon-wrap"], {
    [styles["condition-icon-wrap-dark"]]: theme === "dark",
  });
  return (
    <div key={data.id} className={cardClasses}>
      <BoxLayout theme={theme} className={styles["card"]}>
        <div className={styles["img-wrap"]}>
          <img src={data.image} alt="No Img" />
        </div>
        <div className={styles["body"]}>
          <h6 className={styles["title"]}>{data.title}</h6>
          <span className={styles["subtitle"]}>{data.institution}</span>
          <div className={styles["date"]}>
            <span className={dateTextClasses}>
              {data.country} · opa{data.period}
            </span>
          </div>
          <div className={styles["chips-wrap"]}>
            {data &&
              data.subjects &&
              data.subjects.map((subject, idx) => {
                return (
                  <Chip
                    key={subject.id}
                    theme={theme}
                    marginTop
                    className={styles["icon"]}
                    label={subject.subject}
                    to={"/skills/js"}
                  />
                );
              })}
          </div>
        </div>
      </BoxLayout>
      <div className={conditionWrapClasses}>
        <ConditionIcon
          fill={theme === "dark" ? "#fff" : "#000"}
          className={styles["condition-icon"]}
        />
      </div>
    </div>
  );
};

export default EducationCard;

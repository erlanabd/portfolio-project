import React from "react";
import BoxLayout from "../../../components/box-layout";
import { ReactComponent as ConditionIcon } from "./../../../assets/icons/condition-point.svg";
import { clsx } from "clsx";
import styles from "./styles.module.scss";
import Chip from "../../../components/chip";

const EducationCard = (props) => {
  const { className, data } = props;
  const cardClasses = clsx(styles["card-box"], {
    [className]: className,
  });
  return (
    <div key={data.id} className={cardClasses}>
        <BoxLayout className={styles["card"]}>
          <div className={styles["img-wrap"]}>
            <img src={data.image} alt="No Img" />
          </div>
          <div className={styles["body"]}>
            <h6 className={styles["title"]}>{data.title}</h6>
            <span className={styles["subtitle"]}>{data.institution}</span>
            <div className={styles["date"]}>
              <span className={styles["date-text"]}>
                {data.country} · {data.period}
              </span>
            </div>
            <div className={styles["chips-wrap"]}>
              {data &&
                data.subjects &&
                data.subjects.map((subject, idx) => {
                  return (
                    <Chip
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
      <div className={styles["condition-icon-wrap"]}>
        <ConditionIcon className={styles["condition-icon"]} />
      </div>
    </div>
  );
};

export default EducationCard;

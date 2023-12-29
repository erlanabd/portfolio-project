import React from "react";
import BoxLayout from "../../../components/box-layout";
import ChipIcon from "../../../components/chip-icon";
import Exp from "../../../components/exp";
import { ReactComponent as ConditionIcon } from "./../../../assets/icons/condition-point.svg";

import { clsx } from "clsx";
import styles from "./styles.module.scss";
import { Link, useParams } from "react-router-dom";

const ExperienceCard = (props) => {
  const { className, data } = props;
  const { slug } = useParams();
  const cardClasses = clsx(styles["card-box"], {
    [className]: className,
  });
  return (
    <div key={data.id} className={cardClasses}>
      <Link className={styles["link"]} to={`/experiences/${data.name}`}>
        <BoxLayout className={styles["card"]}>
          <div className={styles["img-wrap"]}>
            <img src={data.image} alt="No Img" />
          </div>
          <div className={styles["body"]}>
            <h6 className={styles["title"]}>{data.title}</h6>
            <div className={styles["exps-wrap"]}>
              {data &&
                data.types &&
                data.types.map((type, idx) => {
                  return (
                    <Exp
                      key={type.id}
                      className={styles["exp"]}
                      value="Company: Self employed"
                      type={type.type}
                    />
                  );
                })}
            </div>
            <div className={styles["date"]}>
              <span className={styles["date-text"]}>
                {data.workPeriodFrom} - {data.workPeriodTo} · {data.duration}
              </span>
            </div>
            <div className={styles["experience"]}>
              <span className={styles["experience-text"]}>
                Creating awesome tools for developers.
              </span>
            </div>
            <div className={styles["chip-icons-wrap"]}>
              {data &&
                data.skills &&
                data.skills.map((skill, idx) => {
                  return (
                    <ChipIcon
                      className={styles["icon"]}
                      label={"Javascript"}
                      to={"/skills/js"}
                      icon={skill.image}
                    />
                  );
                })}
            </div>
          </div>
        </BoxLayout>
      </Link>
      <div className={styles["condition-icon-wrap"]}>
        <ConditionIcon className={styles["condition-icon"]} />
      </div>
    </div>
  );
};

export default ExperienceCard;

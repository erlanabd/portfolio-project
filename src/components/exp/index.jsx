import React from "react";
import { ReactComponent as Company } from "./../../assets/icons/company.svg";
import { ReactComponent as Location } from "./../../assets/icons/location.svg";
import { ReactComponent as Contract } from "./../../assets/icons/contract.svg";
import { clsx } from "clsx";

import styles from "./styles.module.scss";

const Exp = (props) => {
  const { to, type, value, className, theme } = props;

  const linkClasses = clsx(styles["card-link"], {
    [className]: className,
    [styles["card-link-dark"]]: theme === "dark",
  });


  return (
    <a
      // target="_blank"
      href={to}
      data-label={value}
      data-type={type}
      className={linkClasses}
    >
      {type && type === "company" && <Company className={styles["icon"]} />}
      {type && type === "location" && <Location className={styles["icon"]} />}
      {type && type === "contract" && <Contract className={styles["icon"]} />}
    </a>
  );
};

export default Exp;

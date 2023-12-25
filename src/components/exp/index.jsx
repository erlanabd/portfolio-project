import React from "react";
import { clsx } from "clsx";
import styles from "./styles.module.scss";

const Exp = (props) => {
  const { to, type, value, className } = props;
  
  const classes = clsx(styles["icon"], {
    [styles["company"]]: type === "company",
    [styles["location"]]: type === "location",
    [styles["contract"]]: type === "contract",
    
  });
  const linkClasses = clsx(
    styles['card-link'],
    {
      [className]: className
    }
  )
  return (
    <a
      // target="_blank"
      href={to}
      data-label={value}
      data-type={type}
      className={linkClasses}
    >
      <i className={classes}></i>
    </a>
  );
};

export default Exp;

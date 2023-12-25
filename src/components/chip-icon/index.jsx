import { clsx } from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const ChipIcon = (props) => {
  const { to, icon, label, className } = props;
  const classes = clsx(styles["chip-icon"], {
    [className]: className,
  });
  return (
    <Link data-label={label} to={to} className={classes}>
      <div className={styles["img-wrap"]}>
        <img src={icon} alt={"icon"} />
      </div>
    </Link>
  );
};

export default ChipIcon;

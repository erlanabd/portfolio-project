import { clsx } from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Chip = (props) => {
  const { label, isActive, className, asLink, icon } = props;
  const classes = clsx(styles["chip-wrap"], {
    [styles["active"]]: isActive,
    [className]: className,
  });

  const renderLabel = () => {
    return (
      <span className={styles["label"]}>
        {icon && (
          <div className={styles["icon-wrap"]}>
            <img src={icon} alt={label} />
          </div>
        )}
        {label}
      </span>
    );
  };

  if (asLink) {
    return (
      <Link to={asLink} className={classes}>
        {renderLabel()}
      </Link>
    );
  }

  return (
    <div href="#" className={classes}>
      {renderLabel()}
    </div>
  );
};

export default Chip;

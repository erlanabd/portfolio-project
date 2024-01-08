import { clsx } from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Chip = (props) => {
  const {
    label,
    isActive,
    className,
    asLink,
    icon,
    target,
    marginBottom,
    marginTop,
    theme,
  } = props;
  const classes = clsx(styles["chip-wrap"], {
    [styles["active"]]: isActive,
    [className]: className,
    [styles["border-dark"]]: theme === "dark",
    [styles["chip-wrap-mb"]]: marginBottom,
    [styles["label-mt"]]: marginTop,
  });

  const labelClasses = clsx(styles["label"], {
    [className]: className,
    [styles["label-dark"]]: theme === "dark",
  });

  const renderLabel = () => {
    return (
      <span className={labelClasses}>
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
      <Link target={target} to={asLink} className={classes}>
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

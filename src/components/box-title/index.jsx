import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

const BoxTitle = (props) => {
  const { children, className } = props;
  const theme = useSelector((state) => state.theme);
  const titleBoxClasses = clsx(styles["title-wrap"], {
    [styles["title-wrap-dark"]]: theme === "dark",
    [className]: className
  });
  return <div className={titleBoxClasses}>{children}</div>;
};

export default BoxTitle;

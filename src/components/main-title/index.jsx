import React from "react";
import clsx from "clsx";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

const MainTitle = (props) => {
  const { className, children } = props;
  const theme = useSelector((state) => state.theme);
  const titleClasses = clsx(styles["title"], {
    [styles["title-dark"]]: theme === "dark",
    [className]: className,
  });
  return <h2 className={titleClasses}>{children}</h2>;
};

export default MainTitle;

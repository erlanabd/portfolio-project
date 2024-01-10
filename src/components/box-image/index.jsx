import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

const BoxImage = (props) => {
  const { className, image, label } = props;
  const theme = useSelector((state) => state.theme);
  const imgClasses = clsx(styles["image-wrap"], {
    [styles["img-dark"]]: theme === "dark",
    [className]: className,
  });
  return (
    <div className={imgClasses}>
      <img src={image} alt={label} />
    </div>
  );
};

export default BoxImage;

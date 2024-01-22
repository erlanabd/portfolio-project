import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

const BurgerMobile = (props) => {
  const { isActiveBurgerMenu, onClick, theme } = props;

  const burgerMenuClasses = clsx(styles["burger-mobile-wrap"], {
    [styles["burger-mobile-wrap__active"]]: isActiveBurgerMenu,
    [styles["burger-mobile-wrap-light"]]: theme === "light",
  });

  return <div onClick={onClick} className={burgerMenuClasses}></div>;
};

export default BurgerMobile;

import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

const BurgerMobile = (props) => {
  const { isActiveBurgerMenu, theme, onClick } = props;

  const burgerMenuClasses = clsx(styles["burger-mobile-wrap"], {
    [styles["burger-mobile-wrap__active"]]: isActiveBurgerMenu,
  });

  return <div onClick={onClick} className={burgerMenuClasses}></div>;
};

export default BurgerMobile;

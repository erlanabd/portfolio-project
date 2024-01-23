import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import BurgerMenu from "../burger-menu";

const BurgerMobile = (props) => {
  const { isActiveBurgerMenu, setIsActiveBurgerMenu, onClick, theme } = props;

  const burgerMenuClasses = clsx(styles["burger-mobile-wrap"], {
    [styles["burger-mobile-wrap__active"]]: isActiveBurgerMenu,
    [styles["burger-mobile-wrap-light"]]: theme === "light",
  });

  return (
    <div onClick={onClick} className={burgerMenuClasses}>
      <BurgerMenu
        setIsActiveBurgerMenu={setIsActiveBurgerMenu}
        theme={theme}
        isActiveBurgerMenu={isActiveBurgerMenu}
      />
    </div>
  );
};

export default BurgerMobile;

import React, { useContext } from "react";
import { ReactComponent as BurgerMenuIcon } from "./../../assets/icons/burger-menu.svg";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { BurgerContext } from "../../providers/burger-context";

const BurgerMobile = (props) => {
  const { theme } = props;
  const { isActiveBurgerMenu, setIsActiveBurgerMenu } =
    useContext(BurgerContext);

  const burgerMenuClasses = clsx(styles["burger-mobile-icon"], {
    [styles["burger-mobile-icon-light"]]: theme === "dark",
  });

  const handleClick = () => {
    setIsActiveBurgerMenu(!isActiveBurgerMenu);
  };

  return (
    <div className={styles["burger-mobile-wrap"]}>
      <BurgerMenuIcon onClick={handleClick} className={burgerMenuClasses} />
    </div>
  );
};

export default BurgerMobile;

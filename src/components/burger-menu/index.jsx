import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { BurgerContext } from "../../providers/burger-context";

const BurgerMenu = (props) => {
  const { items } = props;
  const { isActiveBurgerMenu } = useContext(BurgerContext);

  const burgerMenuClasses = clsx(styles["burger-menu"], {
    [styles["burger-menu-active"]]: isActiveBurgerMenu === true,
  });

  return (
    <div className={burgerMenuClasses}>
      <ul className={styles["burger-menu__list"]}>
        <li className={styles["burger-menu__item"]}>
          {items.map((item) => {
            return (
              <Link key={item.id} className={styles["link"]} to={item.href}>
                <i className={clsx(styles["icon"], styles[`${item.icon}`])}></i>
                <span>{item.title}</span>
              </Link>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;

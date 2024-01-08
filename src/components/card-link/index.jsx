import { clsx } from "clsx";
import React from "react";
import { ReactComponent as LinkIcon } from "./../../assets/icons/paper-clip.svg";
import styles from "./styles.module.scss";

const CardLink = (props) => {
  const { to, label, text, onClick, as, theme } = props;
  const cardLinkClasses = clsx(styles["card-link"], {
    [styles["card-link-dark"]]: theme === "dark",
  });
  return (
    <a
      target="_blank"
      href={to}
      data-label={label}
      className={cardLinkClasses}
      onClick={onClick}
    >
      <LinkIcon />
      <span>{text}</span>
    </a>
  );
};

export default CardLink;

import React from "react";
import { ReactComponent as LinkIcon } from "./../../assets/icons/paper-clip.svg";
import styles from "./styles.module.scss";

const CardLink = (props) => {
  const { to, label } = props;

  return (
    <a
      // target="_blank"
      href={to}
      data-label={label}
      className={styles["card-link"]}
    >
      <LinkIcon />
    </a>
  );
};

export default CardLink;

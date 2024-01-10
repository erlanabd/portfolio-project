import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import SkillsSlider from "./skills-slider";
import { ReactComponent as GithubIcon } from "./../../assets/icons/github-logo.svg";
import { ReactComponent as LinkedinIcon } from "./../../assets/icons/linkedin-logo.svg";
import { ReactComponent as TwitterIcon } from "./../../assets/icons/twitter-logo.svg";
import { ReactComponent as StackoverflowIcon } from "./../../assets/icons/stackoverflow-logo.svg";
import { ReactComponent as MailIcon } from "./../../assets/icons/email-logo.svg";
import { ReactComponent as YoutubeIcon } from "./../../assets/icons/youtube-logo.svg";
import { ReactComponent as FacebookIcon } from "./../../assets/icons/facebook-logo.svg";
import styles from "./styles.module.scss";

const Home = () => {
  const theme = useSelector((state) => state.theme);

  const titleClasses = clsx(styles["title"], {
    [styles["title-dark"]]: theme === "dark",
  });
  const mainInfoClasses = clsx(styles["main-info"], {
    [styles["main-info-dark"]]: theme === "dark",
  });

  return (
    <div className={styles["home-page-wrap"]}>
      <div className={styles["info-wrap"]}>
        <h2 className={titleClasses}>Name LASTNAME,</h2>
        <div className={mainInfoClasses}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti,
          rerum. Debitis accusantium deleniti enim iste dignissimos? Similique,
          exercitationem! Odit vero, numquam quae ratione maxime sunt reiciendis
          laudantium quaerat iure ipsum!
        </div>
        <div className={styles["icons-wrap"]}>
          <a target="_blank" href="https://github.com">
            <GithubIcon
              fill={theme === "dark" ? "#C1C1C1" : "#3E3E3E"}
              className={styles["icon"]}
            />
          </a>
          <a target="_blank" href="https://linkedin.com">
            <LinkedinIcon
              fill={theme === "dark" ? "#C1C1C1" : "#3E3E3E"}
              className={styles["icon"]}
            />
          </a>
          <a target="_blank" href="https://twitter.com">
            <TwitterIcon
              fill={theme === "dark" ? "#C1C1C1" : "#3E3E3E"}
              className={styles["icon"]}
            />
          </a>
          <a target="_blank" href="https://stackoverflow.com">
            <StackoverflowIcon
              fill={theme === "dark" ? "#C1C1C1" : "#3E3E3E"}
              className={styles["icon"]}
            />
          </a>
          <a target="_blank" href="https://mail.ru">
            <MailIcon
              fill={theme === "dark" ? "#C1C1C1" : "#3E3E3E"}
              className={styles["icon"]}
            />
          </a>
          <a target="_blank" href="https://youtube.com">
            <YoutubeIcon
              fill={theme === "dark" ? "#C1C1C1" : "#3E3E3E"}
              className={styles["icon"]}
            />
          </a>
          <a target="_blank" href="https://facebook.com">
            <FacebookIcon
              fill={theme === "dark" ? "#C1C1C1" : "#3E3E3E"}
              className={styles["icon"]}
            />
          </a>
        </div>
      </div>
      <div className={styles["slider"]}>
        <SkillsSlider theme={theme} />
      </div>
    </div>
  );
};

export default Home;

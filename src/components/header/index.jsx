import { clsx } from "clsx";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeTheme } from "../../redux/theme/actions";
import { ReactComponent as LogoIcon } from "./../../assets/icons/logo-icon.svg";
import { ReactComponent as SkillsIcon } from "./../../assets/icons/skills-icon.svg";
import { ReactComponent as ProjectsIcon } from "./../../assets/icons/projects-icon.svg";
import { ReactComponent as ExperiencesIcon } from "./../../assets/icons/experience-icon.svg";
import { ReactComponent as EducationIcon } from "./../../assets/icons/education-icon.svg";
import { ReactComponent as ResumeIcon } from "./../../assets/icons/resume-icon.svg";
import { ReactComponent as SearchIcon } from "./../../assets/icons/search-icon.svg";
import { ReactComponent as SunIcon } from "./../../assets/icons/sun-icon.svg";
import { ReactComponent as MoonIcon } from "./../../assets/icons/moon-icon.svg";
import styles from "./styles.module.scss";

const Header = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const themeIconClasses = clsx(styles["header__icons"], {
    [styles["light-icon"]]: theme === "light" || theme === false,
    [styles["dark-icon"]]: theme === "dark",
  });

  const headerItemDarkHoverClasses = clsx(styles["header__item"], {
    [styles["header__item-dark"]]: theme === "dark",
  });

  const handleChangeTheme = () => {
    const body = document.querySelector("body");
    if (theme === "dark") {
      dispatch(changeTheme("light"));
      body.style.background = "#fff";
      localStorage.setItem("theme", "light");
    } else {
      dispatch(changeTheme("dark"));
      localStorage.setItem("theme", "dark");
      body.style.background = "#000";
    }
  };

  // Надо сделать нормально
  useEffect(() => {
     const body = document.querySelector("body");
     if (localStorage.getItem("theme") === "dark") {
       dispatch(changeTheme("dark"));
       body.style.background = "#000";
     }
     if (localStorage.getItem("light") === "dark") {
       dispatch(changeTheme("light"));
       body.style.background = "#fff";
     }
   }, []);

  return (
    <div className={styles["header"]}>
      <nav className={styles["header__navbar"]}>
        <ul className={styles["header__list"]}>
          <Link className={styles["link"]} to={"/"}>
            <li className={headerItemDarkHoverClasses}>
              <LogoIcon className={styles["logo-icon"]} />
              <span className={styles["header_title-text"]}>Name LASTNAME</span>
            </li>
          </Link>
          <Link className={styles["link"]} to={"/skills"}>
            <li className={headerItemDarkHoverClasses}>
              <SkillsIcon className={styles["header__icons"]} />
              <span className={styles["header_text"]}>Skills</span>
            </li>
          </Link>
          <Link className={styles["link"]} to={"/projects"}>
            <li className={headerItemDarkHoverClasses}>
              <ProjectsIcon className={styles["header__icons"]} />
              <span className={styles["header_text"]}>Projects</span>
            </li>
          </Link>
          <Link className={styles["link"]} to={"/experiences"}>
            <li className={headerItemDarkHoverClasses}>
              <ExperiencesIcon className={styles["header__icons"]} />
              <span className={styles["header_text"]}>Experiences</span>
            </li>
          </Link>
          <Link className={styles["link"]} to={"/education"}>
            <li className={headerItemDarkHoverClasses}>
              <EducationIcon className={styles["header__icons"]} />
              <span className={styles["header_text"]}>Education</span>
            </li>
          </Link>

          <Link className={styles["link"]} to={"/resume"}>
            <li className={headerItemDarkHoverClasses}>
              <ResumeIcon className={styles["header__icons"]} />
              <span className={styles["header_text"]}>Resume</span>
            </li>
          </Link>
        </ul>
        <Link
          className={clsx(styles["header__icons-wrap"], {
            [styles["header__icons-dark"]]: theme === "dark",
          })}
          to={"/search"}
        >
          <div className={styles["search-icon-wrap"]}>
            <SearchIcon className={styles["header__icons"]} />
          </div>
        </Link>
        <div
          onClick={handleChangeTheme}
          className={clsx(styles["light-icon-wrap"], {
            [styles["light-icon-dark"]]: theme === "dark",
          })}
        >
          {(theme === "light" || theme === false) && (
            <SunIcon className={themeIconClasses} />
          )}
          {theme === "dark" && <MoonIcon className={themeIconClasses} />}
        </div>
      </nav>
    </div>
  );
};

export default Header;

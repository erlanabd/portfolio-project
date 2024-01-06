import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import clsx from "clsx";
import { ReactComponent as ArrowIcon } from "./../../../assets/icons/arrow-icon.svg";
import JSLogo from "./../../../assets/images/js-logo.png";
import TSLogo from "./../../../assets/images/ts-logo.png";
import HTMLLogo from "./../../../assets/images/html-logo.png";
import Svelte from "./../../../assets/images/svelte-logo.png";
import { Autoplay } from "swiper/modules";
import styles from "./styles.module.scss";

const SkillsSlider = (props) => {
  const { theme } = props;
  const [swiperInstance, setSwiperInstance] = useState(null);

  const sliderLeftNavButtonClasses = clsx(
    styles["slider-nav-button"],
    styles["left"],
    {
      [styles["slider-nav-button-dark"]]: theme === "dark",
    }
  );
  const sliderRightNavButtonClasses = clsx(
    styles["slider-nav-button"],
    styles["right"],
    {
      [styles["slider-nav-button-dark"]]: theme === "dark",
    }
  );

  return (
    <div className={styles["slider-wrap"]}>
      <button
        className={sliderLeftNavButtonClasses}
        onClick={() => swiperInstance.slidePrev()}
      >
        <ArrowIcon />
      </button>

      <Swiper
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        width={150}
        className={styles["slider"]}
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        <SwiperSlide className={styles["slider__item"]}>
          <div className={styles["img-wrap"]}>
            <img src={JSLogo} alt="js-logo" />
          </div>
          <h6 className={styles["title"]}>JavaScript</h6>
        </SwiperSlide>
        <SwiperSlide className={styles["slider__item"]}>
          <div className={styles["img-wrap"]}>
            <img src={TSLogo} alt="js-logo" />
          </div>
          <h6 className={styles["title"]}>JavaScript</h6>
        </SwiperSlide>
        <SwiperSlide className={styles["slider__item"]}>
          <div className={styles["img-wrap"]}>
            <img src={Svelte} alt="js-logo" />
          </div>
          <h6 className={styles["title"]}>JavaScript</h6>
        </SwiperSlide>
        <SwiperSlide className={styles["slider__item"]}>
          <div className={styles["img-wrap"]}>
            <img src={HTMLLogo} alt="js-logo" />
          </div>
          <h6 className={styles["title"]}>JavaScript</h6>
        </SwiperSlide>
      </Swiper>
      <button
        className={sliderRightNavButtonClasses}
        onClick={() => swiperInstance.slideNext()}
      >
        <ArrowIcon />
      </button>
    </div>
  );
};

export default SkillsSlider;

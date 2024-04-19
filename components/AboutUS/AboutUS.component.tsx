"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import s from "./AboutUS.component.module.scss";

import arrow from "@/assets/icons/arrow.png";

import aboutImage from "@/assets/images/about_us.jpeg";

function AboutUS() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
      className={s.container}
    >
      <section className={s.container__imageSection}>
        <div className={s.container__imageSection__frameOne}></div>
        <div className={s.container__imageSection__frameTwo}></div>
        <Image
          className={s.container__imageSection__img}
          width={300}
          height={290}
          src={aboutImage}
          alt=""
        />
      </section>
      <section className={s.container__contentSection}>
        <div className={s.container__contentSection__infoWrapper}>
          <span className={s.container__contentSection__infoWrapper__category}>
            Sobre Nosotros
          </span>
          <h3 className={s.container__contentSection__infoWrapper__title}>
            Nuestro objetivo es el mejor servicio al cliente posible.
          </h3>
          <p className={s.container__contentSection__infoWrapper__description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            suscipit purus vitae faucibus scelerisque. Integer vitae nunc ut
            augue pulvinar tristique sit amet quis tellus. Donec vitae ornare
            lacus, at laoreet lacus. Nunc ac neque et nunc maximus fermentum sed
            a odio. Etiam rutrum diam eget euismod{" "}
          </p>
        </div>
        <div className={s.container__contentSection__buttonSection}>
          <button className={s.container__contentSection__buttonSection__btn}>
            <span className={s.container__contentSection__buttonSection__text}>
              Saber más
            </span>
            <Image
              className={s.container__contentSection__buttonSection__btn__img}
              src={arrow}
              alt="arrow-icon"
            />
          </button>
        </div>
      </section>
    </motion.section>
  );
}

export default AboutUS;

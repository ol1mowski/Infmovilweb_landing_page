"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "next/image";
import s from "./Opinios-Card.component.module.scss";

import quotes from "@/assets/icons/quotes.png";

type OpinionsCardProps = {
  description: string;
  author: string;
};

function OpiniosCard({ description, author }: OpinionsCardProps) {
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
      <div className={s.container__topSideOfOpinion}>
        <div className={s.container__topSideOfOpinion__quoteIcon}>
          <div className={s.container__topSideOfOpinion__quoteIcon__wrapper}>
            <Image
              className={
                s.container__topSideOfOpinion__quoteIcon__wrapper__icon
              }
              width={40}
              height={40}
              src={quotes}
              alt="quotes-icon"
            />
          </div>
        </div>
        <div className={s.container__topSideOfOpinion__content}>
          <p className={s.container__topSideOpinion__content__description}>
            {description}
          </p>
          <span className={s.container__topSideOfOpinion__content__user}>
            {author}
          </span>
        </div>
      </div>
      <div className={s.container__bottomSideOpinion}>
        <span>opinión de google mapas</span>
      </div>
    </motion.section>
  );
}

export default OpiniosCard;

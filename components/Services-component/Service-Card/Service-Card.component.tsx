"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image, { StaticImageData } from "next/image";
import s from "./Service-Card.component.module.scss";

import arrow from "@/assets/icons/arrow.png";

type ServiceCardProps = {
  image: StaticImageData;
  title: string;
  description: string;
};

function ServiceCard({ image, title, description }: ServiceCardProps) {
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
      className={s.servicesContainer}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
    >
      <div className={s.servicesContainer__imageWrapper}>
        <Image
          width={270}
          height={200}
          className={s.servicesContainer__imageWrapper__img}
          src={image}
          alt="service-image"
        />
      </div>
      <div className={s.servicesContainer__textWrapper}>
        <h3 className={s.servicesContainer__textWrapper__title}>{title}</h3>
        <p className={s.servicesContainer__textWrapper__description}>
          {description}
        </p>
      </div>
      <div className={s.servicesContainer__actionWrapper}>
        <span className={s.servicesContainer__actionWrapper__text}>
          leer más
        </span>
        <Image
          className={s.servicesContainer__actionWrapper__icon}
          src={arrow}
          alt="arrow-icon"
        />
      </div>
    </motion.section>
  );
}

export default ServiceCard;

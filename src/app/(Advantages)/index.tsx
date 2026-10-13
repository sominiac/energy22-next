import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import Section from "@components/layout/Section";
import SliderItem from "./_components/SliderItem";

import LoyaltyImage from "@images/advantages/Loyalty.png";
import ConsultationsImage from "@images/advantages/Consultations.png";
import SpeedImage from "@images/advantages/Speed.png";
import ApproachImage from "@images/advantages/Approach.png";
import ExperienceImage from "@images/advantages/Experience.png";
import IconRight from "@images/advantages/icon-right.svg";
import IconLeft from "@images/advantages/icon-left.svg";

import { ESections } from "@/constants/sections";
import type { ISlide } from "@/interfaces/Slider/SliderItem";

import "swiper/css";
import styles from "./_styles/advantages.module.scss";

const SLIDERS_DATA: ISlide[] = [
  {
    id: 0,
    text: "Наличие довольных клиентов",
    image: LoyaltyImage,
    title: "Лояльность",
    altText: "Изображение поставленной галочки",
  },
  {
    id: 1,
    text: "Возможность получения консультаций по телефону и в мессенджерах",
    image: ConsultationsImage,
    title: "Живые консультации",
    altText: "Иконки людей",
    isRightPlaced: true,
  },
  {
    id: 2,
    text: "Оперативное реагирование на заявки и выезд специалиста в удобное для клиента время",
    image: SpeedImage,
    title: "Скорость и удобство",
    altText: "Иконка молнии",
  },
  {
    id: 3,
    text: "Индивидуальный и профессиональный подход к каждому проекту",
    image: ApproachImage,
    title: "Гибкий подход",
    altText: "Иконка лупы над документами",
    isRightPlaced: true,
  },
  {
    id: 4,
    text: "Выполнено более 1000 проектов",
    image: ExperienceImage,
    title: "Проектный опыт",
    altText: "Иконка дома с электричеством",
  },
  {
    id: 5,
    text: "Наличие довольных клиентов",
    image: LoyaltyImage,
    title: "Лояльность",
    altText: "Изображение поставленной галочки",
  },
  {
    id: 6,
    text: "Возможность получения консультаций по телефону и в мессенджерах",
    image: ConsultationsImage,
    title: "Живые консультации",
    altText: "Иконки людей",
    isRightPlaced: true,
  },
  {
    id: 7,
    text: "Оперативное реагирование на заявки и выезд специалиста в удобное для клиента время",
    image: SpeedImage,
    title: "Скорость и удобство",
    altText: "Иконка молнии",
  },
  {
    id: 8,
    text: "Индивидуальный и профессиональный подход к каждому проекту",
    image: ApproachImage,
    title: "Гибкий подход",
    altText: "Иконка лупы над документами",
    isRightPlaced: true,
  },
  {
    id: 9,
    text: "Выполнено более 1000 проектов",
    image: ExperienceImage,
    title: "Проектный опыт",
    altText: "Иконка дома с электричеством",
  },
];

const Advantages = () => {
  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return index < 5 ? '<div class="' + className + '">' + "</div>" : "";
    },
  };

  return (
    <Section
      classNameSection={styles.advantages}
      classNameInner={styles.advantages__inner}
      id={ESections.ADVANTAGES}
      title="Преимущества"
      hasBlur={false}
      hasBorder={false}
    >
      <Swiper
        className={styles.advantages__swiper}
        effect="coverflow"
        slidesPerView={5}
        initialSlide={2}
        coverflowEffect={{
          rotate: 0,
          stretch: -20,
          depth: 100,
          modifier: 2.7,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={pagination}
        modules={[EffectCoverflow, Navigation, Pagination]}
        centeredSlides
        loop
      >
        {SLIDERS_DATA.map((item) => (
          <SwiperSlide key={item.id}>
            <SliderItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={clsx(
          styles.advantages__button,
          styles.advantages__buttonPrev,
          "swiper-button-prev",
        )}
      >
        <IconLeft />
      </button>
      <button
        className={clsx(
          styles.advantages__button,
          styles.advantages__buttonNext,
          "swiper-button-next",
        )}
      >
        <IconRight />
      </button>
    </Section>
  );
};

export default Advantages;

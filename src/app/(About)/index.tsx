import clsx from "clsx";
import Image from "next/image";

import Section from "@components/layout/Section";
import Text from "@components/ui/Text";

import AboutBGImage from "@images/about-bg.png";
import AboutBG2Image from "@images/about-bg2.png";
import { ESections } from "@/constants/sections";

import styles from "@/app/(About)/_styles/about.module.scss";

const INFO_LIST = [
  "15 лет опыта в сфере электромонтажных работ — это не просто цифры, а гарантия качества",
  "Знаю все тонкости электропроводки",
  "Понимаю, как важно иметь надёжное электричество в доме",
  "Каждый день быстро решаю задачи, которые другие считают трудными. Устраняю проблемы любой сложности",
  "Подхожу к работе с душой и вниманием к деталям",
  "Работаю честно и прозрачно",
];

const About = () => {
  const isRightSideItem = (index: number, listLength: number) => {
    return index > listLength / 2;
  };

  return (
    <Section
      classNameSection={styles.about}
      classNameInner={styles.about__inner}
      id={ESections.ABOUT}
      title="Обо мне"
    >
      <ol className={styles.about__list}>
        {INFO_LIST.map((item, index, array) => {
          const isLeftSideItem = !isRightSideItem(index + 1, array.length);
          return (
            <li
              className={clsx(
                isLeftSideItem
                  ? styles.about__listLeftItem
                  : styles.about__listRightItem,
              )}
              style={{
                gridRowStart: isLeftSideItem
                  ? index + 1
                  : index + 1 - array.length / 2,
              }}
              key={index}
            >
              <Text className={styles.about__itemText} componentType="text2">
                {item}
              </Text>
            </li>
          );
        })}
      </ol>
      <Image
        className={clsx(styles.about__innerImage, styles.about__imageLines)}
        src={AboutBGImage}
        alt="background lines"
      />
      <Image
        className={styles.about__innerImage}
        src={AboutBG2Image}
        alt="background ball"
      />
    </Section>
  );
};

export default About;

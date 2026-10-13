import Section from "@components/layout/Section";
import Stage from "./components/Stage";

import { ESections } from "@/constants/sections";
import type { IStage } from "@/interfaces/Stages/stages.ts";

import styles from "./_styles/stages.module.scss";

const FIRST_ROW_CONTEXT: IStage[] = [
  {
    id: "0",
    text: "Выезд на место и обсуждение пожеланий заказчика",
  },
  {
    id: "1",
    text: "Подсчёт стоимости материала и работы",
  },
  {
    id: "2",
    text: "Определение дня и времени для начала работы",
  },
  {
    id: "3",
    text: "Подготовка и начало работы",
  },
  {
    id: "4",
    text: "Монтаж кабелей, распред коробок, установочных коробок, выключателей и розеток",
  },
  {
    id: "5",
    text: "Подключение групп в распределительном щитке",
  },
  {
    id: "6",
    text: "Показ заказчику выполненных работ",
  },
];

const Stages = () => {
  return (
    <Section
      classNameSection={styles.stages}
      classNameInner={styles.stages__inner}
      id={ESections.STAGES}
      title="Этапы работы"
      hasBlur={false}
      hasBorder={false}
    >
      <div className={styles.stages__content}>
        {FIRST_ROW_CONTEXT.map(({ id, text }, index) => (
          <Stage key={id} number={index + 1} text={text} />
        ))}
      </div>
    </Section>
  );
};

export default Stages;

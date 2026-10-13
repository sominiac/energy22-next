import { useState } from "react";

import Section from "@components/layout/Section";
import Tabs from "@components/ui/Tabs";
import Text from "@components/ui/Text";

import type { ITab } from "@/interfaces/Tabs/tabs.ts";
import { ESections } from "@/constants/sections";
import { EServicesCategory } from "@/interfaces/Services/services";

import styles from "./_styles/services.module.scss";

const TABS_LIST_MOCK: ITab[] = [
  {
    id: "0",
    text: "Установка",
    sectionId: EServicesCategory.installation,
  },
  {
    id: "1",
    text: "Монтаж",
    sectionId: EServicesCategory.mounting,
  },
  {
    id: "2",
    text: "Штробление",
    sectionId: EServicesCategory.stroblenie,
  },
  {
    id: "3",
    text: "Сверление",
    sectionId: EServicesCategory.drilling,
  },
  {
    id: "4",
    text: "Неисправности",
    sectionId: EServicesCategory.malfunctions,
  },
  {
    id: "5",
    text: "Разное",
    sectionId: EServicesCategory.various,
  },
];

const SERVICES_LIST_MOCK = {
  [EServicesCategory.installation]: [
    { id: 0, text: "Люстр" },
    { id: 1, text: "Розеток" },
    { id: 2, text: "Выключателей" },
    { id: 3, text: "Расперед коробок" },
    { id: 4, text: "Распаечных коробок" },
    { id: 5, text: "Установочных коробок" },
    { id: 6, text: "Накладного бокса под электроавтоматы" },
  ],
  [EServicesCategory.mounting]: [
    { id: 7, text: "Монтаж и установка кабель канала" },
    { id: 8, text: "Монтаж защитных автоматов с подключением к электросети" },
    { id: 9, text: "Монтаж УЗО и дифференциальных автоматов" },
  ],
  [EServicesCategory.stroblenie]: [
    { id: 10, text: "Штробление по бетону" },
    { id: 11, text: "Штробление по кирпичу и другим материалам" },
  ],
  [EServicesCategory.drilling]: [
    { id: 12, text: "Под розетку/выключатель" },
    { id: 13, text: "Под распаечную коробку" },
    { id: 14, text: "Сверление сквозных отверстий в бетоне толщиной 70-80см" },
    { id: 15, text: "Сверление сквозных отверстий в бетоне толщиной 15-20см" },
    {
      id: 16,
      text: "Сверление сквозных отверстий в кирпиче и других материалах толщиной 70-80см",
    },
    {
      id: 17,
      text: "Сверление сквозных отверстий в кирпиче и других материалах толщиной 15-20см",
    },
  ],
  [EServicesCategory.malfunctions]: [
    { id: 18, text: "Нагрев проводки" },
    { id: 19, text: "Короткое замыкание (нет света)" },
    { id: 20, text: "Перегорела проводка" },
    { id: 21, text: "Скачок тока (выбивает УЗО)" },
    {
      id: 22,
      text: "Перегруз группы розеток",
    },
    {
      id: 23,
      text: "Другое",
    },
  ],
  [EServicesCategory.various]: [
    { id: 24, text: "Прокладка кабеля" },
    { id: 25, text: "Поиск обрыва электроцепи" },
    {
      id: 26,
      text: "Электрика под ключ в однокомнатной бетонной/монолитной квартире",
    },
    {
      id: 27,
      text: "Электрика под ключ в однокомнатной кирпич/другие квартире",
    },
    {
      id: 28,
      text: "Электрика под ключ в двухкомнатной бетонной/монолитной квартире",
    },
    {
      id: 29,
      text: "Электрика под ключ в двухкомнатной кирпич/другие квартире",
    },
    {
      id: 30,
      text: "Электрика под ключ в трёхкомнатной бетонной/монолитной квартире",
    },
    {
      id: 31,
      text: "Электрика под ключ в трёхкомнатной кирпич/другие квартире",
    },
    {
      id: 32,
      text: "Устранение короткого замыкания",
    },
    {
      id: 33,
      text: "Распайка проводов в распаечных коробках",
    },
  ],
};

const Services = () => {
  const [activeTabId, setActiveTabId] = useState<
    (typeof EServicesCategory)[keyof typeof EServicesCategory]
  >(
    TABS_LIST_MOCK[0]
      .sectionId as (typeof EServicesCategory)[keyof typeof EServicesCategory],
  );

  const onTabClick = (sectionId: string) => {
    setActiveTabId(sectionId as EServicesCategory);
  };

  return (
    <Section
      classNameSection={styles.services}
      classNameInner={styles.services__inner}
      id={ESections.SERVICES}
      title="Услуги"
    >
      <header className={styles.services__header}>
        <Tabs
          wrapperItemStyle={styles.services__tabItem}
          tabsList={TABS_LIST_MOCK}
          onTabClick={onTabClick}
          activeTabId={activeTabId}
          isNavItem={false}
        />
      </header>
      {/*@TODO: добавить мемоизацию для отрендареных списков*/}
      <ul className={styles.services__list}>
        {SERVICES_LIST_MOCK[activeTabId].map(({ id, text }) => (
          <li className={styles.services__listItem} key={id}>
            <Text className={styles.services__itemText} componentType="text2">
              {text}
            </Text>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Services;

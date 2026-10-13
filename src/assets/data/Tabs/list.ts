import { ESections } from "@/constants/sections";
import type { ITab } from "@/interfaces/Tabs/tabs";

export const NAV_LIST: ITab[] = [
  { id: "1", text: "Обо мне", sectionId: ESections.ABOUT },
  { id: "2", text: "Проекты", sectionId: ESections.PROJECTS },
  { id: "3", text: "Услуги", sectionId: ESections.SERVICES },
  { id: "4", text: "Преимущества", sectionId: ESections.ADVANTAGES },
  { id: "5", text: "Этапы работы", sectionId: ESections.STAGES },
  { id: "6", text: "Контакты", sectionId: ESections.INFO },
  { id: "7", text: "Вопрос-ответ", sectionId: ESections.FAQ },
];

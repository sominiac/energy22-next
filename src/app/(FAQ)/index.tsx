import { useState } from "react";

import Section from "@components/layout/Section";
import QuestionItem from "./components/QuestionItem";

import { ESections } from "@/constants/sections";
import type { Question } from "@/interfaces/FAQ/Questions";

import styles from "./_styles/faq.module.scss";

//@TODO: Обговорить улучшение описания с заказчиком. Например, "Сколько по времени будет выполняться работа?" -> "Зависит от объема объекта. Обсуждается в самом начале работ."
const CONTENT_LIST: Question[] = [
  {
    id: "0",
    title: "Стоимость электромонтажных работ",
    description:
      "Зависит от объёма выполняемых работ. Уточняется на консультации и замерах.",
    isActive: true,
  },
  {
    id: "1",
    title: "Сколько по времени будет выполняться работа?",
    description: "Зависит от объема объекта.",
    isActive: false,
  },
  {
    id: "2",
    title: "Как происходит закуп материалов?",
    description:
      "Вы можете купить материалы самостоятельно или закупает мастер.",
    isActive: false,
  },
  {
    id: "3",
    title: "Территория на которой работает мастер",
    description: "Барнаул, пригород.",
    isActive: false,
  },
];

const FAQ = () => {
  const [questions, setQuestions] = useState<Question[]>(CONTENT_LIST);

  const toggleQuestion = (question: Question) => {
    setQuestions((prevState) => {
      prevState.splice(Number(question.id), 1, {
        ...question,
        isActive: !question.isActive,
      });
      return [...prevState];
    });
  };

  return (
    <Section
      classNameSection={styles.faq}
      classNameInner={styles.faq__inner}
      id={ESections.FAQ}
      title="Частые вопросы"
      hasBorder={false}
      hasBlur={false}
    >
      {questions.map((question: Question) => (
        <QuestionItem
          key={question.id}
          handlerQuestionClick={toggleQuestion}
          {...question}
        />
      ))}
    </Section>
  );
};

export default FAQ;

import Text from "@components/ui/Text";

import ArrowIcon from "@images/arrow-icon.svg";

import type { IQuestionProps } from "@/interfaces/FAQ/Questions.ts";

import styles from "./styles/questionItem.module.scss";

const QuestionItem = ({
  id,
  title,
  description,
  handlerQuestionClick,
  isActive,
}: IQuestionProps) => {
  return (
    <div
      className={styles.questionItem}
      onClick={() => handlerQuestionClick({ id, title, description, isActive })}
    >
      <div className={styles.questionItem__title}>
        <Text className={styles.questionItem__titleText} componentType="text2">
          {title}
        </Text>
        <ArrowIcon />
      </div>
      {isActive && (
        <div className={styles.questionItem__description}>
          <Text
            className={styles.questionItem__descriptionText}
            componentType="text4"
          >
            {description}
          </Text>
        </div>
      )}
    </div>
  );
};

export default QuestionItem;

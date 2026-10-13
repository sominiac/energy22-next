import Text from "@components/ui/Text";

import type { IStageProps } from "@/interfaces/Stages/stages.ts";

import styles from "./styles/stage.module.scss";

const Stage = ({ number, text }: IStageProps) => {
  return (
    <div className={styles.stage}>
      <div className={styles.stage__numberWrapper}>
        <Text className={styles.stage__number} componentType="h3">
          {number}
        </Text>
      </div>
      <Text className={styles.stage__text} componentType="text4">
        {text}
      </Text>
    </div>
  );
};

export default Stage;

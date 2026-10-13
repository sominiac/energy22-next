import Section from "@components/layout/Section";
import Text from "@components/ui/Text";

import styles from "./_styles/mission.module.scss";

const Mission = () => {
  return (
    <Section
      classNameSection={styles.mission}
      classNameInner={styles.mission__inner}
      hasBorder={false}
      hasBlur={false}
    >
      <Text className={styles.mission__title} component="p">
        Моя миссия —{" "}
      </Text>
      <Text
        className={styles.mission__text}
        component="p"
        componentType="text1"
      >
        создавать
      </Text>
      <Text
        className={styles.mission__text}
        component="p"
        componentType="text1"
      >
        пространство
      </Text>
      <Text
        className={styles.mission__text}
        component="p"
        componentType="text1"
      >
        безопасного
      </Text>
      <Text
        className={styles.mission__text}
        component="p"
        componentType="text1"
      >
        электричества
      </Text>
    </Section>
  );
};

export default Mission;

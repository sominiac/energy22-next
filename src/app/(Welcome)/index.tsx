import Image from "next/image";

import Text from "@components/ui/Text";
import Section from "@components/layout/Section";
import Phone from "@components/ui/Phone";

import WelcomeBgImage from "@images/welcome-bg.png";
import { DESCRIPTION } from "@/constants/info";

import styles from "./_styles/welcome.module.scss";

const Welcome = () => {
  return (
    <Section
      classNameSection={styles.welcome}
      classNameInner={styles.welcome__inner}
    >
      <div className={styles.welcome__wrapper}>
        <Text
          className={styles.welcome__title}
          component="h2"
          componentType="h2"
        >
          {DESCRIPTION}
        </Text>
        <div className={styles.welcome__descriptionWrapper}>
          <Text
            className={styles.welcome__description}
            component="p"
            componentType="text1"
          >
            Электромонтажные работы любой сложности: от простых решений до
            масштабных проектов!
          </Text>
        </div>
        <Phone
          wrappedPhoneTextClass={styles.welcome__phoneText}
          hasCopy={false}
        />
      </div>
      <Image
        className={styles.welcome__image}
        src={WelcomeBgImage}
        alt="a man in a special suit"
      />
    </Section>
  );
};

export default Welcome;

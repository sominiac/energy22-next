import Image from "next/image";

import Container from "@components/layout/Container";
import Tabs from "@components/ui/Tabs";
import Phone from "@components/ui/Phone";
import Text from "@components/ui/Text";

import LogoImage from "@images/logo.png";
import { NAV_LIST } from "@assets/data/Tabs/list";
import { WORK_TIME } from "@/constants/info";

import styles from "./styles/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__inner}>
          <Image className={styles.footer__logo} src={LogoImage} alt="logo" />
          <Tabs wrapperComputedStyle={styles.footer__nav} tabsList={NAV_LIST} />
          <div className={styles.footer__info}>
            <Phone />
            <Text className={styles.footer__infoTitle} componentType="text1">
              Время работы:
            </Text>
            <Text className={styles.footer__workTime} componentType="text2">
              {WORK_TIME}
            </Text>
            <Text className={styles.footer__place} componentType="text2">
              Алтайский край г.Барнаул
            </Text>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

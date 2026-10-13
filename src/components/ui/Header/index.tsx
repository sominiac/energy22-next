import Image from "next/image";

import Text from "@components/ui/Text";
import Tabs from "@components/ui/Tabs";

import { WORK_TIME } from "@/constants/info";
import { NAV_LIST } from "@assets/data/Tabs/list";
import LogoImage from "@images/logo.png";

import styles from "./styles/header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles.header__logo}
        src={LogoImage}
        alt="Energy 22 logo"
      />
      <Tabs tabsList={NAV_LIST} wrapperComputedStyle={styles.header__nav} />
      <Text componentType="text4">{WORK_TIME}</Text>
    </header>
  );
};

export default Header;

import clsx from "clsx";
import TabItem from "@components/ui/Tabs/components/TabItem";

import type { ElementType } from "react";
import type { ITab } from "@/interfaces/Tabs/tabs.ts";

import styles from "./styles/tabs.module.scss";

export type TTabComponentProps = Omit<ITab, "id"> & {
  className?: string;
  isNavItem: boolean;
  onClick?: (sectionId: string) => void;
};

type TTabsProps = {
  tabsList: ITab[];
  wrapperComputedStyle?: string;
  wrapperItemStyle?: string;
  activeTabId?: string;
  onTabClick?: (sectionId: string) => void;
  TabComponent?: ElementType<TTabComponentProps>;
  isNavItem?: boolean;
};

const Tabs = ({
  tabsList,
  wrapperComputedStyle,
  wrapperItemStyle,
  activeTabId,
  onTabClick = () => {},
  TabComponent = TabItem,
  isNavItem = true,
}: TTabsProps) => {
  return (
    <nav className={clsx(styles.tabs, wrapperComputedStyle)}>
      {tabsList.map(({ id, text, sectionId, isActive }) => (
        <TabComponent
          className={clsx(
            styles.tabs__item,
            wrapperItemStyle,
            isActive && styles.tabs__itemActive,
            activeTabId === sectionId && styles.tabs__itemActive,
          )}
          key={id}
          text={text}
          sectionId={sectionId}
          onClick={onTabClick}
          isNavItem={isNavItem}
        />
      ))}
    </nav>
  );
};

export default Tabs;

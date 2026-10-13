import clsx from "clsx";
import Link from "next/link";
import Text from "@components/ui/Text";

import type { TTabComponentProps } from "@components/ui/Tabs";

import styles from "./styles/tabItem.module.scss";

interface ITextComponentProps extends Partial<TTabComponentProps> {
  className?: string;
  text?: string;
  onClick?: () => void;
}

const TextComponent = ({ className, text, onClick }: ITextComponentProps) => {
  return (
    <Text
      className={clsx(styles.tabItem, className)}
      componentType="text2"
      onClick={onClick}
    >
      {text}
    </Text>
  );
};

const TabItem = ({
  className,
  text,
  sectionId,
  onClick = () => {},
  isNavItem,
}: TTabComponentProps) => {
  const onTabClick = (sectionId: string) => {
    onClick(sectionId);
  };

  if (isNavItem) {
    return (
      <Link href={`/#${sectionId}`}>
        <TextComponent
          className={className}
          text={text}
          onClick={() => onTabClick(sectionId)}
        />
      </Link>
    );
  }

  return (
    <TextComponent
      className={className}
      text={text}
      onClick={() => onTabClick(sectionId)}
    />
  );
};

export default TabItem;

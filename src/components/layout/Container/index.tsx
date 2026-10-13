import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";
import styles from "./styles/container.module.scss";

interface IContainerProps {
  computedStyles?: string;
}

const Container: FC<PropsWithChildren<IContainerProps>> = ({
  computedStyles,
  children,
}) => {
  return (
    <div className={clsx(styles.container, computedStyles)}>{children}</div>
  );
};

export default Container;
